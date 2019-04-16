import React from "react";

//Styles
import "./Buttons.css";

export const Button = ({ variant, children, ...props }) => (
  <button className={`cbutton ${variant}`}>{children}</button>
);
