const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

//get a user
router.get("/:userId", async (req, res) => {
	const userId = req.params.userId;
	const username = req.query.username;

	try {
		const user = userId
			? await User.findById(userId)
			: await User.findOne({ username });

		const { password, updatedAt, ...other } = user._doc;
		res.status(200).json(other);
	} catch (err) {
		res.status(500).json(err);
	}
});

//update user
router.put("/:id", async (req, res) => {
	if (req.body.userId === req.params.id || req.body.isAdmin) {
		if (req.body.password) {
			try {
				const salt = await bcrypt.genSalt(10);
				req.body.password = await bcrypt.hash(req.body.password, salt);
			} catch (err) {
				return res.status(500).json(err);
			}
		}
		try {
			const user = await User.findByIdAndUpdate(req.params.id, {
				$set: req.body,
			});
			res.status(200).json("Account has been updated");
		} catch (err) {
			return res.status(500).json(err);
		}
	} else {
		return res.status(403).json("You can update only your account!");
	}
});

//delete user
//delete user
router.delete("/:id", async (req, res) => {
	if (req.body.userId === req.params.id || req.body.isAdmin) {
		try {
			await User.findByIdAndDelete(req.params.id);
			res.status(200).json("Account has been deleted");
		} catch (err) {
			return res.status(500).json(err);
		}
	} else {
		return res.status(403).json("You can delete only your account!");
	}
});

//follow a users
router.patch("/:id/follow", async (req, res) => {
	if (req.body.userId !== req.params.id) {
		try {
			const userToFollow = await User.findById(req.params.id);
			const currentUser = await User.findById(req.body.userId);

			if (!currentUser.followings.includes(req.params.id)) {
				await currentUser.updateOne({ $push: { followings: req.params.id } });
				await userToFollow.updateOne({ $push: { followers: req.body.userId } });

				res.status(200).send("user has been followed");
			} else {
				res.status(403).json("You already follow this user");
			}
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(403).json("You cant follow yourself");
	}
});

//unfollow a users
router.patch("/:id/unfollow", async (req, res) => {
	if (req.body.userId !== req.params.id) {
		try {
			const userToUnFollow = await User.findById(req.params.id);
			const currentUser = await User.findById(req.body.userId);

			if (currentUser.followings.includes(req.params.id)) {
				await currentUser.updateOne({ $pull: { followings: req.params.id } });
				await userToUnFollow.updateOne({
					$pull: { followers: req.body.userId },
				});

				res.status(200).send("user has been unfollowed");
			} else {
				res.status(403).json("You Don't follow this user");
			}
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(403).json("You cant unfollow yourself");
	}
});

//get friends
router.get("/friends/:userId", async (req, res) => {
	try {
		const user = await User.findById(req.params.userId);
		const friends = await Promise.all(
			user.followings.map(friendId => {
				return User.findById(friendId);
			})
		);
		let friendList = [];
		friends.map(friend => {
			const { _id, username, profilePicture } = friend;
			friendList.push({ _id, username, profilePicture });
		});
		res.status(200).json(friendList);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
