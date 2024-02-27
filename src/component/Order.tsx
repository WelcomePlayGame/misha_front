import React, { useState } from "react";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import Category from "./classes/Category";
import OrderClass from "./classes/Order";
import addOrGet from "../helper/method_api";
import url from "../helper/conf";
import sendOrderToTelegram from "./telegram/telegram";
import { Link, useLocation } from "react-router-dom";
interface IPoroduct {
  id: number;
  title: string;
  cost: number;
  size: string;
  new_cost: number;
  promotion: boolean;
  category: Category;
  photo: string[];
}
const Order = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [father_name, setFather_name] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  // const items = useSelector((state: RootState) => state.cart.items);
  const items: IPoroduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const [products, setProducts] = useState<IPoroduct[]>(items);
  let sum = 0;

  const handleSubmitOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const order = new OrderClass(
      name,
      surname,
      father_name,
      phone,
      city,
      sum,
      products
    );
    addOrGet(`${url.url}${url.order}${url.add}`, "post", order);
    sendOrderToTelegram(order);
  };
  return (
    <section>
      <div className="menu_order">
        <h2>Оформлення Замовлення</h2>
      </div>
      <div className="menu_order_container">
        <div>
          <form onSubmit={handleSubmitOrder}>
            <div className="menu_order_box_input">
              <label htmlFor="name">Напишіть Імя</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Імя"
                id="name"
                className="menu_order_input"
              />
            </div>
            <div className="menu_order_box_input">
              <label htmlFor="name">Напишіть Призвіще</label>
              <input
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder="Призвіще"
                id="surname"
                className="menu_order_input"
              />
            </div>
            <div className="menu_order_box_input">
              <label htmlFor="name">Напишіть по Батькові</label>
              <input
                value={father_name}
                onChange={(e) => setFather_name(e.target.value)}
                placeholder="По Батькові"
                id="father_name"
                className="menu_order_input"
              />
            </div>
            <div className="menu_order_box_input">
              <label htmlFor="name">Місто для відправки</label>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="місто"
                id="city"
                className="menu_order_input"
              />
            </div>
            <div className="menu_order_box_input">
              <label htmlFor="name">Напишіть моб.телефон</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+380...."
                id="phone"
                className="menu_order_input"
              />
            </div>
          </form>
        </div>
        <div className="menu_order_box_container">
          {items.map((item, index) => {
            const costToUse = item.new_cost !== 0 ? item.new_cost : item.cost;
            sum += costToUse;
            return (
              <div key={index} className="menu_order_box">
                <div>
                  <img
                    src={item.photo[0]}
                    className="menu_order_box_img"
                    alt="order"
                  />
                </div>
                <div className="menu_order_box_title">
                  <span>{item.title}</span>
                </div>
              </div>
            );
          })}
          <div className="menu_order_box_sum_and_order">
            <span className="menu_order_box_sum">
              Загальна вартість - {sum as number} грн
            </span>
            <Link to={"/success"} className="menu_order_box_btn">
              Відправити Замовлення
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Order;
