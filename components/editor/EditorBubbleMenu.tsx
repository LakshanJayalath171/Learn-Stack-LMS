'use client'

import { useEffect, useState } from 'react'
import type { Editor } from '@tiptap/core'
import { Bold, Italic, Underline } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function EditorBubbleMenu({ editor }: { editor: Editor | null }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!editor) return
    const update = () => setVisible(!editor.state.selection.empty && editor.isFocused)
    editor.on('selectionUpdate', update)
    editor.on('focus', update)
    editor.on('blur', update)
    return () => {
      editor.off('selectionUpdate', update)
      editor.off('focus', update)
      editor.off('blur', update)
    }
  }, [editor])

  if (!editor || !visible) return null
  return (
    <div className="editor-bubble-menu" role="toolbar" aria-label="Selection formatting">
      <Button type="button" variant={editor.isActive('bold') ? 'secondary' : 'ghost'} size="icon-sm" title="Bold" aria-label="Bold" onClick={() => editor.chain().focus().toggleBold().run()}><Bold /></Button>
      <Button type="button" variant={editor.isActive('italic') ? 'secondary' : 'ghost'} size="icon-sm" title="Italic" aria-label="Italic" onClick={() => editor.chain().focus().toggleItalic().run()}><Italic /></Button>
      <Button type="button" variant={editor.isActive('underline') ? 'secondary' : 'ghost'} size="icon-sm" title="Underline" aria-label="Underline" onClick={() => editor.chain().focus().toggleUnderline().run()}><Underline /></Button>
    </div>
  )
}
