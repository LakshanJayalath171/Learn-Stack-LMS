import { LayoutTemplate , GraduationCap , BadgeCheck, Bookmark, Trophy , Cog, FilePlay,CopyPlus,ChartNoAxesCombined} from 'lucide-react';

const profileImages=[
    "/images/profiles.jpeg",
    "/images/profiles2.jpeg",
    "/images/profiles3.jpg",
    "/images/profiles4.jpeg",
]
//navigation links for teachers
const teachers_nav_link = [
  {
    id: 1,
    title: "Dashboard",
    link: "/",
    icon: LayoutTemplate,
  },
  {
    id: 2,
    title: "My Courses",
    link: "/my-courses",
    icon: FilePlay,
  },
  {
    id: 3,
    title: "Create Course",
    link: "/add-course",
    icon: CopyPlus,
  },
  {
    id: 4,
    title: "Analytics",
    link: "/analytics",
    icon: ChartNoAxesCombined,
  },
  {
    id: 5,
    title: "Settings",
    link: "/settings",
    icon: Cog,
  }
]

// navigation links for students
const students_nav_link = [
  {
    id: 1,
    title: "Dashboard",
    link: "/",
    icon: LayoutTemplate,
  },
  {
    id: 2,
    title: "My Courses",
    link: "/my-learning",
    icon: GraduationCap,
  },
  {
    id: 3,
    title: "My Certificates",
    link: "/certification",
    icon: BadgeCheck,
  },
  {
    id: 4,
    title: "Wishlist",
    link: "/wishlist",
    icon: Bookmark,
  },
  {
    id: 5,
    title: "Achievements",
    link: "/archivements",
    icon: Trophy,
  },
  {
    id: 6,
    title: "Settings",
    link: "/settings",
    icon: Cog,
  }
]

// sample courses
const sample_courses = [
  {
    id: "course_001",
    title: "React Native Full Course",
    shortDescription:
      "Build cross-platform mobile applications using React Native and TypeScript.",
    description:
      "Learn React Native from scratch and build real-world Android and iOS applications. Covers navigation, state management, APIs, authentication, notifications, and deployment.",
    thumbnail: "/images/course01.png",
    category: "Mobile Development",
    subCategory: "React Native",
    level: "Beginner",
    language: "English",
    price: 59.99,
    discountPrice: 39.99,
    duration: "24h 30m",
    lessons: 85,
    students: 3245,
    rating: 4.8,
    instructor: {
      name: "John Smith",
      avatar: "/images/profiles.jpeg",
    },
    learningObjectives: [
      "Build Android and iOS apps",
      "Master React Native fundamentals",
      "Work with APIs",
      "Implement Authentication",
      "Publish mobile applications",
    ],
    status: "Pending",
  },

  {
    id: "course_002",
    title: "Flutter Full Course",
    shortDescription:
      "Master Flutter and Dart to build beautiful cross-platform applications.",
    description:
      "Learn Flutter from beginner to advanced level. Build modern mobile apps using Flutter, Firebase, state management, animations, and deployment techniques.",
    thumbnail: "/images/course02.png",
    category: "Mobile Development",
    subCategory: "Flutter",
    level: "Beginner",
    language: "English",
    price: 54.99,
    discountPrice: 34.99,
    duration: "28h 15m",
    lessons: 92,
    students: 2876,
    rating: 4.9,
    instructor: {
      name: "Sarah Johnson",
      avatar: "/images/profiles2.jpeg",
    },
    learningObjectives: [
      "Learn Dart programming",
      "Build Flutter applications",
      "Integrate Firebase",
      "Manage application state",
      "Deploy mobile apps",
    ],
    status: "Draft",
  },

  {
    id: "course_003",
    title: "Python for Beginners",
    shortDescription:
      "Learn Python programming from scratch with practical projects.",
    description:
      "Perfect for complete beginners. Learn Python syntax, variables, functions, OOP, file handling, APIs, and build real-world projects to strengthen your skills.",
    thumbnail: "/images/course03.png",
    category: "Programming",
    subCategory: "Python",
    level: "Beginner",
    language: "English",
    price: 39.99,
    discountPrice: 24.99,
    duration: "18h 45m",
    lessons: 67,
    students: 5124,
    rating: 4.7,
    instructor: {
      name: "Michael Brown",
      avatar: "/images/profiles3.jpg",
    },
    learningObjectives: [
      "Understand Python fundamentals",
      "Work with functions and modules",
      "Learn Object-Oriented Programming",
      "Handle files and databases",
      "Build practical Python projects",
    ],
    status: "Published",
  },

  {
    id: "course_004",
    title: "Data Structures and Algorithms",
    shortDescription:
      "Master DSA concepts to crack coding interviews and improve problem-solving skills.",
    description:
      "Learn arrays, linked lists, stacks, queues, trees, graphs, recursion, sorting, searching, dynamic programming, and interview-focused coding patterns.",
    thumbnail: "/images/course04.png",
    category: "Computer Science",
    subCategory: "Algorithms",
    level: "Intermediate",
    language: "English",
    price: 69.99,
    discountPrice: 44.99,
    duration: "32h 20m",
    lessons: 110,
    students: 4189,
    rating: 4.9,
    instructor: {
      name: "David Wilson",
      avatar: "/images/profiles4.jpg",
    },
    learningObjectives: [
      "Understand core data structures",
      "Analyze algorithm complexity",
      "Solve coding interview questions",
      "Master recursion and dynamic programming",
      "Improve problem-solving skills",
    ],
    status: "Published",
  },
];

// offers section 
const offers = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
]


const student_Settings_sidebar = [
  { id: 1, name: "Profile" },
  { id: 2, name: "Account" },
  { id: 3, name: "Device Management"  },
  { id: 4, name: "Privacy"  },
  { id: 5, name: "Notifications" },
]

// course categories

export const course_categories = [
  {
    id: "it",
    name: "IT & Technology",
    subCategories: [
      "Web Development",
      "Mobile App Development",
      "Software Development",
      "Game Development",
      "Cybersecurity",
      "Networking",
      "Cloud Computing",
      "DevOps",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Database Management",
      "Software Testing",
      "UI/UX Design",
      "IT Support",
      "Programming Languages",
    ],
  },

  {
    id: "music",
    name: "Music",
    subCategories: [
      "Eastern Music",
      "Western Music",
      "Classical Music",
      "Singing",
      "Guitar",
      "Piano & Keyboard",
      "Drums & Percussion",
      "Violin",
      "Music Production",
      "DJ & Mixing",
      "Music Theory",
      "Songwriting",
      "Composition",
      "Audio Engineering",
      "Sound Design",
    ],
  },

  {
    id: "design",
    name: "Design & Creativity",
    subCategories: [
      "Graphic Design",
      "UI/UX Design",
      "Web Design",
      "Logo Design",
      "Branding",
      "Illustration",
      "Digital Art",
      "3D Design",
      "Motion Graphics",
      "Animation",
    ],
  },

  {
    id: "business",
    name: "Business & Entrepreneurship",
    subCategories: [
      "Entrepreneurship",
      "Business Management",
      "Marketing",
      "Digital Marketing",
      "Social Media Marketing",
      "Sales",
      "E-commerce",
      "Freelancing",
      "Leadership",
      "Project Management",
      "Startups",
    ],
  },

  {
    id: "finance",
    name: "Finance & Accounting",
    subCategories: [
      "Accounting",
      "Investing",
      "Stock Market",
      "Personal Finance",
      "Financial Analysis",
      "Bookkeeping",
      "Economics",
    ],
  },

  {
    id: "languages",
    name: "Languages",
    subCategories: [
      "English",
      "Sinhala",
      "Tamil",
      "Japanese",
      "Korean",
      "Chinese",
      "French",
      "German",
      "Spanish",
    ],
  },

  {
    id: "photography-video",
    name: "Photography & Video",
    subCategories: [
      "Photography",
      "Portrait Photography",
      "Landscape Photography",
      "Videography",
      "Video Editing",
      "Filmmaking",
      "Cinematography",
      "Color Grading",
      "Motion Graphics",
      "Content Creation",
    ],
  },

  {
    id: "personal-development",
    name: "Personal Development",
    subCategories: [
      "Communication Skills",
      "Public Speaking",
      "Leadership",
      "Productivity",
      "Time Management",
      "Critical Thinking",
      "Problem Solving",
      "Career Development",
      "Interview Preparation",
      "Study Skills",
    ],
  },

  {
    id: "academic",
    name: "Academic",
    subCategories: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Computer Science",
      "Engineering",
      "History",
      "Geography",
      "Literature",
      "Exam Preparation",
      "Academic Writing",
    ],
  },

  {
    id: "lifestyle",
    name: "Lifestyle & Hobbies",
    subCategories: [
      "Cooking",
      "Baking",
      "Gardening",
      "Fashion",
      "Makeup",
      "Interior Design",
      "DIY & Crafts",
      "Drawing",
      "Painting",
      "Sewing",
    ],
  },
] as const;

export { profileImages, students_nav_link, sample_courses, offers ,student_Settings_sidebar, teachers_nav_link };