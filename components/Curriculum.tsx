"use client"

import { FormEvent, useState } from 'react'
// importing tiptap editor
import Tiptap from './Tiptap'
// importing icons from lucide-react
import { Network, Plus, GripVertical, CirclePlus, Pencil, Trash2, ChevronDown, FolderOpen,Video ,FileText,NotebookPen, MonitorUp,CircleCheck} from 'lucide-react'

// importing types
import { Chapter } from '@/types/curriculum'

// importing shadcn components
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from './ui/button'


const CurriculumCard = () => {

  const [lessonInput,setLessonInput] = useState('video');

  return (
    <div className="w-full h-full">
        <div>
          <p className="text-special font-light text-xs">Add Content</p>
          <h1 className="text-lg font-semibold text-primary">Lesson in Chapter 01</h1>
        </div>
        <div className="flex items-center justify-between gap-2 mt-3">
          <div onClick={() => setLessonInput('video')} className="flex items-center justify-center px-4 py-2">
            <div className={`cursor-pointer flex items-center justify-center gap-2 ${lessonInput === 'video' ? 'text-special' : 'text-secondary'}`}><Video/>Video Content</div>
          </div>
          
          <div onClick={() => setLessonInput('notes')} className="flex items-center justify-center px-4 py-2">
            <div className={`cursor-pointer flex items-center justify-center gap-2 ${lessonInput === 'notes' ? 'text-special' : 'text-secondary'}`}><NotebookPen/>Lecturer Notes</div>
          </div>
          <div onClick={() => setLessonInput('pdf')} className="flex items-center justify-center px-4 py-2">
            <div className={`cursor-pointer flex items-center justify-center gap-2 ${lessonInput === 'pdf' ? 'text-special' : 'text-secondary'}`}><FileText/>PDF Resources</div>
          </div>
        </div>
        <div>

          {/* video content div*/}
          {lessonInput === 'video' && 
          <div className=" w-full h-full px-3 py-3">
            <div>
              <h1 className="text-lg font-semibold text-primary">Lesson Video</h1>
            </div>

            <div className="w-full h-40 mt-3 rounded-2xl border-2 border-dashed border-[#2ED8CF]/80 flex items-center justify-center cursor-pointer">
              <div className="">
                <div className="flex items-center justify-center">
                  <div className=" bg-primary-soft rounded-full p-3">
                    <MonitorUp className=" text-special" size={48} />
                  </div>
                  
                </div>
                <div className="text-center">
                  <p className="text-secondary text-sm mt-2 font-bold">Drag and drop your video here or click to browse</p>
                  <p className="text-secondary text-xs mt-1 font-light">Supported formats: MP4, AVI, MOV</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3">
              <p className="text-secondary text-sm font-semibold flex items-center gap-2"><CircleCheck className="text-special" size={16}/>custom_hooks_masterclass.mp4</p>
              <p className="text-secondary text-sm font-semibold">100% Uploaded</p>
            </div>

            <div className="mt-2">
              <input type="checkbox" />
              <label className="text-secondary text-sm font-semibold ml-2">Mark as free preview</label>
            </div>
          </div>}

          {/* notes content div */}
          {lessonInput === 'notes' && 
          <div className="mt-3">
             <div>
              <h2 className="text-lg font-semibold text-primary">Lecturer Notes</h2>
             </div>

             <div>
               <Tiptap/>
             </div>
          </div>}

          {/* pdf content div */}
          {lessonInput === 'pdf' && 
          <div className="mt-3">
            <div className="w-full h-40 mt-3 rounded-2xl border-2 border-dashed border-[#2ED8CF]/80 flex items-center justify-center cursor-pointer">
              <div className="">
                <div className="flex items-center justify-center">
                  <div className=" bg-primary-soft rounded-full p-3">
                    <FileText className=" text-special" size={48} />
                  </div>
                  
                </div>
                <div className="text-center">
                  <p className="text-secondary text-sm mt-2 font-bold">Drag and drop your PDF here or click to browse</p>
                  <p className="text-secondary text-xs mt-1 font-light">Supported formats: PDF</p>
                </div>
              </div>
            </div>
          </div>}
        </div>
    </div>
  )
}


const Curriculum = () => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [chapterTitle, setChapterTitle] = useState('');
  const [chapterDescription, setChapterDescription] = useState('');

  const resetChapterForm = () => {
    setChapterTitle('');
    setChapterDescription('');
  };

  const handleCreateChapter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const title = chapterTitle.trim();
    if (!title) {
      return;
    }

    setChapters((currentChapters) => [
      ...currentChapters,
      {
        id: crypto.randomUUID(),
        title,
        description: chapterDescription.trim() || undefined,
        order: currentChapters.length + 1,
        lessons: [],
      },
    ]);
    resetChapterForm();
    setIsDialogOpen(false);
  };

  const handleDeleteChapter = (chapterId: string) => {
    setChapters((currentChapters) =>
      currentChapters
        .filter((chapter) => chapter.id !== chapterId)
        .map((chapter, index) => ({ ...chapter, order: index + 1 }))
    );
  };

  return (
    <div className="bg-black/50 px-6 py-3 rounded-2xl">
      <div>
        <h1 className="text-2xl font-bold text-primary">Curriculum</h1>
        <p className="text-secondary">
          Build your course structure by organizing chapters, lessons, videos,
          notes and resources.
        </p>
      </div>

      <div className="flex items-center justify-between gap-4 mt-3 w-full h-full px-4 py-3 apple rounded-2xl">
        <div className="flex gap-2">
          <Network className="text-special" size={20} />
          <h1 className="text-lg font-semibold text-primary">
            Curriculum Structure
          </h1>
        </div>
        <div className="flex gap-2">
          <div>
            <Dialog
              open={isDialogOpen}
              onOpenChange={(open) => {
                setIsDialogOpen(open);
                if (!open) {
                  resetChapterForm();
                }
              }}
            >
              <DialogTrigger
                render={
                  <Button
                    variant="outline"
                    className="btn-primary cursor-pointer px-4 py-5"
                  >
                    <Plus />
                    Create new chapter
                  </Button>
                }
              />
              <DialogContent className="sm:max-w-sm bg-black/90">
                <form onSubmit={handleCreateChapter}>
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <FolderOpen className="text-special" />
                      Create New Chapter
                    </DialogTitle>
                  </DialogHeader>
                  <FieldGroup>
                    <Field>
                      <Label htmlFor="chapter-title">Chapter Title</Label>
                      <Input
                        id="chapter-title"
                        name="chapter-title"
                        value={chapterTitle}
                        onChange={(event) =>
                          setChapterTitle(event.target.value)
                        }
                        placeholder="e.g. Introduction to React"
                        required
                      />
                    </Field>
                    <Field>
                      <Label htmlFor="chapter-description">
                        Chapter Description (Optional)
                      </Label>
                      <Input
                        id="chapter-description"
                        name="chapter-description"
                        value={chapterDescription}
                        onChange={(event) =>
                          setChapterDescription(event.target.value)
                        }
                        placeholder="What will students learn?"
                      />
                    </Field>
                  </FieldGroup>
                  <DialogFooter>
                    <DialogClose
                      render={
                        <Button type="button" variant="outline">
                          Cancel
                        </Button>
                      }
                    />
                    <Button type="submit">Create chapter</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <div>
        {chapters.length === 0 ? (
          <div className="apple rounded-2xl px-4 py-8 mt-3 text-center text-secondary">
            No chapters yet. Create your first chapter to start building the
            curriculum.
          </div>
        ) : (
          chapters.map((chapter) => (
            <div key={chapter.id} className="apple rounded-2xl px-4 py-3 mt-3">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center justify-start gap-2">
                  <GripVertical className="text-special" size={20} />
                  <div className="bg-primary-soft rounded-2xl px-3 py-1 text-xs">
                    Chapter {String(chapter.order).padStart(2, "0")}
                  </div>
                  <div>
                    <p className="text-primary font-semibold text-lg">
                      {chapter.title}
                    </p>
                    {chapter.description && (
                      <p className="text-secondary text-sm">
                        {chapter.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3">
                  <div>
                    <Dialog>
                      <form>
                        <DialogTrigger
                          render={
                            <Button variant="outline"><CirclePlus className="text-special" /></Button>
                          }
                        />
                        <DialogContent className="w-[calc(100%-2rem)] max-h-[90vh] overflow-y-auto bg-black/80 sm:max-w-2xl lg:max-w-3xl">
                          <CurriculumCard />
                          <DialogFooter>
                            <DialogClose
                              render={<Button variant="outline" className="btn-secondary">Cancel</Button>}
                            />
                            <Button type="submit">Add To Curriculum</Button>
                          </DialogFooter>
                        </DialogContent>
                      </form>
                    </Dialog>
                  </div>
                  <Pencil
                    className="text-secondary cursor-pointer hover:text-special"
                    size={20}
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteChapter(chapter.id)}
                    aria-label={`Delete ${chapter.title}`}
                  >
                    <Trash2
                      className="text-red-500 cursor-pointer hover:text-special"
                      size={20}
                    />
                  </button>
                  <div className="p-2 rounded-lg apple cursor-pointer hover:bg-primary-soft">
                    <ChevronDown className="text-special" size={20} />
                  </div>
                </div>
              </div>

              <div className="px-4 rounded-2xl border border-[#2ED8CF] mt-3 py-4 ml-6 text-secondary text-sm">
                No lessons in this chapter yet.
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Curriculum