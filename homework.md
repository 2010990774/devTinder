*                                   Creating Our Express Server 

- Create a Reporsitory
- Initialize the repository

---- [node_modules](stores all dependencies listed in package.json, actual JavaScript code of Packages, all nested dependcies that other frameworks requires for their execution), 
---- [package.json](stores all the data relted to our project (author, version etc. and allow version ranges, human edited, stores not fully detailed nested deps, used by developers)) AND 
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
- Use of regex in routes /a/, /.*fly$/
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


*                                    Database, Schema & Models - Mongoose

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