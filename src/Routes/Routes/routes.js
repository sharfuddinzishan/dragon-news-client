import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../layout/Main/Main";
import Category from "../../Pages/Category/Category";
import News from "../../Pages/News/News";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";
import AllNews from "../../Pages/AllNews/AllNews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Tac from "../../Pages/Others/Tac/Tac";
import Profile from "../../Pages/User/Profile/Profile";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://dragon-news-server-one-swart.vercel.app/news')
            },
            {
                path: '/allnews',
                element: <PrivateRoute><AllNews></AllNews></PrivateRoute>,
                loader: () => fetch('https://dragon-news-server-one-swart.vercel.app/news')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/terms',
                element: <Tac></Tac>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://dragon-news-server-one-swart.vercel.app/categories/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://dragon-news-server-one-swart.vercel.app/news/${params.id}`)
            },
        ]
    }
])