import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<span className="logo">Al'Social</span>
			</div>
			<div className="topbarCenter">
				<Search />
				<input placeholder="Search for Anything" className="searchInput" />
			</div>
			<div className="topbarRight">
				<div className="topbarLinks">
					<div className="topbarLinks">Homepage</div>
					<div className="topbarLink">Timeline</div>
				</div>
				<div className="topbarIcons">
					<div className="topbarIconItem">
						<Person />
						<span className="topbarIconBadge">1</span>
					</div>
					<div className="topbarIconItem">
						<Chat />
						<span className="topbarIconBadge">2</span>
					</div>
					<div className="topbarIconItem">
						<Notifications />
						<span className="topbarIconBadge">3</span>
					</div>
				</div>
				<img src="/assets/persons/1.jpeg" alt="" className="topbarImg" />
			</div>
		</div>
	);
}
