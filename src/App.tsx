import { Grid, GridItem } from "@chakra-ui/react"
import { Show } from '@chakra-ui/react'
import NavBar from "./component/NavBar"
import GameGrid from "./component/GameGrid"
import GenereList from "./component/GenereList"

 
const App = () => {
  return (
    <>
    <Grid templateAreas={{
      base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`
    }}>

    <GridItem area='nav' >
      <NavBar></NavBar>
    </GridItem>
    <Show above="lg">
    <GridItem area='aside' bg='red'>
      <GenereList></GenereList>
    </GridItem>
    </Show>
    <GridItem area='main'><GameGrid></GameGrid></GridItem>
                
                            
    </Grid></>
  )
}

export default App