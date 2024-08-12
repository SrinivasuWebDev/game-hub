import { HStack, Switch, Text,useColorMode} from "@chakra-ui/react"

const DarkModeSwitch = () => {
//colormode gives the current color in the page 
//togglecolormode is a function to change colormode color
let {toggleColorMode,colorMode}=useColorMode()

  return (
    <HStack>
        <Switch colorScheme="green" isChecked={colorMode==="dark"} onChange={toggleColorMode}></Switch>
        <Text>DarkMode</Text>
    </HStack>
  )
}

export default DarkModeSwitch