import { useQuery } from "@tanstack/react-query";
import { getNews } from "./api";
import type { Tab } from "../types/news";

export function useNews(tab: Tab, searchTerm?: string) {
  return useQuery({
    queryKey: ["news", tab, searchTerm],
    queryFn: () => getNews(tab, searchTerm),
    
  });
}