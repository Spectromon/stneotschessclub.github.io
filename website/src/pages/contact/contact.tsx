import React from "react";
import IntroSection from "../../components/introSection/introSection";
import classes from "./contact.module.scss";
import Section from "../../components/section/section";

function Contact() {
  return (
    <div className={classes.Container}>
      <IntroSection introSectionTitle="Our Contact Details" showGraphic={false}>
        <p>
          We regularly review our contact details and these are subject to
          change at short notice
        </p>
      </IntroSection>
      <Section sectionTitle="Email">
        <div>
          Our contact email is:{" "}
          <a style={{color: "var(--primary)"}} href="mailto:stneotschessclub@gmail.com">
            stneotschessclub@gmail.com
          </a>
        </div>
      </Section>
    </div>
  );
}

export default React.memo(Contact);
