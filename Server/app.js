const express = require('express');
const app = express();
const mysql = require('mysql');
const cors =  require('cors');
const fs = require('fs');


const myconfig = require('./myconfig.json')

// middleware
app.use(cors())
app.use(express.json())



// // connect using mysql.createConnection()
// const db = mysql.createConnection({
//     host:'35.192.49.178',
//         user: 'root',
//         password: 'AI0801',
//         database: 'hengyi_core',
//         ssl: {
//         	ca: "./server-ca.pem",
//         	key: "./client-key.pem",
//         	cert: "./client-cert.pem"
//         },
// })
   
// // report if connection was made = this only works with mysql.createConnection()
// db.connect(function(err){
//     if(err){
//         process.exit(1)
//         alert('server connection failed')
//     }
//     console.log('connected to mySQL database')
// })


const pool = mysql.createPool({

    host:myconfig.host,
    user:myconfig.user,
    password:myconfig.password,
    ssl : {
        ca:fs.readFileSync(myconfig.ssl.ca),
        key: fs.readFileSync(myconfig.ssl.key),
        cert: fs.readFileSync(myconfig.ssl.cert)
    },
    database: myconfig.database,
    connectionLimit: 8,
    waitForConnections: false
})



pool.query('SHOW DATABASES', function(error, results, fields){
    
    if(error){
        console.log('Error: cannot query database');

        if("sqlMessage" in error){
            console.log(error.errno +":"+ error.sqlMessage)
        }else {
            console.log(error);
        }
        db.end()
    }

    console.log('DATABASES')
    console.log('------------------------');
    Object.keys(results).forEach(function(key){
        const row = results[key];
        console.log(row.Database)
    })



})















// app.post('/insert', (req,res) =>  {
//     const First_Name = req.body.firstName;
//     const Last_Name = req.body.lastName; 
//     const English_Name = req.body.englishName;
//     const Gender = 'yes'
//     const Date_of_Birth = '2013/01/01'
//     const idarray = req.body.idArray;
//     const sqlInsertName = "INSERT INTO Person (First_Name, Last_Name, English_Name, Gender, Date_of_Birth) VALUES (?,?,?,?,?)"
//     const sqlInsertIdArray = "INSERT INTO  idArray (idarray) VALUES (?)"

//     db.query(
//         sqlInsertName,
//         [First_Name, Last_Name, English_Name, Gender, Date_of_Birth],
//         (err,result)=>{
//             if(err){
//                 console.log(err)
//             } else{
//                 res.send('value inserted')
//             }
//         })

//         db_listDatabases(db);
//     // db.query(
//     //     sqlInsertIdArray,
//     //     [idarray],
//     //     (err,result) => {
//     //         if(err){
//     //             console.log(err)
//     //         }else{
//     //             res.send('value inserted')
//     //         }
//     //     })  
//     })











// insert directly from back end = use this for manual testing for connection and that we can insert data
// when testing make sure you are going to this site instead http://localhost:3001/insert
app.get('/insert',(req,res) => {
    const sqlInsert = "INSERT INTO Advisor (Advisor_PID, AdvisorID, Advisor_Type) VALUES( '13', '13a', '13s');"
    pool.query(sqlInsert,(err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send('working inserted')
            console.log('console report working inserted')
        }
    })
   

})













app.listen(3001, () => {
    console.log ('server running on port 3001 yes')
}) 

// define main route 
app.get('/', (req,res)=>{
    res.send('server is working123')
})
