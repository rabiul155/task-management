import React from 'react';
import { toast } from 'react-hot-toast';

const CompletedTaskCard = ({ setComment, task, refetch }) => {

    console.log(task);
    const { _id, taskName, picture, date, status, details } = task;

    const handleDelete = (_id) => {
        const confirm = window.confirm("Do you want to delete this task");
        if (confirm) {

            fetch(`http://localhost:5000/deleteTask/${_id}`, {
                method: "DELETE"

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success('iteam deleted')
                    refetch();
                })
        }

    }

    const handleInComplete = (_id) => {

        const status = {
            message: 'incomplete'
        }

        fetch(`http://localhost:5000/updateStatus/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('task completed')
                console.log(data)
                refetch()
            })
    }

    return (
        <div>
            <div className='m-5'>

                <div className="relative lg:flex rounded-md shadow-md ">
                    <img src={picture} alt="" className="mx-auto sm:mx-0 object-cover object-center rounded-md h-56   max-w-full" />
                    <div className="flex flex-col justify-between p-6">
                        <div className="">
                            <h2 className="text-3xl font-semibold tracking-wide">{taskName}</h2>
                            <h2 className=' font-semibold text-lg'>Status : {status}</h2>
                            <h2 className=' font-semibold text-md'>Complete Date : {date}</h2>
                            <p>Task Details : {details}</p>
                        </div>
                        <div className='lg:absolute right-4 bottom-4 flex justify-end'>

                            <button type="button" className=" p-2 m-2 font-semibold  rounded-md dark:bg-orange-400 text-white">Add Comment</button>
                            <button onClick={() => handleDelete(_id)} type="button" className=" p-2 m-2 font-semibold  rounded-md dark:bg-pink-500 text-white">Delete</button>
                            <button onClick={() => handleInComplete(_id)} type="button" className=" p-2 m-2 font-semibold  rounded-md dark:bg-purple-700 text-white">InComplete</button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompletedTaskCard;