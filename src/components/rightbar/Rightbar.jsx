import './rightbar.css'

export default function Rightbar({ profile }) {
    const HomeRightbar = () => {
        return (
        <>
            <div className="birthdayContainer">
            <img className="birthdayImg" src="assets/gift.png" alt="" />
            <span className="birthdayText">
                <b>Dylan</b> and <b>3 other friends</b> have a birhday today.
            </span>
            </div>
            <img className="rightbarAd" src="assets/ad.png" alt="" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
                <h1>Temp users</h1>
            </ul>
        </>
        );
    };

    const ProfileRightbar = () => {
        return (
        <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">London</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Manchester</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img
                        src="assets/person/1.jpeg"
                        alt=""
                        className="rightbarFollowingImg"
                    />
                    <span className="rightbarFollowingName">John Smith</span>
                </div>
                <div className="rightbarFollowing">
                    <img
                        src="assets/person/2.jpeg"
                        alt=""
                        className="rightbarFollowingImg"
                    />
                    <span className="rightbarFollowingName">John Smith</span>
                </div>
                <div className="rightbarFollowing">
                    <img
                        src="assets/person/3.jpeg"
                        alt=""
                        className="rightbarFollowingImg"
                    />
                    <span className="rightbarFollowingName">John Smith</span>
                </div>
                <div className="rightbarFollowing">
                    <img
                        src="assets/person/4.jpeg"
                        alt=""
                        className="rightbarFollowingImg"
                    />
                </div>
            </div>
        </>
        );
    };
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}