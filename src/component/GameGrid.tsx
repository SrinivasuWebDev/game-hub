import { useEffect, useState } from "react"
import ApiClient from "../service/ApiClient.ts"
import { Text } from "@chakra-ui/react"

interface Game{
    id:number
    name:string
}

interface FetchGamesData{
    count:number
    results:Game[]
}


const GameGrid = () => {
 let[games,setGames]=useState<Game[]>([])
 let[error,setError]=useState("")

useEffect(()=>{
    ApiClient.get<FetchGamesData>("/games")
    .then(res=>setGames(res.data.results))
    .catch(errormes=>setError(errormes.message))
},[])

  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
        {games.map((game)=><li key={game.id}>{game.name}</li>)}
    </ul>
    </>
  )
}

export default GameGrid