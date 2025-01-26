
'use client';
import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ImageResize from 'tiptap-extension-resize-image';
import Underline from '@tiptap/extension-underline'

import BulletList from "@tiptap/extension-bullet-list";

import ListItem from "@tiptap/extension-list-item";

import OrderedList from "@tiptap/extension-ordered-list";

import Heading from "@tiptap/extension-heading";
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'

//import Image from "next/image";
import {
  Bold,
  BookMarked,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  Clipboard,
  Copy,
  CropIcon,
  Eraser,
  Eye,
  FlipHorizontal,
  FlipVertical,
  Frame,
  GripVertical,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  ImageUp,
  IndentDecrease,
  IndentIncrease,
  Italic,
  ItalicIcon,
  LinkIcon as LinkIcon,
  List,
  ListOrdered,
  ListTodo,
  LoaderCircle,
  Maximize,
  Minimize,
  Minus,
  PaintRoller,
  PanelLeft,
  PanelRight,
  Paperclip,
  Pencil,
  Plus,
  Quote,
  Redo2,
  Replace,
  SmilePlus,
  SmilePlusIcon,
  Sparkles,
  Strikethrough,
  Type,
  UnderlineIcon as UnderlineIcon,
  Undo2,
  Unlink,
  Video,
 
} from 'lucide-react'
// import {
//   TextAlignCenterIcon,
//   TextAlignLeftIcon,
//   TextAlignRightIcon,
// } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils';

interface TipTapProps {
    editorContent: string;
    onChange ?: (content: string) => void;
    editable : boolean;
    hideToolBar: boolean;
  }

export const Editor = ({ editorContent, onChange, editable, hideToolBar }: TipTapProps) => {
    const editor = useEditor({
        extensions: [
    
          StarterKit,
          Underline,
          ImageResize,
          ListItem,
          Image,
          Link,
          Heading.configure({
    
            HTMLAttributes: {
    
              class: "text-xl font-bold capitalize",
    
              levels: [1,2],
    
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
    
          onChange && onChange(editor.getHTML());
    
        },
    
    });
  editor?.setEditable(editable);
  const addImage = () => {
      let  url = window.prompt('URL')
      url = url ? url + '/200x200' : '';
      // const imageAttributes: any = {
      //   src: url,
      //   alt: '', 
      //   title: '', 
      //   width: "400", 
      //   height: "100", 
      //   style: `float: 'center' || 'none'}`,
      // }
      if (url) {
        editor?.chain().focus().setImage({src:url}).run();
      }
  }
    
  if (!editor) {
    
        return null;
    
  }
   
  return (

    <div className="flex flex-col  min-h-[200px] items-center justify-center" >
      <div className={cn("flex items-center md:gap-2 my-2 gap-1 mb-2", hideToolBar && 'hidden')}>  
        <button

            type="button"

            onClick={() => editor.chain().focus().toggleBold().run()}

            className={`p-2 rounded ${
            editor.isActive("bold") ? "bg-[#A78BFA]" : ""
            }`}
            title="Bold (Ctrl+B)"
        >
            <Bold />
        </button>

        <button
            type="button"

            onClick={() => editor.chain().focus().toggleItalic().run()}

            className={`p-2 rounded ${
            editor.isActive("italic") ? "bg-[#A78BFA]" : ""
            }`}
            title="Italic (Ctrl+I)"
            >
            <ItalicIcon />
        </button>

        <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({level:1}).run()}
            className={`p-2 rounded ${
            editor.isActive("H1") ? "bg-[#A78BFA]" : ""
            }`}
            title="H1 (Ctrl+H)"
            >
            <Heading1 />
        </button>

        <button
            type="button"

            onClick={() => editor.chain().focus().toggleHeading({level:2}).run()}

            className={`p-2 rounded ${
            editor.isActive("H2") ? "bg-[#A78BFA]" : ""
            }`}
            title="H2 (Ctrl+H)"
            >
            <Heading2 />
        </button>
        <button
            type="button"

            onClick={() => editor.chain().focus().toggleUnderline().run()}

            className={`p-2 rounded ${
            editor.isActive("Underline") ? "bg-[#A78BFA]" : ""
            }`}
            title="Underline (Ctrl+H)"
            >
            <UnderlineIcon />
        </button>
        <button
            type="button"

            onClick={() => editor.chain().focus().toggleBulletList().run()}

            className={`p-2 rounded ${
            editor.isActive("H1") ? "bg-[#A78BFA]" : ""
            }`}
            title="Bullet List (Ctrl+H)"
            >
            <List />
        </button>
        <button
            type="button"

            onClick={() => editor.chain().focus().toggleOrderedList().run()}

            className={`p-2 rounded ${
            editor.isActive("H1") ? "bg-[#A78BFA]" : ""
            }`}
            title="Ordered List (Ctrl+H)"
            >
            <ListOrdered />
        </button>
        <button
            type="button"

            onClick={() => editor.chain().focus().toggleLink({href:"Yola"}).run()}

            className={`p-2 rounded ${
            editor.isActive("H1") ? "bg-[#A78BFA]" : ""
            }`}
            title="Link (Ctrl+H)"
            >
            <LinkIcon />
        </button>
        <button
            type="button"

            onClick={addImage}

            className={`p-2 rounded ${
            editor.isActive("H1") ? "bg-[#A78BFA]" : ""
            }`}
            title="Image (Ctrl+H)"
            >
            <ImageUp />
        </button>
      </div>
        <EditorContent editor={editor} className='md:max-w-full w-full max-w-72'/>
    </div>
    
  )
}
