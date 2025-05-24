import { Stack, TechnologyStack } from "../types";

export const STACKS: Stack[] = [
  { label: 'React JS', imageUrl: '/svgs/reactjs.svg' },
  { label: 'Next JS', imageUrl: '/svgs/nextjs.svg' },
  { label: 'Nuxt JS', imageUrl: '/svgs/nuxt.svg' },
  { label: 'Svelte JS', imageUrl: '/svgs/svelte.svg' },
  { label: 'Vue JS', imageUrl: '/svgs/vuejs.svg' },
  { label: 'HTML5', imageUrl: '/svgs/html5.svg' },
  { label: 'CSS3', imageUrl: '/svgs/css3.svg' },
  { label: 'Bootstrap', imageUrl: '/svgs/bootstrap.svg' },
  { label: 'Tailwind CSS', imageUrl: '/svgs/tailwind.svg' },
  { label: 'Vite', imageUrl: '/svgs/vite.svg' },
  { label: 'Redux', imageUrl: '/svgs/redux.svg' },
  { label: 'Zustand', imageUrl: '/svgs/zustand.svg' },
  { label: 'Axios', imageUrl: '/svgs/axios.svg' },
  { label: 'React Hook Form', imageUrl: '/svgs/react-hook-form.svg' },
  { label: 'Zod', imageUrl: '/svgs/zod.svg' },
  { label: 'Shadcn UI', imageUrl: '/svgs/shadcn.svg' },
  { label: 'JavaScript', imageUrl: '/svgs/js.svg' },
  { label: 'TypeScript', imageUrl: '/svgs/ts.svg' },
  { label: 'Firebase', imageUrl: '/svgs/firebase.svg' },
  { label: 'Postman', imageUrl: '/svgs/postman.svg' },
  { label: 'Pinia', imageUrl: '/svgs/pinia.svg' },
  { label: 'Storybook', imageUrl: '/svgs/storybook.svg' },
]

export const getStacks = (key: TechnologyStack) => STACKS.find(x => x.label === key)!;