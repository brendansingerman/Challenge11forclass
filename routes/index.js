const express = require('express');
const fs = require('fs');
const {readFile, writeFile}= fs.promises
const app = express();
app.get('/notes',(req,res)=>{
readFile('db/db.json').then(data=>{
    res.send(data)
})
})
app.post('/notes',(req,res)=>{
const newNote = req.body
readFile('db/db.json').then(data=>{
    const notes = JSON.parse(data)
    notes.push(newNote)
    writeFile('db/db.json', JSON.stringify(notes))
    .then(savedNotes=>{
        res.json(savedNotes)
    })
})
})
module.exports = app;