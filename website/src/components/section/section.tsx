import React from "react";
import classes from "./section.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../title/title";
import { TitleLevel, TitleSize } from "../../types/title.type";

interface SectionProps {
  children: React.ReactNode;
  sectionTitle?: string;
  className?: string;
}

function Section({ children, sectionTitle, className }: SectionProps) {
  const sectionClasses = [classes.Section, className].filter(Boolean).join(" ");

  return (
    <section className={sectionClasses}>
      <div className={classes.SectionTitleContainer}>
        <div className={classes.Icon}>
          <FontAwesomeIcon icon={"chess-king"} />
        </div>
        <Title
          level={TitleLevel.H2}
          size={TitleSize.Large}
          colour={"var(--primary)"}
        >
          {sectionTitle}
        </Title>
      </div>
      {children}
    </section>
  );
}

export default React.memo(Section);
