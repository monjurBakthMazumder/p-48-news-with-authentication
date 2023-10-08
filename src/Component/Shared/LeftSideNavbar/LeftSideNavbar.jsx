import useGetCategory from "../../../Hock/useGetCategory";
import useGetNews from "../../../Hock/useGetNews";
import NewsCardLeft from "./NewsCardLeft";

const LeftSideNavbar = () => {
    const [categories] = useGetCategory()
    const [allNews] = useGetNews()
    return (
        <div>
            <div className="">
                <h1 className="text-xl font-semibold mb-5">All Category</h1>
                <ul>
                    {
                        categories?.map(category=>
                            <li key={category?.id}>
                            <a 
                                className="btn w-full mb-2 rounded-none"
                            >   
                                {category?.name}
                            </a>
                            </li>
                        )
                    }
                </ul>
                <div className="">
                    {
                        allNews?.map(news=> 
                            <NewsCardLeft
                                key={news._id}
                                news={news}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftSideNavbar;