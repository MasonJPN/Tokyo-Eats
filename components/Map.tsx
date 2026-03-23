'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { RestaurantData } from '@/data/restaurants'




import L from 'leaflet'

const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

L.Marker.prototype.options.icon = defaultIcon


export default function Map() {

const average = RestaurantData.reduce((sum, r) => sum + r.ranking, 0) / RestaurantData.length

  return (
    
    <MapContainer
      center={[35.6762, 139.7500]} 
      zoom={11} 
      style={{ height: "70vh", width: "95%", borderRadius: "20px" }}
    >

        {RestaurantData.map((restaurant) => {
            return (
                <Marker key={restaurant.id} position={[restaurant.location.lat, restaurant.location.lng]} >
                    <Popup>
                        <img />
                        <h2>{restaurant.name}</h2>
                        <p>{"★".repeat(restaurant.ranking) }</p>
                        <p>{restaurant.review}</p>
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