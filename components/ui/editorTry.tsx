'use client';

/* eslint-disable unicorn/no-null */
/* eslint-disable quotes */
import React, { useCallback, useState } from 'react';

import RcTiptapEditor, {
  BaseKit,
  Blockquote,
  Bold,
  BulletList,
  Clear,
  Code,
  CodeBlock,
  Color,
  ColumnActionButton,
  Emoji,
  ExportPdf,
  ExportWord,
  FontFamily,
  FontSize,
  FormatPainter,
  Heading,
  Highlight,
  History,
  HorizontalRule,
  Iframe,
  Image,
  ImportWord,
  Indent,
  Italic,
  Katex,
  LineHeight,
  Link,
  MoreMark,
  OrderedList,
  SearchAndReplace,
  SlashCommand,
  Strike,
  Table,
  TaskList,
  TextAlign,
  Underline,
  Video,
  locale,
  TableOfContents,
  Excalidraw,
  TextDirection,
  Mention,
  Attachment,
  ImageGif,
  Mermaid,
  Twitter
} from 'reactjs-tiptap-editor';

import 'katex/dist/katex.min.css';

import 'reactjs-tiptap-editor/style.css';


function convertBase64ToBlob(base64: string) {
  const arr = base64.split(',')
  const mime = arr[0].match(/:(.*?);/)![1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}


const extensions = [
  BaseKit.configure({
    multiColumn: true,
    placeholder: {
      showOnlyCurrent: true,
    },
    characterCount: {
      limit: 50_000,

    },
  }),

  FontFamily,
  Heading.configure({ spacer: true }),
  FontSize,
  Bold,
  Italic,
  Underline,
  Color.configure({ spacer: true }),
  Highlight,
  BulletList,
  OrderedList,
  TextAlign.configure({ types: ['heading', 'paragraph'], spacer: true }),
  Indent,
  LineHeight,
  Link,
  Image.configure({
    upload: (files: File) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(URL.createObjectURL(files))
        }, 500)
      })
    },
  }),
  // Video.configure({
  //   upload: (files: File) => {
  //     return new Promise((resolve) => {
  //       setTimeout(() => {
  //         resolve(URL.createObjectURL(files))
  //       }, 500)
  //     })
  //   },
  // }),

];

//const DEFAULT = `<h1 style="text-align: center">Rich Text Editor</h1><p>A modern WYSIWYG rich text editor based on <a target="_blank" rel="noopener noreferrer nofollow" class="link" href="https://github.com/scrumpy/tiptap">tiptap</a> and <a target="_blank" rel="noopener noreferrer nofollow" class="link" href="https://ui.shadcn.com/">shadcn ui</a> for Reactjs</p><p></p><p style="text-align: center"></p><div style="text-align: center;" class="image"><img height="auto" src="https://picsum.photos/1920/1080.webp?t=1" align="center" width="500"></div><p></p><div data-type="horizontalRule"><hr></div><h2>Demo</h2><p>👉<a target="_blank" rel="noopener noreferrer nofollow" class="link" href="https://reactjs-tiptap-editor.vercel.app/">Demo</a></p><h2>Features</h2><ul><li><p>Use <a target="_blank" rel="noopener noreferrer nofollow" class="link" href="https://ui.shadcn.com/">shadcn ui</a> components</p></li><li><p>Markdown support</p></li><li><p>TypeScript support</p></li><li><p>I18n support (vi, en, zh, pt)</p></li><li><p>React support</p></li><li><p>Slash Commands</p></li><li><p>Multi Column</p></li><li><p>TailwindCss</p></li><li><p>Support emoji</p></li><li><p>Support iframe</p></li><li><p>Support mermaid</p></li></ul><h2>Installation</h2><pre><code class="language-bash">pnpm add reactjs-tiptap-editor</code></pre><p></p>`;
const DEFAULT = '';
function debounce(func: any, wait: number) {
  let timeout: NodeJS.Timeout;
  return function (...args: any[]) {
    clearTimeout(timeout);
    // @ts-ignore
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
interface TipTapProps {
    editorContent: string;
    onChange ?: (content: string) => void;
    editable : boolean;
    hideToolbar : boolean;
  }
function EditorTry({ editorContent, onChange, editable , hideToolbar}: TipTapProps) {
  //const [content, setContent] = useState(DEFAULT);
  const refEditor = React.useRef<any>(null);

  const [theme, setTheme] = useState('dark');
  const [disable, setDisable] = useState(!editable);

  const onValueChange = useCallback(
    debounce((value: any) => {
        if (onChange) {
          onChange(value);
        }
    }, 300),
    [],
  );

  return (
    <main
      className='h-96 overflow-y-auto border border-gray-500 rounded-md'
    >
      <div
        style={{
          maxWidth: 1024,
          margin: '0px auto 0px',
         
        }}>
      
        <RcTiptapEditor
          ref={refEditor}
          output='html'
          content={editorContent}
          onChangeContent={onValueChange}
          extensions={extensions }
          dark={theme === 'dark'}
          disabled={disable}
          hideToolbar={hideToolbar}
          hideBubble={true}
          removeDefaultWrapper={true}
          contentClass={"-ml-16"}
          maxHeight={500}
          
        />

        {/* {typeof content === 'string' && (
          <textarea
            className="textarea"
            readOnly
            style={{
              marginTop: 20,
              height: 500,
              width: '100%',
              borderRadius: 4,
              padding: 10,
            }}
            value={content}
          />
        )} */}
      </div>
    </main>
  );
}

export default EditorTry;