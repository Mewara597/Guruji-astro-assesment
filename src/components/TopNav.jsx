import { Box, Flex, Spacer } from '@chakra-ui/react';
import viteLogo from '/vite.svg';

export default function TopNav() {
  return (
    <Flex>
      <img src={viteLogo} className='logo' alt='Vite logo' />
      <div>Guruji</div>
      <Spacer />
      <Box bg='red.500'>
        <span>Home</span>&nbsp;
        <span>Call with astrologer</span>&nbsp;
        <span>Live (Comming soon)</span>
      </Box>
      <Spacer />
      <Box w='70px' h='10' bg='red.500' />
    </Flex>
  );
}
