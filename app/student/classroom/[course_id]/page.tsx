"use client";

import React from "react";

import Secondary_navbar from "@/components/Secondary_navbar";
import { CirclePlay, CircleCheck } from "lucide-react";
import {
  FolderKanban,
  NotebookPen,
  FolderBookmark,
  Megaphone,
  MessageSquareMore,
  Unlink,
  Download,
} from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// progress bar

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

// importing collapsible component from shadcn/ui
import { CourseExplorer, type CourseSection } from "@/components/CourseExplorer";
import { Card, CardContent } from "@/components/ui/card";

const Page = () => {
  const [activeTab, setActiveTab] = React.useState("resources");
  const [activeLessonId, setActiveLessonId] = React.useState("react-components");

  const courseSections: CourseSection[] = [
    {
      id: "html-css",
      number: 1,
      title: "HTML & CSS Fundamentals",
      completedLessons: 5,
      totalLessons: 5,
      lessons: [
        { id: "html-intro", title: "Introduction to HTML", type: "video", duration: "15:30", completed: true },
        { id: "css-basics", title: "CSS Fundamentals", type: "reading", completed: true },
      ],
    },
    {
      id: "javascript",
      number: 2,
      title: "JavaScript Basics",
      completedLessons: 8,
      totalLessons: 8,
      lessons: [
        { id: "js-syntax", title: "JavaScript Syntax", type: "video", duration: "22:10", completed: true },
        { id: "js-exercise", title: "Syntax Practice", type: "coding", completed: true },
      ],
    },
    {
      id: "advanced-javascript",
      number: 3,
      title: "Advanced JavaScript (ES6+)",
      completedLessons: 12,
      totalLessons: 12,
      lessons: [
        { id: "es6", title: "Modern JavaScript with ES6", type: "video", duration: "34:20", completed: true },
        { id: "async-js", title: "Async JavaScript", type: "reading", completed: true },
      ],
    },
    {
      id: "react-core",
      number: 4,
      title: "React.js Core Concepts",
      completedLessons: 2,
      totalLessons: 10,
      lessons: [
        { id: "react-intro", title: "Introduction to React", type: "video", duration: "15:30", completed: true },
        { id: "react-setup", title: "Setting up the Environment", type: "reading", completed: true },
        { id: "react-components", title: "React Components and Props", type: "video", duration: "58:30" },
        { id: "react-state", title: "State and Lifecycle", type: "video", duration: "45:12", locked: true },
        { id: "react-events", title: "Handling Events", type: "coding", locked: true },
      ],
    },
    {
      id: "hooks-context",
      number: 5,
      title: "Hooks and Context API",
      completedLessons: 0,
      totalLessons: 8,
      locked: true,
      lessons: [],
    },
  ];

  return (
    <div>
      <div>
        <Secondary_navbar />
      </div>

      <div className="px-6 py-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/123/my-learning">
                My Learning
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="px-6 py-2">
        <div className="flex gap-2">
          <div className="flex-3 ">
            {/* course title section */}
            <div className="flex items-center justify-between gap-2">
              <h1>Full-Stack Web Development Bootcamp</h1>
              <div>
                <Progress value={56} className="w-full max-w-sm">
                  <ProgressLabel>Course progress</ProgressLabel>
                  <ProgressValue />
                </Progress>
              </div>
            </div>

            {/* iframe for the course content */}

            <div className="mt-4">
              <div className="apple text-2xl w-full h-96 rounded-2xl flex items-center justify-center">
                <div className="flex items-center justify-center gap-2 bg-primary-soft p-3 rounded-full ">
                  <CirclePlay className="w-12 h-12 text-special cursor-pointer" />
                </div>
              </div>
            </div>

            {/* lesson details */}

            <div className="my-2 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-special">
                  Section 04 • Lesson 03
                </p>
                <h1 className="text-2xl font-bold">
                  React Components and Props
                </h1>
              </div>

              <div>
                <button className="btn-primary flex items-center gap-2 cursor-pointer">
                  <CircleCheck />
                  Mark as completed
                </button>
              </div>
            </div>

            {/* lesson notes/resorces */}

            <div>
              <div className="flex items-center justify-start gap-10">
                <p
                  className={`${activeTab === "notes" ? "text-special" : "text-secondary"} font-bold cursor-pointer flex items-center gap-2`}
                  onClick={() => setActiveTab("notes")}
                >
                  <NotebookPen />
                  Lesson Notes
                </p>
                <p
                  className={`${activeTab === "resources" ? "text-special" : "text-secondary"} font-bold cursor-pointer flex items-center gap-2`}
                  onClick={() => setActiveTab("resources")}
                >
                  <FolderKanban />
                  Resources
                </p>
                <p
                  className={`${activeTab === "discussion" ? "text-special" : "text-secondary"} font-bold cursor-pointer flex items-center gap-2`}
                  onClick={() => setActiveTab("discussion")}
                >
                  <MessageSquareMore />
                  Discussion
                </p>
                <p
                  className={`${activeTab === "announcements" ? "text-special" : "text-secondary"} font-bold cursor-pointer flex items-center gap-2`}
                  onClick={() => setActiveTab("announcements")}
                >
                  <Megaphone />
                  Announcements
                </p>
              </div>

              <div>
                <div
                  className={`${activeTab === "notes" ? "block" : "hidden"} px-2 py-4`}
                >
                  <h2 className="text-xl font-bold text-primary my-3">
                    React hooks
                  </h2>
                  <p className="text-secondary font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus, libero minus perferendis minima molestias tenetur
                    iure, eos debitis facere doloribus est iste veritatis sequi
                    nostrum. Ducimus, cumque non. Veniam, aperiam. Commodi
                    recusandae a iure quod! Vitae atque laudantium,
                    reprehenderit distinctio accusamus tenetur obcaecati quod
                    laboriosam quia recusandae necessitatibus. Molestiae magni
                    hic facere eligendi repellat ea facilis provident at
                    corrupti fugiat! Error, cum quam. Nam repudiandae obcaecati
                    voluptatum error accusantium aliquam, maxime laboriosam quae
                    maiores, qui vitae reiciendis, quibusdam odit omnis tempora
                    necessitatibus ipsa? Nostrum beatae quae corrupti
                    reprehenderit quos maxime? Mollitia non enim pariatur! Ad
                    blanditiis, similique optio consequuntur quasi vero
                    dignissimos! Quae iure libero architecto soluta dolore quos.
                    Quaerat voluptatum nam, numquam maxime excepturi expedita
                    necessitatibus commodi voluptatibus porro! Ipsam eum ex
                    ipsum, saepe distinctio culpa ab at alias vero dolore.
                    Recusandae fuga, iure, ut corporis libero eius officiis
                    itaque ea dolor quod aspernatur labore earum fugiat soluta
                    voluptatem. Perspiciatis, qui eius ratione unde soluta
                    error! Fugit cupiditate pariatur optio incidunt aliquam illo
                    earum minima, odio ea! Nemo ipsam autem nobis et ea est nam
                    quaerat soluta rem tempora. Officia dignissimos vel quam
                    error quasi itaque expedita, autem numquam laboriosam dolor
                    harum facilis ipsum consequatur magni, enim possimus
                    accusantium? Alias saepe eaque natus aperiam. Sed tempore
                    nobis dolore voluptatibus. Fuga fugiat reprehenderit, at
                    labore enim facilis. Ea, maxime quam! Voluptatum autem
                    tempore assumenda maiores facere ipsam nihil numquam modi
                    doloribus aut ratione at beatae exercitationem excepturi ut,
                    labore eligendi. Veniam natus necessitatibus doloremque
                    dolores, soluta vero rerum ratione earum cumque officia
                    cupiditate ex. Alias, omnis repellat! Perferendis a in magni
                    nostrum nulla excepturi. Asperiores minima illum dolore
                    distinctio esse. Culpa praesentium sequi, enim omnis tempore
                    ipsa consequuntur natus reprehenderit quidem eius dolores
                    perferendis amet dignissimos voluptatum modi asperiores
                    repudiandae reiciendis expedita laudantium! Voluptates,
                    perspiciatis exercitationem! Quaerat similique nostrum
                    laborum. Non eaque dolor ea saepe praesentium facere ut ab.
                    Esse aut accusantium quia nesciunt veritatis, labore
                    praesentium ducimus magni cumque impedit deserunt maiores
                    repellat qui beatae, nisi harum modi sint. Aperiam labore
                    laborum, at culpa beatae porro, quibusdam commodi aliquid,
                    atque ea inventore delectus reiciendis itaque expedita
                    provident! Sunt minus exercitationem numquam distinctio
                    voluptatem iure labore quas ducimus dolores eos! Deleniti
                    eum reiciendis laboriosam dolorum odit aut tempore nulla,
                    in, molestias enim at cupiditate minima labore possimus
                    nobis inventore doloribus culpa? Minima ipsa illo ut, rem
                    rerum natus nemo. Exercitationem! Mollitia suscipit sunt
                    corrupti unde ducimus quos id dolor blanditiis possimus
                    itaque maxime tempora quaerat aut quae rem, assumenda velit!
                    Optio dolorem, doloremque nobis aspernatur ipsa assumenda
                    corrupti eum deleniti! Possimus explicabo ipsum vel numquam.
                    Quas saepe natus maiores autem repellat consequatur dolorum
                    unde facilis debitis. Vero optio, fuga voluptate at
                    obcaecati, reiciendis delectus, eaque quia distinctio dicta
                    eum magni.
                  </p>
                </div>
                <div
                  className={`${activeTab === "resources" ? "block" : "hidden"}`}
                >
                  {/* reusable card */}
                  <div className="apple rounded-2xl flex items-center justify-between px-3 py-4 my-1">
                    <div className="flex items-center justify-start gap-3">
                      {/* icon */}
                      <div className="flex items-center justify-center">
                        <div className="p-2 text-primary bg-red-500/50 rounded-lg">
                          <FolderBookmark />
                        </div>
                      </div>

                      {/*  details*/}
                      <div>
                        <h1 className="text-primary font-bold text-lg">
                          React-Components-and-Props-CheatSheet.pdf
                        </h1>
                        <div className="flex items-center justify-start px-4 ">
                          <div className="flex items-center justify-start gap-2 ">
                            <Unlink className="text-primary" size={15} />
                            <p className="text-primary text-xs">2.4 MB</p>
                          </div>
                          <div className="flex items-center justify-start gap-2 px-4 ">
                            <Download
                              className="text-primary text-xs"
                              size={15}
                            />
                            <p className="text-primary text-xs">
                              1,420 downloads
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* download button */}
                    <div>
                      <button className="btn-primary flex gap-2 cursor-pointer">
                        <Download />
                        Download PDF
                      </button>
                    </div>
                  </div>

                  <div className="apple rounded-2xl flex items-center justify-between px-3 py-4">
                    <div className="flex items-center justify-start gap-3">
                      {/* icon */}
                      <div className="flex items-center justify-center">
                        <div className="p-2 text-primary bg-amber-500/50 rounded-lg">
                          <FolderKanban />
                        </div>
                      </div>

                      {/*  details*/}
                      <div>
                        <h1 className="text-primary font-bold text-lg my-1">
                          starter-code-props-sandbox.zip
                        </h1>
                        <div className="flex items-center justify-start px-4 ">
                          <div className="flex items-center justify-start gap-2 ">
                            <Unlink className="text-primary" size={15} />
                            <p className="text-primary text-xs">14.8 MB</p>
                          </div>
                          <div className="flex items-center justify-start gap-2 px-4 ">
                            <Download
                              className="text-primary text-xs"
                              size={15}
                            />
                            <p className="text-primary text-xs">
                              1,420 downloads
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* download button */}
                    <div>
                      <button className="btn-primary flex gap-2 cursor-pointer">
                        <Download />
                        Download ZIP
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className={`${activeTab === "discussion" ? "block" : "hidden"}`}
                >
                  discussion (not intergrated yet)
                </div>
                <div
                  className={`${activeTab === "announcements" ? "block" : "hidden"}`}
                >
                  announcements (not intergrated yet)
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 ">
            {/* course content section */}
           
            <div>
              <Card className="mx-auto w-full max-w-[20rem] gap-2 border-0 bg-transparent p-0 shadow-none" size="sm">
                <CardContent className="p-0">
                  <CourseExplorer
                    sections={courseSections}
                    completedLessons={42}
                    totalLessons={65}
                    activeLessonId={activeLessonId}
                    defaultOpenSectionId="react-core"
                    onLessonSelect={(lesson) => setActiveLessonId(lesson.id)}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
