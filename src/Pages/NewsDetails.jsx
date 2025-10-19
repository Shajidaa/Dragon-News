import { useLoaderData, useParams } from "react-router";
import Header from "../Components/HomeLayout/Header";
import RightContainer from "../Components/HomeLayout/RightSideContainer/RightContainer";
import NewsDetailsCard from "../Components/HomeLayout/NewsDetailsCard";
import { useEffect, useState } from "react";

const NewsDetails = () => {
  const [news, setNews] = useState({});
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    const newsDetails = data?.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);
  return (
    <>
      <Header></Header>
      <main className="max-w-11/12 mx-auto grid md:grid-cols-6 grid-cols-1 gap-5 mt-5">
        <div className="col-span-5">
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </div>
        <aside className="col-span-1">
          <RightContainer></RightContainer>
        </aside>
      </main>
    </>
  );
};

export default NewsDetails;
