import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
      <>
        <h1> Products </h1>
        <ul>
          <li><Link to="shirts">Shirts</Link></li>
          <li><Link to="shoes">Shoes</Link></li>
        </ul>
        <Outlet />
      </>
  );
}


export default Products;


