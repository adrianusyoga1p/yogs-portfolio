import { Project } from "../types";
import { getStacks } from "./stacks";

export const PROJECT: Project[] = [
  {
    id: 1,
    slug: "chat-app",
    title: "Chat App - React & Firebase",
    description:
      "This chat application is created for practicing the use of JavaScript frameworks and Firebase. The technologies used in its development include: React Vite, Firebase, Tailwind CSS, Zustand, React Router DOM",
    demoUrl: "https://chat-react-app-yogs.vercel.app/",
    sourceCodeUrl: "https://github.com/adrianusyoga1p/chat-react-app",
    isSourceCode: true,
    isLiveDemo: true,
    thumbnailUrl: "/images/chat-app_login.png",
    thumbnails: [
      { id: 1, url: "/images/chat-app_login.png" },
      { id: 2, url: "/images/chat-app_room.png" },
    ],
    stacks: [
      getStacks('Axios'),
      getStacks('Firebase'),
      getStacks('React JS'),
      getStacks('Zustand'),
      getStacks('Tailwind CSS'),
      getStacks('JavaScript'),
    ]
  },
  {
    id: 2,
    slug: "dashboard-boilerplate",
    title: "Dashboard Boilerplate - React JS",
    description:
      "Create a dashboard template using React JS which can be developed according to needs. Existing technologies include, axios, redux, tailwind css, sweetalert,",
    demoUrl: "https://dashboard-boilerplate-yoga.vercel.app/dashboard",
    sourceCodeUrl: "https://github.com/adrianusyoga1p/dashboard-boilerplate",
    isSourceCode: true,
    isLiveDemo: true,
    thumbnailUrl: "/images/dashboard-boilerplate_login.png",
    thumbnails: [
      { id: 1, url: "/images/dashboard-boilerplate_login.png" },
      { id: 2, url: "/images/dashboard-boilerplate_list.png" },
    ],
    stacks: [
      getStacks('Axios'),
      getStacks('React JS'),
      getStacks('Redux'),
      getStacks('Tailwind CSS'),
      getStacks('JavaScript'),
      getStacks('Postman'),
    ]
  },
  {
    id: 4,
    slug: "itender-web-app",
    title: "Itender Web App",
    description:
      "Creating a web application named Itender, a product of this company, which is developed using Next.js and TypeScript, and also involves web scraping from all LPSE websites in Indonesia. My frontend colleague and I designed this website over approximately 2 to 3 months.",
    demoUrl: "",
    sourceCodeUrl: "",
    isSourceCode: false,
    isLiveDemo: false,
    thumbnailUrl: "/images/itender_tender-page.png",
    thumbnails: [
      { id: 1, url: "/images/itender_tender-page.png" },
      { id: 2, url: "/images/itender_home-page.png" },
      { id: 3, url: "/images/itender_login-page.png" },
      { id: 4, url: "/images/itender_dashboard1.png" },
      { id: 5, url: "/images/itender_dashboard2.png" },
      { id: 6, url: "/images/itender_dashboard3.png" },
    ],
    stacks: [
      getStacks('Axios'),
      getStacks('Next JS'),
      getStacks('Redux'),
      getStacks('Tailwind CSS'),
      getStacks('TypeScript'),
      getStacks('Postman'),
      getStacks('Shadcn UI'),
      getStacks('Zod'),
    ]
  },
  {
    id: 3,
    slug: "anime-web",
    title: "Anime Weblist",
    description:
      "The initial training project uses the React JS framework by consuming the API from https://api.jikan.moe/v4 and combined the styles using Tailwind CSS",
    demoUrl: "https://anime-react-app-rho.vercel.app/",
    sourceCodeUrl: "https://github.com/adrianusyoga1p/anime_react_app",
    isSourceCode: true,
    isLiveDemo: true,
    thumbnailUrl: "/images/anime-list.png",
    thumbnails: [
      { id: 1, url: "/images/anime-list.png" },
    ],
    stacks: [
      getStacks('React JS'),
      getStacks('Tailwind CSS'),
      getStacks('JavaScript'),
      getStacks('CSS3')
    ]
  },
];
