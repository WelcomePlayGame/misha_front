import React from "react";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
const Order = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  return (
    <section>
      <div className="menu_order">
        <h2>Оформлення Замовлення</h2>
      </div>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <span>{item.title}</span>
          </div>
        );
      })}
    </section>
  );
};
export default Order;
