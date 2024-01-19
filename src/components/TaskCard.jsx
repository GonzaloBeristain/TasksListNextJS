"use client";
import { useRouter } from "next/navigation";

export const TaskCard = ({task}) => {
    const router = useRouter();

    return (
        <div key={task.id} className="bg-slate-800 p-3 text-center hover:bg-slate-700 hover:cursor-pointer"
        onClick={()=>router.push(`/tasks/edit/${task.id}`)}>
            <h3 className="font-bold text-md pb-1 md:text-xl">{task.title}</h3>
            <p className="text-sm md:text-lg">{task.description}</p>
            <p className="text-slate-400 pt-1 text-sm md:text-md">{new Date(task.createdAt).toLocaleDateString()}</p>
        </div>
    )
};