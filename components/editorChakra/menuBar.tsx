import { IconButton, Box, Group } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";

import { Editor } from "@tiptap/react";
import React from "react";
import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuHighlighter,
} from "react-icons/lu";

import "./style.css";
import { FaBold, FaParagraph } from "react-icons/fa";
import { RiParagraph } from "react-icons/ri";
import {
  MdFormatAlignCenter,
  MdFormatAlignJustify,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatItalic,
  MdOutlineFormatBold,
  MdOutlineStrikethroughS,
} from "react-icons/md";

const MenuBar: React.FC<{ editor: Editor | null }> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <Box mb={4}>
      <Group flexWrap="wrap" gap={1}>
        <Tooltip content="Heading 1">
          <IconButton
            aria-label="H1"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            bg={editor.isActive("heading", { level: 1 }) ? "#851732" : ""}
          >
            <LuHeading1
              color={editor.isActive("heading", { level: 1 }) ? "white" : ""}
            />
          </IconButton>
        </Tooltip>

        <Tooltip content="Heading 2">
          <IconButton
            aria-label="H2"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            bg={editor.isActive("heading", { level: 2 }) ? "#851732" : ""}
          >
            <LuHeading2
              color={editor.isActive("heading", { level: 2 }) ? "white" : ""}
            />
          </IconButton>
        </Tooltip>

        <Tooltip content="Heading 3">
          <IconButton
            aria-label="H3"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            bg={editor.isActive("heading", { level: 3 }) ? "#851732" : ""}
          >
            <LuHeading3
              color={editor.isActive("heading", { level: 3 }) ? "white" : ""}
            />
          </IconButton>
        </Tooltip>

        <Tooltip content="Paragraph">
          <IconButton
            aria-label="P"
            onClick={() => editor.chain().focus().setParagraph().run()}
            bg={editor.isActive("paragraph") ? "#851732" : ""}
          >
            <RiParagraph color={editor.isActive("paragraph") ? "white" : ""} />
          </IconButton>
        </Tooltip>

        <Tooltip content="Bold">
          <IconButton
            aria-label="Bold"
            onClick={() => editor.chain().focus().toggleBold().run()}
            bg={editor.isActive("bold") ? "#851732" : ""}
          >
            <MdOutlineFormatBold
              color={editor.isActive("bold") ? "white" : ""}
            />
          </IconButton>
        </Tooltip>

        <Tooltip content="Italic">
          <IconButton
            aria-label="Italic"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            bg={editor.isActive("italic") ? "#851732" : ""}
          >
            <MdFormatItalic color={editor.isActive("italic") ? "white" : ""} />
          </IconButton>
        </Tooltip>

        <Tooltip content="Strike">
          <IconButton
            aria-label="Strike"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            bg={editor.isActive("strike") ? "#851732" : ""}
          >
            <MdOutlineStrikethroughS
              color={editor.isActive("strike") ? "white" : ""}
            />
          </IconButton>
        </Tooltip>

        <Tooltip content="Highlight">
          <IconButton
            aria-label="Highlight"
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            bg={editor.isActive("highlight") ? "#851732" : ""}
          >
            <LuHighlighter
              color={editor.isActive("highlight") ? "white" : ""}
            />
          </IconButton>
        </Tooltip>
        <Tooltip content="Align Left">
          <IconButton
            aria-label="Align Left"
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            bg={editor.isActive({ textAlign: "left" }) ? "#851732" : ""}
          >
            <MdFormatAlignLeft
              color={editor.isActive({ textAlign: "left" }) ? "white" : ""}
            />
          </IconButton>
        </Tooltip>

        <Tooltip content="Align Center">
          <IconButton
            aria-label="Align Center"
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            bg={editor.isActive({ textAlign: "center" }) ? "#851732" : ""}
          >
            <MdFormatAlignCenter
              color={editor.isActive({ textAlign: "center" }) ? "white" : ""}
            />
          </IconButton>
        </Tooltip>

        <Tooltip content="Align Right">
          <IconButton
            aria-label="Align Right"
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            bg={editor.isActive({ textAlign: "right" }) ? "#851732" : ""}
          >
            <MdFormatAlignRight
              color={editor.isActive({ textAlign: "right" }) ? "white" : ""}
            />
          </IconButton>
        </Tooltip>

        <Tooltip content="Justify">
          <IconButton
            aria-label="Justify"
            onClick={() => editor.chain().focus().setTextAlign("justify").run()}
            bg={editor.isActive({ textAlign: "justify" }) ? "#851732" : ""}
          >
            <MdFormatAlignJustify
              color={editor.isActive({ textAlign: "justify" }) ? "white" : ""}
            />
          </IconButton>
        </Tooltip>
      </Group>
    </Box>
  );
};

export default MenuBar;
