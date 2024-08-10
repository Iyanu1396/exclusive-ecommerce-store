import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CheckOut from "./pages/CheckOut";
import Cart from "./pages/Cart";
import Store from "./pages/Store";
import Account from "./pages/Account";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>

       <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
        <Route index element={<Store />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          
          <Route path="/page-not-found" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/page-not-found" />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
   
  );
}

export default App;
