import React from "react";
import { useLocation, Link } from "react-router-dom";
const AdminMenu: React.FC = () => {
  const location = useLocation();
  const isAdminMenu = location.pathname.startsWith("/admin");
  return (
    <>
      {isAdminMenu && (
        <section>
          <ul className="adminmenu_ul">
            <li>
              <Link to={`/`}>Сайт</Link>
            </li>
            <li>
              <Link to={`/admin/addcategory`}>Додати Категорію</Link>
            </li>
            <li>
              <Link to={`/admin/addproduct`}>Додати Продукт</Link>
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

export default AdminMenu;
