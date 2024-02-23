import React, { useEffect, useState } from "react";
import addOrGet from "../../../helper/method_api";
import url from "../../../helper/conf";
import { Link } from "react-router-dom";

const ListProductForAdmin = () => {
  const [product, setProduct] = useState<{ id: number; title: string }[]>([]);
  useEffect(() => {
    addOrGet<{ id: number; title: string }[]>(
      `${url.url}${url.product}`,
      "get"
    ).then((response) => setProduct(response.data));
  }, []);
  function capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  return (
    <section className="listcategory_container">
      <table className="list_developer_table">
        <thead className="list_developer_thead">
          <tr>
            <td>Продукт</td>
            <td>Змінити</td>
            <td>Видалити </td>
          </tr>
        </thead>
        <tbody>
          {product.map((product) => (
            <tr key={product.id}>
              <td>
                <span>{capitalizeFirstLetter(product.title)}</span>
              </td>
              <td>
                <Link to={`/admin/updateproduct/${product.id}`}>
                  Змінити вміст продукту
                </Link>
              </td>
              <td>
                <button
                  onClick={() => {
                    addOrGet(
                      `${url.url}${url.category}${url.delete}/${product.id}`,
                      "delete"
                    );
                    window.location.reload();
                  }}
                >
                  Видалити Продукт
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ListProductForAdmin;
