import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/HomeLayout/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);
  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
    } else if (id == "1") {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filterNews);
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filterNews);
    }
  }, [id, data]);

  return (
    <div>
      <h1 className="font-semibold text-xl text-primary ">
        News Found ({categoryNews.length})
      </h1>
      <div className="grid gird-cols-1 gap-5 mt-5">
        {categoryNews.map((news) => (
          <NewsCard news={news} key={news.id}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
