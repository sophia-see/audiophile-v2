import Hero from "./components/Hero";
import BackdropBlur from "@/components/shared/BackdropBlur";
import { fetchHomePageProductById } from "@/lib/api";
import { toProductData } from "@/lib/utils";
import dynamic from "next/dynamic";

const HERO_PRODUCT_ID = 12;
const FEATURED_PRODUCTS_ID = [
  13,
  8,
  11
]

const Categories = dynamic(() => import("@/components/Categories"), {
  loading: () => <div>Loading...</div>
})

const Products = dynamic(() => import("./components/Products"), {
  loading: () => <div>Loading...</div>
})

export default async function Home() {
  const heroProduct = (await fetchHomePageProductById(HERO_PRODUCT_ID));
  const formattedHeroProduct = toProductData(heroProduct);

  console.log(formattedHeroProduct)

  const featuredProducts = await Promise.all(
    FEATURED_PRODUCTS_ID.map(async (id) => 
      (await fetchHomePageProductById(id)))
  ) ?? [];

  return (
    <main className="relative">
      <BackdropBlur />
      <Hero product={toProductData(heroProduct)}/>
      <Categories className="pb-0 md:pb-0 lg:pb-0 md:mx-[40px] lg:mx-lg-custom"/>
      <Products products={featuredProducts}/>
    </main>
  )
}
