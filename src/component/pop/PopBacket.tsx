import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addToCart, removeFromCart } from "../../store/CartSlice";
import { useDispatch } from "react-redux";
import Category from "../classes/Category";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface IPop_Backet {
  isOpenBacket: boolean;
  setIsOpenBacket: (par: boolean) => void;
}

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

const PopBacket: React.FC<IPop_Backet> = ({
  isOpenBacket,
  setIsOpenBacket,
}) => {
  const dispatch = useDispatch();
  // const items = useSelector((state: RootState) => state.cart.items);
  const items: IPoroduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
  let sum = 0;
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<IPoroduct[]>([]);
  // const handleDeleteItem = (item: IPoroduct) => {
  //   // dispatch(removeFromCart(item));
  //   const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");

  //   // Фильтруем элементы корзины, исключая удаляемый элемент
  //   const updatedCart = storedCart.filter(
  //     (cartItem: IPoroduct) => cartItem.id !== item.id
  //   );

  //   // Обновляем значение корзины в localStorage
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  // };
  useEffect(() => {
    // Получаем текущее значение корзины из localStorage при монтировании компонента
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems((prevCartItems) => {
      // Проверяем, отличаются ли новые элементы от предыдущих
      if (JSON.stringify(storedCart) !== JSON.stringify(prevCartItems)) {
        return storedCart;
      } else {
        return prevCartItems;
      }
    });
  }, []);
  const handleDeleteItem = (item: IPoroduct) => {
    // Фильтруем элементы корзины, исключая удаляемый элемент
    const updatedCart = cartItems.filter(
      (cartItem: IPoroduct) => cartItem.id !== item.id
    );

    // Обновляем значение корзины в localStorage и в состоянии
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };
  const handleAddSum = () => {
    navigate("/order", {
      state: {
        sum: sum,
      },
    });
  };

  return (
    <section className="wrapper_backet">
      <div className={`backet_pop ${isOpenBacket ? "backet_pop_active" : ""}`}>
        {items.length === 0 ? (
          <div>
            <svg
              className="close_pop"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setIsOpenBacket(false)}
            >
              <path d="M4.293,18.293,10.586,12,4.293,5.707A1,1,0,0,1,5.707,4.293L12,10.586l6.293-6.293a1,1,0,1,1,1.414,1.414L13.414,12l6.293,6.293a1,1,0,1,1-1.414,1.414L12,13.414,5.707,19.707a1,1,0,0,1-1.414-1.414Z" />
            </svg>
            <div className="backet_pop_box">
              <i className="span_des_top">Упс...Кошик порожній</i>
              <a href="/" className="backet_pop_a">
                Поїхали шопитись!
              </a>
            </div>
          </div>
        ) : (
          <div>
            <svg
              className="close_pop"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setIsOpenBacket(false)}
            >
              <path d="M4.293,18.293,10.586,12,4.293,5.707A1,1,0,0,1,5.707,4.293L12,10.586l6.293-6.293a1,1,0,1,1,1.414,1.414L13.414,12l6.293,6.293a1,1,0,1,1-1.414,1.414L12,13.414,5.707,19.707a1,1,0,0,1-1.414-1.414Z" />
            </svg>
            <div className="backet_items">
              {items.map((item, index) => {
                const costToUse =
                  item.new_cost !== 0 ? item.new_cost : item.cost;
                sum += costToUse;
                return (
                  <div key={index} className="backet_item_box">
                    <div>
                      <img
                        src={item.photo[0]}
                        className="backet_item_box_img"
                        alt="backe for customer"
                      />
                    </div>
                    <div className="backet_item_box_describe">
                      <span> {item.title}</span>
                      <span>{item.cost} грн</span>
                    </div>
                    <div>
                      <div
                        onClick={() => handleDeleteItem(item)}
                        className="remove_item_icon"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.293,18.293,10.586,12,4.293,5.707A1,1,0,0,1,5.707,4.293L12,10.586l6.293-6.293a1,1,0,1,1,1.414,1.414L13.414,12l6.293,6.293a1,1,0,1,1-1.414,1.414L12,13.414,5.707,19.707a1,1,0,0,1-1.414-1.414Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div>До сплати без Доставки: {sum} грн</div>
              <Link
                to={"/order"}
                className="backet_item_order_btn"
                onClick={handleAddSum}
              >
                Оформити Замовлення
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopBacket;
