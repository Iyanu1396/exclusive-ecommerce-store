import { useSelector } from "react-redux";

export function useGetCart(){
  const cart = useSelector((state) => state.products.cart);
  return cart
}