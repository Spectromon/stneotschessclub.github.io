import React from "react";
import classes from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className={classes.Container}>
      <FontAwesomeIcon icon={"copyright"} />
      <p>St. Neots Chess Club 2025 </p>
      <p>Released under the MIT License</p>
    </footer>
  );
}

export default React.memo(Footer);
