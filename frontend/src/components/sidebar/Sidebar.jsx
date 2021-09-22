import "./sidebar.css";
import {
	RssFeed,
	Chat,
	PlayCircleFilledOutlined,
	Group,
	Bookmark,
	HelpOutline,
	WorkOutline,
	Event,
	School,
} from "@material-ui/icons";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<ul className="sidebarList">
					<li className="sidebarListItem">
						<RssFeed className="sidebarListItemIcon" />
						<span className="sidebarListItemText">Feed</span>
					</li>
					<li className="sidebarListItem">
						<Chat className="sidebarListItemIcon" />
						<span className="sidebarListItemText">Chat</span>
					</li>
					<li className="sidebarListItem">
						<PlayCircleFilledOutlined className="sidebarListItemIcon" />
						<span className="sidebarListItemText">Videos</span>
					</li>
					<li className="sidebarListItem">
						<Group className="sidebarListItemIcon" />
						<span className="sidebarListItemText">Groups</span>
					</li>
					<li className="sidebarListItem">
						<Bookmark className="sidebarListItemIcon" />
						<span className="sidebarListItemText">Bookmarks</span>
					</li>
					<li className="sidebarListItem">
						<HelpOutline className="sidebarListItemIcon" />
						<span className="sidebarListItemText">Questions</span>
					</li>
					<li className="sidebarListItem">
						<WorkOutline className="sidebarListItemIcon" />
						<span className="sidebarListItemText">Jobs</span>
					</li>
					<li className="sidebarListItem">
						<Event className="sidebarListItemIcon" />
						<span className="sidebarListItemText">Events</span>
					</li>
					<li className="sidebarListItem">
						<School className="sidebarListItemIcon" />
						<span className="sidebarListItemText">Courses</span>
					</li>
				</ul>
				<button className="sidebarButton">Show More</button>
				<hr className="sidebarHr" />
				<ul className="sidebarFriendList">
					<li className="sidebarFriend">
						<img
							src="/assets/persons/2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">NAME 1</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/persons/2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">NAME 2</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/persons/2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">NAME 2</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/persons/2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">NAME 2</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/persons/2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">NAME 2</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/persons/2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">NAME 2</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/persons/2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">NAME 2</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/persons/2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">NAME 2</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/persons/2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">NAME 2</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/persons/2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">NAME 2</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/persons/2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">NAME 2</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/persons/2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">NAME 2</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/persons/2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">NAME 2</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/persons/2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">NAME 2</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/persons/2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">NAME 2</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
