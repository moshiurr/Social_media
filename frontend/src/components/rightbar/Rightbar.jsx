import "./rightbar.css";

export default function Rightbar() {
	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				<div className="birthdayContainer">
					<img src="/assets/gift.png" alt="" className="birthdayImg" />
					<span className="birthdayText">
						<b>Pola Fester</b> and <b>3 others friends</b> have birthday today.
					</span>
				</div>
				<img src="/assets/ad.png" alt="" className="rightbarAd" />
				<h4 className="rightbarTitle">Online Friends</h4>
				<ul className="rightbarFriendList">
					<div className="rightbarProfleImgContainer">
						<img
							src="/assets/persons/3.jpeg"
							alt=""
							className="rightbarProfileImg"
						/>
						<span className="rightbarOnline"></span>
					</div>
				</ul>
			</div>
		</div>
	);
}
