import { MoreVert } from "@material-ui/icons";

import "./post.css";

export default function Post({ post }) {
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img
							src="/assets/persons/1.jpeg"
							alt=""
							className="postProfileImg"
						/>
						<span className="postUsername">Alif Khan</span>
						<span className="postDate">{post.date}</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{post?.desc}</span>
					<img src={post.photo} alt="" className="postImg" />
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img src="/assets/like.png" alt="" className="likeIcon" />
						<img src="/assets/heart.png" alt="" className="likeIcon" />
						<span className="postLikeCounter">{post.like} people like it</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText">{post.comment} comments</span>
					</div>
				</div>
			</div>
		</div>
	);
}
