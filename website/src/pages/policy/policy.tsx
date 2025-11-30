import React from "react";
import Button from "../../components/button/button";
import IntroSection from "../../components/introSection/introSection";
import Section from "../../components/section/section";
import { useNavigate } from "react-router";
import classes from "./policy.module.scss";

function Policy() {
  const navigate = useNavigate();

  return (
    <div className={classes.Container}>
      <IntroSection introSectionTitle="Our Policy Documents"  showGraphic={false}>
        <p>We regularly review our policy documents and these are subject to change at short notice</p>
          <Button onClick={()=>{navigate("/contact")}}>Get In Touch</Button>

      </IntroSection>
      <Section sectionTitle="Safeguarding Document">
        <p>
          Reviewed on 19/08/25
        </p>
          <Button onClick={()=>{}}>Download</Button>
      </Section>
      <Section sectionTitle="Child Protection Policy">
        <p>
          Reviewed on 19/08/25
        </p>
          <Button onClick={()=>{}}>Download</Button>
      </Section>
    </div>
  );
}

export default React.memo(Policy);
