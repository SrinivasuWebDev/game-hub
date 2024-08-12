
import UseData from "./useData"

 export  interface Gener{
    id:number
    name:string
    image_background:string
} 

const UseGener=()=>UseData<Gener>('genres');
export default UseGener