import * as React from "react";

const Button = (data) => {
  const settings = data.settings;
  // console.log("Setting: ", settings);
  return <div>{settings.text}</div>;
};

export default Button;
