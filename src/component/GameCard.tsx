import { Card, CardBody, Image, Img } from "@chakra-ui/react"
import { Game } from "../UseGames/UseGames"

interface Props{
    game:Game
}
const GameCard = ({game}:Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image}></Image>
        <CardBody fontSize="2xl">{game.name}</CardBody>
    </Card>
  )
}

export default GameCard