import React from 'react'



 export interface Restaurant{
    name: string;
    ate: boolean;
    location?: {lng:number; lat: number;}
    ranking: number;
    category: string;
    review?: string;
    image?: string;
    id: number;
}










