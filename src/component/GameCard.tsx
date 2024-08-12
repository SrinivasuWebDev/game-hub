import { Card, CardBody, HStack, Image } from "@chakra-ui/react"
import { Game } from "../UseGames/UseGames"
import PlatformIcons from "./PlatformIcons"
import GameBadges from "./GameBadges"

interface Props{
    game:Game
}
const GameCard = ({game}:Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image}></Image>
        <CardBody fontSize="2xl">{game.name}</CardBody>
        <HStack justifyContent="space-between" paddingEnd="10px">
        <PlatformIcons platform={game.parent_platforms.map(platforms=>platforms.platform)}></PlatformIcons>
        <GameBadges score={game.metacritic}></GameBadges>
        </HStack>
    </Card>
  )
}

export default GameCard