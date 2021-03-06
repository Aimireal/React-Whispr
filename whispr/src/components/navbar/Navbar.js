import './navbar.css'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import ThemeToggle from '../ThemeToggle';

const Navbar = () => {
    const { user } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Whispr</span>
                </Link>
            </div>
            <div className="navbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search for anything" className="searchInput" />
                </div>
            </div>
            <div className="navbarRight">
                <div className="navbarLinks">
                    <span className="navbarLink">Timeline</span>
                    <span className="navbarLink">Messenger</span>
                </div>
                <div className="navbarIcons">
                    <div className="navbarIconItem">
                        <Person />
                        <span className="navbarIconBadge">1</span>
                    </div>
                    <div className="navbarIconItem">
                        <Chat />
                        <span className="navbarIconBadge">1</span>
                    </div>
                    <div className="navbarIconItem">
                        <Notifications />
                        <span className="navbarIconBadge">1</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                <img src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" className="navbarImg" />
                </Link>
            </div>
            <ThemeToggle/>
            <br/>
        </div>
    )
}

export default Navbar