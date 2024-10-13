import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isAuthenticated, isLoading } = useUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) {
    return navigate("/login");
  }

  return children;
}

export default ProtectedRoute;
