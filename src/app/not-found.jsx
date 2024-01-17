import Link from "next/link";

const notFound = () => {
    return (
        <section className="flex justify-center items-center h-[calc(100vh-7rem)]">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Not Found</h1>
                <Link className="hover:text-slate-500 text-slate-400" href="/">Volver al inicio</Link>
            </div>
        </section>
    )
};

export default notFound;