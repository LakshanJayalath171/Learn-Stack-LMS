'use client'

import { useEffect } from 'react'
import type { JSONContent } from '@tiptap/core'
import { EditorContent, useEditor } from '@tiptap/react'
import { cn } from '@/lib/utils'
import EditorBubbleMenu from './EditorBubbleMenu'
import EditorToolbar from './EditorToolbar'
import { createEditorExtensions } from './editor-extensions'
import './editor.css'

export interface RichTextEditorProps {
  value?: string | JSONContent
  onChange?: (content: string) => void
  onJSONChange?: (content: JSONContent) => void
  placeholder?: string
  editable?: boolean
  className?: string
}

export default function RichTextEditor({ value = '', onChange, onJSONChange, placeholder = 'Write your lesson notes...', editable = true, className }: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: createEditorExtensions(placeholder),
    content: value,
    editable,
    onUpdate: ({ editor: currentEditor }) => {
      onChange?.(currentEditor.getHTML())
      onJSONChange?.(currentEditor.getJSON())
    },
  })

  useEffect(() => {
    if (!editor || value === undefined) return
    const nextContent = typeof value === 'string' ? value : value
    if (JSON.stringify(editor.getJSON()) !== JSON.stringify(typeof nextContent === 'string' ? undefined : nextContent) && (typeof nextContent === 'string' ? editor.getHTML() !== nextContent : true)) {
      editor.commands.setContent(nextContent, { emitUpdate: false })
    }
  }, [editor, value])

  useEffect(() => {
    editor?.setEditable(editable)
  }, [editor, editable])

  const characterCount = editor?.storage.characterCount?.characters?.() ?? editor?.getText().replace(/\s/g, '').length ?? 0
  const wordCount = editor?.getText().trim() ? editor.getText().trim().split(/\s+/).length : 0

  return (
    <div className={cn('rich-text-editor', !editable && 'rich-text-editor-readonly', className)}>
      <EditorToolbar editor={editor} editable={editable} />
      <div className="editor-content-shell">
        <EditorContent editor={editor} />
        <EditorBubbleMenu editor={editor} />
      </div>
      <div className="editor-statusbar"><span>{characterCount} characters</span><span>{wordCount} words</span></div>
    </div>
  )
}
