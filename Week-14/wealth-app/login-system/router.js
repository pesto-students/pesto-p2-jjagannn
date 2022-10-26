var express = require('express')
var router = express.Router()
const db = require('./database')
const credential = {
    email : "admin@gmail.com",
    password : "admin123"
}

//login user
router.post('/login', (req,res)=> {
    if (req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email
        try {
            db.promise().query(`INSERT INTO USERS VALUES('${req.body.email}','${req.body.password}')`);
            // res.send(201).send({msg: 'Created User...!'})
        }
        catch(err){
            console.log(err)
        }
        res.redirect('/route/dashboard')
        // res.end("Login Successful...!")
    } else {
        res.end("Invalid Username")
    }
})

//route for dashboard
router.get('/dashboard', (req,res)=>{
    if(req.session.user){
        res.render('dashboard', {user: req.session.user})
    } else {
        res.send("Unauthorized user")
    }
})

router.get('/logout', (req,res)=>{
    req.session.destroy(function(err){
        if (err){
            console.log(err)
            res.send("Error")
        } else {
            res.render('base', {title:"Express", logout: "Logout Successful...!"})
        }
    })
})

//Finance Transactions
router.post('/sendPayment', (req,res)=>{
    if (req.body.email) {
        //add more conditions in 'if' to control payment
        try {
            db.promise().query("INSERT INTO LEDGER(acc_id,cat_id, trans_type, amount) VALUES(1133226, 2, 'DEB', 12000)")
        } catch (error) {
            console.log(error)
        }
        res.redirect('/route/dashboard')
    } else {
        res.end("Unable to complete transaction")
    }
})

router.get('/getAccountHistory', (req,res) => {
    try {
        let accData = db.promise().query(`SELECT * FROM ACCOUNT WHERE account_id = 1133226`)
        res.status(200).send(accData)
    } catch (error) {
        console.log(error)
    }
    res.redirect('/route/dashboard')
})

module.exports = router