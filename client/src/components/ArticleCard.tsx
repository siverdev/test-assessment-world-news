import type { Article } from "../types/news";
import noImage from "../assets/no-image.jpg";

type ArticleCardProps = {
  article: Article
};

export default function ArticleCard({article}: ArticleCardProps) {
 
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-shadow transition-transform  duration-300"
    >
      <div className="flex-shrink-0">
        <img
          src={article.urlToImage || noImage}
          alt={article.title}
          onError={(e) => (e.currentTarget.src = noImage)}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 p-6">
        <span className="text-sm text-gray-500 uppercase tracking-wide">
          From {article.source.name}
        </span>

        <h3 className="mt-2 text-lg font-semibold text-gray-900">
          {article.title}
        </h3>

        <p className="mt-2 text-gray-700 text-sm  flex-1">
          {(article.description || article.content)?.slice(0, 160)}
          {(article.description || article.content)?.length > 160 ? "..." : ""}
        </p>

        <div className="mt-4 flex justify-between items-center text-gray-500 text-xs">
          <span className="mr-4 truncate max-w-[70%]">{article.author}</span>
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </a>
  );
}
