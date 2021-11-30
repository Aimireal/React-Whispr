import './navbar.css'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import ThemeToggle from '../ThemeToggle'

export default function Navbar() {
    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <span className="logo">Whispr</span>
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
                    <spam className="navbarLink">Home</spam>
                    <spam className="navbarLink">Timeline</spam>
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