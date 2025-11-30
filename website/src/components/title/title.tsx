import React from "react";
import classes from "./title.module.scss";
import { TitleLevel, TitleSize } from "../../types/title.type";

interface TitleProps {
  children: React.ReactNode;
  level?: TitleLevel;
  size?: TitleSize;
  colour?: string;
  className?: string;
}

function Title({
  children,
  level = TitleLevel.H2,
  size = TitleSize.Medium,
  colour,
  className,
}: TitleProps) {
  const Component = level;
  
  const titleClasses = [
    classes.Title,
    classes[`Title--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={titleClasses} style={{color: colour}}>
      {children}
    </Component>
  );
}

export default React.memo(Title);