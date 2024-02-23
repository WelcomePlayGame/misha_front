import React, { useEffect, useState } from "react";
import addOrGet from "../../../helper/method_api";
import url from "../../../helper/conf";
import { Link } from "react-router-dom";

const ListCategoryForAdmin = () => {
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
    <section className="listcategory_container">
      <table className="list_developer_table">
        <thead className="list_developer_thead">
          <tr>
            <td>Категорія</td>
            <td>Змінити</td>
            <td>Видалити </td>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>
                <span>{capitalizeFirstLetter(category.title)}</span>
              </td>
              <td>
                <Link to={`/admin/update/${category.id}`}>
                  Змінити назву Категорії
                </Link>
              </td>
              <td>
                <button
                  onClick={() => {
                    addOrGet(
                      `${url.url}${url.category}${url.delete}/${category.id}`,
                      "delete"
                    );
                    window.location.reload();
                  }}
                >
                  Видалити Категоію
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ListCategoryForAdmin;
