import { useState ,useEffect} from "react"
import ApiClient from "../service/ApiClient"
import { CanceledError } from "axios"

interface Gener{
    id:number
    name:string
}

interface FetchGenereData{
    count:number
    results:Gener[]
}

const UseGener=()=>{
    
    let[geners,setGeners]=useState<Gener[]>([])
    let[error,setError]=useState("")
    let[isloading,setLoading]=useState(false)
   
   useEffect(()=>{
       const controller=new AbortController()
       setLoading(true)
       ApiClient.get<FetchGenereData>("/genres",{signal:controller.signal})
       .then(res=>{
           setGeners(res.data.results)
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
   
   return {geners,error,isloading}
}
export default UseGener