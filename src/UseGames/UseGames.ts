import { useEffect, useState } from "react"
import ApiClient from "../service/ApiClient.ts"
import { CanceledError } from "axios"

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
 
 interface FetchGamesData{
     count:number
     results:Game[]
 }
const useGame=()=>{

 

     let[games,setGames]=useState<Game[]>([])
     let[error,setError]=useState("")
     let[isloading,setLoading]=useState(false)
    
    useEffect(()=>{
        const controller=new AbortController()
        setLoading(true)
        ApiClient.get<FetchGamesData>("/games",{signal:controller.signal})
        .then(res=>{
            setGames(res.data.results)
            setLoading(false)                
        })
        .catch((errormes)=>{
            if(errormes instanceof CanceledError) return;
            setError(errormes.message)
            setLoading(false)
        })
            

        return ()=>controller.abort();
    },[]
)
    
    return {games,error,isloading}
}
export default useGame