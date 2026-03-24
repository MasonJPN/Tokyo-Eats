import { RestaurantData } from "@/data/restaurants"



export default function Recents(){


const latest = RestaurantData.sort((a, b) => b.id - a.id)

    return (
        <>
        <div className="flex bg-gray-900 border border-gray-800  mr-10 rounded-xl  h-[70vh] text-white">
            
         <div className="px-8 py-8 flex flex-col gap-5 ">
            <div>
                <h2 className=" text-3xl">Recent Visits</h2>
            </div>

           

            {latest.slice(0, 3).map((restaurant) => (
<div className="flex">
  <div key={restaurant.id} className=" border text-xl rounded-xl px-4 py-3 h-32 w-80">
    <h3>{restaurant.name}</h3>
    <p className="text-sm">{restaurant.category}</p>
    <p className=" text-yellow-300 ">{"★".repeat(restaurant.ranking)}</p>
  </div>
     
     <div className="">
        <img className="h-20 w-20" src={restaurant.image}></img>

    </div>
</div>
))}

              

           </div>  
        </div>
        </>
    )
}