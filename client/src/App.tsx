import { useEffect, useState } from "react";
import ArticleCard from "./components/ArticleCard";
import Tabs from "./components/Tabs";
import "./index.css";
import { useInfiniteNews } from "./services/queries";
import type { Tab } from "./types/news";
import SearchBar from "./components/SearchBar";
import { useInView } from "react-intersection-observer";


function App() {
  const [activeTab, setActiveTab] = useState<Tab>("general");
  const [searchValue, setSearchValue] = useState<string>("");
  const [submittedSeachValue, setSubmittedSearchValue] = useState<string | undefined>(undefined);

  const {ref, inView} = useInView();

  const { data, isLoading, error, fetchNextPage, isFetchingNextPage, isFetchNextPageError } = useInfiniteNews(activeTab, submittedSeachValue);

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [fetchNextPage, inView]);

  const changeTab = (tab: Tab) => {
    setActiveTab(tab);
    setSearchValue("");
    setSubmittedSearchValue(undefined);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
        Latest News From Around The World
      </h1>

      <Tabs activeTab={activeTab} changeTab={changeTab}/>

      <SearchBar value={searchValue} setValue={setSearchValue} setSubmittedValue={setSubmittedSearchValue}/>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {isLoading && (
          <div className="col-span-full text-center text-gray-500 text-lg md:text-xl animate-pulse">
        Loading news...
          </div>
        )}

        {(error || data?.error) && (
          <div className="col-span-full text-center text-red-500 text-lg md:text-xl font-semibold">
            {data?.error?.message ||  "Something went wrong. Try again later"}
          </div>
        )}


        {!isLoading && data?.pages?.every(page => page.articles.length === 0) && (
          <p className="col-span-full text-center text-gray-500 text-lg md:text-xl">
            No articles found
          </p>
        )}

        {data?.pages?.map((page) =>
          page.articles.map((article, i) => (
            <ArticleCard key={i} article={article} />
          ))
        )}

        <div className="col-span-full text-center" ref={ref}>
          {isFetchingNextPage && (
            <div className="text-gray-500 text-lg md:text-xl animate-pulse">
      Loading more news...
            </div>
          )}

          {isFetchNextPageError && (
            <div className="text-red-500 text-lg md:text-xl font-semibold mt-2">
      Error loading more news. Try again later.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
