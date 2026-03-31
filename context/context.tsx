'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Restaurant } from "@/types";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

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

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const snapshot = await getDocs(restaurantsCol);

        const fetched = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Restaurant[];

        setRestaurants(fetched);
      } catch (err) {
        console.error("Error fetching restaurants:", err);
        setRestaurants([]); // clean fallback
      } finally {
        setLoading(false);
      }
    }

    fetchRestaurants();
  }, []);

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
