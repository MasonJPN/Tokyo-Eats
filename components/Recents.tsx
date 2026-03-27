  import { RestaurantData } from "@/data/restaurants"

export default function Recents() {

  const latest = [...RestaurantData].sort((a, b) => b.id - a.id)

  return (
    <>
      <div className="flex bg-gray-900 border border-gray-800 mr-10 mt-10 md:mt-1 mb-10 rounded-xl h-[70vh] overflow-y-auto text-white">
        <div className="px-8 py-8 flex flex-col gap-5 w-full">
          
          <div>
            <h2 className="text-3xl">Recent Visits</h2>
          </div>

          <div className="flex flex-col gap-4">
            {latest.slice(0, 3).map((restaurant) => (
              <div
                key={restaurant.id}
                className="border text-xl rounded-xl px-4 py-3 h-29 md:h-32 w-80 flex justify-between items-center bg-gray-800"
              >
                <div className="flex flex-col gap-1">
                  <h3>{restaurant.name}</h3>
                  <p className="text-sm">{restaurant.category}</p>
                  <p className="text-yellow-300">{"★".repeat(restaurant.ranking)}</p>
                </div>

                <div>
                  <img
                    className="h-20 w-20 object-cover rounded-lg"
                    src={restaurant.image}
                    alt={restaurant.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
