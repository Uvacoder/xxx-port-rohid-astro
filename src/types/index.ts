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
  icon: string;
  description: string;
  pubDate: string;
  launchDate: string;
  repoURL?: string;
  visitURL?: string;
  featured?: boolean;
  draft?: boolean;
  screenshots?: string[];
}
