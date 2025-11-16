import type { Article } from "../types/news";
import noImage from "../assets/no-image.jpg";
import { useState } from "react";

type ArticleCardProps = {
  article: Article
};

export default function ArticleCard({article}: ArticleCardProps) {
  const [imgSrc, setImgSrc] = useState<string>(article.urlToImage || noImage);

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={imgSrc}
        alt={article.title}
        onError={() => setImgSrc(noImage)}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="text-sm text-gray-500 uppercase tracking-wide">
          From {article.source.name}
        </span>
        <h3 className="mt-2 text-lg font-semibold text-gray-900">
          {article.title}
        </h3>
        <p className="mt-2 text-gray-700 text-sm line-clamp-3">
          {article.description || article.content}
        </p>
        <div className="mt-4 flex justify-between items-center text-gray-500 text-xs">
          <span className="mr-4">{article.author}</span>
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </a>
  );
}
