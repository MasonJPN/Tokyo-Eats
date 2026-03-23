
import { RestaurantData } from "@/data/restaurants"







export default function Statbar(){
const average = RestaurantData.reduce((sum, r) => sum + r.ranking, 0) / RestaurantData.length;
const highest = RestaurantData.reduce((best, r) => r.ranking > best.ranking ? r : best)





const categoryCounts = RestaurantData.reduce((acc: Record<string, number>, r) => {
  acc[r.category] = (acc[r.category] || 0) + 1
  return acc
}, {} as Record<string, number>)
const topCategory = Object.keys(categoryCounts).reduce((best, current) => {
  return categoryCounts[current] > categoryCounts[best] ? current : best
})





    return (
        <div className="flex items-center mt-10 ml-10 gap-20 text-white">
            <div className="flex justify-center flex-col items-center bg-gray-900 border border-gray-800  w-60 h-30 rounded-2xl ">
                <h3 className="text-xl">Total Spots:</h3>
                <p className="px-3 font-bold text-4xl">{RestaurantData.length}</p> 
            </div>


            
            <div className="flex justify-center flex-col items-center bg-gray-900 border border-gray-800  w-60 h-30 rounded-2xl ">
                <h3 className="text-xl">Avg Rating:</h3>
                <p className="px-3 font-bold text-4xl">{average}<span className=" text-yellow-300 px-2">★</span></p> 
            </div>

            <div className="flex justify-center flex-col items-center bg-gray-900 border border-gray-800  w-60 h-30 rounded-2xl ">
                <h3 className="text-xl">Top Category:</h3>
                <p className="px-3 font-bold text-4xl text-orange-400">{topCategory}</p> 
            </div>

            <div className="flex justify-center flex-col items-center bg-gray-900 border border-gray-800  w-90 h-30 rounded-2xl ">
                <h3 className="text-xl">Highest Rated:</h3>
                <p className=" px-3 font-bold text-4xl text-blue-400">{highest.name}</p> 
            </div>


        </div>

    )
}