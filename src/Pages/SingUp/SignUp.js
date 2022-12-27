import React from 'react';

const SignUp = () => {
    return (
        <div>
            <form className=' flex justify-center '>
                <div className=' w-96 border-purple-700  p-6'>
                    <h2 className=' font-bold text-4xl text-purple-700 text-center p-3'>SignUp</h2>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                        <input type="password" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>

                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center uppercase">SignUp</button>
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

export default SignUp;