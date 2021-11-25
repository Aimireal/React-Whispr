import './sidebar.css'
import {
    Chat,
    Event,
    Group,
    PlayCircleFilledOutlined,
    RssFeed,
} from "@material-ui/icons";

export default function Sidebar() {
    return(
        <div className="sideBar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon"/>
                        <span className="sidebarListItemText">Video</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <button className="sidebarButton">Show More</button>
                    <hr className="sidebarHr"/>
                    <ul className="sidebarFriendList">
                        
                    </ul>
                </ul>
            </div>
        </div>
    )
}