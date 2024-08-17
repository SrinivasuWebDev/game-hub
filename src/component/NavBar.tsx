import { HStack, Img } from "@chakra-ui/react"
import logo from "../assets/networking_7493463.png"
import DarkModeSwitch from "./DarkModeSwitch"
import InputSearchBar from "./InputSearchBar"

interface Prop{
  onsearch:(submitInput:string)=>void
}



const NavBar = ({onsearch}:Prop) => {
  return (
    <HStack justifyContent="space-between" paddingEnd='10px'>
        <Img src={logo} boxSize={'60px'}></Img>
        <InputSearchBar onsearch={onsearch}></InputSearchBar>
        <DarkModeSwitch ></DarkModeSwitch>
    </HStack>
  )
}

export default NavBar