import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <ChakraProvider>
      <Header />
      {/* <Body /> */}
    </ChakraProvider>
  );
}

export default App;
