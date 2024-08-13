import { Grid, GridItem } from "@chakra-ui/react"
import { Show } from '@chakra-ui/react'
import NavBar from "./component/NavBar"
import GameGrid from "./component/GameGrid"
import GenereList from "./component/GenereList"
import { useState } from "react"
import { Gener } from "./hooks/useGenere"

 
const App = () => {

   const [selectedgenere,setselectedGenere]=useState<Gener | null>(null)

  return (
    <>
    <Grid templateAreas={{
      base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`
    }}
    
    templateColumns={
      {
        base:'1fr',
        lg:'200px 1fr'
      }
    }
    >

    <GridItem area='nav' >
      <NavBar></NavBar>
    </GridItem>
    <Show above="lg">
    <GridItem area='aside' bg='teal 50' paddingX={5}>
      <GenereList selectedGenere={selectedgenere} onselectGenere={(genere)=>setselectedGenere(genere)}></GenereList>
    </GridItem>
    </Show>
    <GridItem area='main'><GameGrid selectedGenere={selectedgenere}></GameGrid></GridItem>
                
                            
    </Grid></>
  )
}

export default App