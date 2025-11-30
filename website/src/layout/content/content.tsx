import React, { Suspense } from "react";
import classes from "./content.module.scss";
import { Outlet, ScrollRestoration } from "react-router";
import Header from "../header/header";
import Footer from "../footer/footer";

function Content() {
  return (
    <main id="main" className={classes.Container}>
      <Header></Header>
      <main id="main" className={classes.Main}>
        <div className={classes.Content}>
          <Suspense>
            <Outlet />
            <ScrollRestoration />
          </Suspense>
        </div>
      </main>
      <Footer></Footer>
    </main>
  );
}

export default React.memo(Content);
