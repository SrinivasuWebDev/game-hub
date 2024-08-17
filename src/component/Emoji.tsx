import target from "../../public/6152022_general2_13.jpg"
import thumps from "../../public/thumps.webp"
import bullsey from "../../public/bullsey.png"
import { Image, ImageProps } from "@chakra-ui/react"

interface Prop{
    rating:number
}

const Emoji = ({rating}:Prop) => {
    console.log(rating);
    

    if(rating<3) return null;

    const emoji:{[key:number]:ImageProps}={
        3:{src:thumps,alt:"good",boxSize:"25px"},
        4:{src:bullsey,alt:"best",boxSize:"25px"},
        5:{src:target,alt:"most recomended",boxSize:"25px",background:"none"}
    }
    
  return (
   <Image  {...emoji[rating]} marginTop={2}></Image>
  )
}

export default Emoji