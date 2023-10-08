import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import qZone1 from '../../../assets/qZone1.png' 
import qZone2 from '../../../assets/qZone2.png' 
import qZone3 from '../../../assets/qZone3.png' 
import SocialLogin from '../../../Pages/Authentication/SocialLogin/SocialLogin';
import useAuth from '../../../Hock/useAuth';
const RightSideNavbar = () => {
    const {user} = useAuth()
    return (
        <div>
            {!user && <div className="space-y-3 p-5 pt-0">
                <h1 className="text-xl font-semibold mb-5">Login With</h1>
                <SocialLogin/>
            </div>}
            <div className="p-5">
                <h1 className="text-xl font-semibold mb-5">Find us on</h1>
                <Link className="border-2 rounded-t-lg w-full flex items-center gap-2 p-2">
                    <AiFillFacebook/>
                    Facebook
                </Link>
                <Link className="border-x-2 w-full flex items-center gap-2 p-2">
                    <AiFillTwitterSquare/>
                    Twitter
                </Link>
                <Link className="border-2 rounded-b-lg w-full flex items-center gap-2 p-2">
                    <AiFillInstagram/>
                    Instagram
                </Link>
            </div>
            {/* q zone */}
            <div className="p-5 space-y-3 mb-5">
                <h1  className="text-xl font-semibold mb-5">Q zone</h1>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNavbar;