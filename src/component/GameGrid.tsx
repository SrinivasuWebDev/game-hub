
import { SimpleGrid, Text } from "@chakra-ui/react"
import useGame, { Platform } from "../hooks/UseGames"
import GameCard from "./GameCard"
import { SkeletonCard } from "./SkeletonCard"
import { Gener } from "../hooks/useGenere"

interface Props{
  selectedGenere:Gener | null
  selectdPlatform:Platform | null
}


const GameGrid = ({selectedGenere,selectdPlatform}:Props) => {
  let {data,error,isloading}=useGame(selectedGenere,selectdPlatform)

  const SKELETON=[1,2,3,4,5,6,7,8,9,10,11,12]

  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}} spacing={10} padding={10}>        
        {isloading && SKELETON.map((ite)=><SkeletonCard key={ite}></SkeletonCard>)}
        {data.map((game)=><GameCard key={game.id} game={game}></GameCard>)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid