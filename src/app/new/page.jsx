"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const NewPage = ({ params }) => {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if(params.id) {
            fetch(`/api/tasks/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                setTitle(data.title)
                setDescription(data.description)
                });
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (params.id) {
            const res = await fetch(`/api/tasks/${params.id}`, {
                method: "PUT",
                body: JSON.stringify({ title, description }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json()

            Swal.fire({
                title: "Modify OK",
                text: "Successfully modified task",
                icon: "success",
            });
        } else {
            const res = await fetch("/api/tasks", {
                method: "POST",
                body: JSON.stringify({title, description}),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json()

            Swal.fire({
                title: "Create OK",
                text: "Task created successfully",
                icon: "success",
            });
        };
        
        router.push('/')
        router.refresh()
    };

    return (
        <div onSubmit={handleSubmit} className="flex h-[calc(100vh-7rem)] justify-center items-center">
            <form className="bg-slate-800 p-10 w-80 ">

                <label htmlFor="title" className="font-bold text-sm">
                    Título de la tarea
                </label>

                <input id="title" type="text" placeholder="Título" className="border border-gray-500 p-2 mb-4 w-full text-black"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                />

                <label htmlFor="title" className="font-bold text-sm">
                    Descripción de la tarea
                </label>

                <textarea id="description" rows="4" placeholder="Describe tu tarea" className="border border-gray-500 p-2 mb-4 w-full text-black"
                onChange={(e) => setDescription(e.target.value)}
                value={description}></textarea>

                <div className="flex justify-between">
                {
                    params.id ? <button type="submit" className="bg-blue-600 hover:bg-blue-800 font-bold text-white px-4 py-2 rounded">Modificar</button>
                    : <button type="submit" className="bg-green-800 hover:bg-green-900 font-bold text-white px-4 py-2 rounded">Crear</button>
                }
                    
                {
                    params.id && (
                        <button type="button" className="bg-red-500 hover:bg-red-700 font-bold text-white px-4 py-2 rounded"
                        onClick={async () => {
                            const res = await fetch(`/api/tasks/${params.id}`, {
                                method: 'DELETE',
                            })
                            const data = await res.json()
                            Swal.fire({
                                title: "Delete OK",
                                text: "Task deleted successfully",
                                icon: "success",
                            });
                            
                            router.back()
                            router.refresh()
                        }}>
                        Eliminar
                        </button>
                    )
                }
                </div>

            </form>
        </div>
    )
};

export default NewPage;