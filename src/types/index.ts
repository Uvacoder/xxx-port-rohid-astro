export interface Post {
  url: string;
  title: string;
  readingTime: string;
  coverImage: string;
  date: string;
  description?: string;
}
export interface Project {
  url: string;
  title: string;
  coverImage: string;
  pubDate: string;
  lauchDate?: string;
  description?: string;
  repoURL?: string;
  visitURL?: string;
}

export interface PostFrontmatter {
  title: string;
  description: string;
  coverImage: string;
  pubDate: string;
  readingTime: string;
  draft?: boolean;
  featured?: boolean;
}

export interface ProjectFrontmatter {
  title: string;
  coverImage: string;
  description?: string;
  pubDate: string;
  launchDate?: string;
  repoURL?: string;
  visitURL?: string;
  featured?: boolean;
  draft?: boolean;
}
