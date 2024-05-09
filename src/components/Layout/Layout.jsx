// import { Suspense } from "react";
import Navigation from "../Navigation/Navigation";
import css from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={css.container}>
      <Navigation />
    </div>
  );
}

// <Suspense fallback={<div>Please wait loading page...</div>}>
//   {children}
// </Suspense>
