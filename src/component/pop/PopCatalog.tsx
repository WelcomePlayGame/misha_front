import React from "react";
interface IPop_Catalog {
  isOpen: boolean;
}
const PopCatalog: React.FC<IPop_Catalog> = ({ isOpen }) => {
  return (
    <div
      className={`pop_catalog_container ${
        isOpen ? "pop_catalog_container_active" : ""
      }`}
    >
      <span>dsds</span>
    </div>
  );
};

export default PopCatalog;
