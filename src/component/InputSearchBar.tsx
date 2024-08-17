import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

interface Prop{
    onsearch:(submitInput:string)=>void
}


const InputSearchBar = ({onsearch}:Prop) => {

   const ref=useRef<HTMLInputElement>(null)


  return (
    <form onSubmit={(event)=>{
        event.preventDefault()
        if(ref.current)
            onsearch(ref.current?.value)
            console.log(ref.current?.value);

    }} >
        <InputGroup>
          <InputLeftElement><BsSearch></BsSearch></InputLeftElement>
          <Input borderRadius={20} ref={ref} placeholder="Search for games..." variant="filled"></Input>
        </InputGroup>
    </form>
  )
}

export default InputSearchBar