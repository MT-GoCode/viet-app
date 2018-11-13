const models = require('../models')
const Book = models.Book;
const Lesson = models.Lesson;

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/viet-app";
const getContentRouter = express.Router();

module.exports = getContentRouter


getContentRouter.use(bodyParser.json());
getContentRouter.use(bodyParser.urlencoded({ extended: true }));
getContentRouter.use(cors());
getContentRouter.use(express.json());
getContentRouter.use(express.urlencoded()); 

getContentRouter.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/viet-app");

getContentRouter.get("/books", (req, res) => {
    let Books = [{id: 'idlol', name: 'lol'}, {id: 'idlmao', name: 'lmao'}];
    res.json(Books);
});

getContentRouter.get("/lessons", (req, res) => {
    // make searching dynamic
    Lesson.find((err, lesson) => {
        if (err) res.send(err)
        else res.json(lesson)                      
    })
})

getContentRouter.get('/exercises', (req,res) => {
    Lesson.findOne({id:'lesson1'}, {exercises: true}, (err, lesson) => {
        if (err) res.send(err)
        else res.json(lesson)
    })
})