export interface Post {
  url: string;
  title: string;
  readingTime: string;
  coverImage: string;
  date: string;
  description?: string;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  coverImage: string;
  date: string;
  readingTime: string;
  draft?: boolean;
  tags?: string[];
}
