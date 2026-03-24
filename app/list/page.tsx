'use client'

import { useRestaurant } from "@/context/context"
import SearchBar from "@/components/SearchBar"

export default function List() {
  const { restaurants } = useRestaurant()

  return (
    <div className="min-h-screen bg-gray-950">
        <h2 className="text-white text-4xl ml-30 mt-15 mb-3">All Restaurants</h2>
        <SearchBar/>
      <div className=" grid grid-cols-3 gap-10 ml-20 mr-20  mt-8">
      
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="flex flex-col justify-center items-center rounded-2xl bg-gray-900 border border-gray-800 text-gray-300 p-6">
            
              <img className="h-40 w-50 object-cover rounded-2xl" src={restaurant.image} alt={restaurant.name} />
            
         
            <h3 className="text-xl mt-2 mb-4 font-bold text-white">{restaurant.name}</h3>
            <p><span className="font-bold">Category: </span>{restaurant.category}</p>
            <p className="font-bold">Rating: <span className="text-yellow-300">{"★".repeat(restaurant.ranking)}</span></p>

          </div>
        ))}
      </div>
    </div>
  )
}