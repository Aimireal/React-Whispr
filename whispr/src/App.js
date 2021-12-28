import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import Register from './pages/register/Register'
import Messenger from './pages/messenger/Messenger'

import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import theme from './lib/theme'

const App = () => {
    const { user } = useContext(AuthContext)
    return (
        <ChakraProvider theme={theme}>
             <Router>
                <Switch>
                    <Route exact path="/">
                        {user ? <Home /> : <Register />}
                    </Route>
                    <Route path="/login">
                        {user ? <Redirect to="/" /> : <Login />}
                    </Route>
                    <Route path="/register">
                    {user ? <Redirect to="/" /> : <Register/>}
                    </Route>
                    <Route path="/messenger">
                    {!user ? <Redirect to="/" /> : <Messenger/>}
                    </Route>
                    <Route path="/profile/:username">
                        <Profile />
                    </Route>
                </Switch>
            </Router>
        </ChakraProvider>
    )
}

export default App