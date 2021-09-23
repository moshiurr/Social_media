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

import { Users } from "../../dummyData";

import CloseFriend from "../closeFriend/CloseFriend";

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
					{Users.map(u => (
						<CloseFriend key={u.id} user={u} />
					))}
				</ul>
			</div>
		</div>
	);
}
