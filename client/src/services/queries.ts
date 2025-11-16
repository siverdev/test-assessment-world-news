import { useInfiniteQuery } from "@tanstack/react-query";
import { getNews } from "./api";
import type { Tab } from "../types/news";

export function useInfiniteNews(tab: Tab, searchTerm?: string) {
  return useInfiniteQuery({
    queryKey: ["news", tab, searchTerm],
    queryFn: ({ pageParam }: { pageParam: number }) => getNews(tab, searchTerm, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage
    
  });
}