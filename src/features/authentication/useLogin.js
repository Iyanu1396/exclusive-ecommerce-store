import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Login } from "../../services/apiAuth";
import { useUser } from "./useUser";

export function useLogin() {
  const navigate = useNavigate();
  const { refetch } = useUser();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => Login({ email, password }),
    onSuccess: async () => {
      await refetch();  
      navigate("/", { replace: true }); // Redirect on success
    },
    onError: () => {
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };  
}
