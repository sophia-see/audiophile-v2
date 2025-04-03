export enum CategoryType {
  headphones = "headphones",
  speakers = "speakers",
  earphones = "earphones"

}

export const fetchProducts = async (type: CategoryType) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/products?fields[0]=id&fields[1]=title&fields[2]=image&fields[3]=description&fields[4]=isNew&filters[category][$eq]=${type}&sort=updatedAt:desc&sort=createdAt:desc`
    const res = await fetch(url, {
      // next: { revalidate: 60 }, // Cache for 1 min
    });
    if (!res.ok) throw new Error("Failed to fetch products");

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchHomePageProductById = async (id: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/products??fields[0]=id&fields[1]=title&fields[2]=image&fields[3]=featuredDesc&fields[4]=isNew&filters[id][$eq]=${id}`
    const res = await fetch(url, {
      next: { revalidate: 60 * 60 }, // Cache for 1 hour
    });
    if (!res.ok) throw new Error("Failed to fetch products");

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};


export const fetchProductById = async (id: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=*&filters[id][$eq]=${id}`
    const res = await fetch(url, {
      // next: { revalidate: 60 }, // Cache for 1 min
    });
    if (!res.ok) throw new Error("Failed to fetch products");

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// get only image, title, and id
export const fetchRandomProductsExceptId = async (id: number) => {
  try {
    
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/products?fields[0]=id&fields[1]=title&fields[2]=image&filters[id][$ne]=${id}&pagination[limit]=10`;
    const res = await fetch(url, {
      // next: { revalidate: 60 }, // Cache for 1 min
    });
    if (!res.ok) throw new Error("Failed to fetch products");

    const data = await res.json();
    // Shuffle and pick 3 random products
    const shuffled = data.data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  } catch (error) {
    console.log(error);
    return null;
  }
}