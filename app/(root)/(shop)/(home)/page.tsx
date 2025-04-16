import Hero from "./components/Hero";
import { fetchHomePageProductById } from "@/lib/api/product";
import { toProductData } from "@/lib/utils";
import dynamic from "next/dynamic";

const HERO_PRODUCT_ID = 12;
const FEATURED_PRODUCTS_ID = [
  13,
  8,
  11
]

const Categories = dynamic(() => import("@/components/shared/Categories"), {
  loading: () => <div>Loading...</div>
})

const Products = dynamic(() => import("./components/Products"), {
  loading: () => <div>Loading...</div>
})

export default async function Home() {
  const heroProduct = (await fetchHomePageProductById(HERO_PRODUCT_ID));
  const formattedHeroProduct = toProductData(heroProduct);

  const featuredProducts = await Promise.all(
    FEATURED_PRODUCTS_ID.map(async (id) => 
      (await fetchHomePageProductById(id)))
  ) ?? [];

  return (
    <div className="relative">
      <Hero product={formattedHeroProduct}/>
      <Categories className="pb-0 md:pb-0 lg:pb-0 md:mx-[40px] lg:mx-lg-custom"/>
      <Products products={featuredProducts}/>
    </div>
  )
}
