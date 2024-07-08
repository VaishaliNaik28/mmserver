const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/messages",(req,res) => {
		let m = ["If people knew how hard I worked to get my mastery, it wouldn't seem so wonderful after all.",
			"Do the best you can until you know better. Then when you know better, do better.",
			"Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work.",
			"Strive not to be a success, but rather to be of value.",
			"It is hard to fail, but it is worse never to have tried to succeed.",
			"Today a reader. Tomorrow a leader."];
		let r = parseInt(Math.random() * m.length);
		res.send({"msg":m[r]});
		res.end();
		});
app.listen(9000,() => {console.log("ready @ 9000");});