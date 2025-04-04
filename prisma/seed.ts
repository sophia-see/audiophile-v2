import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

const seed = async () => {
  try {
    // Read JSON file
    const rawData = fs.readFileSync('prisma/products.json', 'utf-8');
    const { data: products } = JSON.parse(rawData);

    // Insert or update each product into the database
    for (const product of products) {
      const imageData = [];

      // Check if mobile image exists, and if so, push it to the imageData array
      if (product.image.mobile) {
        imageData.push({
          type: 'mobile',
          full: product.image.mobile.full,
          preview: product.image.mobile.preview,
          gallery: product.image.mobile.gallery,
        });
      }

      // Check if tablet image exists, and if so, push it to the imageData array
      if (product.image.tablet) {
        imageData.push({
          type: 'tablet',
          full: product.image.tablet.full,
          preview: product.image.tablet.preview,
          gallery: product.image.tablet.gallery,
        });
      }

      // Check if desktop image exists, and if so, push it to the imageData array
      if (product.image.desktop) {
        imageData.push({
          type: 'desktop',
          full: product.image.desktop.full,
          preview: product.image.desktop.preview,
          gallery: product.image.desktop.gallery,
        });
      }

      // Check if the product with the same documentId exists
      const existingProduct = await prisma.product.findUnique({
        where: { documentId: product.documentId },
      });

      if (existingProduct) {
        // If product exists, skip it or update it, depending on your requirements
        console.log(`Product with documentId ${product.documentId} already exists, skipping...`);
      } else {
        // If product doesn't exist, create a new product
        await prisma.product.create({
          data: {
            documentId: product.documentId,
            title: product.title,
            isNew: product.isNew,
            description: product.description,
            features: product.features,
            category: product.category,
            price: product.price,
            featuredDesc: product.featuredDesc,
            createdAt: new Date(product.createdAt),
            updatedAt: new Date(product.updatedAt),
            publishedAt: product.publishedAt ? new Date(product.publishedAt) : null,

            inclusions: {
              create: product.inclusions.map((inc: InclusionType) => ({
                name: inc.name,
                quantity: inc.quantity,
              })),
            },

            images: {
              create: imageData, // Add all images (mobile, tablet, desktop) here
            },
          },
        });
        console.log(`Product with documentId ${product.documentId} created`);
      }
    }

    console.log('✅ Database seeded successfully');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
};

seed();
