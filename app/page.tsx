import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import Statbar from "@/components/Statbar";
import Recents from "@/components/Recents";


export default function Home() {
  return (
    <div >
      
      <Statbar/>
      <main className="flex gap-6 px-10 mt-10">
      <div className="flex-1">
        <Map/>
      </div>
      <div className="w-120 ">
        <Recents/>
      </div>
      </main>

    </div>
  );
}
