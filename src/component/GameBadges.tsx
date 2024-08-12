import { Badge } from "@chakra-ui/react"

interface Prop{
score:number
}

const GameBadges = ({score}:Prop) => {

    let color=score>75?'green':score>50&&score<75?'yellow':'red'
  return (
    <Badge colorScheme={color} paddingX='10px' fontSize='14px'>{score}</Badge>
  )
}

export default GameBadges