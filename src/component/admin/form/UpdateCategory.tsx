import React, { useState } from "react";
import addOrGet from "../../../helper/method_api";
import url from "../../../helper/conf";
import Category from "../../classes/Category";
import { useParams } from "react-router-dom";
const UpdateCategory = () => {
  const [title, setTitle] = useState("");
  const { id } = useParams();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setTitle(title);
    const category = new Category(Number(id), title);
    addOrGet(`${url.url}${url.category}${url.update}`, "put", category).then(
      () => {
        setTitle("");
      }
    );
  };
  return (
    <section className="addcategory_wrapper">
      <form onSubmit={handleSubmit} className="addcategory_form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Змінти назву категоії"
          className="addcategory_input"
        />
        <button className="addcategory_btn" type="submit">
          Змінити назву
        </button>
      </form>
    </section>
  );
};

export default UpdateCategory;
