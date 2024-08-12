import { useEffect, useState } from "react"
import ApiClient from "../service/ApiClient.ts"
import { CanceledError } from "axios"

const useGame=()=>{

 
    interface Game{
        id:number
        name:string
    }
    
    interface FetchGamesData{
        count:number
        results:Game[]
    }

     let[games,setGames]=useState<Game[]>([])
     let[error,setError]=useState("")
    
    useEffect(()=>{
        const controller=new AbortController()

        ApiClient.get<FetchGamesData>("/games",{signal:controller.signal})
        .then(res=>setGames(res.data.results))
        .catch((errormes)=>{
            if(errormes instanceof CanceledError) return;
            setError(errormes.message)})

        return ()=>controller.abort();
    },[]
)
    return {games,error}
}
export default useGame