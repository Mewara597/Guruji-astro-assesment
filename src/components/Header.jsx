import { Box, Stack } from '@chakra-ui/react';
import TopNav from './TopNav';
import Body from './Body';

export default function Header() {
  return (
    <Stack
    p={{ base: 5, md: 10 }}
    direction={{ base: 'column', md: 'row' }}
    bgImage={{
      base: 'none',
      md: 'url(https://media.istockphoto.com/id/1314493164/photo/astrological-zodiac-signs-inside-of-horoscope-circle-astrology-knowledge-of-stars-in-the-sky.jpg?b=1&s=170667a&w=0&k=20&c=Reu_WeDmTPLX5IwHgN4-enYKXJXJHGdqlnAm5D4bhwU=)'
    }}
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    minH={{ base: 'unset', md: '450px' }}
  >
    <Box w='100%'  color='white'>
      <TopNav/>
      <Body /> 
    </Box>
    </Stack>
  );
}
