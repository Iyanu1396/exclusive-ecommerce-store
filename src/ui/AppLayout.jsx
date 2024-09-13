import { Outlet } from "react-router-dom";
import { store } from "../store";
import { Provider } from "react-redux";
import NavBar from "./NavBar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <Provider store={store}>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Provider>
  );
}

export default AppLayout;
