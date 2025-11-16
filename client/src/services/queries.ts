import { useQuery } from "@tanstack/react-query";
import { getNews } from "./api";
import type { Tab } from "../types/news";

export function useNews(tab: Tab) {
  return useQuery({
    queryKey: ["news", tab],
    queryFn: () => getNews(tab),
  });
}