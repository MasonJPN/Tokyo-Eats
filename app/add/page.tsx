'use client'
import { useState } from "react"
import { useRestaurant } from "@/context/context"

export default function Add() {
  const [location, setLocation] = useState("")
  const [name, setName] = useState("")
  const [starCount, setStarCount] = useState(0)
  const [review, setReview] = useState("")
  const [ate, setAte] = useState(false)
  const [category, setCategory] = useState("")
  const [search, setSearch] = useState(null)
  const [coords, setCoords] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [searchMsg, setSearchMsg] = useState(false)
  const { addRestaurant } = useRestaurant()

  function handleStarCount(star: number){
    setStarCount(star)
  }

  function handleAte(){
    setAte(!ate)
  }

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault()

    if (!coords){
      alert("Please select a location")
      return
    }

    const newRestaurant = {
      name,
      ate,
      location: {
        lng: coords[0],
        lat: coords[1],
      },
      ranking: starCount,
      category,
      review,
      image: "",
      id: Date.now(),
    }

    setSubmitted(true)
    addRestaurant(newRestaurant)
  }

  async function handleSearch(){
    const res = await fetch(`https://api.mapbox.com/search/geocode/v6/forward?q=${location} Tokyo&access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`)
    const data = await res.json()
    setSearch(data)
    setCoords(data.features[0].geometry.coordinates)
    console.log(data)
    setSearchMsg(true)
  }

  return (
    <>
      
      <div className="relative w-full h-260">

        
        <img
          src="/map.png"
          alt="Food hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

      
        <div className="absolute inset-0 bg-black/70" />

    
        <div className="relative z-10 flex justify-center items-start  py-10 md:py-20 px-4 min-h-screen">

          {submitted ? (
            <div className="   text-center flex flex-col gap-4 mt-11 md:mt-20 ">
              <h2 className="text-5xl text-green-400 font-semibold">
                Restaurant Added To Our Map ✅
              </h2>
              <p className="text-gray-300">
                Your restaurant has been saved successfully.
              </p>
            </div>
          ) : (

            
            <div className="flex justify-center items-start w-full">
              
              <div className="bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-2xl p-10 w-full max-w-lg text-gray-300">
                
                <h2 className="text-3xl font-semibold text-white mb-8 text-center">
                  Add a Restaurant
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  

                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400">Search Restaurant Address</label>
                    <div className="flex gap-3">
                      <input
                        required
                        className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
                        placeholder="e.g. Ichiran Shibuya Tokyo"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />

                      {searchMsg ? (
                        <button onClick={handleSearch} type="button" className="bg-green-700 border border-green-700 text-white px-5 py-3 rounded-lg">
                          Complete
                        </button>
                      ) : (
                        <button onClick={handleSearch} type="button" className="bg-gray-800 border border-gray-700 hover:border-gray-500 transition-colors text-white px-5 py-3 rounded-lg">
                          Search
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400">Restaurant Name</label>
                    <input
                      required
                      className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
                      placeholder="e.g. Ichiran Ramen"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400">Category</label>
                    <select required onChange={(e) => setCategory(e.target.value)} className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gray-500">
                      <option value="">Select a category</option>
                      <option value="Ramen">Ramen</option>
                      <option value="Sushi">Sushi</option>
                      <option value="Izakaya">Izakaya</option>
                      <option value="Cafe">Cafe</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400">Your Rating</label>
                    <div className="flex gap-2 text-3xl">
                      {[1,2,3,4,5].map((star) => (
                        <span
                          onClick={() => handleStarCount(star)}
                          key={star}
                          className={star <= starCount ? "text-yellow-400 cursor-pointer" : "text-gray-600"}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      required
                      type="checkbox"
                      id="ate"
                      className="w-4 h-4 accent-green-500"
                      onClick={handleAte}
                    />
                    <label htmlFor="ate" className="text-sm text-gray-400">
                      I have visited this restaurant
                    </label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400">Review (optional)</label>
                    <textarea
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 resize-none"
                      placeholder="Share your thoughts..."
                      rows={4}
                    />
                  </div>

                  <button type="submit" className="bg-green-700 hover:bg-green-600 transition-colors text-white font-semibold py-4 rounded-lg mt-2">
                    Add Restaurant
                  </button>

                </form>
              </div>
            </div>

          )}
        </div>
      </div>
    </>
  )
}
