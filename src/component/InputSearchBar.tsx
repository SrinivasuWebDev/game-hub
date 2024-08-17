import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"


const InputSearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement><BsSearch></BsSearch></InputLeftElement>
      <Input borderRadius={20} placeholder="Search for games..." variant="filled"></Input>
    </InputGroup>
  )
}

export default InputSearchBar