import React from "react";

const CodeElement = props => (
  <code style={{ backgroundColor: "#eee" }} {...props.attributes}>
    {props.children}
  </code>
);

export default CodeElement;
