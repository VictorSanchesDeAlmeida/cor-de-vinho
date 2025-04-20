import { Box } from "@chakra-ui/react";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import React from "react";

import "./style.css";
import MenuBar from "./menuBar";

const EditorChakra = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    content: ``,
  });

  return (
    <Box className="dark" bg="gray.100" color="black" rounded="lg" shadow="sm">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </Box>
  );
};

export default EditorChakra;
