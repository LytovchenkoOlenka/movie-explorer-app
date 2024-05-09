import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={getNavLinkClass}>
        HOME
      </NavLink>
      <NavLink to="/movies" className={getNavLinkClass}>
        MOVIES
      </NavLink>
    </nav>
  );
}
