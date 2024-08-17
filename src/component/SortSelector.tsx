import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Prop{
  onSelecedSortOrders:(sortedOrders:string)=>void
  currentOrder:string
}

const SortSelector = ({onSelecedSortOrders,currentOrder}:Prop) => {

    const sortListArray=[{value:"",label:"Relevance"},
      {value:"-added",label:"Date added"},
      {value:"name",label:"Name"},
      {value:"-released",label:"Releasedate"},
      {value:"-metacritic",label:"popularity"},
      {value:"-rating",label:"Average Rating"}]

      const displayCurrentOderToUser=sortListArray.find((obj)=>obj.value===currentOrder);


  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{displayCurrentOderToUser?.label  || "Relevance"}</MenuButton>
        <MenuList>
          {sortListArray.map((sorts)=><MenuItem onClick={()=>{onSelecedSortOrders(sorts.value)}} key={sorts.value} value={sorts.value}>{sorts.label}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default SortSelector