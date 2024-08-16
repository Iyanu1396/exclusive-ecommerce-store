import { useQuery } from "@tanstack/react-query";
import { getFlashSales } from "../../services/apiProducts";

export function useFlashSales() {
  const {
    isLoading,
    data: flashSales,
    error,
  } = useQuery({
    queryKey: ["flashSales"],
    queryFn: getFlashSales,
  });

  return { isLoading,  flashSales, error };
}
