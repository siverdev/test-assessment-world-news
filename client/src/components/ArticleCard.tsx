const article = {
  source: { id: "nbc-news", name: "NBC News" },
  author: "Mirna Alsharif, Steve Strouss, Erick Mendoza",
  title: "Search for missing 5-year-old swept into Pacific Ocean continues as southern California braces for devastating rain - NBC News",
  description: "The desperate search for a 5-year-old girl who was swept into the Pacific Ocean Friday as her father drowned attempting to save her continues while southern California braces for more heavy rainfall that could bring life-threatening floods to the region",
  url: "https://www.nbcnews.com/weather/storms/california-flooding-rain-storm-rcna244092",
  urlToImage: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-11/251115-storm-ch-1116-3bc803.jpg",
  publishedAt: "2025-11-15T17:12:25Z",
  content: "The desperate search for a 5-year-old girl who was swept into the Pacific Ocean Friday as her father drowned attempting to save her continues while southern California braces for more heavy rainfall … [+3872 chars]"
};

export default function ArticleCard() {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={article.urlToImage}
        alt={article.title}
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
