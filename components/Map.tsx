'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import { useRestaurant } from '@/context/context'



import L from 'leaflet'

const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

L.Marker.prototype.options.icon = defaultIcon


export default function Map() {
const {restaurants} = useRestaurant()
const average =
  restaurants.length > 0
    ? restaurants.reduce((sum, r) => sum + r.ranking, 0) / restaurants.length
    : 0

  return (
    
    <MapContainer
      center={[35.6762, 139.7500]} 
      zoom={11} 
      style={{ height: "70vh", width: "95%", borderRadius: "20px" }}
    >

        {restaurants.map((restaurant) => {
            return (
                <Marker key={restaurant.id} position={[restaurant.location.lat, restaurant.location.lng]} >
                    <Popup >
                      <div className="  ">
                        <img className="h-40 w-40 rounded-xl border-gray-950" src={restaurant.image}/>
                        <h2 className=" mt-1 text-xl font-bold">{restaurant.name}</h2>
                        <p className="font-bold"> Rating: <span className='text-yellow-400'>{"★".repeat(restaurant.ranking) }</span></p>
                        <p><span className="font-bold">Review: </span>"{restaurant.review}"</p>
                          
                      </div>
                    </Popup>
                </Marker>
            )
        })}

      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
        tileSize={512}
       zoomOffset={-1}
        />
    </MapContainer>
  )
}