import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { ProductDetail } from "./pages/ProductDetail";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Gallery } from "./pages/Gallery";
import { Collections } from "./pages/Collections";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "collections", element: <Collections /> },
      { path: "pagnes-et-tissus", element: <Catalog /> },
      { path: "produits/:id", element: <ProductDetail /> },
      { path: "a-propos", element: <About /> },
      { path: "galerie", element: <Gallery /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
