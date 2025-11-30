import React from "react";
import classes from "./introSection.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../title/title";
import { TitleLevel, TitleSize } from "../../types/title.type";

interface IntroSectionProps {
  children: React.ReactNode;
  introSectionTitle?: string;
  introSectionSubtitle?: string;
  showGraphic?: boolean;
  className?: string;
}

function IntroSection({
  children,
  introSectionTitle,
  introSectionSubtitle,
  showGraphic = true,
  className,
}: IntroSectionProps) {
  const introSectionClasses = [classes.Introduction, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={introSectionClasses}>
      <div className={classes.IntroText}>
        <Title
          level={TitleLevel.H2}
          size={TitleSize.Medium}
          colour={"var(--secondaryText)"}
        >
          {introSectionSubtitle}
        </Title>
        <Title
          level={TitleLevel.H2}
          size={TitleSize.XXLarge}
          colour={"var(--primary)"}
        >
          {introSectionTitle}
        </Title>
        {children}
      </div>
      <div className={classes.GraphicFlexContainer}>
        {showGraphic && (
          <div className={classes.GraphicBorderContainer}>
            <div className={classes.SquareBackground}></div>
            <div className={classes.SquareIcon}>
              <FontAwesomeIcon icon={"chess-king"} />
            </div>
            <div className={classes.SquareIcon}>
              <FontAwesomeIcon icon={"chess-queen"} />
            </div>
            <div className={classes.SquareBackground}></div>
          </div>
        )}
      </div>
    </section>
  );
}

export default React.memo(IntroSection);
