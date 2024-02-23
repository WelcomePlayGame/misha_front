import React, { useEffect, useState } from "react";
import addOrGet from "../helper/method_api";
import { useDispatch } from "react-redux";
import { selectCategory } from "../store/CategorySlice";
import url from "../helper/conf";
const GetCategory = () => {
  const dispatch = useDispatch();
  const [categories, setCategory] = useState<{ id: number; title: string }[]>(
    []
  );
  useEffect(() => {
    addOrGet<{ id: number; title: string }[]>(
      `${url.url}${url.category}`,
      "get"
    ).then((response) => setCategory(response.data));
  }, []);
  function capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  const handleAddCategoryToStore = (value: string) => {
    dispatch(selectCategory(value));
  };

  return (
    <section className="getcategory_container">
      {categories.map((category) => (
        <div
          key={category.id}
          className="getcategory_box"
          onClick={() => handleAddCategoryToStore(category.title)}
        >
          <span className="getcategory">
            {capitalizeFirstLetter(category.title)}
          </span>
        </div>
      ))}
    </section>
  );
};
export default GetCategory;
