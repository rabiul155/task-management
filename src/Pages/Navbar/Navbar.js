import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../layout/context/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('logOut succefully ')
            })
            .catch(error => {
                console.error('logout error', error)
            })
    }

    return (
        <div>


            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2 dark:bg-gray-900">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link className="flex items-center">

                        <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">EasyLife</span>
                    </Link>
                    <div className="flex md:order-2">

                        {
                            user?.uid ?

                                <Link onClick={handleLogOut} to='signup' type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 mx-3 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LogOut</Link>

                                :

                                <>

                                    <Link to='login' type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 mx-3 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LogIn</Link>

                                    <Link to='signup' type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 mx-3 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SignUp</Link>
                                </>


                        }








                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>


                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                            <li>
                                <Link to='/' className="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white ">Home</Link>
                            </li>
                            <li>
                                <Link to='addTask' className="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white">Add Task</Link>
                            </li>
                            <li>
                                <Link to='myTask' className="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white">My Task</Link>
                            </li>
                            <li>
                                <Link to='completedTask' className="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white">Completed Task</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;