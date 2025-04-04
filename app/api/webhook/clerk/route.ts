import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { clerkClient, WebhookEvent } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Error: Please add WEBHOOK_SECRET from Clerk Dashboard to .env');
  }

  // Create new Svix instance with secret
  const wh = new Webhook(WEBHOOK_SECRET);

  // Get headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // If there are no headers, return an error
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', { status: 400 });
  }

  // Get body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error: Could not verify webhook:', err);
    return new Response('Error: Verification error', { status: 400 });
  }

  const eventType = evt.type;
  console.log({ eventType });

  if (eventType === 'user.created') {
    const { id, email_addresses, first_name, last_name } = evt.data;

    try {
      const newUser = await prisma.user.create({
        data: {
          clerkId: id,
          email: email_addresses[0]?.email_address || '',
          firstName: `${first_name || ''}`,
          lastName: last_name || '',
        },
      });

      console.log('User created:', newUser);
      const client = await clerkClient()

      await client.users.updateUserMetadata(id, {
        publicMetadata: { userId: newUser.id },
      });

      return NextResponse.json({ message: 'OK', user: newUser });
    } catch (error) {
      console.error('Error creating user:', error);
      return new Response('Error creating user', { status: 500 });
    }
  }

  if (eventType === 'user.updated') {
    const { id, first_name, last_name } = evt.data;

    try {
      const updatedUser = await prisma.user.update({
        where: { clerkId: id },
        data: {
          firstName: first_name || '',
          lastName: last_name || '',
        },
      });

      return NextResponse.json({ message: 'OK', user: updatedUser });
    } catch (error) {
      console.error('Error updating user:', error);
      return new Response('Error updating user', { status: 500 });
    }
  }

  if (eventType === 'user.deleted') {
    const { id } = evt.data;

    try {
      const deletedUser = await prisma.user.delete({
        where: { clerkId: id },
      });

      return NextResponse.json({ message: 'OK', user: deletedUser });
    } catch (error) {
      console.error('Error deleting user:', error);
      return new Response('Error deleting user', { status: 500 });
    }
  }

  return new Response('', { status: 200 });
}
