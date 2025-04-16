import { CategoryType, fetchProducts } from "@/lib/api";
import { clientFetchProductById } from "@/lib/client-api";
import { useQuery } from "@tanstack/react-query";

// fix
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
    queryFn: () => clientFetchProductById(id),
    placeholderData: initialData,
    staleTime: 1000 * 60 * 5,
    enabled:  id !== undefined && id !== null
  });

  console.log({ result })

  return result;
}