import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { category_id, title, image_url, details } = news;

  return (
    <div>
      <img src={image_url} alt="" />
      <p className="font-bold my-3 text-2xl">{title}</p>
      <p>{details}</p>
      <p>
        <Link to={`/category/${category_id}`} className="btn bg-red-500">
          All news in this category
        </Link>
      </p>
    </div>
  );
};

export default NewsDetailsCard;
