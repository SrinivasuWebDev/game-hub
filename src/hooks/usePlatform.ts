import UseData from "./useData"

interface PlatformType{
    id:number
    name:string
    slug:string
}

const usePlatform=()=>UseData<PlatformType>("/platforms/lists/parents")
export default usePlatform