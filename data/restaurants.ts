import {Restaurant} from '../types'


 export const RestaurantData: Restaurant[] = [
    {
    name: "Sushiro",
    ate: true,
    location: {lng:139.6503, lat:35.6762,},
    ranking: 3,
    category: "Sushi",
    review: "Decent sushi for cheap",
    image: "",
    id: 1
    },

    {
    name: "Ichiran Ramen Shibuya",
    ate: true,
    location: {lng:139.8203, lat:35.6766 ,},
    ranking: 3,
    category: "Ramen",
    review: "It was decent ramen. Not worth the hype in my opinion.",
    image: "",
    id: 2
    },
    {
    name: "McDonald's Shibuya",
    ate: true,
    location: {lng:139.698, lat:35.6617 ,},
    ranking: 4,
    category: "Other",
    review: "The food and service was very fast but this location was super busy. Finding a place to sit was difficult.",
    image: "/mcdon.png",
    id: 3
    }
];