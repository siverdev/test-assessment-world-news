import { useState } from "react";
import ArticleCard from "./components/ArticleCard";
import Tabs from "./components/Tabs";
import "./index.css";
import { useNews } from "./services/queries";
import type { Tab } from "./types/news";


function App() {
  const [activeTab, setActiveTab] = useState<Tab>("general");

  const { data, isLoading, error } = useNews(activeTab);

  const changeTab = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
        Latest News
      </h1>

      <Tabs activeTab={activeTab} changeTab={changeTab}/>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {isLoading && (
          <div className="col-span-full text-center text-gray-500 text-lg md:text-xl animate-pulse">
        Loading news...
          </div>
        )}

        {error && (
          <div className="col-span-full text-center text-red-500 text-lg md:text-xl font-semibold">
            Something went wrong.
          </div>
        )}
        
        {data?.map((article, i) => (
          <ArticleCard key={i} article={article}/>
        ))}
       
      </div>
    </div>
  );
}

export default App;
