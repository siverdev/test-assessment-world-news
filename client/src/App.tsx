import ArticleCard from "./components/ArticleCard";
import Tabs from "./components/Tabs";
import "./index.css";


function App() {
  return (
 <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
        Latest News
      </h1>

      <Tabs />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
}

export default App;
