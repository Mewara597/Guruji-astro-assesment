import { Box } from '@chakra-ui/react';
import TopNav from './TopNav';

export default function Header() {
  return (
    <Box bg='tomato' w='100%' paddingBlock={4} paddingInline={20} color='white'>
      <TopNav/>
    </Box>
  );
}
