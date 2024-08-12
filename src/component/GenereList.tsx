import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react"
import UseGener from "../hooks/useGenere"
import getCropedIamge from "../service/getCropedImage"

const GenereList = () => {
    const {data}=UseGener()
  return (
    <List>{data.map((gener)=><ListItem paddingY={3}>
        <HStack>
           <Image borderRadius="8px" boxSize="36px" src={getCropedIamge(gener.image_background)}></Image>
           <Text fontSize="lg">{gener.name}</Text>

        </HStack>
    </ListItem>)}</List>
  )
}

export default GenereList