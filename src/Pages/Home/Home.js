import React from 'react';
import img from '../../images/task.png'

const Home = () => {
    return (
        <div>
            <section className=" ">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-6 lg:py-8 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold  sm:text-6xl">Complete
                            <span className="dark:text-violet-400"> Your Everyday</span> Task
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Join With Us and Complete Your daily Mission
                            <br className="hidden md:inline" />Make Your Life Easy and Enjoy your Day
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="/" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Register Now</a>
                            <a rel="noopener noreferrer" href="/" className="px-8 py-3 text-lg font-semibold border rounded bg-pink-500">Get Mobile App</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-full">
                        <img src={img} alt="" className="object-contain h- sm:h-80 lg:h-full" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;