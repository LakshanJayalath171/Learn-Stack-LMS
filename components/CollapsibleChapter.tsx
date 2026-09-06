"use client"

import { GripVertical, ListChevronsDownUp, Pencil, PlusCircle, Trash2 } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

type CollapsibleChapterProps = {
  title: string
  chapterNumber: number
  onAddChapter: () => void
}

const CollapsibleChapter = ({
  title,
  chapterNumber,
  onAddChapter,
}: CollapsibleChapterProps) => {
  return (
    <Collapsible className="flex w-full flex-col gap-2 rounded-xl border border-white/10 p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <GripVertical className="text-special" size={20} />
          <div className="bg-primary-soft text-special px-4 py-1 rounded-2xl text-xs">
            Chapter {String(chapterNumber).padStart(2, "0")}
          </div>
          <h1 className="text-lg font-semibold text-primary">{title}</h1>
        </div>

        <div className="flex items-center gap-2">
          <button type="button" onClick={onAddChapter} aria-label="Add chapter">
            <PlusCircle className="text-special cursor-pointer" size={15} />
          </button>
          <button>
            <Pencil className="text-secondary cursor-pointer" size={15} />
          </button>
          <button>
            <Trash2 className="text-secondary cursor-pointer" size={15} />
          </button>
          <CollapsibleTrigger
            render={
              <div className="flex items-center justify-center gap-3">
                <button>
                  <ListChevronsDownUp
                    className="text-special cursor-pointer"
                    size={15}
                  />
                </button>
              </div>
            }
          />
        </div>
      </div>

      <div className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
        <span className="text-muted-foreground">Status</span>
        <span className="font-medium">Draft</span>
      </div>

      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">Lessons</p>
          <p className="text-muted-foreground">Add lessons to this chapter</p>
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">Resources</p>
          <p className="text-muted-foreground">Add notes and resources</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default CollapsibleChapter