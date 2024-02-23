import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./form/AddProduct";
import AddCategory from "./form/AddCategory";
import ListCategoryForAdmin from "./list/ListCategoryForAdmin";
import UpdateCategory from "./form/UpdateCategory";
import UpdateProduct from "./form/UpdateProduct";
import ListProductForAdmin from "./list/ListProductForAdmin";

const Admin = () => {
  return (
    <section>
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/listcategory" element={<ListCategoryForAdmin />} />
        <Route path="/update/:id" element={<UpdateCategory />} />
        <Route path="/updateproduct/:id" element={<UpdateProduct />} />
        <Route path="/listproduct" element={<ListProductForAdmin />} />
      </Routes>
    </section>
  );
};
export default Admin;
