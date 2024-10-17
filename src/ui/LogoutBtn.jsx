import { useLogout } from "../features/authentication/useLogout";

function LogoutBtn() {
  const { logOut, isLoading } = useLogout();

  function handleLogout() {
    logOut();
  }
  return (
    <button onClick={handleLogout} disabled={isLoading}>
      {isLoading ? "Logging Out" : "Logout"}
    </button>
  );
}

export default LogoutBtn;
