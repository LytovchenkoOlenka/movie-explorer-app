import { Link } from "react-router-dom";
import css from "../Logo/Logo.module.css";
import logo from "../../../public/movie-logo.svg";
// import logo from "../../../public/movie-logo.svg";

export default function Logo() {
  return (
    <Link to="/" className={css.logo}>
      <img src={logo} alt="Logo MovieExplorer" />
    </Link>
  );
}
