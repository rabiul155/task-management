import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const AddComment = () => {

    const task = useLoaderData();
    const navigate = useNavigate();



    const handleSubmit = (event) => {
        event.preventDefault();
        const comment = event.target.comment.value;

        const commentDetails = {
            comment: comment
        }
        console.log(comment);


        fetch(`https://task-serrver.vercel.app/addComment/${task._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentDetails)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('comment Added')
                navigate("/completedTask")



            })
    }



    return (

        <div>
            <div className='mx-5'>
                <h2 className=' text-4xl m-5 font-bold text-center text-pink-500'>Add a Comment</h2>
                <form onSubmit={handleSubmit}>

                    <div className=' sm:grid grid-cols-1 sm:max-w-2xl mx-auto gap-5 m-5' >

                        <div className=" w-full">

                            <label className="block mb-2 text-sm font-medium text-gray-100 ">Comment</label>
                            <textarea
                                name='comment'
                                defaultValue={task?.comment}
                                rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your comment here..."></textarea>

                        </div>

                        <button type="submit" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center uppercase">comment</button>

                    </div>

                </form>

            </div>
        </div>
    );
};

export default AddComment;