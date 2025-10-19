import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Latest = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        const latestNews = data.filter((news) => news.others?.is_trending);

        setNews(latestNews);
      });
  }, []);

  return (
    <div className="mx-auto my-5 w-11/12 flex gap-3 items-center bg-[#F3F3F3] ">
      <div
        className="text-white bg-secondary 
      font-medium text-xl  px-3 py-4"
      >
        Latest
      </div>

      <Marquee className="flex gap-5 " pauseOnHover={true} speed={60}>
        {news.map((singleNews, index) => (
          <p className="mx-5 text-lg font-medium text-gray-700" key={index}>
            <span className="text-secondary font-semibold mr-2">{index}.</span>
            {singleNews.title}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default Latest;
