import { Card, CardBody, Image, Img, Text } from "@chakra-ui/react"
import { Game } from "../UseGames/UseGames"
import PlatformIcons from "./PlatformIcons"

interface Props{
    game:Game
}
const GameCard = ({game}:Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image}></Image>
        <CardBody fontSize="2xl">{game.name}</CardBody>
        <PlatformIcons platform={game.parent_platforms.map(platforms=>platforms.platform)}></PlatformIcons>
    </Card>
  )
}

export default GameCard