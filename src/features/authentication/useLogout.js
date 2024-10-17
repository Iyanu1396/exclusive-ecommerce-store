import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOut as logOutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout(){

    const navigate = useNavigate()
const queryClient = useQueryClient()

    const {mutate:logOut , isLoading} = useMutation({
        mutationFn:logOutApi,
        onSuccess:()=>{
            queryClient.removeQueries()
            navigate('/' , {replace:true})
            toast.success("You have been logged out.")

        },
        onError:()=>{
          toast.error("Please check your internet connection.")
        }
      
    })

    return {logOut , isLoading}
}