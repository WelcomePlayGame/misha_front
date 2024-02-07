import React, { useState } from "react";
import addOrGet from "../../../helper/method_api";
import url from "../../../helper/conf";
import Category from "../../classes/Category";
const AddCategory = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setTitle(title);
    const category = new Category(0, title);
    addOrGet(`${url.url}${url.category}${url.add}`, "post", category).then(
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
          placeholder="Enter category title"
          className="addcategory_input"
        />
        <button className="addcategory_btn" type="submit">
          Add Category
        </button>
      </form>
    </section>
  );
};

export default AddCategory;
