import { Box, Flex, Grid, GridItem, HStack } from "@chakra-ui/react"
import { Show } from '@chakra-ui/react'
import NavBar from "./component/NavBar"
import GameGrid from "./component/GameGrid"
import GenereList from "./component/GenereList"
import { useState } from "react"
import { Gener } from "./hooks/useGenere"
import PlatForm from "./component/PlatForm"
import { Platform } from "./hooks/UseGames"
import SortSelector from "./component/SortSelector"

export interface GameQuery{
  genere: Gener | null
  Platform: Platform | null
  selectedOrder:string
  onsearch:string
}
 
const App = () => {

  //  const [selectedgenere,setselectedGenere]=useState<Gener | null>(null)
  //  const [selectedPlatform,setSelectdPlatform]=useState<Platform | null>(null)

   const [gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)
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
      <NavBar onsearch={(onsearch)=>setGameQuery({...gameQuery,onsearch})}></NavBar>
    </GridItem>
    <Show above="lg">
    <GridItem area='aside' bg='teal 50' paddingX={5}>
      <GenereList selectedGenere={gameQuery.genere} onselectGenere={(genere)=>setGameQuery({...gameQuery,genere})}></GenereList>
    </GridItem>
    </Show>
    <GridItem area='main'>
      <Flex paddingLeft={9}>
         <Box marginRight={7}>
           <PlatForm selectedPlatform={gameQuery.Platform} onSelectedPlatform={(Platform)=>setGameQuery({...gameQuery,Platform})}></PlatForm>
         </Box>
         <SortSelector currentOrder={gameQuery.selectedOrder} onSelecedSortOrders={(selectedOrder)=>setGameQuery({...gameQuery,selectedOrder})}></SortSelector>
      </Flex>
      <GameGrid gameQuery={gameQuery}></GameGrid>
    </GridItem>             
    </Grid></>
  )
}

export default App