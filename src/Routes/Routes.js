import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Pages/Login/Login";
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
            }
        ]

    }
])

export default router;