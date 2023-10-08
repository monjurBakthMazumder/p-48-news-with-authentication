import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex bg-gray-200"> 
            <button className="btn btn-secondary rounded-none">Breaking News</button>
            <Marquee>
                <Link to={'/'}>I can be a React component, multiple React components, or just some text.....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;