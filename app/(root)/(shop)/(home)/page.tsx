import Hero from "./components/Hero";
import BackdropBlur from "@/components/shared/BackdropBlur";
import { fetchHomePageProductById } from "@/lib/api";
import dynamic from "next/dynamic";

const HERO_PRODUCT_ID = 21;
const FEATURED_PRODUCTS_ID = [
  24,
  23,
  22
]

const Categories = dynamic(() => import("@/components/Categories"), {
  loading: () => <div>Loading...</div>
})

const Products = dynamic(() => import("./components/Products"), {
  loading: () => <div>Loading...</div>
})

export default async function Home() {
  const heroProduct = (await fetchHomePageProductById(HERO_PRODUCT_ID)).data[0];

  const featuredProducts = await Promise.all(
    FEATURED_PRODUCTS_ID.map(async (id) => 
      (await fetchHomePageProductById(id)).data[0])
  ) ?? [];

  return (
    <main className="relative">
      <BackdropBlur />
      <Hero product={heroProduct}/>
      <Categories className="pb-0 md:pb-0 lg:pb-0 md:mx-[40px] lg:mx-lg-custom"/>
      <Products products={featuredProducts}/>
    </main>
  )
}
