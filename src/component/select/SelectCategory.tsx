import { ChangeEvent, useEffect, useState } from "react";
import url from "../../helper/conf";
import addOrGet from "../../helper/method_api";
import React from "react";

interface Category {
  id: number;
  title: string;
}

const SelectCategory = ({
  onChange,
}: {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}) => {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    addOrGet<Category[]>(`${url.url}${url.category}`, `get`)
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  }, []);

  return (
    <section>
      <select onChange={onChange} className="select_box" multiple required>
        {category.map((el) => (
          <option key={el.id} value={el.id}>
            {el.title}
          </option>
        ))}
      </select>
    </section>
  );
};

export default SelectCategory;
