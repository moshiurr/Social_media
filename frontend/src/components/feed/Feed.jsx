import Share from "../share/Share";
import Post from "../post/Post";
import { useState, useEffect } from "react";
import axios from "axios";

import "./feed.css";

export default function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPost = async () => {
			// const res = await axios.get(
			// 	"http://localhost:8800/api/posts/timeline/614a278720f4ac7366e70959"
			// );

			const options = {
				url: `http://localhost:8800/api/posts/timeline/614a278720f4ac7366e70959`,
				method: "GET",
				headers: {
					"Content-Type": "text/json",
				},
				timeout: 30 * 1000,
			};
			try {
				let response = await axios(options);
				setPosts(response.data);
				console.log(response);
			} catch (err) {
				console.log(err);
			}
		};

		fetchPost();
	}, []);

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
