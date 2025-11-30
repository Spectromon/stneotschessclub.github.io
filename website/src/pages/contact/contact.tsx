import React from "react";
import IntroSection from "../../components/introSection/introSection";
import classes from "./contact.module.scss";

function Contact() {
  return (
    <div className={classes.Container}>
      <IntroSection introSectionTitle="Our Contact Details"  showGraphic={false}>
        <p>We regularly review our contact details and these are subject to change at short notice</p>
      </IntroSection>
    </div>
  );
}

export default React.memo(Contact);
