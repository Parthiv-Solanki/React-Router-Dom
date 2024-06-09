import "./App.css";
import {
  BrowserRouter,
  Link,
  // Outlet,
  Route,
  RouterProvider,
  Routes,
  // createBrowserRouter,
  // createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/home";
// import Contact from "./pages/contact";
// import Data, { dataLoader } from "./pages/data";
import Login from "./components/Login";
import Products from "./components/products/Products";
import Search from "./components/products/Search";
import ListProducts from "./components/products/ListProducts";
import AddProducts from "./components/products/AddProduct";
import ProductDisplay from "./components/products/ProductDisplay";

function App() {
  // You can do this:
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Root />}>
  //       <Route index element={<Home />} />
  //       <Route path="data" element={<Data />} loader={dataLoader} />
  //       <Route path="contact" element={<Contact />} />
  //     </Route>
  //   )
  // );
  // Instead of this:
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Root />,
  //     children: [
  //       {
  //         path: "dashboard",
  //         element: <Dashboard />,
  //       },
  //       {
  //         path: "about",
  //         element: <About />,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/products"}>Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="products" element={<Products />}>
            <Route path="products/search" element={<Search />} />
            <Route path="products/list" element={<ListProducts />} />
            <Route path="products/add" element={<AddProducts />} />
            <Route path="products/:id" element={<ProductDisplay />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

// const Root = () => {
//   return (
//     <>
//       <div>
//         <Link to={"/"}>Home</Link>
//         <Link to={"/data"}>Data</Link>
//         <Link to={"/contact"}>Contact</Link>
//       </div>
//       <Outlet />
//     </>
//   );
// };
export default App;
