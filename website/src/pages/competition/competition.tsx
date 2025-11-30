import React from "react";
import Button from "../../components/button/button";
import IntroSection from "../../components/introSection/introSection";
import { useNavigate } from "react-router";
import classes from "./competition.module.scss";

function Competition() {
  const navigate = useNavigate();

  return (
    <div className={classes.Container}>
      <IntroSection introSectionTitle="Competitions"  showGraphic={false}>
        <p>We participate in a number of competitions in and around the county.</p>
          <Button onClick={()=>{navigate("/contact")}}>Get In Touch</Button>

      </IntroSection>
    </div>
  );
}

export default React.memo(Competition);
