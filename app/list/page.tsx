'use client'

import { useRestaurant } from "@/context/context"
import SearchBar from "@/components/SearchBar"
import ListFilter from "@/components/ListFilter"
import { useState } from "react"

export default function List() {
  const { restaurants } = useRestaurant()
  const [category, setCategory] = useState("All")
  const [searchInput, setSearchInput] = useState("")

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesCategory =
      category === "All" || restaurant.category === category

    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchInput.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen py-10 bg-gray-950">
      
     
      <h2 className="text-white text-4xl ml-10 md:ml-20 mt-15 mb-3">
        All Restaurants
      </h2>

      
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

      <ListFilter
        category={category}
        setCategory={setCategory}
      />

     
      {filteredRestaurants.length === 0 ? (
        <div className="text-center text-gray-400 mt-10">
          {searchInput
            ? `No results for "${searchInput}"`
            : "No restaurants found"}
        </div>
      ) : (
        <div className="grid grid-cols md:grid-cols-3 gap-10 ml-10 md:ml-20 mr-20 mt-8">
          {filteredRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="flex flex-col justify-center items-center rounded-2xl bg-gray-900 border border-gray-800 text-gray-300 p-6 hover:scale-[1.02] transition"
            >
              <img
                className="h-40 w-50 object-cover rounded-2xl"
                src={restaurant.image}
                alt={restaurant.name}
              />

              <h3 className="text-xl mt-2 mb-4 font-bold text-white">
                {restaurant.name}
              </h3>

              <p>
                <span className="font-bold">Category: </span>
                {restaurant.category}
              </p>

              <p className="font-bold">
                Rating:{" "}
                <span className="text-yellow-300">
                  {"★".repeat(restaurant.ranking)}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}
