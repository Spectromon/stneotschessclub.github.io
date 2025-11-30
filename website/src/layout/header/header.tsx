import React, { useState } from "react";
import classes from "./header.module.scss";
import Title from "../../components/title/title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TitleLevel } from "../../types/title.type";
import { Link } from "react-router";
import Button from "../../components/button/button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={classes.Header}>
      <div className={classes.Container}>
      <div className={classes.Content}>
        <div className={classes.TitleContainer}>
          <div className={classes.Icon}>
            <FontAwesomeIcon icon={"chess-king"} />
          </div>
          <Title level={TitleLevel.H1} colour={"var(--primary)"}>St Neots Chess Club</Title>
        </div>
        {/* <div className={classes.TitleContainer}>
          <Link className={classes.Link} to="/">
            Home
          </Link>
          <Link className={classes.Link} to="/about">
            About
          </Link>
          <Link className={classes.Link} to="/competitions">
            Competitions
          </Link>
          <Link className={classes.Link} to="/policies">
            Policies
          </Link>
          <Link className={classes.Link} to="/contact">
            Contact
          </Link>
        </div> */}
        <Button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FontAwesomeIcon icon={"times"} /> : <FontAwesomeIcon icon={"bars"} />}
        </Button>
      </div>
      </div>
      {isOpen && <div className={classes.MobileLinksContainer}>
                  <Link className={classes.Link} to="/">
            Home
          </Link>
          <Link className={classes.Link} to="/about">
            About
          </Link>
          <Link className={classes.Link} to="/competitions">
            Competitions
          </Link>
          <Link className={classes.Link} to="/policies">
            Policies
          </Link>
          <Link className={classes.Link} to="/contact">
            Contact
          </Link>
      </div>}
    </header>
  );
}

export default React.memo(Header);
