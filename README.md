# API

## About

This API was build following the Server Architecture approach of having two separate servers for a SSR Application.

The API is responsible for handling the authentication and the logic around the data layer to be served to the Renderer Server.

It manages the Database authentication, validation, authentication, authorization and logging.

It returns JSON to the Renderer Server.

[API](https://secure-brushlands-32363.herokuapp.com/)

> **note:**
> This README file contains resources about the different steps required to set up a similar API.

---

## SET UP

### FILES AND DEPENDENCIES

#### NODE PROJECT

```
$ mkdir project_name
$ cd project_name
$ npm init -y
$ npm i body-parser
$ npm i express
$ npm i passport
$ npm i passport-google-oauth20
$ npm i dotenv
$ npm i cors
$ npm i cookie-session
$ npm i mongoose
$ npm i forever -g
$ npm i nodemon -D

-or simply:

$ npm init -y
$ npm i body-parser express passport passport-google-oauth20 dotenv cors cookie-session mongoose forever -g nodemon -D

$ touch server.js
```

#### CONFIG DIRECTORY

**_keys.js_**

```
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}
```

**_dev.js_**

> **note:** don't commit this.

```
module.exports = {
    googleClientID: '4324299854039ddfdsffjfra.apps.googleusercontent.com',
    googleClientSecret: 'dsad23232DDdsdsadwfhhjyt54',
    mongoURI: 'mongodb+srv://user:password@cluster0.3vrbv.mongodb.net/database?retryWrites=true&w=majority',
    cookieKey: 'blablabla' //random cookie
};
```

**_prod.js_**

> **note:** process environment variables will be set in Heroku.

```
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
};
```

#### PACKAGE.JSON

```
"scripts": {
"start": "forever index.js",
"server": "nodemon index.js",
"dev": "npm run server"
}
```

### GOOGLE

Follow the instructions for Google's Sign-In server-side flow _[sign-in](https://developers.google.com/identity/sign-in/web/server-side-flow?hl=th#step_1_create_a_client_id_and_client_secret)_.

Store your Google Client ID and Secret as a local variable.

Authorize the redirect URIs in your client credentials.

e.g.:

> http://fluffy-lands-32363.herokuapp.com/api/auth/google/callback

### MONGOOSE

Follow the instructions on how to set up your MongoDB and how to connect it using _[Mongoose](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose)_.

Configure your IP _[Access list](https://docs.atlas.mongodb.com/security/ip-access-list)_. You might want to bind your server to 0.0.0.0 for remote connections. Be aware of the security implications before changing the default.

#### Mongoose Schema

```
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

mongoose.model("users", userSchema);

```

### RESOURCES FOR CODE

- https://dev.to/phyllis_yym/beginner-s-guide-to-google-oauth-with-passport-js-2gh4

- https://medium.com/analytics-vidhya/adding-sign-in-with-google-to-your-website-b82755b79b31

- https://www.freecodecamp.org/news/a-quick-introduction-to-oauth-using-passport-js-65ea5b621a/

---

## DEPLOY

### Deploying with Heroku

#### Create a Procfile (no extensions)

```
web: npm start
```

#### Create a .gitignore file

```
/node_modules
npm-debug.log
.DS_Store
/\*.env
```

#### On your server.js file

```
// Top of your file

require('dotenv').config()

// After all your import staten=ments

var mongoose = require(‘mongoose’);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/your-app-name');

// Bottom of your file

const port = process.env.PORT || 5000;
app.listen(port);

```

#### Commands

```
$ heroku login
$ heroku create

$ git add .
$ git commit -m "Added a Procfile."

$ heroku addons:create mongolab:sandbox

$ git push heroku master
```

### Set config vars

```
$ heroku config:set CLIENT_SECRET=XXX
```

> **note:** for more information check:
> [Mozilla's Express Deployment Guide](https://wiki.developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment)

---

### About the Dependencies

#### Body-parser

> Node.js body parsing middleware.
> Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

#### Express

> This is a Node.js module. Node.js 0.10 or higher is required. The Express philosophy is to provide small, robust tooling for HTTP servers, making it a great solution for single page applications, web sites, hybrids, or public HTTP APIs.

#### Passport

> Passport is Express-compatible authentication middleware for Node.js.
> Passport's sole purpose is to authenticate requests, which it does through an extensible set of plugins known as strategies. Passport does not mount routes or assume any particular database schema, which maximizes flexibility and allows application-level decisions to be made by the developer. The API is simple: you provide Passport a request to authenticate, and Passport provides hooks for controlling what occurs when authentication succeeds or fails.

#### Passport Google Oauth 2.0

> Passport strategy for authenticating with Google using the OAuth 2.0 API.
> This module lets you authenticate using Google in your Node.js applications. By plugging into Passport, Google authentication can be easily and unobtrusively integrated into any application or framework that supports Connect-style middleware, including Express.

#### Cors

> CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

#### Dotenv

> Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

#### Cookie-session

> Simple cookie-based session middleware.
> A user session can be stored in two main ways with cookies: on the server or on the client. This module stores the session data on the client within a cookie, while a module like express-session stores only a session identifier on the client within a cookie and stores the session data on the server, typically in a database.

#### Mongoose

> Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB. Mongoose is designed to work in an asynchronous environment. It supports both promises and callbacks.

#### Forever

> A simple CLI tool for ensuring that a given script runs continuously (i.e. forever). Note that this project currently fully depends on the community for implementing fixes and new features. For new installations we encourage you to use pm2 or nodemon

#### Nodemon

> Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. Nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.
