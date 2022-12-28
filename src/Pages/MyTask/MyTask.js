import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import { AuthContext } from '../../layout/context/AuthProvider';
import TaskCard from './TaskCard/TaskCard';

const MyTask = () => {

    const { user } = useContext(AuthContext);
    const [update, setUpdate] = useState('')

    const { data: myTask = [], isLoading, refetch } = useQuery({
        queryKey: ['myTask', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myTask?email=${user?.email}`, {
            });

            const data = await res.json();
            return data;
        }
    })

    console.log(update)


    if (isLoading) {
        return <Loading></Loading>
    }

    if (!myTask) {
        return <>
            <h2 className=' text-4xl font-bold text-center text-purple-700 m-8'>You haven't add any task yet. Please, add task </h2>
        </>

    }

    return (

        <div>
            <h2 className=' text-4xl m-5 font-bold text-center text-pink-500'>My Task </h2>

            {
                myTask.map(task => <TaskCard
                    key={task._id}
                    task={task}
                    refetch={refetch}
                    setUpdate={setUpdate}
                ></TaskCard>)
            }



        </div>
    );
};

export default MyTask;