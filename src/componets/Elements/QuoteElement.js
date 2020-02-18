import React from "react";

const CodeElement = props => (
  <blockquote
    {...props.attributes}
    style={{
      borderLeft: "2px solid #ddd",
      marginLeft: 0,
      marginRight: 0,
      paddingLeft: "10px",
      color: "#aaa",
      fontStyle: "italic"
    }}
  >
    {props.children}
  </blockquote>
);

export default CodeElement;
