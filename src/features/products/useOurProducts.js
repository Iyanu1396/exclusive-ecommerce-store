import { useQuery } from "@tanstack/react-query";
import { getOurProducts } from "../../services/apiProducts";

export function useOurProducts() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["ourProducts"],
    queryFn: getOurProducts,
  });

  return { isLoading,  products, error };
}
