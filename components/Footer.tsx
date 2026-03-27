import React from 'react'



export default function footer(){

    return (
     <div className=" bg-gray-900 border-t border-white/10 text-gray-300 text-sm py-6 text-center">
        <div className="flex justify-center items-center ">
            
            <div className="">
                <ul className="font-bold text-sm text-gray-500 flex gap-10">
                    <li>Home</li>
                    <li>News</li>
                    <li>Contact Us</li>
                    <li>About</li>
                    <li>Our Team</li>
                </ul>
            </div>
        </div>
        <div className=" text-sm py-6 text-center">
                 Tokyo Eats © 2026 • Built by Mason Fancher
            </div>
    </div>
    )
}