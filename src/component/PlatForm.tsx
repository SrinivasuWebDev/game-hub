import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

import usePlatform from "../hooks/usePlatform"
import { Platform } from "../hooks/UseGames"

interface Props{
    onSelectedPlatform:(platform:Platform)=>void
    selectedPlatform:Platform | null
}

const PlatForm = ({onSelectedPlatform,selectedPlatform}:Props) => {

let{data}=usePlatform()

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
        {selectedPlatform?.name || "platform"}
        </MenuButton>
        <MenuList>
            {data.map((gamestation)=><MenuItem key={gamestation.id} onClick={()=>{onSelectedPlatform(gamestation)}}>{gamestation.name}</MenuItem>)}
        </MenuList>
    </Menu>

  )
}

export default PlatForm