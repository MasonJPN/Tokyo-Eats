'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Restaurant } from "@/types";
import { RestaurantData } from "@/data/restaurants";
import { collection, getDocs, addDoc } from "firebase/firestore";
import app, { db } from "@/lib/firebase";

type RestaurantContextType = {
  restaurants: Restaurant[];
  addRestaurant: (restaurant: Omit<Restaurant, "id">) => Promise<void>;
  loading: boolean;
};

const RestaurantContext = createContext<RestaurantContextType | null>(null);
const restaurantsCol = collection(db, "restaurants");

export function RestaurantProvider({ children }: { children: ReactNode }) {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch restaurants from Firestore on mount
  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const snapshot = await getDocs(restaurantsCol);
        if (!snapshot.empty) {
          const fetched = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as Restaurant[];
          setRestaurants(fetched);
        } else {
          // If Firestore empty, use local default data
          setRestaurants(RestaurantData);
        }
      } catch (err) {
        console.error("Error fetching restaurants:", err);
        setRestaurants(RestaurantData);
      } finally {
        setLoading(false);
      }
    }

    fetchRestaurants();
  }, []);

  // Add a restaurant to Firestore AND state
  async function addRestaurant(newRestaurant: Omit<Restaurant, "id">) {
    try {
      const docRef = await addDoc(restaurantsCol, newRestaurant);
      setRestaurants(prev => [...prev, { ...newRestaurant, id: docRef.id }]);
    } catch (err) {
      console.error("Error adding restaurant:", err);
    }
  }

  return (
    <RestaurantContext.Provider value={{ restaurants, addRestaurant, loading }}>
      {children}
    </RestaurantContext.Provider>
  );
}

export function useRestaurant() {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error("useRestaurant must be used within a RestaurantProvider");
  }
  return context;
}
