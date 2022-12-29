import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import ShowComment from './ShowComment/ShowComment';

const CompletedTaskCard = ({ setComment, task, refetch }) => {

    console.log(task);
    const { _id, taskName, picture, date, status, details, } = task;

    const navigate = useNavigate()



    const { data: myComment = [], refetch: reload } = useQuery({
        queryKey: ['myComment', _id],
        queryFn: async () => {
            const res = await fetch(`https://task-serrver.vercel.app/myComment?id=${_id}`, {
            });

            const data = await res.json();
            return data;
        }
    })






    const handleDelete = (_id) => {
        const confirm = window.confirm("Do you want to delete this task");
        if (confirm) {

            fetch(`https://task-serrver.vercel.app/deleteTask/${_id}`, {
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

        fetch(`https://task-serrver.vercel.app/updateStatus/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('task InCompleted')
                console.log(data)
                navigate('/myTask')
                refetch()
            })
    }




    const handleComment = (event) => {
        event.preventDefault()

        const comment = event.target.comment.value;
        const commentBlock = {
            taskId: _id,
            comment: comment
        }
        console.log(commentBlock);
        fetch("https://task-serrver.vercel.app/addComment", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentBlock)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("comment Added");
                reload();
                event.target.reset();

            })
    }



    return (
        <div>
            <div className='m-5'>

                <div className="relative lg:flex bg-gray-200 dark:bg-gray-800 rounded-md shadow-md ">
                    <img src={picture} alt="" className="mx-auto sm:mx-0 object-cover object-center rounded-md h-56   max-w-full" />
                    <div className="flex flex-col justify-between p-6">
                        <div className="">
                            <h2 className="text-3xl font-semibold tracking-wide">{taskName}</h2>
                            <h2 className=' font-semibold text-lg'>Status : {status}</h2>
                            <h2 className=' font-semibold text-md'>Complete Date : {date}</h2>
                            <p>Task Details : {details}</p>
                            {
                                myComment && <span><span className='font-semibold'>Comment :</span>
                                    {
                                        myComment.map(com => <ShowComment
                                            key={com._id}
                                            com={com}
                                        ></ShowComment>)

                                    }
                                </span>
                            }
                        </div>
                        <div className='lg:absolute right-4 bottom-4 flex-row lg:flex justify-end'>

                            <form onSubmit={handleComment} className="w-full pb-0 text-gray-100">
                                <div className="flex m-2">
                                    <input type="text" name="comment" className="flex  border lg:w-96 sm:text-sm rounded-l-md focus:ring-inset border-gray-700 text-gray-900 dark:text-gray-100
                                    bg-gray-200 dark:bg-gray-800 focus:ring-violet-400" />
                                    {/* <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md bg-gray-700"></span> */}
                                    <button className="flex items-center px-3  sm:text-sm rounded-r-md hover:bg-blue-800 bg-gray-700" type="submit" >Comment</button>
                                </div>
                            </form>


                            {/* <Link to={`/comment/${_id}`} >
                                <button type="button" className=" p-2 m-2 font-semibold  rounded-md dark:bg-orange-400 hover:bg-orange-700 text-white">Add Comment</button>
                            </Link> */}
                            <div className='flex justify-end'>
                                <button onClick={() => handleDelete(_id)} type="button" className=" p-2 m-2 font-semibold  rounded-md bg-pink-500 hover:bg-pink-700 text-white">Delete</button>
                                <button onClick={() => handleInComplete(_id)} type="button" className=" p-2 m-2 font-semibold  rounded-md bg-purple-500 hover:bg-purple-700 text-white">InComplete</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompletedTaskCard;