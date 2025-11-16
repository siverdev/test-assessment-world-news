export type Article = {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

export type Tab = string | undefined;


export type NewsResponse = {
  error: boolean,
  message: string,
  articles?: Article[],
  currentPage?: number,
  nextPage?: number | null
}

export type NewsCategory =
  | "general"
  | "business"
  | "entertainment"
  | "health"
  | "science"
  | "sports"
  | "technology";
