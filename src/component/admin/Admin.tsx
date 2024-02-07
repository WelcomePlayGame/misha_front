import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./form/AddProduct";
import AddCategory from "./form/AddCategory";

const Admin = () => {
  return (
    <section>
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/addcategory" element={<AddCategory />} />
      </Routes>
    </section>
  );
};
export default Admin;
