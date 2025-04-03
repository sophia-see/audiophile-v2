// "use server"

// import { connectToDatabase } from "@/database"
// import { handleError } from "../utils"
// import User from "@/database/models/user.model";

// export const getUserById = async (userId: string) => {
//   try {
//     const user = await User.findById(userId);

//     if (!user) throw new Error ("User not found")

//     return JSON.parse(JSON.stringify(user))
//   } catch (error) {
//     handleError(error)
//   }
// }


// export const createUser = async (user: CreateUserParams) => {
//   try {
//     await connectToDatabase();

//     const newUser = await User.create(user);

//     return JSON.parse(JSON.stringify(newUser));
//   } catch (error) {
//     handleError(error)
//   }
// }

// export const updateUser = async (clerkId: string, user: UpdateUserParams) => {
//   try {
//     await connectToDatabase();

//     const updatedUser = await User.findOneAndUpdate({ clerkId }, user, { new: true });

//     if (!updatedUser) throw new Error ("Update user error");

//     return JSON.parse(JSON.stringify(updatedUser));
//   } catch (error) {
//     handleError(error)
//   }
// }

// export const deleteUser = async (clerkId: string) => {
//   try {
//     await connectToDatabase();

//     // find user to delete 
//     const userToDelete = await User.findOne({ clerkId });

//     if (!userToDelete) throw new Error ("User not found");

//     // unlink relationships that is related to that user
//     /** 
//     await Promise.all({
//       // Update the 'orders' collection to remove references to the user
//       Order.updateMany({ _id: { $in: userToDelete.orders } }, { $unset: { buyer: 1 } }),
//     })
//     **/

//     const deletedUser = await User.findOneAndDelete({ clerkId });

//     if (!deletedUser) throw new Error ("Delete user error");

//     return JSON.parse(JSON.stringify(deletedUser))
//   } catch (error) {
//     handleError(error)
//   }
// }