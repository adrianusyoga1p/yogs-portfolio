import { Github, Instagram, Linkedin } from "lucide-react";
import { Profile } from "../types";
import { STACKS } from "./stacks";

export const PROFILE: Profile = {
  name: 'Adrianus Yoga Prasetyo',
  sureName: 'Adrian',
  address: 'Jakarta Timur, Indonesia',
  statusOne: 'Currently work at Mariworks',
  statusTwo: 'Available for freelance',
  avatar: 'https://media.licdn.com/dms/image/v2/D5603AQFHxVHoq5lrYw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721292147003?e=1731542400&v=beta&t=zGNZr-1wbBCI0GHOL8VBVaA8wcYGcNK8BBz6lMsyGo0',
  description: 'I am a Frontend Web Developer with 2 years of experience, skilled in building modern and responsive web interfaces using various tools such as Bootstrap, Tailwind CSS, React, Vue, and Next.js. With strong proficiency in JavaScript, state management using Redux, and backend integration with Firebase, I can deliver efficient and scalable web applications. My educational background as a Bachelor of Computer Science from Universitas Duta Bangsa Surakarta also provides me with a solid technical foundation to tackle challenges in web development.',
  socials: [
    {
      label: "Github",
      href: 'https://github.com/adrianusyoga1p',
      icon: Github
    },
    {
      label: "Linkedin",
      href: 'https://www.linkedin.com/in/adrianus-yoga-prasetyo-244388196/',
      icon: Linkedin
    },
    {
      label: "Instagram",
      href: 'https://www.instagram.com/adrianusyoga_?igsh=c3owb2xoeDQ5MWRy',
      icon: Instagram
    },
  ],
  skills: STACKS
}