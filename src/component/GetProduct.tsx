import React, { useEffect, useState } from "react";
import addOrGet from "../helper/method_api";
import url from "../helper/conf";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/CartSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
interface IProduct {
  id: number;
  title: string;
  cost: number;
  size: string;
  new_cost: number;
  promotion: boolean;
  category: {
    title: string;
  };
  photo: string[];
}
const GetProduct = () => {
  const location = useLocation();
  const [products, setProduct] = useState<IProduct[]>([]);
  const dispatch = useDispatch();
  const category = useSelector(
    (state: RootState) => state.category.selectedCategory
  );
  const handleAddtoCart = (product: IProduct) => {
    dispatch(addToCart(product));
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const updatedCart = [...currentCart, product];

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    addOrGet<IProduct[]>(`${url.url}${url.product}`, `get`).then((response) => {
      if (category) {
        const filteredProducts = response.data.filter((product) => {
          let value = product.category.title;

          return value === category;
        });
        setProduct(filteredProducts);
        console.log(filteredProducts);
      } else {
        setProduct(response.data);
      }
    });
  }, [category]);
  const isProductPage = location.pathname.startsWith("/product");
  return (
    <div className="getProduct_container">
      {products.map((product) => (
        <div key={product.id} className="getProduct_box">
          <a
            href={`${process.env.PUBLIC_URL}/product/${product.id}`}
            className=""
          >
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              {product.photo.map((photo, index) => (
                <SwiperSlide key={index}>
                  <img src={photo} alt={photo} className="getProduct_img" />
                </SwiperSlide>
              ))}
            </Swiper>
          </a>
          <div className="getProduct_box_btn">
            <div className="getProduct_des">
              <span>{product.title}</span>
              {product.promotion ? (
                <div className="promotion_box">
                  <span style={{ textDecoration: "line-through" }}>
                    {product.cost} грн
                  </span>
                  <span>{product.new_cost} грн</span>
                </div>
              ) : (
                <span>{product.cost} грн</span>
              )}
            </div>

            <span>
              {isProductPage && (
                <Link to={`/product/${product.id}`}>Детальніше</Link>
              )}
              <span
                onClick={() => handleAddtoCart(product)}
                className="getProduct_btn"
              >
                Замовити
              </span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default GetProduct;
