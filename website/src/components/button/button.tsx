import React from "react";
import classes from "./button.module.scss";
import { ButtonStyle } from "../../types/button.type";

interface ButtonProps {
  children: React.ReactNode;
  style?: ButtonStyle;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({
  children,
  style = ButtonStyle.Primary,
  className,
  onClick = () => {},
}: ButtonProps) {
  const buttonClasses = [classes.Button, classes[`Button--${style}`], className]
    .filter(Boolean)
    .join(" ");
  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}

export default React.memo(Button);
