import { useQuery } from "@tanstack/react-query";
import { getBestSelling} from "../../services/apiProducts";

export function useBestSelling() {
  const {
    isLoading,
    data: flashSales,
    error,
  } = useQuery({
    queryKey: ["bestSelling"],
    queryFn: getBestSelling,
  });

  return { isLoading,  flashSales, error };
}
