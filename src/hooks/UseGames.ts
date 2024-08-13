import { useEffect, useState } from "react"
import ApiClient from "../service/ApiClient.ts"
import { CanceledError } from "axios"
import UseData from "./useData.ts"
import { Gener } from "./useGenere.ts"

export interface Platform{
    id:number
    name:string
    slug:string
}

export  interface Game{
     id:number
     name:string     
     background_image:string
     parent_platforms:{platform:Platform}[]
     metacritic:number
 }
 
 
const useGame=(selectedGenere: Gener | null,selectedPlatform:Platform | null)=>
    UseData<Game>('/games',
        {params:{
            genres:selectedGenere?.id,platforms:selectedPlatform?.id
        }},
        [selectedGenere?.id,selectedPlatform?.id])
export default useGame