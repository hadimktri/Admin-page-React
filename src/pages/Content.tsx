import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AdminContext } from "../assets/context/adminLayoutContext";
import Dashboard from "./dashboard";
import Categories from "./categories";
import Products from "./products";
import Colors from "./colors";
import Warranites from "./warranties";
import Brands from "./brands";
import Discounts from "./discounts";
import Carts from "./carts";
import Orders from "./orders";
import Deliveries from "./deliveries";
import Users from "./users";
import Roles from "./roles";
import Permissions from "./permissions";
import Questions from "./questions";
import Comments from "./comments";
import Logout from "./auth/Logout";

const Content = () => {
  const { showSidebar } = useContext(AdminContext);
  return (
    <section
      id="content_section"
      className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/products" element={<Products />} />

        <Route path="/categories" element={<Categories />} />

        <Route path="/colors" element={<Colors />} />

        <Route path="/warranties" element={<Warranites />} />

        <Route path="/brands" element={<Brands />} />

        <Route path="/discounts" element={<Discounts />} />

        <Route path="/carts" element={<Carts />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/deliveries" element={<Deliveries />} />

        <Route path="/users" element={<Users />} />

        <Route path="/Roles" element={<Roles />} />

        <Route path="/permissions" element={<Permissions />} />

        <Route path="/questions" element={<Questions />} />

        <Route path="/comments" element={<Comments />} />

        <Route path="/logout" element={<Logout />} />

        <Route path="*" element={<Dashboard />} />
      </Routes>
    </section>
  );
};
export default Content;
