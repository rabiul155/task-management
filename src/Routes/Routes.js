import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import CompletedTask from "../Pages/CompletedTask/CompletedTask";
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
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'addTask',
                element: <AddTask></AddTask>
            },
            {
                path: '/myTask',
                element: <MyTask></MyTask>
            },
            {
                path: '/completedTask',
                element: <CompletedTask></CompletedTask>
            }
        ]

    }
])

export default router;