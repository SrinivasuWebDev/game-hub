import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import UseGener, { Gener } from "../hooks/useGenere"
import getCropedIamge from "../service/getCropedImage"

interface Props{
  onselectGenere:(genere:Gener)=>void
  selectedGenere:Gener | null
}

const GenereList = ({onselectGenere,selectedGenere}:Props) => {

    const {data,isloading,error}=UseGener()

    if(error) return null;
    
    if(isloading) return <Spinner/>

  return (<>
    <Heading fontSize="2xl" marginY={1}>Genere</Heading>
    <List>{data.map((gener)=><ListItem key={gener.id} paddingY={3}>
        <HStack>
           <Image borderRadius="8px" boxSize="36px" 
              src={getCropedIamge(gener.image_background)}
              objectFit="cover">  
           </Image>
           <Button whiteSpace="normal" textAlign="left" fontWeight={gener.id===selectedGenere?.id?"bold":"normal"}  variant="link" fontSize="lg" onClick={()=>{onselectGenere(gener)}}>{gener.name}</Button>
        </HStack>
    </ListItem>)}</List>
    </>
  )
}

export default GenereList