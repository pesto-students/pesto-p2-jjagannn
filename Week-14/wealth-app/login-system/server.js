//Declarations and imports
const bodyParser = require('body-parser')
const express = require('express')
const session = require('express-session')
const path = require('path')
// const store = new session.MemoryStore()
const app = express()
const cors = require('cors')
const router = require('./router')
const { v4: uuidv4 } = require('uuid')
const port = process.env.PORT || 8000

//API configurations
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
//Making static assets accessible
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))
app.use(session({
    secret: uuidv4(),
    cookie: {maxAge: 30000},
    reverse: false,
    saveUninitialized: true
    // store
}))
app.use('/route', router)

//Handling base API calls
//home route
app.get('/', (req, res)=> {
    res.render('base', {title: 'Login System'})
})

app.post("/post_name", async(req,res)=>{
    let {name} = req.body;
    console.log(name);
})

app.get("/home", cors(), async(req,res) => {
    res.send("Data for home page")
})

app.listen(port, () => {
    console.log(`Listening to the server on http://localhost:${port}`)
})