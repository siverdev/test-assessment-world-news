import axios from "axios";
import type { Article, Tab } from "../types/news";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});

export const getNews = async (tab: Tab, search?: string) => {
  const res = await axiosInstance.get<Article[]>("news", {
    params: {
      category: tab,
      ...(search ? {search} : {})
    },
  });
  return res.data;
};