import { Routes, Route } from "react-router-dom";
import { CartContent } from "./pages/cart-content";
import { Home } from "./pages/home";

const mainRoutes = () => {
  return(
    <Routes>
      <Route
          path="/"
          element={<Home />} />
      <Route
          path="/cart-content"
          element={<CartContent />} />
    </Routes>
  );
}

export default mainRoutes;