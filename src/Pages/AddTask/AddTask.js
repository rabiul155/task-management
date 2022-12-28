import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'

import { AuthContext } from '../../layout/context/AuthProvider';

const AddTask = () => {

    const { user } = useContext(AuthContext);
    const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString());

    const imageHostingKey = '60a0534fb81af8024326073b2526de82';
    const { register, handleSubmit } = useForm();

    const handleAddTask = data => {

        const image = data.picture[0];
        const formData = new FormData()
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)

                if (imgData?.success) {
                    const taskName = data.taskName;
                    const picture = imgData.data.url;
                    const date = selectedDate;
                    const details = data.details;
                    const status = 'incomplete';
                    const comment = '';

                    const task = {

                        taskName,
                        picture,
                        date,
                        details,
                        status,
                        email: user?.email,
                        comment
                    }
                    console.log(task)
                }




            })
    }

    return (


        <div className='mx-5'>
            <h2 className=' text-4xl m-5 font-bold text-center text-pink-500'>Add Task </h2>
            <form onSubmit={handleSubmit(handleAddTask)} >

                <div className=' sm:grid grid-cols-1 sm:max-w-2xl mx-auto gap-5 m-5' >

                    <div className=" w-full">
                        <label >
                            <span className="block mb-2 text-sm font-medium text-gray-900 ">Task Name</span>
                        </label>
                        <input  {...register('taskName')} required type="text"
                            placeholder="Type here" className="block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md  " />
                    </div>

                    <div className="w-full ">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                        <input {...register('picture')} class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50" id="file_input" type="file" />

                    </div>

                    <div className=" w-full">

                        <label class="block mb-2 text-sm font-medium text-gray-900 ">Select Date</label>
                        <div className=" w-full" >
                            <DatePicker
                                {...register('date')}
                                className='w-full block border border-gray-300 rounded-lg bg-gray-50' onChange={date => setSelectedDate(date)} value={selectedDate} />
                        </div>

                    </div>

                    <div className=" w-full">

                        <label class="block mb-2 text-sm font-medium text-gray-900 ">Task Details</label>
                        <textarea {...register('details')} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write task details here..."></textarea>

                    </div>

                    <button type="submit" class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center uppercase"> ADD TASK</button>


                </div>

            </form>

        </div>
    );
};

export default AddTask;