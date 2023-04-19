import { Box, Flex, Spacer } from '@chakra-ui/react';
import viteLogo from '/vite.svg';
import { Image } from '@chakra-ui/react'

export default function TopNav() {
  return (
    <Flex>
      <Image boxSize="70px" src={viteLogo} alt='Vite logo' />
      <div>Guruji</div>
      <Spacer />
      <Box  gridGap={'20px'}fontWeight={'bold'} >
        <span  style={{marginLeft:"20px", fontSize:"24px", color:'rgb(233 138 69)' }}>Home </span>
        <span style={{marginLeft:"20px", fontSize:"24px" }} >Call with astrologer</span>&nbsp;
        <span style={{marginLeft:"20px", fontSize:"24px" }}>Live (Comming soon)</span>
      </Box>
      <Spacer />
      <Image
        borderRadius='full'
        boxSize='70px'
        src='https://bit.ly/dan-abramov'
        alt='Dan Abramov'
      />
    </Flex>
  );
}
