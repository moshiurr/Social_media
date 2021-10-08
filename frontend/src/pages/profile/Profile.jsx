import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	const [user, setUser] = useState({});
	const username = useParams().username;

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await axios.get(
					`http://localhost:8800/api/users?username=${username}`
				);

				setUser(res.data);
				//console.log(res);
			} catch (err) {
				console.log(err);
			}
		};

		fetchUser();
	}, [username]);

	return (
		<>
			<Topbar />
			<div className="profile">
				<Sidebar />
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img
								src={user.coverPicture || PF + "persons/noCover.png"}
								alt=""
								className="profileCoverImg"
							/>
							<img
								src={user.profilePicture || PF + "persons/noAvatar.png"}
								alt=""
								className="profileUserImg"
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">{user.username}</h4>
							<h4 className="profileInfoDesc">{user.desc}</h4>
						</div>
					</div>
					<div className="profileRightBottom">
						<Feed username={user.username} />
						<Rightbar user={user} />
					</div>
				</div>
			</div>
		</>
	);
}
