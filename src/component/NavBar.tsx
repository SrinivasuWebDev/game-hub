import { HStack, Img } from "@chakra-ui/react"
import logo from "../assets/networking_7493463.png"
import DarkModeSwitch from "./DarkModeSwitch"
import InputSearchBar from "./InputSearchBar"

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" paddingEnd='10px'>
        <Img src={logo} boxSize={'60px'}></Img>
        <InputSearchBar></InputSearchBar>
        <DarkModeSwitch ></DarkModeSwitch>
    </HStack>
  )
}

export default NavBar