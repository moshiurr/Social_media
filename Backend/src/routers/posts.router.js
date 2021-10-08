const router = require("express").Router();

const Post = require("../models/Post");
const User = require("../models/User");

//create a post

router.post("/", async (req, res) => {
	const newPost = new Post(req.body);
	try {
		const savedPost = await newPost.save();

		res.status(200).json(savedPost);
	} catch (err) {
		res.status(500).json(err);
	}
});

//get a post by id

router.get("/:id", async (req, res) => {
	try {
		const post = await findById(req.params.id);

		// if (post.userId !== req.body.userId)
		// 	return res.status(403).json("access denied");

		res.status(200).json(post);
	} catch (err) {
		res.status(500).json(err);
	}
});

//update a post

router.put("/:id", async (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	try {
		const post = await Post.findById(req.params.id);

		await post.updateOne({ $set: req.body });

		res.status(200).json("Post has been updated");
	} catch (err) {
		res.status(500).json(err);
	}
});

//delete a posts

router.delete("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);

		if (!post) return res.status(404).json("post not found");
		else if (post.userId == req.body.userId) {
			await post.deleteOne();

			res.status(200).json("Post has been deleted");
		} else {
			res.status(403).json("You can only delelte your post");
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

//like/dislike a post
router.patch("/:id/like", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);

		if (!post.likes.includes(req.body.userId)) {
			await post.updateOne({ $push: { likes: req.body.userId } });
			res.status(200).json("The post has been liked");
		} else {
			await post.updateOne({ $pull: { likes: req.body.userId } });
			res.status(200).json("Post has been unliked");
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

//get timeline

router.get("/timeline/:userId", async (req, res) => {
	try {
		const currentUser = await User.findById(req.params.userId);
		const userPosts = await Post.find({ userId: currentUser._id });

		//promise all is for all the Post.find async functions basically for nested async functions
		const friendPosts = await Promise.all(
			currentUser.followings.map(friendId => {
				return Post.find({ userId: friendId });
			})
		);

		//joining both array
		res.status(200).json(userPosts.concat(...friendPosts));
	} catch (err) {
		res.status(500).json(err);
	}
});

//get user all posts
router.get("/profile/:username", async (req, res) => {
	try {
		const user = await User.findOne({ username: req.params.username });

		userPosts = await Post.find({ userId: user._id });

		res.status(200).json(userPosts);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
