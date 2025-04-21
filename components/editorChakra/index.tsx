"use client";

import { Box, Text } from "@chakra-ui/react";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import React from "react";

import "./style.css";
import MenuBar from "./menuBar";

interface EditorChakraProps {
  value: string;
  onChange: (value: string) => void;
}

const EditorChakra = ({ value, onChange }: EditorChakraProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    content: value,
    onUpdate({ editor }) {
      onChange(editor.getHTML()); // dispara toda vez que algo muda
    },
    immediatelyRender: false,
  });

  return (
    <>
      <Text color="gray.800" fontWeight="semibold" fontSize={16}>
        Descrição do passeio
      </Text>
      <Box
        className="dark"
        bg="gray.100"
        color="black"
        rounded="lg"
        shadow="sm"
      >
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </Box>
    </>
  );
};

export default EditorChakra;
