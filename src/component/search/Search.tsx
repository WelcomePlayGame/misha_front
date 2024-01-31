import React from "react";
const Search: React.FC = () => {
  return (
    <form className="form_search">
      <section className="search_container">
        <input
          type="search"
          placeholder="Пошук"
          className="search_home"
          required
          maxLength={200}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="64px"
          height="64px"
          className="search-icon"
        >
          <radialGradient
            id="WtHX~pkuEeQUIdrwPnnSRa"
            cx="242.813"
            cy="287.333"
            r="206.704"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#efdcb1" />
            <stop offset="0" stop-color="#f2e0bb" />
            <stop offset=".011" stop-color="#f2e0bc" />
            <stop offset=".362" stop-color="#f9edd2" />
            <stop offset=".699" stop-color="#fef4df" />
            <stop offset="1" stop-color="#fff7e4" />
          </radialGradient>
          <path
            fill="url(#WtHX~pkuEeQUIdrwPnnSRa)"
            d="M6,4L6,4c0-2.209,1.791-4,4-4h0c2.209,0,4,1.791,4,4v0c0,2.209-1.791,4-4,4h0 C7.791,8,6,6.209,6,4z M7.5,64L7.5,64c1.933,0,3.5-1.567,3.5-3.5v0c0-1.933-1.567-3.5-3.5-3.5h0C5.567,57,4,58.567,4,60.5v0 C4,62.433,5.567,64,7.5,64z M57.5,25h-10c-1.933,0-3.5,1.567-3.5,3.5v0c0,1.933,1.567,3.5,3.5,3.5H49c2.209,0,4,1.791,4,4v0 c0,2.209-1.791,4-4,4h-0.5c-1.381,0-2.5,1.119-2.5,2.5v0c0,1.381,1.119,2.5,2.5,2.5H54c2.209,0,4,1.791,4,4v0c0,2.209-1.791,4-4,4 h-8c-1.105,0-2,0.895-2,2v0c0,1.105,0.895,2,2,2h0.5c1.933,0,3.5,1.567,3.5,3.5v0c0,1.933-1.567,3.5-3.5,3.5h-29 c-1.933,0-3.5-1.567-3.5-3.5v0c0-1.933,1.567-3.5,3.5-3.5h0c1.381,0,2.5-1.119,2.5-2.5v0c0-1.381-1.119-2.5-2.5-2.5H9 c-2.209,0-4-1.791-4-4v0c0-2.209,1.791-4,4-4h4.5c1.933,0,3.5-1.567,3.5-3.5v0c0-1.933-1.567-3.5-3.5-3.5H5c-2.761,0-5-2.239-5-5v0 c0-2.761,2.239-5,5-5h3c1.657,0,3-1.343,3-3v0c0-1.657-1.343-3-3-3H5.5C3.567,21,2,19.433,2,17.5v0C2,15.567,3.567,14,5.5,14H24 c1.657,0,3-1.343,3-3v0c0-1.657-1.343-3-3-3h-2c-2.209,0-4-1.791-4-4v0c0-2.209,1.791-4,4-4l24,0c2.209,0,4,1.791,4,4v0 c0,2.209-1.791,4-4,4h-2c-2.209,0-4,1.791-4,4v0c0,2.209,1.791,4,4,4h13.5c2.485,0,4.5,2.015,4.5,4.5v0C62,22.985,59.985,25,57.5,25 z M63,36L63,36c0-2.209-1.791-4-4-4h0c-2.209,0-4,1.791-4,4v0c0,2.209,1.791,4,4,4h0C61.209,40,63,38.209,63,36z"
          />
          <linearGradient
            id="WtHX~pkuEeQUIdrwPnnSRb"
            x1="31.5"
            x2="31.5"
            y1="6"
            y2="57.004"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#a4a4a4" />
            <stop offset=".63" stop-color="#7f7f7f" />
            <stop offset="1" stop-color="#6f6f6f" />
            <stop offset="1" stop-color="#6f6f6f" />
          </linearGradient>
          <path
            fill="url(#WtHX~pkuEeQUIdrwPnnSRb)"
            d="M55.846,49.998l0.006-0.006L43.621,37.761C45.752,34.528,47,30.662,47,26.5 C47,15.178,37.822,6,26.5,6S6,15.178,6,26.5S15.178,47,26.5,47c4.163,0,8.031-1.249,11.265-3.381l12.232,12.229 c1.542,1.542,4.04,1.542,5.581,0l0.268-0.268C57.385,54.038,57.385,51.54,55.846,49.998z"
          />
          <linearGradient
            id="WtHX~pkuEeQUIdrwPnnSRc"
            x1="26.5"
            x2="26.5"
            y1="12"
            y2="41"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#def9ff" />
            <stop offset=".282" stop-color="#cff6ff" />
            <stop offset=".823" stop-color="#a7efff" />
            <stop offset="1" stop-color="#99ecff" />
          </linearGradient>
          <path
            fill="url(#WtHX~pkuEeQUIdrwPnnSRc)"
            d="M26.5 12A14.5 14.5 0 1 0 26.5 41A14.5 14.5 0 1 0 26.5 12Z"
          />
          <linearGradient
            id="WtHX~pkuEeQUIdrwPnnSRd"
            x1="22.5"
            x2="22.5"
            y1="35"
            y2="12"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stop-color="#ddf9ff" />
            <stop offset=".723" stop-color="#eafcff" />
            <stop offset="1" stop-color="#f1fdff" />
          </linearGradient>
          <path
            fill="url(#WtHX~pkuEeQUIdrwPnnSRd)"
            d="M26.5,12c1.381,0,2.5,1.119,2.5,2.5c0,1.381-1.119,2.5-2.5,2.5H23c-1.105,0-2,0.895-2,2 c0,1.105,0.895,2,2,2h0.5c1.381,0,2.5,1.119,2.5,2.5c0,1.381-1.119,2.5-2.5,2.5H19c-1.105,0-2,0.895-2,2c0,1.105,0.895,2,2,2h0.5 c1.381,0,2.5,1.119,2.5,2.5c0,1.381-1.119,2.5-2.5,2.5h-4.73C13.035,32.61,12,29.679,12,26.5C12,18.492,18.492,12,26.5,12z M30.5,21 c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5S31.881,21,30.5,21z"
          />
        </svg>
      </section>
    </form>
  );
};

export default Search;
