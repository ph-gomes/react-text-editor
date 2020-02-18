import React, { useMemo, useState, useCallback } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

import initialComponet from "./initialComponet";

import { handleBlock, handleMark, LeafHandle } from "./Handles";
import {
  CodeElement,
  DefaultElement,
  BulletListElement,
  NumberListElement,
  QuoteElement,
  HeaderElement,
  SubHeaderElement
} from "./Elements";

import { Toolbar } from "./Toolbar";

export default function TextEditor() {
  const editor = useMemo(() => withReact(createEditor()), []);

  const [value, setValue] = useState(initialComponet);

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      case "blist":
        return <BulletListElement {...props} />;
      case "nlist":
        return <NumberListElement {...props} />;
      case "blockquote":
        return <QuoteElement {...props} />;
      case "h1":
        return <HeaderElement {...props} />;
      case "h2":
        return <SubHeaderElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback(props => <LeafHandle {...props} />, []);

  const onKeyDown = event => {
    if (!event.ctrlKey) return;
    switch (event.key) {
      case "'": {
        handleBlock(event, editor, "code");
        break;
      }
      case "l": {
        handleBlock(event, editor, "list");
        break;
      }
      case "u": {
        handleMark(event, editor, "underline");
        break;
      }
      case "b": {
        handleMark(event, editor, "bold");
        break;
      }
      case "i": {
        handleMark(event, editor, "italic");
        break;
      }
      default:
        break;
    }
  };

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={value => {
        setValue(value);
        const content = JSON.stringify(value);

        localStorage.setItem("content", content);
      }}
    >
      <Toolbar editor={editor} />
      <Editable
        className="editable"
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={onKeyDown}
      />
    </Slate>
  );
}
