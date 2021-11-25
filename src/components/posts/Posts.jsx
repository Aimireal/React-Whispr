import { MoreVert } from "@material-ui/icons";
import "./posts.css";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Posts({ posts }) {
    const [like, setLike] = useState(posts.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                <div className="postTopLeft">
                    <img
                        className="postProfileImg"
                        src={Users.filter((u) => u.id === posts?.userId)[0].profilePicture}
                        alt=""
                    />
                    <span className="postUsername">
                        {Users.filter((u) => u.id === posts?.userId)[0].username}
                    </span>
                    <span className="postDate">{posts.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{posts?.desc}</span>
                    <img className="postImg" src={posts.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
                        <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{posts.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}