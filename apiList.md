# Devtinder API's

## authRouter

- POST /signup
- POST /login
- POST /logout

## profileRouter

- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password --- Forgot Password API

## ConnectionRequestRouter

<!-- - POST /request/send/interested/:userId
- POST /request/send/ignored/:userId -->

-          Dynamic

* POST /request/send/:status/:userId
* POST /request/review/:status/:requestId

<!-- * POST /request/review/accepted/:requestId
* POST /request/review/rejected/:requestId -->

## userRouter

- GET /user/requests/recieved
- GET /user/connections
- GET /user/feed - Gets you the profile of other users on Platform

## Status : Ignored, Interested, Accepted, Rejected
