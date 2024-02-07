import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Search from "./search/Search";
import PopCatalog from "./pop/PopCatalog";
import PopBacket from "./pop/PopBacket";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
const Header: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenBacket, setOpenBacket] = useState(false);
  const location = useLocation();
  const isHeader =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/order");
  const handleOpen = () => {
    setOpen(!isOpen);
  };
  const handleOpenIsBacket = () => {
    setOpenBacket(!isOpenBacket);
  };
  const items = useSelector((state: RootState) => state.cart.items);
  return (
    <>
      {!isHeader && (
        <section className="wrapper_header ">
          <menu className="">
            <div className="header">
              <div className="header_humburger_container">
                <div
                  className={`header_humburger ${
                    isOpen ? "header_humburger_active" : ""
                  }`}
                  onClick={handleOpen}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="catalog_box">
                  <span className="catalog_span" onClick={handleOpen}>
                    Каталог
                  </span>
                </div>
              </div>
              <div>
                <Search />
              </div>
              <div className="basket_container" onClick={handleOpenIsBacket}>
                <svg
                  className="basket_svg"
                  width="48"
                  height="48"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M.75-.02a.75.75 0 100 1.5l.408-.006 1.606 1.281 1.839 6.881L4.237 12a2 2 0 102.188 2.722l5.705.028a2 2 0 100-1.5l-5.705-.028a2.007 2.007 0 00-.722-.898l.438-2.632 7.933.027 1.91-7.715H4.227L1.683-.026 1.68-.02v-.005L.75-.02z"
                    fill="#000"
                  ></path>
                </svg>
                <div>
                  <span className="count_backet">{items.length}</span>
                  <span className="basket_span">Кошик</span>
                </div>
              </div>
              <PopCatalog isOpen={isOpen} />
            </div>
          </menu>
          <PopBacket
            isOpenBacket={isOpenBacket}
            setIsOpenBacket={handleOpenIsBacket}
          />
        </section>
      )}
    </>
  );
};
export default Header;
