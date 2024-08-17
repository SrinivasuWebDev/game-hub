import { useEffect, useState } from "react"
import ApiClient from "../service/ApiClient.ts"
import { CanceledError } from "axios"
import UseData from "./useData.ts"
import { Gener } from "./useGenere.ts"
import { GameQuery } from "../App.tsx"

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
 
 
const useGame=(gameQuery:GameQuery)=>
    UseData<Game>('/games',
        {params:{
            genres:gameQuery.genere?.id,
            platforms:gameQuery.Platform?.id,
            ordering:gameQuery.selectedOrder,
            search:gameQuery.onsearch
        }},
        [gameQuery])
export default useGame