import React from "react";

const NumberListElement = props => (
  <ol {...props.attributes}>
    <li>{props.children}</li>
  </ol>
);

export default NumberListElement;
