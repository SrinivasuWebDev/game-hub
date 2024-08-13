import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"


const SortSelector = () => {

    const sortListArray=["Relevance","Date added","Name","Releasedate","popularity","Average Rating"]
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Sort By</MenuButton>
        <MenuList>
          {sortListArray.map((sorts)=><MenuItem>{sorts}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default SortSelector