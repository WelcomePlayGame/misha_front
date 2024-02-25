import React, { useEffect, useState } from "react";
import url from "../helper/conf";
import addOrGet from "../helper/method_api";
import Category from "./classes/Category";
import { Link, useParams } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/CartSlice";
import GetProduct from "./GetProduct";
import ZoomImage from "./zoomimage/ZoomImage";
import { Helmet } from "react-helmet";
interface IProduct {
  id: number;
  title: string;
  cost: number;
  desribe: string;
  new_cost: number;
  promotion: boolean;
  category: Category;
  photo: string[];
}
const ProductPage = () => {
  const [product, setProduct] = useState<IProduct>();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    addOrGet<IProduct>(
      `${url.url}${url.product}`,
      "get",
      undefined,
      null,
      Number(id)
    ).then((respone) => setProduct(respone.data));
  }, []);
  const createMarkup = (html: any) => ({ __html: html });
  const handleAddtoCart = (product: IProduct) => {
    dispatch(addToCart(product));
  };
  return (
    <>
      <Helmet>
        <title>{product?.title}</title>
        <meta name="description" content={product?.desribe} />
      </Helmet>
      <section className="page_product_container">
        <div className="page_product_box">
          <div className="page_product_swiper ">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              {product?.photo.map((photo, index) => (
                <SwiperSlide key={index}>
                  {/* <img src={photo} alt={photo} className="page_product_img" /> */}
                  <ZoomImage src={photo} alt={`Photo ${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="page_product_des_container">
            <h2 className="page_product_des_container_el">{product?.title}</h2>
            <span className="page_product_des_container_el">
              {product?.promotion ? (
                <div className="if_new_cost">
                  <span className="old_cost">{product?.cost} грн</span>
                  <span className="new_cost">{product?.new_cost} грн</span>
                </div>
              ) : (
                <div>
                  <span className="new_cost">{product?.cost} грн</span>
                </div>
              )}
            </span>
            <span className="page_product_des_container_el">
              <button
                className="page_product_des_container_el_add_backet"
                onClick={() => handleAddtoCart(product as IProduct)}
              >
                Додати в кошик
              </button>
            </span>
            <span className="page_product_des_container_el">
              <Link
                to="/order"
                className="btn_page_order"
                onClick={() => handleAddtoCart(product as IProduct)}
              >
                Замовити
              </Link>
            </span>
          </div>
          <div className=" page_product_div">
            <div dangerouslySetInnerHTML={createMarkup(product?.desribe)} />
          </div>
        </div>

        <div className="other_product_page">
          <h3>Інші товари</h3>
          <GetProduct />
        </div>
      </section>
    </>
  );
};

export default ProductPage;
