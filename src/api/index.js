// // @ts-check
// var express = require("express");
// var app = express();
// var bodyParser = require('body-parser')
// const routes = require('./routes/index');
// const NODE_PORT = process.env.NODE_ENV || 8080;
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(routes);

// // app.get("/users1", async (req, res, next) => {
// //     const data = await allControllers.getUsersAction({req});
// //     res.send(data);
// // });

// app.listen(NODE_PORT, () => {
//     console.log(`Server running on port ${NODE_PORT}`);
// });

const express = require("express");
const app = express();
app.use(express.json());

// const candidates = [
//     {
//         id: 'ae588a6b-4540-5714-bfe2-a5c2a65f547a',
//         name: 'John Coder',
//         skills: ['javascript', 'es6', 'nodejs', 'express']
//     },
//     {
//         id: 'ae588a6b-4540-5714-bfe2-a5c2a65f47a',
//         name: 'Alex',
//         skills: ['javascript', 'es6', 'nodejs']
//     },
//     {
//         id: 'ae58a6b-4540-5714-bfe2-a5c2a65f47a',
//         name: 'Charles',
//         skills: ['javascript', 'es6', 'nodejs', 'php']
//     },
//     {
//         id: 'ae58a6b-4540-5714-bfe2-a5c2a65fd7a',
//         name: 'Max',
//         skills: ['css', 'es6', 'nodejs', 'php']
//     }
// ]

const candidates = [];

// Your code starts here. Placeholders for .get and .post are provided for
//  your convenience.

app.post("/candidates", function (req, res) {
    // Delete this to start and implement your solution
    console.log(req.body)
    candidates.push(req.body);
    res.setHeader('Content-Type', 'application/json');
    res.send(req.body);
    // res.send('we are at the root route of our server');
});

app.get("/candidates/search", function (req, res) {
    console.log(req.query)
    if(!req.query || !req.query.skills){        
        res.status(400).send('Skills are required to search');
    }
    const skills = req.query.skills.split(',')
    let bestFind = null;
    let bestSkillCount = 0;
    console.log(skills)
    candidates.map((val) => {
        if(val.skills && val.skills.length > 0){
            const finds = [];
            const map = new Map();
            const fill = (array) => array.forEach(item => {
                if (map.has(item)) {
                    finds.push(item);
                } else {
                    map.set(item, item);
                }
            });
            fill(skills);
            fill(val.skills);
            if(finds.length > bestSkillCount){
                bestSkillCount = finds.length;
                bestFind = val;
            }
        }
    })
    if(bestFind){
        res.setHeader('Content-Type', 'application/json');
        res.send(bestFind);
    } else {
        res.status(404).send('Not found');
    }
    // res.send('we are at the root route of our server');
});

app.listen(process.env.HTTP_PORT || 3000);

