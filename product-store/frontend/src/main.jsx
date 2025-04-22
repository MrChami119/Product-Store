import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// Basic theme config
const theme = extendTheme({
  // your customizations here
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)