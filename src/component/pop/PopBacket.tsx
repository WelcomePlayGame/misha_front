import React from "react";
interface IPop_Backet {
  isOpenBacket: boolean;
  setIsOpenBacket: (par: boolean) => void;
}
const PopBacket: React.FC<IPop_Backet> = ({
  isOpenBacket,
  setIsOpenBacket,
}) => {
  const hanleSetFalse = () => {
    setIsOpenBacket(false);
  };
  return (
    <section className="wrapper_backet">
      <div className={`backet_pop ${isOpenBacket ? "backet_pop_active" : ""}`}>
        <svg
          className="close_pop"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          onClick={hanleSetFalse}
        >
          <path d="M4.293,18.293,10.586,12,4.293,5.707A1,1,0,0,1,5.707,4.293L12,10.586l6.293-6.293a1,1,0,1,1,1.414,1.414L13.414,12l6.293,6.293a1,1,0,1,1-1.414,1.414L12,13.414,5.707,19.707a1,1,0,0,1-1.414-1.414Z" />
        </svg>
        <div className="backet_pop_box">
          <i className="span_des_top">Упс...Корзина порожня</i>
          <a href="/" className="backet_pop_a">
            Поїхали шопитись!
          </a>
        </div>
      </div>
    </section>
  );
};
export default PopBacket;
