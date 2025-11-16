import axios from "axios";
import type { NewsResponse, Tab } from "../types/news";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});

export const getNews = async (tab: Tab, search?: string, page: number | null = 1) => {
  const res = await axiosInstance.get<NewsResponse>("news", {
    params: {
      category: tab,
      page,
      ...(search ? {search} : {})
    },
  });
  return res.data;
};



