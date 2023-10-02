import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import Product from "../pages/Product";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} > {/* + Outlet в компоненте делает его сборным (отображается для вложенных страниц) */}
          <Route path=":productId" element={<Product />} /> 
        </Route>
        {/* другой вариант синтаксиса */}
        {/* 
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} /> 
        */}
      </Routes>
    </BrowserRouter>
  )
}

export default Root;