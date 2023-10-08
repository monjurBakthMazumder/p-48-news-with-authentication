import BreakingNews from "../../Component/BreakingNews/BreakingNews";
import NewsCard from "../../Component/NewsCard/NewsCard";
import Header from "../../Component/Shared/Header/Header";
import LeftSideNavbar from "../../Component/Shared/LeftSideNavbar/LeftSideNavbar";
import Navbar from "../../Component/Shared/Navbar/Navbar";
import RightSideNavbar from "../../Component/Shared/RightSideNavbar/RightSideNavbar";
import useGetNews from "../../Hock/useGetNews";

const Home = () => {
    const [allNews] = useGetNews()
    return (
        <div>
            <Header/>
            <BreakingNews/>
            <Navbar/>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-10">
                <div className="h-screen overflow-y-scroll">
                    <LeftSideNavbar/>
                </div>
                <div className="md:col-span-2 h-screen overflow-y-scroll">
                    <h1 className="text-xl font-semibold mb-5">Dragon News Home</h1>
                    {
                        allNews?.map(news=> 
                            <NewsCard
                                key={news._id}
                                news={news}
                            />
                        )
                    }
                </div>
                <div className="h-screen overflow-y-scroll">
                    <RightSideNavbar/>
                </div>
            </div>
        </div>
    );
};

export default Home;