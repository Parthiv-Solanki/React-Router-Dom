import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <div>
        <Link to="products/search">Search</Link>
        <Link to="products/list">List</Link>
        <Link to="products/add">Add</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Products;
