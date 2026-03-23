import Link from "next/link"

export default function Navbar(){


return (
    <>
    <nav className="flex justify-between py-4 px-10 bg-gray-900 border-b border-gray-800   text-gray-300">
        <div>
            <h2 className="text-4xl text-white">Tokyo Eats</h2>
        </div>

        <div>
            <ul className="flex text-2xl gap-15 ">
                
                    <li className="hover:text-gray-500">
                    <Link href="/app">
                     Home
                    </Link>
                    </li>
                
                <li className="hover:text-gray-500">
                Map
                </li>

                <li className="hover:text-gray-500">List</li>

                    <li className="hover:text-gray-500" >
                    <Link href="/add">
                     +Add
                    </Link>
                    </li>
            </ul>
        </div>

    </nav>
    
    </>
)
}