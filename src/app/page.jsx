import { prisma } from "@/libs/prisma";

//COMPONENTS
import { TaskCard } from "@/components/TaskCard.jsx";

//OBTENIENDO LOS DATOS DIRECTAMENTE DESDE LA BASE DE DATOS
const loadTask = async () => {
  const tasks = await prisma.task.findMany();
  return tasks;
};

//PETICION HECHA CON FETCH AL BACKEND
/* const loadTask = async () => {
  const res = await fetch("http://localhost:3000/api/tasks")
  const data = await res.json()
  return data
} */

/* export const revalidate = 20; */ //Se valida cada 20 segundos

export const dynamic = "force-dynamic"; //Se actualiza cada vez que hay un cambio

const HomePage = async () => {
  const tasks = await loadTask()
  
  return (
    <div className="container mx-auto">
      <section className="grid grid-cols-3 gap-3 p-2">
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </section>
    </div>
    
  )
};

export default HomePage;