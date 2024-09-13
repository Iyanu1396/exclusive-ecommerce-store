import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../services/apiProducts";

export function useGetAllProducts() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["allProducts"],
    queryFn: getAllProducts,
  });

  return { isLoading, products, error };
}
