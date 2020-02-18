import React from "react";
import CustomEditor from "../CustomEditor";

const handleMark = (e, editor, mark) => {
  e.preventDefault();
  CustomEditor.toggleMark(editor, mark);
};
const handleBlock = (e, editor, block) => {
  e.preventDefault();
  CustomEditor.toggleBlock(editor, block);
};

const LeafHandle = props => {
  const style = {
    fontWeight: props.leaf.bold ? "bold" : "inherit",
    fontStyle: props.leaf.italic ? "italic" : "inherit",
    textDecoration: props.leaf.underline ? "underline" : "inherit"
  };
  return (
    <span {...props.attributes} style={style}>
      {props.children}
    </span>
  );
};

export { handleBlock, handleMark, LeafHandle };
