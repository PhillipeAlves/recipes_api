const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");
const keys = require("./config/keys");
require("dotenv").config();
require("./models/User");
require("./services/passport");

mongoose.Promise = global.Promise;
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/userRoutes")(app);
app.get("/", (req, res) => {
  res.send(
    `
    <html>
    <head>
    <link
    rel="stylesheet"
    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
    crossorigin="anonymous"
  />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Roboto', sans-serif;
      background:  linear-gradient(
        rgba(255, 255, 255, 0.306),
        rgba(255, 213, 0, 0.347)
      ), url("https://iili.io/2kJZox.md.jpg");
      background-size: 500px;
      background-repeat: repeat;
      background-attachment: fixed;
      color: white;
      text-align: center;
      font-size: 2rem;
      letter-spacing: 1.5px;
    }
    h1 {
      font-size: 4rem;
    }
    p {
      margin: 1rem;
    }
    a {
      text-decoration: none;
      color: rgba(255, 213, 0, 0.7);
    }
    a:hover {
      color: rgb(255, 213, 0);
    }
    .banner {
      background: linear-gradient(
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)
        ), url("https://iili.io/2kJZox.md.jpg");
      background-size: 500px;
      background-repeat: repeat;
      background-attachment: fixed;
      width: 100%;
      height: auto;
      padding: 6rem 2rem;
      box-shadow: 0 2px 10px 1px rgba(0, 0, 0, .4);
      border-bottom: 10px solid rgba(255, 213, 0, 0.347);
    }
    </style>
    </head>
    <body>
    <div class="banner">
      <h1>Hi, I'm an API!</h1>
      <p>For more information, please check the <a href="https://github.com/PhillipeAlves/recipes_api"><i class="fab fa-github"></i> docs</a>.</p>
    </div>
    </body> 
    </html>
  `
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
