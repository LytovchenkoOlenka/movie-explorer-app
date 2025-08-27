import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";
import Logo from "../Logo/Logo";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

// export default function Header() {
//   return (
//     <header className={css.header}>
//       <Logo />

//     </header>
//   );
// }

export default function Header() {
  return (
    <header className={css.headerWrapper}>
      <div className={css.headerContainer}>
      <Logo />
      <nav className={css.nav}>
        <NavLink to="/" className={getNavLinkClass}>
          HOME
        </NavLink>
        <NavLink to="/movies" className={getNavLinkClass}>
          MOVIES
        </NavLink>
      </nav>
      </div>
    </header>
  );
}
