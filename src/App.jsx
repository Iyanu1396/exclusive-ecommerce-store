import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import LoginLayout from "./ui/LoginLayout";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<LoginLayout />}>
        <Route index element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/page-not-found" />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
