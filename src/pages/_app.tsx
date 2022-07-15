import '../../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <Component height="100%" {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
