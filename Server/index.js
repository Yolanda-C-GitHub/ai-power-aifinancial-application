const express = require('express');
const app = express();
const mysql = require('mysql');
const cors =  require('cors');

// middleware
app.use(cors())
app.use(express.json())


// connect mySQL database
const db = mysql.createConnection({
    host:'192.168.75.82',
    user: 'andy',
    password: 'Andy@123',
    database: 'servertesting',
    port: '3306'
})

// report if connection was made
db.connect(function(err){
    if(err){
        console.log(err)
        process.exit(1)
        alert('server connection failed')
    }
    console.log('connected to mySQL database')
})







app.post('/insert', (req,res) =>  {
    const firstname = req.body.firstName;
    const lastname = req.body.lastName; 
    const englishname = req.body.englishName;
    const idarray = req.body.idArray;
    const sqlInsertName = "INSERT INTO  person123 (firstname, lastname, englishname) VALUES (?,?,?)"
    const sqlInsertIdArray = "INSERT INTO  idArray (idarray) VALUES (?)"

    db.query(
        sqlInsertName,
        [firstname, lastname, englishname],
        (err,result)=>{
            if(err){
                console.log(err)
            } else{
                res.send('value inserted')
            }
        })

    db.query(
        sqlInsertIdArray,
        [idarray],
        (err,result) => {
            if(err){
                console.log(err)
            }else{
                res.send('value inserted')
            }
        })  
    })








// // insert directly from back end = use this for manual testing
// app.get('/insert',(req,res) => {
//     const sqlInsert = "INSERT INTO devnv (id, username, password) VALUES( '1', 'firstuser', 'password1');"
//     db.query(sqlInsert,(err, result) => {
//         if(err){
//             console.log(err)
//         }else{
//             res.send('working inserted')
//             console.log('console report working inserted')
//         }
//     })

// })








app.listen(3001, () => {
    console.log ('server running on port 3001 yes')
}) 

// define main route
app.get('/', (req,res)=>{
    res.send('server is working123')
})

