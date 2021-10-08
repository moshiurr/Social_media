const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

//external routers
const userRoute = require("./src/routers/users.router");
const authRoute = require("./src/routers/auth");
const postRoute = require("./src/routers/posts.router");

require("./src/db/db");

const app = express();

const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

//routes
app.get("/", (req, res) => {
	res.send("welcome");
});

//stating the server

app.listen(port, () => {
	console.log(`Backend running on port ${port}`);
});
