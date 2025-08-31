import { Suspense } from "react";
import Header from "../Header/Header";
import css from "./Layout.module.css";
import Loader from "../Loader/Loader";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={css.mainContainer}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
    </>
  );
}
