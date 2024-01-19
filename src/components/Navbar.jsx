import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="bg-slate-900">
            <div className="container mx-auto flex justify-between items-center py-3 px-2">
                <h3 className="font-bold text-xl md:text-3xl">
                    <Link href="/">Next.JS - CRUD</Link>
                </h3>
                <ul className="flex gap-x-2 text-lg font-bold">
                    <li className="hover:bg-slate-700 rounded px-2">
                        <Link href="/">Tasks</Link>
                    </li>
                    <li className="bg-green-800 px-2 hover:bg-green-950 rounded">
                        <Link href="/new">New</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};