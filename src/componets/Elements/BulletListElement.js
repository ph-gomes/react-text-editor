import React from "react";

const BulletListElement = props => (
  <ul {...props.attributes}>
    <li>{props.children}</li>
  </ul>
);

export default BulletListElement;
