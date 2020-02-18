import React from "react";

import Icon from "react-icons-kit";
import { ic_format_bold } from "react-icons-kit/md/ic_format_bold";
import { ic_format_italic } from "react-icons-kit/md/ic_format_italic";
import { ic_format_list_bulleted } from "react-icons-kit/md/ic_format_list_bulleted";
import { ic_format_list_numbered } from "react-icons-kit/md/ic_format_list_numbered";
import { ic_format_underlined } from "react-icons-kit/md/ic_format_underlined";
import { ic_code } from "react-icons-kit/md/ic_code";
import { ic_format_quote } from "react-icons-kit/md/ic_format_quote";
import { ic_looks_one } from "react-icons-kit/md/ic_looks_one";
import { ic_looks_two } from "react-icons-kit/md/ic_looks_two";

import { handleBlock, handleMark } from "../Handles";

const Toolbar = ({ editor }) => (
  <div className="format-toolbar">
    <button
      className="tooltip-icon-button"
      onPointerDown={event => handleMark(event, editor, "bold")}
    >
      <Icon size={25} icon={ic_format_bold} />
    </button>
    <button
      className="tooltip-icon-button"
      onPointerDown={event => handleMark(event, editor, "italic")}
    >
      <Icon size={25} icon={ic_format_italic} />
    </button>
    <button
      className="tooltip-icon-button"
      onPointerDown={event => handleMark(event, editor, "underline")}
    >
      <Icon size={25} icon={ic_format_underlined} />
    </button>
    <button
      className="tooltip-icon-button"
      onPointerDown={event => handleBlock(event, editor, "blockquote")}
    >
      <Icon size={25} icon={ic_format_quote} />
    </button>
    <button
      className="tooltip-icon-button"
      onPointerDown={event => handleBlock(event, editor, "code")}
    >
      <Icon size={25} icon={ic_code} />
    </button>
    <button
      className="tooltip-icon-button"
      onPointerDown={event => handleBlock(event, editor, "blist")}
    >
      <Icon size={25} icon={ic_format_list_bulleted} />
    </button>
    <button
      className="tooltip-icon-button"
      onPointerDown={event => handleBlock(event, editor, "nlist")}
    >
      <Icon size={25} icon={ic_format_list_numbered} />
    </button>
    <button
      className="tooltip-icon-button"
      onPointerDown={event => handleBlock(event, editor, "h1")}
    >
      <Icon size={25} icon={ic_looks_one} />
    </button>
    <button
      className="tooltip-icon-button"
      onPointerDown={event => handleBlock(event, editor, "h2")}
    >
      <Icon size={25} icon={ic_looks_two} />
    </button>
  </div>
);

export default Toolbar;
