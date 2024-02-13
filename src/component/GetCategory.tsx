import React, { useEffect, useState } from "react";
import addOrGet from "../helper/method_api";
import url from "../helper/conf";
const GetCategory = () => {
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

  return (
    <section className="getcategory_container">
      {categories.map((category) => (
        <div key={category.id} className="getcategory_box">
          <span className="getcategory">
            {capitalizeFirstLetter(category.title)}
          </span>
        </div>
      ))}
    </section>
  );
};
export default GetCategory;
