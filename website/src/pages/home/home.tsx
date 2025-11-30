import React from "react";
import Title from "../../components/title/title";
import { TitleLevel } from "../../types/title.type";
import Button from "../../components/button/button";
import classes from "./home.module.scss";
import Section from "../../components/section/section";
import IntroSection from "../../components/introSection/introSection";
import { useNavigate } from "react-router";
import { ButtonStyle } from "../../types/button.type";

function Home() {
  const navigate = useNavigate();
  return (
    <div className={classes.Container}>
      <IntroSection
        introSectionTitle="Your Friendly, Local Chess Club"
        introSectionSubtitle="Welcome to"
      >
        <p>
          Join the well established chess community in Cambridgeshire's largest
          market town.
        </p>
        <div className={classes.ButtonContainer}>
          <Button
            onClick={() => {
              navigate("/contact");
            }}
          >
            Join Our Club
          </Button>
          <Button
            style={ButtonStyle.Secondary}
            onClick={() => {
              navigate("/about");
            }}
          >
            Learn More
          </Button>
        </div>
      </IntroSection>
      <Section sectionTitle="Your Chess Community">
        <p>
          Established in 2015, we've cultivated a friendly and welcoming chess
          community
        </p>
        <p>
          St Neots Chess Club strives to promote an environment where every
          member has the opportunity to prosper
        </p>
        <p>
          That's why we're proud to welcome any skill level to the club,
          beginner, veteran and everything inbetween!
        </p>
        <p>
          Get in touch and join the chess community over 10 years in the making
        </p>
        <div className={classes.SectionButtonContainer}>
          <Button
            onClick={() => {
              navigate("/contact");
            }}
          >
            Get In Touch
          </Button>
          <Button
            onClick={() => {
              navigate("/about");
            }}
            style={ButtonStyle.Secondary}
          >
            Learn More
          </Button>
        </div>
      </Section>
      <Section sectionTitle="Where To Find Us">
        <p>
          The Club meets at St. Neots Conservative Club every Monday at 7:30pm
          (excluding bank holidays)
        </p>
        <p>
          Typically, entry to the St. Neots Conservative Club requires a
          membership. However, there is no obligation to join the Conservative
          Club, and you are welcome to visit and play chess as a guest of the
          St. Neots Chess Club.
        </p>
        <div className={classes.AddressContainer}>
          <div>
            <Title level={TitleLevel.H3} colour={"var(--primary)"}>
              Address
            </Title>
            <p>St Neots Conservative Club</p>
            <p>12 New St.</p>
            <p> St. Neots</p>
            <p>PE19 1AE</p>
          </div>
          <div className={classes.MapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.842583619853!2d-0.2737644071062222!3d52.228665785534126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877c5cbcf952a09%3A0x21b07d7e2fd9b1ea!2sSt%20Neots%20Conservative%20Club!5e1!3m2!1sen!2suk!4v1764166478858!5m2!1sen!2suk"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <p>
          On arrival, step into the foyer and ring the buzzer. A staff member of
          the Conservative Club will buzz you in.
        </p>
        <p>
          The Chess Club is hosted in the side room of the Conservative Club.
        </p>
      </Section>
      <Section sectionTitle="Competitive Spirit">
        <p>
          The St. Neots Chess Club enters a number of tournaments around the
          Cambridgeshire county.
        </p>
        <p>
          We do our best to accommodate all our players at every skill level in
          our teams.
        </p>
        <p>
          So, if you're interested in joining one of the teams, let us know!
        </p>
        <div className={classes.SectionButtonContainer}>
          <Button
            onClick={() => {
              navigate("/contact");
            }}
          >
            Get Competitive
          </Button>
          <Button
            onClick={() => {
              navigate("/competitions");
            }}
            style={ButtonStyle.Secondary}
          >
            Learn More
          </Button>
        </div>
      </Section>
      <Section sectionTitle="Safety As A Priority">
        <p>
          The St. Neots Chess Club is committed to ensuring the safety and
          wellbeing of all our members.
        </p>
        <p>
          We ensure that we follow the English Chess Federation's Child
          Protection Policy.
        </p>
        <p>
          We also have two appointed safeguarding offers, who are fully DBS
          checked and available to discuss any concerns at the Club.
        </p>
        <div className={classes.SectionButtonContainer}>
          <Button
            onClick={() => {
              navigate("/policies");
            }}
          >
            Get Policy Information
          </Button>
        </div>
      </Section>
    </div>
  );
}

export default React.memo(Home);
