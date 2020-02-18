import { Editor, Transforms, Text } from "slate";

const CustomEditor = {
  isMarkActive(editor, mark) {
    const [match] = Editor.nodes(editor, {
      match: n => n[mark] === true,
      universal: true
    });

    return !!match;
  },
  isBlockAtive(editor, type) {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === type
    });

    return !!match;
  },
  toggleMark(editor, mark) {
    const isActive = CustomEditor.isMarkActive(editor, mark);
    Transforms.setNodes(
      editor,
      { [mark]: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    );
  },
  toggleBlock(editor, block) {
    const isActive = CustomEditor.isBlockAtive(editor, block);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : block },
      { match: n => Editor.isBlock(editor, n) }
    );
  }
};

export default CustomEditor;
