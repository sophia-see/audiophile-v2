import { CategoryType, fetchProductById, fetchProducts } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export function useProductsByCategory(category: CategoryType, initialData?: ProductType[]) {
  const result = useQuery({
    queryKey: ["products", category],
    queryFn: () => fetchProducts(category),
    initialData,
    staleTime: 1000 * 60 * 5,
    enabled: !!category
  });

  return result;
}

export function useProductById(id: number, initialData?: ProductType) {
  const result = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    initialData,
    staleTime: 1000 * 60 * 5,
    enabled: !!id
  });

  return result;
}