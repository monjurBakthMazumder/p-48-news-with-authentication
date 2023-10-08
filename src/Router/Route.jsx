import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";
import Details from "../Pages/Details/Details";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import PrivateRoute from "./PrivateRoute";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <PrivateRoute><About/></PrivateRoute>
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><Details/></PrivateRoute>
            },
            {
                path: '/career',
                element: <PrivateRoute><Career/></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/registration',
                element: <Registration/>
            }
        ]
    }
])

export default Route;