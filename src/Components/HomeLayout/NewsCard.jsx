import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,

    rating,
    total_view,
    thumbnail_url,
    details,
  } = news;

  // Format date
  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200 rounded-xl overflow-hidden">
      {/* Author Section */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500 text-xl">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h1 className="font-bold text-lg text-gray-800">{title}</h1>
      </div>

      {/* Thumbnail */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="p-4">
        <p className="text-gray-700">
          {details.length > 200 ? `${details.slice(0, 200)}...` : details}
          <span className="text-primary font-semibold cursor-pointer ml-1">
            Read More
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4 border-t pt-3 text-sm text-gray-600">
        <div className="flex items-center space-x-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < rating.number ? "text-orange-400" : "text-gray-300"
              }
            />
          ))}
          <span className="ml-1 text-gray-700">{rating.number.toFixed(1)}</span>
        </div>

        <div className="flex items-center space-x-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
