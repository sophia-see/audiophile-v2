import prisma from "./prisma";

export enum CategoryType {
  headphones = "headphones",
  speakers = "speakers",
  earphones = "earphones",
}

export const fetchProducts = async (type: CategoryType) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        category: type, // Filter by category
      },
      select: {
        id: true,
        title: true,
        images: true,
        description: true,
        isNew: true,
      },
      orderBy: [
        { updatedAt: 'desc' }, // Sort by updatedAt in descending order
        { createdAt: 'desc' }, // Sort by createdAt in descending order
      ],
    });

    return products as ProductDBType[];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchHomePageProductById = async (id: number) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: id, // Fetch by ID
      },
      select: {
        id: true,
        title: true,
        images: true,
        featuredDesc: true,
        isNew: true,
      },
    });

    return product as ProductDBType;
} catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchProductById = async (id: number) => {
  console.log({hereId: id})
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: id, // Fetch by ID
      },
      include: {
        images: true, // Include related images
        inclusions: true, // Include related inclusions
      },
    });

    console.log({product})

    return product as ProductDBType;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Get only image, title, and id, excluding a specific product
export const fetchRandomProductsExceptId = async (id: number) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        id: {
          not: id, // Exclude the product with the specified ID
        },
      },
      select: {
        id: true,
        title: true,
        images: true,
      },
      take: 10, // Limit the result to 10 products
    });

    // Shuffle and pick 3 random products
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3); // Return 3 random products
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchAllProducts = async () => {
  try {
    const products = await prisma.product.findMany({
      select: {
        id: true,
        title: true,
        images: true,
        description: true,
        isNew: true,
        category: true,
        price: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return products;
  } catch (error) {
    console.error("Error fetching all products:", error);
    return null;
  }
};
