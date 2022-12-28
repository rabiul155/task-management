import { createBrowserRouter } from "react-router-dom";
import AddComment from "../components/AddComment/AddComment";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Update from "../components/Update/Update";
import Main from "../layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import CompletedTask from "../Pages/CompletedTask/CompletedTask";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyTask from "../Pages/MyTask/MyTask";
import SignUp from "../Pages/SingUp/SignUp";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/',
                element: <Home></Home>

            },

            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'addTask',
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: '/myTask',
                element: <PrivateRoute> <MyTask></MyTask></PrivateRoute>
            },
            {
                path: '/completedTask',
                element: <PrivateRoute><CompletedTask></CompletedTask></PrivateRoute>
            },
            {
                path: '/update/:_id',
                loader: ({ params }) => fetch(`https://task-serrver.vercel.app/update/${params._id}`),
                element: <Update></Update>

            },
            {
                path: "/comment/:_id",
                element: <AddComment></AddComment>,
                loader: ({ params }) => fetch(`https://task-serrver.vercel.app/update/${params._id}`),
            }
        ]

    }
])

export default router;