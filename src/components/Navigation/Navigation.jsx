import clsx from "clsx";
import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  function getLinkClasses(isActive) {
    return clsx(s.link, isActive && s.activeLink);
  }

  return (
    <nav>
      <ul className={s.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => getLinkClasses(isActive)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/catalog"
            className={({ isActive }) => getLinkClasses(isActive)}
          >
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
