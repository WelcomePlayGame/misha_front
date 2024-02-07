import React, { useEffect, useState } from "react";
import url from "../helper/conf";
import addOrGet from "../helper/method_api";
import Category from "./classes/Category";
import { useParams } from "react-router-dom";
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
const ProductPage = () => {
  const [product, setProduct] = useState<IProduct>();
  const { id } = useParams();
  useEffect(() => {
    addOrGet<IProduct | null>(
      `${url.url}${url.product}`,
      "get",
      null,
      null,
      Number(id)
    );
  }, []);
  return (
    <section className="page_product_container">
      <div className="page_product_box">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default ProductPage;
