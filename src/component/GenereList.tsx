import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import UseGener, { Gener } from "../hooks/useGenere"
import getCropedIamge from "../service/getCropedImage"
interface Props{
  onselectGenere:(genere:Gener)=>void
}

const GenereList = ({onselectGenere}:Props) => {
    const {data,isloading,error}=UseGener()

    if(error) return null;
    
    if(isloading) return <Spinner/>

  return (
    <List>{data.map((gener)=><ListItem paddingY={3}>
        <HStack>
           <Image borderRadius="8px" boxSize="36px" src={getCropedIamge(gener.image_background)}></Image>
           <Button variant="link" fontSize="lg" onClick={()=>{onselectGenere(gener)}}>{gener.name}</Button>
        </HStack>
    </ListItem>)}</List>
  )
}

export default GenereList