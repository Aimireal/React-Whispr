import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";

import { ChakraProvider } from '@chakra-ui/react'
import theme from "./components/lib/Theme"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Redirect,
} from "react-router-dom"
//import { useContext } from "react"


function App() {
  //const { user } = useContext(AuthContext);
  return(
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile/:username" element={<Profile/>} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App;