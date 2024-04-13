import express from "express";
import wordwiz from "./mongo.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express()
const port = 8000;
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get("/", cors(), (req, res) => {})

app.post("/Login", async (req, res) => {
  const {name, password} = req.body

  try {
    const check = await wordwiz.findOne({
      name : name,
      password : password
    })

    if (check) {
      res.json("Exist");
    } else {
      res.json("Does-not-Exist");
    }
  }
  catch(event) {
    res.json("Failed");
  }
})

app.post("/Register", async (req, res) => {
  const {name, email, password} = req.body;
  const data = {
    name : name,
    email : email,
    password : password,
  }

  try {
    const check = await wordwiz.findOne({
      name : name,
      password : password
    })

    if (check) {
      res.json("Exist");
    } else {
      res.json("Does-not-Exist");
      await wordwiz.insertMany([data]);
    }
  }
  catch(event) {
    res.json("Failed");
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
