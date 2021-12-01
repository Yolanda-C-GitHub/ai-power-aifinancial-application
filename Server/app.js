const express = require('express');
const app = express();
const mysql = require('mysql');
const cors =  require('cors');

// middleware
app.use(cors())
app.use(express.json())



// connect mySQL database
// const db = mysql.createPool({
//     user:process.env.DB_USER,
//     password:process.env.DB_PASS,
//     database: process.env.DB_NAME,
// })




const db = mysql.createConnection({
    host:'35.192.49.178',
    user: 'root',
    password: 'AI0801',
    database: 'hengyi_core',
    
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
    const First_Name = req.body.firstName;
    const Last_Name = req.body.lastName; 
    const English_Name = req.body.englishName;
    const Gender = 'yes'
    const Date_of_Birth = '2013/01/01'
    const idarray = req.body.idArray;
    const sqlInsertName = "INSERT INTO Person (First_Name, Last_Name, English_Name, Gender, Date_of_Birth) VALUES (?,?,?,?,?)"
    const sqlInsertIdArray = "INSERT INTO  idArray (idarray) VALUES (?)"

    db.query(
        sqlInsertName,
        [First_Name, Last_Name, English_Name, Gender, Date_of_Birth],
        (err,result)=>{
            if(err){
                console.log(err)
            } else{
                res.send('value inserted')
            }
        })

        db_listDatabases(db);
    // db.query(
    //     sqlInsertIdArray,
    //     [idarray],
    //     (err,result) => {
    //         if(err){
    //             console.log(err)
    //         }else{
    //             res.send('value inserted')
    //         }
    //     })  
    })


    function db_listDatabases(con) {
        con.query('SHOW DATABASES', function (error, results, fields) {
            if (error) {
                console.log("Error: Cannot query databases");
    
                if ("sqlMessage" in error) {
                    console.log(error.errno + " : " + error.sqlMessage);
                } else {
                    console.log(error);
                }
    
                con.end();
    
                return;
            }
    
            console.log('DATABASES');
            console.log('--------------------');
            Object.keys(results).forEach(function(key) {
                var row = results[key];
                console.log(row.Database)
            });
            con.end();
        });
    }
    





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

