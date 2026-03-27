'use client'

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-900 border-b border-gray-800 text-gray-300 px-4 sm:px-10 py-4">
      <div className="flex justify-between items-center">
       
        <h2 className="text-4xl text-white font-bold">
          <Link href="/">
          Tokyo Eats
          </Link>
          </h2>

       
        <button
          className="sm:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          
          <span className="block w-6 h-0.5 bg-gray-300 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-300 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-300"></span>
        </button>

       
        <ul className="hidden sm:flex text-xl gap-15">
          <li className="hover:text-gray-500">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link href="/map">Map</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link href="/list">List</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link href="/add">+Add</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="sm:hidden flex flex-col gap-4 mt-4 text-lg">
          <li className="hover:text-gray-500">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link href="/map">Map</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link href="/list">List</Link>
          </li>
          <li className="hover:text-gray-500">
            <Link href="/add">+Add</Link>
          </li>
        </ul>
      )}
    </nav>
  )
}
