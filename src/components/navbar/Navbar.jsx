import './navbar.css'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import ThemeToggle from '../ThemeToggle'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span className="logo">Whispr</span>
                </Link>  
            </div>
            <div className="navbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input
                        placeholder="Search for users/posts"
                        className="searchInput"
                    />
                </div>
            </div>
            <div className="navbarRight">
                <div className="navbarLinks">
                    <span className="navbarLink">Home</span>
                    <span className="navbarLink">Timeline</span>
                </div>
                <div className="navbarIcons">
                    <div className="navbarIconItem">
                        <Person/>
                        <span className="navbarIconBadge">1</span>
                    </div>
                    <div className="navbarIconItem">
                        <Chat/>
                        <span className="navbarIconBadge">2</span>
                    </div>
                    <div className="navbarIconItem">
                        <Notifications/>
                        <span className="navbarIconBadge">1</span>
                    </div>
                </div>
            </div>
            <ThemeToggle />
        </div>
    )
}