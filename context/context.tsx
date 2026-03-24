'use client'
import { createContext, useContext, useState } from "react"
import { Restaurant } from "@/types"
import { RestaurantData } from "@/data/restaurants"

type RestaurantContextType = {
  restaurants: Restaurant[]
  addRestaurant: (restaurant: Restaurant) => void
}

const RestaurantContext = createContext<RestaurantContextType | null>(null)

export function RestaurantProvider({ children }: { children: React.ReactNode }) {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(RestaurantData)

  function addRestaurant(newRestaurant: Restaurant) {
    setRestaurants((prev) => [...prev, newRestaurant])
  }

  return (
    <RestaurantContext.Provider value={{ restaurants, addRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  )
}

export function useRestaurant() {
  const context = useContext(RestaurantContext)
  if (!context) {
    throw new Error("useRestaurant must be used within a RestaurantProvider")
  }
  return context
}
