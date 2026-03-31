'use client'
import dynamic from "next/dynamic"
import Navbar from "@/components/Navbar";
import Statbar from "@/components/Statbar";
import Recents from "@/components/Recents";


const Map = dynamic(() => import("@/components/Map"),{
 ssr: false,
})


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950"  >
      
      <Statbar/>
      <main className=" md:flex gap-6 px-10 mt-10">
      <div className="flex-1">
        <Map/>
      </div>
      <div className="  md:w-120 ">
        <Recents/>
      </div>
      </main>

    </div>
  );
}
