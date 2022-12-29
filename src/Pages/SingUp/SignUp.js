import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../layout/context/AuthProvider';

const SignUp = () => {

    const { createUser, googleLogIn } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmit = (event) => {

        event.preventDefault()
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(userName, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('create user successfully')
                navigate('/')
            })
            .then(err => {
                console.error('sign up error', err)
            })

    }

    const handleGoogle = () => {
        googleLogIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('lonin with google successfully')
                navigate('/')

            })
            .catch(err => console.log('google log in error ', err))
    }


    return (
        <div className=' flex justify-center '>
            <div className=' w-96 border-purple-700  p-6'>
                <form onSubmit={handleSubmit} >

                    <h2 className=' font-bold text-4xl text-pink-500 text-center p-3'>SignUp</h2>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-100">Your Name</label>
                        <input name='name' type="text" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-100">Your email</label>
                        <input name='email' type="email" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-100 ">Your password</label>
                        <input name='password' type="password" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>

                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center uppercase">SignUp</button>
                    <div className=''>

                        <div
                            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                            <p class="text-center font-semibold mx-4 mb-0">or</p>
                        </div>

                    </div>


                </form>

                <button onClick={handleGoogle} type="submit" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center uppercase"> continue with Google</button>

            </div>


        </div>
    );
};

export default SignUp;