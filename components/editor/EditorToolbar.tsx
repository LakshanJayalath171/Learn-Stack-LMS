'use client'

import { useState } from 'react'
import type { Editor } from '@tiptap/core'
import {
  AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold, CheckSquare, Code2,
  Heading1, Heading2, Heading3, Heading4, ImagePlus, Italic, Link2, List,
  ListOrdered, Minus, Quote, Redo2, RemoveFormatting, Strikethrough, Undo2,
  Underline,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

type EditorToolbarProps = { editor: Editor | null; editable: boolean }

const toolbarButton = 'h-8 w-8 p-0'

export default function EditorToolbar({ editor, editable }: EditorToolbarProps) {
  const [linkOpen, setLinkOpen] = useState(false)
  const [linkUrl, setLinkUrl] = useState('')

  if (!editor) return null

  const run = (action: () => boolean) => {
    editor.chain().focus()
    action()
  }

  const openLink = () => {
    setLinkUrl(editor.getAttributes('link').href ?? '')
    setLinkOpen((current) => !current)
  }

  const applyLink = () => {
    const url = linkUrl.trim()
    if (!url || !/^https?:\/\//i.test(url)) return
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
    setLinkOpen(false)
  }

  const addImage = () => {
    const url = window.prompt('Image URL')?.trim()
    if (url && /^https?:\/\//i.test(url)) editor.chain().focus().setImage({ src: url }).run()
  }

  const button = (label: string, icon: React.ReactNode, active: boolean, disabled: boolean, onClick: () => void) => (
    <Button type="button" variant={active ? 'secondary' : 'ghost'} size="icon" className={toolbarButton} title={label} aria-label={label} aria-pressed={active} disabled={disabled} onClick={onClick}>
      {icon}
    </Button>
  )

  return (
    <div className="editor-toolbar" role="toolbar" aria-label="Text formatting">
      {button('Bold', <Bold />, editor.isActive('bold'), !editable, () => run(() => editor.chain().focus().toggleBold().run()))}
      {button('Italic', <Italic />, editor.isActive('italic'), !editable, () => run(() => editor.chain().focus().toggleItalic().run()))}
      {button('Underline', <Underline />, editor.isActive('underline'), !editable, () => run(() => editor.chain().focus().toggleUnderline().run()))}
      {button('Strike', <Strikethrough />, editor.isActive('strike'), !editable, () => run(() => editor.chain().focus().toggleStrike().run()))}
      {button('Code', <Code2 />, editor.isActive('code'), !editable, () => run(() => editor.chain().focus().toggleCode().run()))}
      <Separator orientation="vertical" className="mx-1 h-5" />
      {button('Heading 1', <Heading1 />, editor.isActive('heading', { level: 1 }), !editable, () => run(() => editor.chain().focus().toggleHeading({ level: 1 }).run()))}
      {button('Heading 2', <Heading2 />, editor.isActive('heading', { level: 2 }), !editable, () => run(() => editor.chain().focus().toggleHeading({ level: 2 }).run()))}
      {button('Heading 3', <Heading3 />, editor.isActive('heading', { level: 3 }), !editable, () => run(() => editor.chain().focus().toggleHeading({ level: 3 }).run()))}
      {button('Heading 4', <Heading4 />, editor.isActive('heading', { level: 4 }), !editable, () => run(() => editor.chain().focus().toggleHeading({ level: 4 }).run()))}
      <Separator orientation="vertical" className="mx-1 h-5" />
      {button('Bullet list', <List />, editor.isActive('bulletList'), !editable, () => run(() => editor.chain().focus().toggleBulletList().run()))}
      {button('Ordered list', <ListOrdered />, editor.isActive('orderedList'), !editable, () => run(() => editor.chain().focus().toggleOrderedList().run()))}
      {button('Task list', <CheckSquare />, editor.isActive('taskList'), !editable, () => run(() => (editor.chain() as any).toggleTaskList().run()))}
      {button('Blockquote', <Quote />, editor.isActive('blockquote'), !editable, () => run(() => editor.chain().focus().toggleBlockquote().run()))}
      {button('Code block', <Code2 />, editor.isActive('codeBlock'), !editable, () => run(() => editor.chain().focus().toggleCodeBlock().run()))}
      {button('Horizontal rule', <Minus />, false, !editable, () => run(() => editor.chain().focus().setHorizontalRule().run()))}
      <span className="relative">
        {button(editor.isActive('link') ? 'Edit link' : 'Add link', <Link2 />, editor.isActive('link'), !editable, openLink)}
        {linkOpen && (
          <span className="editor-link-popover" role="dialog" aria-label="Link URL">
            <input autoFocus value={linkUrl} onChange={(event) => setLinkUrl(event.target.value)} placeholder="https://example.com" aria-label="URL" />
            <div className="flex gap-2">
              <Button type="button" size="sm" variant="outline" onClick={() => { editor.chain().focus().unsetLink().run(); setLinkOpen(false) }}>Remove</Button>
              <Button type="button" size="sm" onClick={applyLink}>Apply</Button>
            </div>
          </span>
        )}
      </span>
      {button('Insert image URL', <ImagePlus />, false, !editable, addImage)}
      <span className="ml-auto flex items-center gap-1">
        {button('Align left', <AlignLeft />, editor.isActive({ textAlign: 'left' }), !editable, () => run(() => editor.chain().focus().setTextAlign('left').run()))}
        {button('Align center', <AlignCenter />, editor.isActive({ textAlign: 'center' }), !editable, () => run(() => editor.chain().focus().setTextAlign('center').run()))}
        {button('Align right', <AlignRight />, editor.isActive({ textAlign: 'right' }), !editable, () => run(() => editor.chain().focus().setTextAlign('right').run()))}
        {button('Justify', <AlignJustify />, editor.isActive({ textAlign: 'justify' }), !editable, () => run(() => editor.chain().focus().setTextAlign('justify').run()))}
        <Separator orientation="vertical" className="mx-1 h-5" />
        {button('Undo', <Undo2 />, false, !editable || !editor.can().undo(), () => run(() => editor.chain().focus().undo().run()))}
        {button('Redo', <Redo2 />, false, !editable || !editor.can().redo(), () => run(() => editor.chain().focus().redo().run()))}
        {button('Clear formatting', <RemoveFormatting />, false, !editable, () => run(() => editor.chain().focus().clearNodes().unsetAllMarks().run()))}
      </span>
    </div>
  )
}
