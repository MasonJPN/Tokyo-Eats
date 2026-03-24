'use client'
import {useState} from "react"

export default function SearchBar(){
const [searchInput, setSearchInput] = useState("")
return(
    <>
        <div className="ml-30 ">
            <input
              className=" w-165 h-13 text-white rounded-lg bg-gray-900 border border-gray-800"
              type="text"
              placeholder="Search restaurants..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
        </div>




    </>
)

}