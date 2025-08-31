import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <p className={css.errorCode}>404</p>
      <p className={css.message}>Oops! Page not found! Sorry!</p>
      <Link to="/" className={css.homeLink}>
        Go to Home Page
      </Link>
    </div>
  );
}
