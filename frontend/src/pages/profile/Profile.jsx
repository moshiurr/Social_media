import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

export default function Profile() {
	return (
		<>
			<Topbar />
			<div className="profile">
				<Sidebar />
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img
								src="/assets/posts/8.jpeg"
								alt=""
								className="profileCoverImg"
							/>
							<img
								src="/assets/persons/10.jpeg"
								alt=""
								className="profileUserImg"
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">ALif Khan</h4>
							<h4 className="profileInfoDesc">Hello, My Firends</h4>
						</div>
					</div>
					<div className="profileRightBottom">
						<Feed />
						<Rightbar profile />
					</div>
				</div>
			</div>
		</>
	);
}
