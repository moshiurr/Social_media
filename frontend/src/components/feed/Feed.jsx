import Share from "../share/Share";
import Post from "../post/Post";
import { useState, useEffect } from "react";
import axios from "axios";
import "./feed.css";

export default function Feed({ username }) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const res = username
					? await axios.get(
							`http://localhost:8800/api/posts/profile/${username}`
					  )
					: await axios.get(
							"http://localhost:8800/api/posts/timeline/614a278720f4ac7366e70959"
					  );
				//let response = await axios(res);
				setPosts(res.data);
				console.log(res);
			} catch (err) {
				console.log(err);
			}
		};

		fetchPost();
	}, [username]);

	return (
		<div className="feed">
			<div className="feedWrapper">
				<Share />

				{posts.map(p => (
					<Post key={p._id} post={p} />
				))}
			</div>
		</div>
	);
}
