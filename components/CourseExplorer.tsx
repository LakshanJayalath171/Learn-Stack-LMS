"use client"

import { useState } from "react"
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Circle,
  Clock3,
  Code2,
  Lock,
  PlayCircle,
} from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"

export type Lesson = {
  id: string
  title: string
  type: "video" | "reading" | "coding"
  duration?: string
  completed?: boolean
  locked?: boolean
}

export type CourseSection = {
  id: string
  number: number
  title: string
  completedLessons: number
  totalLessons: number
  locked?: boolean
  lessons: Lesson[]
}

type CourseExplorerProps = {
  sections: CourseSection[]
  completedLessons: number
  totalLessons: number
  activeLessonId: string
  openSectionId?: string
  defaultOpenSectionId?: string
  onLessonSelect?: (lesson: Lesson, section: CourseSection) => void
  onOpenSectionChange?: (sectionId: string | undefined) => void
}

const lessonTypeLabels = {
  video: "Video",
  reading: "Reading",
  coding: "Coding Exercise",
} as const

function LessonTypeIcon({ type }: Pick<Lesson, "type">) {
  if (type === "reading") return <BookOpen aria-hidden="true" />
  if (type === "coding") return <Code2 aria-hidden="true" />
  return <Clock3 aria-hidden="true" />
}

function LessonItem({
  lesson,
  isActive,
  onSelect,
}: {
  lesson: Lesson
  isActive: boolean
  onSelect: () => void
}) {
  const isLocked = lesson.locked

  return (
    <li className="relative pl-7">
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-0.75 top-4 z-10 flex size-3 items-center justify-center rounded-full border",
          lesson.completed && "border-[#2ED8CF] bg-[#2ED8CF]",
          isActive && "size-4 -translate-x-px border-brand-light bg-[#2ED8CF] shadow-[0_0_0_3px_rgba(46,216,207,0.12)]",
          !lesson.completed && !isActive && "border-[#5F6B6C] bg-[#10191A]",
          isLocked && "border-[#465253] bg-[#10191A]"
        )}
      >
        {lesson.completed && !isActive && (
          <CheckCircle2 className="size-3 text-dark-background" />
        )}
      </span>

      <button
        type="button"
        disabled={isLocked}
        onClick={onSelect}
        aria-current={isActive ? "step" : undefined}
        className={cn(
          "group flex w-full min-w-0 items-start gap-2 rounded-md px-2 py-2 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2ED8CF]",
          isActive && "bg-[rgba(46,216,207,0.1)]",
          isLocked
            ? "cursor-not-allowed opacity-45"
            : "hover:bg-[rgba(46,216,207,0.06)]"
        )}
      >
        <span className="mt-0.5 shrink-0 text-[#2ED8CF]">
          {isLocked ? (
            <Lock className="size-3.5" aria-hidden="true" />
          ) : isActive ? (
            <PlayCircle className="size-3.5" aria-hidden="true" />
          ) : lesson.completed ? (
            <CheckCircle2 className="size-3.5" aria-hidden="true" />
          ) : (
            <Circle className="size-3.5 text-[#6D7B7B]" aria-hidden="true" />
          )}
        </span>
        <span className="min-w-0 flex-1">
          <span
            className={cn(
              "block truncate text-[12px] font-medium leading-4",
              isActive ? "text-brand-light" : "text-[#F5FFFF]",
              isLocked && "text-[#BACAC7]"
            )}
          >
            {lesson.title}
          </span>
          <span className="mt-1 flex items-center gap-1 text-[10px] leading-3 text-[#7E8D8D]">
            <LessonTypeIcon type={lesson.type} />
            {lesson.duration || lessonTypeLabels[lesson.type]}
          </span>
        </span>
      </button>
    </li>
  )
}

function CourseSectionRow({
  section,
  isOpen,
  activeLessonId,
  onLessonSelect,
  onOpenChange,
}: {
  section: CourseSection
  isOpen: boolean
  activeLessonId: string
  onLessonSelect?: CourseExplorerProps["onLessonSelect"]
  onOpenChange: (open: boolean) => void
}) {
  if (section.locked) {
    return (
      <div className="flex items-center justify-between gap-3 px-2 py-3 opacity-55">
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.16em] text-[#7E8D8D]">
            Section {String(section.number).padStart(2, "0")}
          </p>
          <p className="mt-1 truncate text-[13px] font-semibold text-[#BACAC7]">
            {section.title}
          </p>
        </div>
        <Lock className="size-3.5 shrink-0 text-[#7E8D8D]" aria-label="Locked section" />
      </div>
    )
  }

  return (
    <Collapsible open={isOpen} onOpenChange={onOpenChange}>
      <CollapsibleTrigger
        render={
          <button
            type="button"
            className={cn(
              "group flex w-full items-center justify-between gap-3 rounded-md px-2 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2ED8CF]",
              isOpen
                ? "bg-[rgba(46,216,207,0.07)]"
                : "hover:bg-[rgba(46,216,207,0.04)]"
            )}
          />
        }
      >
        <span className="min-w-0">
          <span className="block text-[10px] uppercase tracking-[0.16em] text-[#7E8D8D]">
            Section {String(section.number).padStart(2, "0")}
          </span>
          <span
            className={cn(
              "mt-1 block truncate text-[13px] font-semibold",
              isOpen ? "text-[#F5FFFF]" : "text-[#D3E0DE]"
            )}
          >
            {section.title}
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-2">
          <span className="text-[10px] text-[#8EA4A2]">
            {section.completedLessons}/{section.totalLessons}
          </span>
          <ChevronDown
            aria-hidden="true"
            className={cn(
              "size-4 text-[#7E8D8D] transition-transform duration-200",
              isOpen && "rotate-180 text-[#2ED8CF]"
            )}
          />
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden text-sm data-ending-style:animate-accordion-up data-starting-style:animate-accordion-down">
        <ol className="relative ml-2 border-l border-[#294344] py-1">
          {section.lessons.map((lesson) => (
            <LessonItem
              key={lesson.id}
              lesson={lesson}
              isActive={lesson.id === activeLessonId}
              onSelect={() => onLessonSelect?.(lesson, section)}
            />
          ))}
        </ol>
      </CollapsibleContent>
    </Collapsible>
  )
}

export function CourseExplorer({
  sections,
  completedLessons,
  totalLessons,
  activeLessonId,
  openSectionId: controlledOpenSectionId,
  defaultOpenSectionId,
  onLessonSelect,
  onOpenSectionChange,
}: CourseExplorerProps) {
  const [internalOpenSectionId, setInternalOpenSectionId] = useState<string | undefined>(
    defaultOpenSectionId
  )
  const openSectionId = controlledOpenSectionId ?? internalOpenSectionId
  const progress = Math.round((completedLessons / totalLessons) * 100)

  const handleOpenChange = (sectionId: string, open: boolean) => {
    const nextId = open ? sectionId : undefined
    if (controlledOpenSectionId === undefined) setInternalOpenSectionId(nextId)
    onOpenSectionChange?.(nextId)
  }

  return (
    <aside className="flex h-full min-h-130 w-full max-w-[320px] flex-col overflow-hidden border border-[rgba(103,231,224,0.18)] bg-[#0B1112] text-[#F5FFFF] sm:min-w-70">
      <header className="shrink-0 border-b border-[rgba(186,202,199,0.1)] px-4 pb-4 pt-4">
        <h2 className="text-[17px] font-semibold tracking-[-0.01em]">Course Content</h2>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="rounded-full bg-[rgba(46,216,207,0.14)] px-2 py-1 text-[10px] font-medium text-brand-light">
            In Progress
          </span>
          <span className="text-[10px] text-[#9BAEAC]">
            {completedLessons} / {totalLessons} Lessons
          </span>
        </div>
        <div className="mt-4 h-1 overflow-hidden rounded-full bg-[#1C292A]" aria-label={`${progress}% complete`}>
          <div className="h-full rounded-full bg-[#2ED8CF] transition-[width] duration-500" style={{ width: `${progress}%` }} />
        </div>
      </header>

      <div className="scrollbar-thin min-h-0 flex-1 overflow-y-auto px-2 py-2 [scrollbar-color:#294344_transparent]">
        {sections.map((section) => (
          <CourseSectionRow
            key={section.id}
            section={section}
            isOpen={section.id === openSectionId}
            activeLessonId={activeLessonId}
            onLessonSelect={onLessonSelect}
            onOpenChange={(open) => handleOpenChange(section.id, open)}
          />
        ))}
      </div>
    </aside>
  )
}