import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

import usePlatform from "../hooks/usePlatform"


const PlatForm = () => {

let{data}=usePlatform()

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Platform</MenuButton>
        <MenuList>
            {data.map((gamestation)=><MenuItem>{gamestation.name}</MenuItem>)}
        </MenuList>
    </Menu>

  )
}

export default PlatForm