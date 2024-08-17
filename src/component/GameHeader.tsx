import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"

interface Prop{
    gameQuery:GameQuery
}


export const GameHeader = ({gameQuery}:Prop) => {

    const heading=`${gameQuery.Platform?.name || ""} ${gameQuery.genere?.name || ""} Games`
  return (
    <Heading marginY={2} as="h1" color="blue">{heading}</Heading>
  )
}
