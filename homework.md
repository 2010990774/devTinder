-                                   Creating Our Express Server

* Create a Reporsitory
* Initialize the repository

---- [node_modules](stores all dependencies listed in package.json, actual JavaScript code of Packages, all nested dependcies that other frameworks requires for their execution),
---- [package.json](stores all the data related to our project (author, version etc. and allow version ranges, human edited, stores not fully detailed nested deps, used by developers)) AND
---- [package-lock.json] (stores exact versions of all dependencies and package metadata, not edited by human, stored fully detailed nested deps, used by npm/CI)

- Install express
- Create a Server
- Listen to Port
- Write request handlers for /test, /hello
- Install nodemon and update scripts inside package.json
- What are dependcies
- What is use of "-g" while npm install
- Difference between caret and tilde (^ & ~)

*                                   Routing And Request Handlers

- initialize git
- .gitignore
- Create a remote repo on github
- Push all code to remote origin
- Play with routes and route extensions example - /hello, /, /hello/2
- Order of the routes matter a lot
- Install Postman App and make a workspace/collections -> Test API Calls
- Write logic to handle GET, POST, PUT, PATCH and DELETE API Calls and test them on Postman
- Exploring routing and use of ?, (), +, * in the routes (b? = /ab?c - ignores b = (/ac)), (ab+c = /ab+c = can add multiple b's = (/abbbc)), (/ab*c = ignores all between b and c = (/abJkSOc)), (/a(bc)d = ignore bc = /ad)
- Use of regex in routes /a/, /.\*fly$/
- Read the query params in the routes
- Read the dynamic routes

*                                   Middlewares And Error Handlers

- Multiple Route Handlers - Play with the code
- next()
- next function and errors along with res.send()
- app.use("/route", rH, rH2, rH3, rH4, rH5)
- What is a Middleware? Why do we need it?
- How expressJS basically handles requests behind the scenes
- Difference between app.use and app.all
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for all user routes, except /user/login
- Error Handling using app.use("/", (err, req, res, next) => {}); always write towards the end.

*                               Database, Schema & Models - Mongoose

- Create a free cluster on MongoDB official website (Mongo Atlas)
- Install mongoose library
- Connect your application to the database "Connection-url/devTinder"
- Call the connectDB function and connect to database before starting application on PORT 3000
- Create a User Schema
- Create POST /signup API to add data to database
- Push some documents using API calls from POSTMAN
- Error Handling using try, catch

*                                    Diving Into The API's

- Difference between JS Object and JSON Object
- Add the express.json middleware to our app
- Make your signup API dynamic to recieve data from the end user
- User.findOne() returns which object, if duplicate entries are present in Database
- API - Get user by Email
- API - Feed API - GET /feed - get all the users from the database
- API - Get user By Id
- Create a User Delete API
- Difference between PUT and PATCH
- Update a User API
- Explore the Mongoose Documentation for Model methods
- What are options in a Model.findOneAndUpdate method - explore more about it
- Write an API to update the user with email ID

*                                Data Sanitization & Schema Validations

- Explore Schema Type Options from the Documentation
- Add require, unique, lowercase, min, maxLength, trim
- Add default value for about
- Create a custom validate function for gender
- Improve the DB Schema - Add all appropriate validations on each field in Schema
- Add timestamps to the USER Schema
- Add API level validation on PATCH request and Signup POST API
- DATA SANITIZATION -- Add API validation for each field
- Install validator
- Explore validator library functions and use validator functions for password, email and etc.
- NEVER Trust req.body --- EVER

*                                 Encrypting Passwords

- Validate Data in SignUp API
- Install bcrypt package
- Create HashPassword Using bcrypt.hash & save the user with encrypted password
- Create Login API
- Compare the password and throw error if email or password is invalid

*                               Authentication, JWT And Cookies

- install cookie-parser
- just send random cookie to user
- create GET /profile API and check if you get the cookie back
- install jsonwebtoken
- in LOGIN API, after email and password validation, create JWT token and send it to user inside cookies
- read the cookies inside your profile API and find the logged in user
- userAuth Middleware
- Add the userAuth middleware in the profile API and a new sendConnectionRequest API
- Set the expiry of JWT and cookies to 7 days
- create userSchema method to getJWT()
- create userSchema method to comparePassword(passwordInputByUser)
