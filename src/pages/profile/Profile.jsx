
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
                        <img
                            className="profileCoverImg"
                            src="assets/post/7.jpeg"
                            alt=""
                        />
                        <img
                            className="profileUserImg"
                            src="assets/person/7.jpeg"
                            alt=""
                        />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Dylan</h4>
                            <span className="profileInfoDesc">Whaddup</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed/>
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}