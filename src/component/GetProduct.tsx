import React, { useEffect, useState } from "react";
import addOrGet from "../helper/method_api";
import url from "../helper/conf";
import Category from "./classes/Category";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/CartSlice";
interface IProduct {
  id: number;
  title: string;
  cost: number;
  size: string;
  new_cost: number;
  promotion: boolean;
  category: Category;
  photo: string[];
}
const GetProduct = () => {
  const [products, setProduct] = useState<IProduct[]>([]);
  const dispatch = useDispatch();
  const handleAddtoCart = (product: IProduct) => {
    dispatch(addToCart(product));
  };
  useEffect(() => {
    addOrGet<IProduct[]>(`${url.url}${url.product}`, `get`).then((response) =>
      setProduct(response.data)
    );
  }, []);

  return (
    <div className="getProduct_container">
      {products.map((product) => (
        <div key={product.id} className="getProduct_box">
          <Link to={`/product/${product.id}`} className="">
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
          </Link>
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
