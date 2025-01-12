
import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import BulletList from "@tiptap/extension-bullet-list";

import ListItem from "@tiptap/extension-list-item";

import OrderedList from "@tiptap/extension-ordered-list";

import Heading from "@tiptap/extension-heading";

import Image from "next/image";

interface TipTapProps {
    editorContent: string;
    onChange: (content: string) => void;
  }

export const Editor = ({ editorContent, onChange }: TipTapProps) => {
    const editor = useEditor({

        extensions: [
    
          StarterKit,
    
          ListItem,
    
          Heading.configure({
    
            HTMLAttributes: {
    
              class: "text-xl font-bold capitalize",
    
              levels: [2],
    
            },
    
          }),
    
          BulletList.configure({
    
            HTMLAttributes: {
    
              class: "list-disc ml-2",
    
            },
    
          }),
    
          OrderedList.configure({
    
            HTMLAttributes: {
    
              class: "list-decimal ml-2",
    
            },
    
          }),
    
        ],
    
        immediatelyRender: false,
    
        editorProps: {
    
          attributes: {
    
            class:
    
              "shadow appearance-none min-h-[150px] border rounded w-full py-2 px-3 bg-white text-black text-sm mt-0 md:mt-3 leading-tight focus:outline-none focus:shadow-outline",
    
          },
    
        },
    
        content: editorContent,
    
        onUpdate: ({ editor }) => {
    
          onChange(editor.getHTML());
    
        },
    
      });
    
      if (!editor) {
    
        return null;
    
      }
    
  return (

    <div className="flex flex-col justify-stretch min-h-[200px] border rounded border-b-0" >
        <div className="flex items-center gap-2 mb-2">
        <button

            type="button"

            onClick={() => editor.chain().focus().toggleBold().run()}

            className={`p-2 rounded ${
            editor.isActive("bold") ? "bg-gray-200" : ""
            }`}
            title="Bold (Ctrl+B)"
        >
            <b>B</b>
        </button>

        <button
            type="button"

            onClick={() => editor.chain().focus().toggleItalic().run()}

            className={`p-2 rounded ${
            editor.isActive("italic") ? "bg-gray-200" : ""
            }`}
            title="Italic (Ctrl+I)"
            >
            <b>I</b>
        </button>

        <button
            type="button"

            onClick={() => editor.chain().focus().toggleHeading({level:1}).run()}

            className={`p-2 rounded ${
            editor.isActive("H1") ? "bg-gray-200" : ""
            }`}
            title="H1 (Ctrl+H)"
            >
            <b>H1</b>
        </button>

        <button
            type="button"

            onClick={() => editor.chain().focus().toggleItalic().run()}

            className={`p-2 rounded ${
            editor.isActive("H1") ? "bg-gray-200" : ""
            }`}
            title="H1 (Ctrl+H)"
            >
            <b>H1</b>
        </button>
            

        </div>
        <EditorContent editor={editor} suppressHydrationWarning/>
    </div>
    
  )
}
