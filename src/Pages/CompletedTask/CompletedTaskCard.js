import React from 'react';

const CompletedTaskCard = () => {
    return (
        <div>
            <div className='m-5'>

                <div className="relative lg:flex rounded-md shadow-md ">
                    <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="mx-auto sm:mx-0 object-cover object-center rounded-md h-56   max-w-full" />
                    <div className="flex flex-col justify-between p-6">
                        <div className="">
                            <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                            <h2 className=' font-semibold text-lg'>Status : incomplete</h2>
                            <p>Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                        </div>
                        <div className='lg:absolute right-4 bottom-4 flex justify-end'>

                            <button type="button" className=" p-2 m-2 font-semibold  rounded-md dark:bg-orange-400 text-white">Add Comment</button>
                            <button type="button" className=" p-2 m-2 font-semibold  rounded-md dark:bg-pink-500 text-white">Delete</button>
                            <button type="button" className=" p-2 m-2 font-semibold  rounded-md dark:bg-purple-700 text-white">InComplete</button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompletedTaskCard;