import React from "react";
import Button from "../../components/button/button";
import IntroSection from "../../components/introSection/introSection";
import Section from "../../components/section/section";
import { useNavigate } from "react-router";
import classes from "./about.module.scss";

function About() {
  const navigate = useNavigate();

  return (
    <div className={classes.Container}>
      <IntroSection introSectionTitle="Want to play a quick game?" introSectionSubtitle="Hey!" showGraphic={false}>
        <p>Come to our next club night, every Monday* at 7:30pm until 10pm.</p>
        <p>* excluding Bank Holidays</p>
          <Button onClick={()=>{navigate("/contact")}}>Contact Us</Button>
      </IntroSection>
      <Section sectionTitle="Club Nights">
        <p>
          We have a regular club night on Mondays that we invite all members and
          prospective members to attend
        </p>
        <p>Club nights start at 7:30pm and typically run until 10pm.</p>
        <p>
          Acivities range from in-house tournaments, ranked club ladders and
          casual matches.
        </p>
      </Section>
      <Section sectionTitle="In-House Teaching">
        <p>
          St. Neots Chess Club have regular teaching sessions, where one of our
          veteran members leads the club through matches to better understand a
          litany of statgies and tatics.
        </p>
      </Section>
      <Section sectionTitle="Tourna-mentality">
        <p>
          During our off-season (usually May through September, we host a club
          ladder tournament).
        </p>
        <p>
          These are timed events, where the more you score, the less time you
          get.
        </p>
        <p>
          Starting score is based on your current rating, so beginners and
          veterans are evenly matched from the beginning.
        </p>
        <p>
          This tournament is really anyones game, and it's a great way to play club members you haven't had a chance to.
        </p>
      </Section>
    </div>
  );
}

export default React.memo(About);
