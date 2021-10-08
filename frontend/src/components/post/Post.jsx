import { MoreVert } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";

import "./post.css";

export default function Post({ post }) {
	const [like, setLike] = useState(post.likes.length);
	const [isLiked, setIsLiked] = useState(false);
	const [user, setUser] = useState({});
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await axios.get(
					"http://localhost:8800/api/users/" + post.userId
				);

				setUser(res.data);
				console.log(res);
			} catch (err) {
				console.log(err);
			}
		};

		fetchUser();
	}, [post.userId]);

	const likeHandler = () => {
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};

	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img
							src={user.profilePicture || PF + "persons/noAvatar.png"}
							alt=""
							className="postProfileImg"
						/>
						<span className="postUsername">{user.username}</span>
						<span className="postDate">{post.date}</span>
					</div>
					<div className="postTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{post?.desc}</span>
					<img src={PF + "persons/noCover.png"} alt="" className="postImg" />
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img
							src={PF + "like.png"}
							alt=""
							className="likeIcon"
							onClick={likeHandler}
						/>
						<img
							src={PF + "heart.png"}
							alt=""
							className="likeIcon"
							onClick={likeHandler}
						/>
						<span className="postLikeCounter">{like} people like it</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText">{post.comment} comments</span>
					</div>
				</div>
			</div>
		</div>
	);
}
