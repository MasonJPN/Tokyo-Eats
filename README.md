# Tokyo Eats 
 
A personal restaurant tracker built for me and my friends to log every place we've eaten across Tokyo. Drop a pin, leave a review, track your favourites — all on a live interactive map.
 
**Live Site:** [https://tokyoeatss.netlify.app/]
 
---
 
## How It's Made
 
**Tech used:** Next.js, TypeScript, Tailwind CSS, Leaflet, Mapbox API, Firebase Firestore, Firebase Storage
 
Tokyo Eats is built around a Leaflet map powered by Mapbox tiles. When you want to add a restaurant, you type the name or address into the add form and it hits the **Mapbox Geocoding API** to convert that address into real latitude and longitude coordinates. Those coordinates, along with the restaurant name, category, star rating, review, and photo, get saved to **Firebase Firestore**.
 
When the map loads, it pulls all saved restaurants from Firestore via a custom React Context provider and renders a marker at each location. Clicking a marker opens a popup showing the photo, name, star rating, and review. The dashboard homepage also surfaces live stats — total spots visited, average rating, top category, and highest rated restaurant — all calculated dynamically from the Firestore data.
 
The List page lets you browse all restaurants with a search bar and category filter pills (Ramen, Sushi, Izakaya, Cafe, Other), making it easy to find a specific spot or browse by type.
 
---
 
## Optimizations
 
Future improvements I'd like to add:
 
- Firebase Storage integration for persistent image uploads (currently images are stored as temporary object URLs)
- Authentication so only we can add or remove entries
- A "Want to Visit" wishlist mode separate from visited spots
- Mobile-optimised map view for on-the-go use in Tokyo
---
 
## Lessons Learned
 
Working with two separate Mapbox services in the same project — the Geocoding API for address lookup and the Tiles API for map rendering — taught me how to think about APIs as modular tools that each solve one specific problem. Wiring Leaflet and Mapbox together also gave me a solid understanding of how map libraries separate the rendering engine from the data layer.
 
Managing shared state across the map, dashboard stats, and list view using React Context showed me the value of a single source of truth. Any restaurant added instantly reflects across all three views without any extra fetch calls.
