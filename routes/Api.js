const express = require("express");
const router = express.Router();
const User = require("../models/User");


router.get("/user", function (req, res, next) {
    User.findOne({}).then(function (user) {
        res.send(user);
    }).catch(next);
});


router.post("/user", function (req, res, next) {
    // var user = new User(req.body);
    // user.save();
    User.create(req.body).then(function (user) {
        res.send(user);
    }).catch(next);
});


router.put("/user/:id", function (req, res, next) {
    User.findByIdAndUpdate({_id: req.params.id},req.body).then(function () {
        User.findOne({_id: req.params.id}).then(function (user) {
            res.send(user);
        });
    }).catch(next);
});


router.delete("/user/:id", function (req, res, next) {
    User.findByIdAndRemove({_id: req.params.id}).then(function (user) {
        res.send(user);
    }).catch(next);
});


module.exports = router;