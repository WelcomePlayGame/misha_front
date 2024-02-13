import React from "react";
import "./App.css";
import Header from "./component/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Admin from "./component/admin/Admin";
import AdminMenu from "./component/admin/AdminMenu";
import NotFound from "./component/404/NotFound";
import ProductPage from "./component/ProductPage";
import store from "./store/store";
import { Provider } from "react-redux";
import Order from "./component/Order";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Success from "./component/Success";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <AdminMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/order" element={<Order />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
