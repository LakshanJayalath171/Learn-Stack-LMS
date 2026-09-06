import { Extension, Node } from '@tiptap/core'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import StarterKit from '@tiptap/starter-kit'

const TaskList = Node.create({
  name: 'taskList',
  group: 'block',
  content: 'block+',
  defining: true,
  parseHTML() {
    return [{ tag: 'ul[data-type="taskList"]' }]
  },
  renderHTML({ HTMLAttributes }) {
    return ['ul', { ...HTMLAttributes, 'data-type': 'taskList' }, 0]
  },
  addCommands() {
    return {
      toggleTaskList:
        () => ({ commands }: { commands: { toggleWrap: (name: string) => boolean } }) =>
          commands.toggleWrap(this.name),
    }
  },
})

const Placeholder = Extension.create<{ placeholder: string }>({
  name: 'placeholder',
  addOptions() {
    return { placeholder: 'Write something...' }
  },
  addGlobalAttributes() {
    return [{
      types: ['paragraph', 'heading'],
      attributes: {
        'data-placeholder': {
          default: this.options.placeholder,
        },
      },
    }]
  },
})

export const createEditorExtensions = (placeholder: string) => [
  StarterKit.configure({
    link: false,
    underline: false,
  }),
  Underline,
  Link.configure({
    openOnClick: false,
    autolink: true,
    HTMLAttributes: { rel: 'noopener noreferrer nofollow', target: '_blank' },
  }),
  Image.configure({
    allowBase64: false,
    HTMLAttributes: { class: 'editor-image' },
  }),
  TextAlign.configure({ types: ['heading', 'paragraph'] }),
  TaskList,
  Placeholder.configure({ placeholder }),
]
