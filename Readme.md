# InkWell - Blogging Site

A simple blog app where anybody can write down anything helpful so everyone can view. Fully implemented and user experience improved by security authentication and authorization.

## Setup MongoDB

```mongodb
mongoose.connect("mongodb://localhost:27017/blog");
```

## Features

- User Authentication
- Dashboard
- Post Blogs
- Blog categories
- Blog Comments

## NPM Install

```
npm install  
node app.js
```
## Dependencies

* express (Server-side Javascript)
* ejs (Embedded Javascript)
* express-sanitizer (middleware after initilize body-parser for node-validation)
* body-parser
* mongoose (mongoDB for Express version)
* method-override (used for method PUT and DELETE in RESTful ROUTE that form type in cliend-side doesn't support
* connect-flash (middleware: store message displayed for user once and cleared after page being refreshed)
* passport
* passport-local
* passport-local-mongoose
* express-session

