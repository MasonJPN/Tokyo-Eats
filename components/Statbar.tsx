'use client'

import { useRestaurant } from "@/context/context";





export default function Statbar(){
    const {restaurants} = useRestaurant()
    const average =
         restaurants.length > 0
        ? restaurants.reduce((sum, r) => sum + r.ranking, 0) / restaurants.length
        : 0

    const highest =
        restaurants.length > 0
        ? restaurants.reduce((best, r) => (r.ranking > best.ranking ? r : best))
        : { name: "-", ranking: 0 }

const categoryCounts = restaurants.reduce((acc: Record<string, number>, r) => {
      acc[r.category] = (acc[r.category] || 0) + 1
     return acc
}, {} as Record<string, number>)

const topCategory =
  Object.keys(categoryCounts).length > 0
    ? Object.keys(categoryCounts).reduce((best, current) =>
        categoryCounts[current] > categoryCounts[best] ? current : best
      )
    : "-"





    return (
        <div className=" grid grid-cols-2 md:flex items-center mt-10  m-3 md:ml-10 gap-3 md:gap-20 text-white">
            <div className="flex justify-center flex-col items-center bg-gray-900 border border-gray-800 md:w-60 h-30 rounded-2xl ">
                <h3 className="text-xl">Total Spots:</h3>
                <p className="px-3 font-bold text-4xl">{restaurants.length}</p> 
            </div>


            
            <div className="flex justify-center flex-col items-center bg-gray-900 border border-gray-800  md:w-60 h-30 rounded-2xl ">
                <h3 className="text-xl">Avg Rating:</h3>
                <p className="px-3 font-bold text-4xl">{average.toFixed(1)}<span className=" text-yellow-300 px-2">★</span></p> 
            </div>

            <div className="flex justify-center flex-col items-center bg-gray-900 border border-gray-800  md:w-60 h-30 rounded-2xl ">
                <h3 className="text-xl">Top Category:</h3>
                <p className="px-3 font-bold text-4xl truncate max-w-full text-orange-400">{topCategory}</p> 
            </div>

            <div className="flex  justify-center flex-col items-center bg-gray-900 border border-gray-800  md:w-90 h-30 rounded-2xl ">
                <h3 className="text-xl">Highest Rated:</h3>
                <p className=" px-3 font-bold text-4xl truncate max-w-full text-blue-400">{highest.name}</p> 
            </div>


        </div>

    )
}