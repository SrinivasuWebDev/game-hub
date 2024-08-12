import { useState ,useEffect} from "react"
import ApiClient from "../service/ApiClient"
import { CanceledError } from "axios"



interface FetchResponse<T>{
    count:number
    results:T[]
}

const UseData=<T>(endpoint:string)=>{
    
    let[data,setData]=useState<T[]>([])
    let[error,setError]=useState("")
    let[isloading,setLoading]=useState(false)
   
   useEffect(()=>{

       const controller=new AbortController()
     
       setLoading(true)
      
       ApiClient.get<FetchResponse<T>>(endpoint,{signal:controller.signal})
       .then(res=>{
           setData(res.data.results)
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
   
   return {data,error,isloading}
}
export default UseData