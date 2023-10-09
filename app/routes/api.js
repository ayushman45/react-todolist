var express = require('express');
var router = express.Router();

const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/ReactApp')
.then((res)=>{
    console.log("DB CONNECTED")
})
.catch((err)=>{
    console.log("UNABLE TO CONNECT TO DB")
})

const initialTasks = [
    {id: 1, task: "Task 1", completed: false},
    {id: 2, task: "Task 2", completed: true},
    {id: 3, task: "Task 3", completed: false},
    {id: 4, task: "Task 4", completed: true},
]

var userSchema = mongoose.Schema({
    name: {type: String, required : true},
    username: {type: String, required : true},
    password: {type: String, required : true},
    tasks: [{id: Number, task: String, completed: Boolean}],
    index: {type: Number, required : true}
});

const User=module.exports = mongoose.model('User', userSchema);

router.post('/', function(req, res, next) {
    console.log("A post request was made")
    res.send('respond with a resource');
});


router.post('/login', function(req, res) {
    var user = req.body.user;
    console.log(req.body)
    User.findOne({username: user.username})
    .then((usr)=>{
        if(!usr){
            console.log("User does not exist")
            return res.status(401).send();
        }
        if(usr.password !== user.password){
            console.log("Wrong password")
            return res.status(401).send();
        }
        console.log("User logged in")
        return res.send(usr);
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send();
    })
});

router.post('/register', function(req, res) {
    var user = req.body.user;
    User.findOne({username: user.username})
    .then((usr)=>{
        if(usr){
            console.log("User already exists")
            return res.status(401).send();
        }
        const newUser = new User({
            name: user.name,
            username: user.username,
            password: user.password,
            tasks: [...initialTasks],
            index: 5
        })
        newUser.save()
        console.log("User registered")
        return res.status(200).send();
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send();
    })
});

router.post('/addtask', function(req, res) {
    var user = req.body.user;
    User.findOne({username: user.username})
    .then((usr)=>{
        if(!usr){
            console.log("User does not exist")
            return res.status(401).send();
        }
        usr.tasks.push({id: usr.index, task: req.body.task, completed: false})
        usr.index += 1
        usr.save()
        console.log("Task added")
        return res.send(usr);
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send();
    })
});


router.post('/completetask', function(req, res) {
    var user = req.body.user;
    User.findOne({username: user.username})
    .then((usr)=>{
        if(!usr){
            console.log("User does not exist")
            return res.status(401).send();
        }
        var i = 0
        while(i < usr.tasks.length){
            if(usr.tasks[i].id == req.body.id){
                usr.tasks[i].completed = true
                break
            }
            i += 1
        }
        usr.save()
        console.log("Task completed")
        return res.send(usr);
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send();
    })
});

router.post('/pendingtask', function(req, res) {
    var user = req.body.user;
    User.findOne({username: user.username})
    .then((usr)=>{
        if(!usr){
            console.log("User does not exist")
            return res.status(401).send();
        }
        var i = 0
        while(i < usr.tasks.length){
            if(usr.tasks[i].id == req.body.id){
                usr.tasks[i].completed = false
                break
            }
            i += 1
        }
        usr.save()
        console.log("Task pending")
        return res.send(usr);
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send();
    })
});

router.post('/delete', function(req, res) {
    var user = req.body.user;
    User.findOne({username: user.username})
    .then((usr)=>{
        if(!usr){
            console.log("User does not exist")
            return res.status(401).send();
        }
        var i = 0
        while(i < usr.tasks.length){
            if(usr.tasks[i].id == req.body.id){
                usr.tasks.splice(i, 1)
                break
            }
            i += 1
        }
        usr.save()
        console.log("Task deleted")
        return res.send(usr);
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send();
    })
});

module.exports = router;