import {
  ChakraProvider,
} from '@chakra-ui/react'
import { Card } from './components/Card';
import { Header } from './components/Header/Header';

function App() {
  return (
    <>
      <ChakraProvider>
        <Header />

        <Card id={0} paragraph={'Faça o login'} details={'Login'} />

      </ChakraProvider>
    </>
  );
}

export default App;
