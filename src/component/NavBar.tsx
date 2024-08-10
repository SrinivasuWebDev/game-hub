import { HStack, Img, Text } from "@chakra-ui/react"
import logo from "../assets/networking_7493463.png"

const NavBar = () => {
  return (
    <HStack>
        <Img src={logo} boxSize={'60px'}></Img>
       <Text>chakra</Text>
    </HStack>
  )
}

export default NavBar