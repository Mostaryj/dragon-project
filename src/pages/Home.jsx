import { useLoaderData } from "react-router-dom";
import BreakingNews from "./shared/BreakingNews";
import Header from "./shared/Header";
import LeftSideNav from "./shared/LeftSideNav";
import Nav from "./shared/Nav";
import RightSideNav from "./shared/RightSideNav";
import NewsCard from "./shared/NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Nav></Nav>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        {/* news */}
        <div className="md:col-span-2">
         {
          news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
         }
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
