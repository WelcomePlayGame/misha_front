import React, { useState } from "react";
import Search from "./search/Search";
import PopCatalog from "./pop/PopCatalog";
import PopBacket from "./pop/PopBacket";
const Header: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenBacket, setOpenBacket] = useState(false);
  const handleOpen = () => {
    setOpen(!isOpen);
  };
  const handleOpenIsBacket = () => {
    setOpenBacket(!isOpenBacket);
  };
  return (
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
              <span className="basket_span">Кошик</span>
            </div>
          </div>
          <PopCatalog isOpen={isOpen} />
        </div>
        <div className="sub_header">
          <ul className="sub_header_ul">
            <li className="sub_header_li">
              <span className="sub_header_li_cicle">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 219.582 219.582"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      style={{ fill: "#371C06" }}
                      d="M55.626,154.767c-1.764,0.441,0.87,18.505,8.377,27.777c0,0-0.488-13.107,3.115-17.637
		c0,0,12.628,6.467,5.639,20.87c0,0,7.561,0.796,11.528-11.359c0,0-3.053,11.427,7.513,17.934
		c10.565,6.507,17.993,2.459,17.993,2.459v-60.18H52.775L55.626,154.767z"
                    />
                    <path
                      style={{ fill: "#371C06" }}
                      d="M164.055,154.767c1.764,0.441-0.87,18.505-8.377,27.777c0,0,0.488-13.107-3.115-17.637
		c0,0-12.628,6.467-5.639,20.87c0,0-7.561,0.796-11.529-11.359c0,0,3.053,11.427-7.512,17.934
		c-10.565,6.507-17.993,2.459-17.993,2.459v-60.18h57.016L164.055,154.767z"
                    />
                    <path
                      style={{ fill: "#371C06" }}
                      d="M113.239,0C61.426,0,74.371,51.591,74.371,51.591h38.868h38.868C152.107,51.591,165.054,0,113.239,0
		z"
                    />
                    <g>
                      <g>
                        <rect
                          x="95.162"
                          y="169.316"
                          style={{ fill: "#FDCC9B" }}
                          width="29.395"
                          height="32.923"
                        />
                        <path
                          style={{ fill: "#FCBC85" }}
                          d="M95.162,173.194c0,0,12.364,7.874,29.395,6.051v-9.929H95.162V173.194z"
                        />
                        <ellipse
                          style={{ fill: "#FCBC85" }}
                          cx="52.775"
                          cy="118.267"
                          rx="14.343"
                          ry="16.364"
                        />
                        <ellipse
                          style={{ fill: "#FCBC85" }}
                          cx="166.943"
                          cy="118.267"
                          rx="14.343"
                          ry="16.364"
                        />
                        <path
                          style={{ fill: "#FDCC9B" }}
                          d="M166.885,87.011c0-24.104-17.637-41.74-57.025-41.74c-39.39,0-57.026,17.637-57.026,41.74
				c0,24.104-4.115,87.597,57.026,87.597C171,174.607,166.885,111.115,166.885,87.011z"
                        />
                        <g>
                          <g>
                            <ellipse
                              style={{ fill: "#3B2519" }}
                              cx="82.083"
                              cy="114.349"
                              rx="6.173"
                              ry="6.761"
                            />
                            <circle
                              style={{ fill: "#FFFFFF" }}
                              cx="79.392"
                              cy="111.363"
                              r="1.846"
                            />
                          </g>
                          <path
                            style={{ fill: "#4C2D19" }}
                            d="M72.208,99.771c2.919,1.117,7.606-3.799,18.335,0.478c1.956,0.78,3.124-6.668-8.377-6.668
					C72.208,93.581,70.444,99.096,72.208,99.771z"
                          />
                          <g>
                            <ellipse
                              style={{ fill: "#3B2519" }}
                              cx="138.397"
                              cy="114.349"
                              rx="6.173"
                              ry="6.761"
                            />
                            <circle
                              style={{ fill: "#FFFFFF" }}
                              cx="135.706"
                              cy="111.363"
                              r="1.847"
                            />
                          </g>
                          <path
                            style={{ fill: "#4C2D19" }}
                            d="M147.51,99.771c-2.919,1.117-7.605-3.799-18.335,0.478c-1.956,0.78-3.123-6.668,8.378-6.668
					C147.51,93.581,149.273,99.096,147.51,99.771z"
                          />
                        </g>
                        <path
                          style={{ fill: "#FCBC85" }}
                          d="M109.859,138.129c-6.1,0-9.774-4.557-9.774-2.352c0,2.204,1.764,6.393,9.774,6.393
				c8.01,0,9.773-4.189,9.773-6.393C119.633,133.572,115.959,138.129,109.859,138.129z"
                        />
                        <path
                          style={{ fill: "#FCBC85" }}
                          d="M109.859,158.4c-2.109,0-3.381-1.576-3.381-0.814s0.61,2.212,3.381,2.212
				c2.771,0,3.38-1.449,3.38-2.212S111.969,158.4,109.859,158.4z"
                        />
                        <path
                          style={{ fill: "#F7945E" }}
                          d="M109.859,152.782c-9.668,0-15.493-3.938-15.493-2.939c0,0.997,2.796,4.924,15.493,4.924
				c12.697,0,15.492-3.927,15.492-4.924C125.351,148.845,119.527,152.782,109.859,152.782z"
                        />
                      </g>
                      <circle
                        style={{ fill: "#F9AA8D" }}
                        cx="74.145"
                        cy="135.954"
                        r="8.378"
                      />
                      <circle
                        style={{ fill: "#F9AA8D" }}
                        cx="146.603"
                        cy="135.954"
                        r="8.377"
                      />
                    </g>
                    <path
                      style={{ fill: "#FDC16E" }}
                      d="M109.859,182.544v37.038H45.486C45.486,204.591,76.055,182.544,109.859,182.544z"
                    />
                    <path
                      style={{ fill: "#FDC16E" }}
                      d="M109.859,182.544v37.038h64.372C174.231,204.591,143.663,182.544,109.859,182.544z"
                    />
                    <path
                      style={{ fill: "#FDCC9B" }}
                      d="M95.162,183.826l14.697,26.275c0.879,0,14.697-26.275,14.697-26.275S109.308,178.275,95.162,183.826
		z"
                    />
                    <polygon
                      style={{ fill: "#F68E4D" }}
                      points="109.859,219.582 109.859,210.102 105.009,202.827 	"
                    />
                    <polygon
                      style={{ fill: "#F68E4D" }}
                      points="109.859,219.582 109.859,210.102 114.318,202.827 	"
                    />
                    <path
                      style={{ fill: "#4D423E" }}
                      d="M89.136,219.582l-3.04-33.805c0,0-6.456-0.273-14.215,5.365l-6.444,28.44H89.136z"
                    />
                    <path
                      style={{ fill: "#4D423E" }}
                      d="M130.582,219.582l3.04-33.805c0,0,6.456-0.273,14.215,5.365l6.445,28.44H130.582z"
                    />
                    <path
                      style={{ fill: "#4C2D19" }}
                      d="M109.859,18.521c-90.83,0-78.926,99.648-67.021,123.649c11.905,24,0,40.373,0,40.373
		c20.282-8.377,16.461-40.373,16.461-40.373c6.525,7.539,18.373,10.053,18.373,10.053c-17.636-7.393-24.854-62.264,4.029-64.478
		c28.884-2.214,60.344-12.787,60.344-12.787s20.068,55.321,6.066,77.265c0,0,9.779-6.658,14.644-17.049
		c0,0-4.396,30.614,15.005,47.369c0,0-10.141-29.041,0-47.369C187.902,116.847,200.689,18.521,109.859,18.521z"
                    />
                    <path
                      style={{ fill: "#F68E4D" }}
                      d="M95.162,179.519l8.535,8.929l6.162,21.654l-8.818-13.227l-9.921,5.365l-8.597-15.462
		C82.523,186.777,89.944,180.021,95.162,179.519z"
                    />
                    <path
                      style={{ fill: "#F68E4D" }}
                      d="M124.556,179.519l-8.536,8.929l-6.161,21.654l8.818-13.227l9.92,5.365l8.598-15.462
		C137.195,186.777,129.774,180.021,124.556,179.519z"
                    />
                  </g>
                </svg>
              </span>
            </li>
            <li className="sub_header_li">
              <span className="sub_header_li_cicle"></span>
            </li>
            <li className="sub_header_li">
              <span className="sub_header_li_cicle"></span>
            </li>
            <li className="sub_header_li">
              <span className="sub_header_li_cicle"></span>
            </li>
            <li className="sub_header_li">
              <span className="sub_header_li_cicle"></span>
            </li>
          </ul>
        </div>
      </menu>
      <PopBacket
        isOpenBacket={isOpenBacket}
        setIsOpenBacket={handleOpenIsBacket}
      />
    </section>
  );
};
export default Header;
