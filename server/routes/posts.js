var express = require("express");
var router = express.Router();
var db = require("../models");

//Index GET /api/posts/

router.get('/', function(req,res){
	db.Post.find({}, function(err,posts){
		res.status(200).send(posts);
	});
});

//Create POST /api/posts/

router.post('/', function(req,res){
	db.Post.create(req.body,function(err,post){
		res.status(201).send(post);
	});
});

//Get SHOW /api/posts/:id

router.get('/:id', function(req,res){
	db.Post.findById(req.params.id, function(err,post){
		res.status(200).send(post);
	});
});

//Update PUT /api/posts/:id

router.put('/:id',function(req,res){
	db.Post.findByIdAndUpdate(req.params.id,req.body, function(err,post){
		 if (err) res.status(500).send({error: "Double check for error"});
		res.status(201).send(post);
	});
});

//Delete 

router.delete('/:id', function(req,res){
	db.Post.findByIdAndRemove(req.params.id, function(err,post){
		res.status(200).send(post);
	});
});

module.exports = router;

