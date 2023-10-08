import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hock/useAuth";
import PropTypes from 'prop-types';
import Loading from "../Component/Loading/Loading";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation()
    if(loading){
        return <Loading/>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}/>
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;