import React, { ChangeEvent, useState } from "react";
import SelectCategory from "../../select/SelectCategory";
import addOrGet from "../../../helper/method_api";
import url from "../../../helper/conf";
import Product from "../../classes/Product";
import Category from "../../classes/Category";
const AddProduct = () => {
  const [title, setTitle] = useState(``);
  const [cost, setCost] = useState<number>(0);
  const [size, setSize] = useState(``);
  const [new_cost, setNew_cost] = useState<number>(0);
  const [promotion, setPromotion] = useState(false);
  const [category_id, setCategory] = useState<string>();
  const [photos, setPhotos] = useState<File[]>([]);

  const handleSelectedFiles = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectFiles = Array.from(e.target.files);
      setPhotos(selectFiles);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const category = new Category(Number(category_id));

    const product = new Product(
      title,
      cost,
      size,
      new_cost,
      promotion,
      category
    );

    addOrGet(`${url.url}${url.product}${url.add}`, `post`, product, photos);
  };
  return (
    <section className="addproduct_wrapper">
      <form className="addproduct_from" onSubmit={handleSubmit}>
        <div className="input_box">
          <div className="addproduct_input_cheked">
            <label htmlFor="title">Назва продукту</label>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Назва"
              onChange={(e) => setTitle(e.target.value)}
              id="title"
            />
            <label htmlFor="size">Розмір продукту</label>
            <input
              type="text"
              name="size"
              value={size}
              placeholder="Розмір"
              onChange={(e) => setSize(e.target.value)}
              id="size"
            />
          </div>
          <div className="addproduct_input_cheked">
            <label htmlFor="cost">Вартість</label>
            <input
              type="number"
              name="cost"
              value={cost}
              placeholder="Вартість"
              onChange={(e) => setCost(Number(e.target.value))}
              id="cost"
            />
            <label htmlFor="new_cost">Акційна Варість</label>
            <input
              type="number"
              name="new_cost"
              value={new_cost}
              placeholder="Акційна вартість"
              onChange={(e) => setNew_cost(Number(e.target.value))}
              id="new_cost"
            />
          </div>
          <div className="addproduct_input_cheked">
            <label htmlFor="promotion">Акція?</label>
            <input
              type="checkbox"
              name="promotion"
              onChange={(e) => setPromotion(e.target.checked)}
              id="promotion"
            />
            <SelectCategory onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div className="addproduct_input_cheked">
            <input
              type="file"
              name="photos"
              multiple
              onChange={handleSelectedFiles}
              id="photos"
            />
          </div>
        </div>
        <button type="submit" className="btn_add_product">
          Зберегти
        </button>
      </form>
    </section>
  );
};

export default AddProduct;
