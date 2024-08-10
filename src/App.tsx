import { Grid, GridItem } from "@chakra-ui/react"
import { Show, Hide } from '@chakra-ui/react'

 
const App = () => {
  return (
    <>
    <Grid templateAreas={{
      base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`
    }}>

    <GridItem area='nav' bg='blue'>nav</GridItem>
    <Show above="lg">
    <GridItem area='aside' bg='red'>Aside</GridItem>
    </Show>
    <GridItem area='main' bg='green'>menu</GridItem>
                
                            
    </Grid></>
  )
}

export default App