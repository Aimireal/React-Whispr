
import "./profile.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
    return (
        <>
            <Navbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">

                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Dylan</h4>
                            <span className="profileInfoDesc">Whaddup</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}