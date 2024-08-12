
import UseData from "./useData"

 export  interface Gener{
    id:number
    name:string
} 

const UseGener=()=>UseData<Gener>('genres');
export default UseGener