export type Video = {
  id: string;
  title: string;
  url: string;
  duration?: number;
};

export type Pdf = {
  id: string;
  title: string;
  url: string;
  size?: number;
};

export type LecturerNote = {
  content: string;
};

export type Lesson = {
  id: string;
  title: string;
  order: number;
  lecturerNote?: LecturerNote;
  videos: Video[];
  pdfs: Pdf[];
};

export type Chapter = {
  id: string;
  title: string;
  order: number;
  lessons: Lesson[];
};