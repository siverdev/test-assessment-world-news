import { useEffect, useState } from "react";

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
]; 

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("all");

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return(
    <div className="flex flex-wrap justify-center gap-3 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => changeTab(category)}
          className={`
            px-4 py-2 rounded-xl font-medium transition-all duration-200
            ${
        activeTab === category
          ? "bg-blue-500 text-white shadow-lg"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }
          `}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}