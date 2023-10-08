import Logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className="text-center  my-10">
            <img src={Logo} alt="" className="mx-auto"/>
            <p className='my-3 text-sm font-light'>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;