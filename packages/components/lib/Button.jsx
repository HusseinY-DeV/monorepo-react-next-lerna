import React from "react";
import lodash from "lodash";

const Button = ({ onClick, children }) => {
  console.dir(lodash);
  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <button onClick={() => onClick?.()}>{children}</button>;
    </React.Fragment>
  );
};

export default Button;
