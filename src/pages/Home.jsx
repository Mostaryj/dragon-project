import BreakingNews from "./shared/BreakingNews";
import Header from "./shared/Header";
import LeftSideNav from "./shared/LeftSideNav";
import Nav from "./shared/Nav";
import RightSideNav from "./shared/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Nav></Nav>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2">
          <h2>news coming soon</h2>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
