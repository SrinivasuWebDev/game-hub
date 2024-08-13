import {FaWindows,FaXbox,FaPlaystation,FaAndroid,FaApple,FaLinux} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import { BsGift } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react"
import { Platform } from "../hooks/UseGames"
import { IconType } from 'react-icons';

interface PlatformProps{
    platform:Platform[]
}

const PlatformIcons = ({platform}:PlatformProps) => {
 
    const IconMap:{[key:string]:IconType}={
   pc:FaWindows,
   playstation:FaPlaystation,
   xbox:FaXbox,
   nintendo:SiNintendo,  
   mac:FaApple,
   linux:FaLinux,
   ios:MdPhoneIphone,
   web:BsGift,
   android:FaAndroid

 }

  return (
  <HStack marginY={"20px"} marginX={'10px'}>
  {platform.map((platform)=><Icon key={platform.slug} as={IconMap[platform.slug]} color="gray.500"></Icon>)}
  </HStack>
  )
}

export default PlatformIcons