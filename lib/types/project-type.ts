import { Stack } from "./profile-type"

export type Project = {
  id: number,
  slug: string,
  title: string,
  description: string,
  sourceCodeUrl: string,
  demoUrl: string,
  thumbnailUrl: string,
  thumbnails: Thumbnails[],
  isSourceCode: boolean,
  isLiveDemo: boolean,
  stacks: Stack[]
}

export type Thumbnails = {
  id: number,
  url: string
}