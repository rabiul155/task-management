import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import { AuthContext } from '../../layout/context/AuthProvider';
import CompletedTaskCard from './CompletedTaskCard';

const CompletedTask = () => {
    const [comment, setComment] = useState('')
    const { user } = useContext(AuthContext);

    const { data: completedTask = [], isLoading, refetch } = useQuery({
        queryKey: ['completedTask', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://task-serrver.vercel.app/completedTask?email=${user?.email}`, {
            });

            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    if (completedTask.length === 0) {
        return <>
            <h2 className=' text-4xl font-bold text-center text-cyan-400 m-8'>You haven't Complete any task yet. Please, Complete first!!! </h2>
        </>

    }

    return (


        <div>
            <h2 className=' text-4xl m-5 font-bold text-center text-pink-500'>Completed Task </h2>

            {
                completedTask.map(task =>
                    <CompletedTaskCard
                        key={task._id}
                        task={task}
                        refetch={refetch}
                        setComment={setComment}
                    ></CompletedTaskCard>
                )
            }


        </div>
    );
};

export default CompletedTask;