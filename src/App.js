import Profile from "./pages/profile/Profile";

import { ChakraProvider } from '@chakra-ui/react'
import theme from "./components/lib/Theme";

function App() {
  return(
    <ChakraProvider theme={theme}>
      <Profile/>
    </ChakraProvider>
  )
}

export default App;