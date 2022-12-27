import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {


    return (

        <div>
            <form className=' flex justify-center mt-4'>
                <div className=' w-96 border-purple-700  p-6'>
                    <h2 className=' font-bold text-4xl text-purple-700 text-center p-3'>LogIn</h2>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                        <input type="password" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div className=' flex justify-between pr-2'>
                        <div class="flex items-start mb-6">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 " required />
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900">Remember me</label>
                        </div>

                        <label class="ml-2 text-sm font-medium text-gray-900">Forgot password?</label>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center uppercase">LogIn</button>
                    <div className=''>

                        <div
                            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                            <p class="text-center font-semibold mx-4 mb-0">or</p>
                        </div>

                    </div>
                    <button type="submit" class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center uppercase"> continue with Google</button>
                </div>
            </form>



        </div>
    );
};

export default Login;