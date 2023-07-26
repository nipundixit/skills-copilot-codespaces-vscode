//create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//set up database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/comments');
var commentSchema = new mongoose.Schema({
    name: String,
    comment: String
});
var Comment = mongoose.model('Comment', commentSchema);

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controller
var commentController = require('./controllers/commentController');
commentController(app);

//listen to port
app.listen(3000);
console.log('listening to port 3000');
