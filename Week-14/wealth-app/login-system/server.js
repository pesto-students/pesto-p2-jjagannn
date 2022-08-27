const bodyParser = require('body-parser')
const express = require('express')
const session = require('express-session')
const path = require('path')
// const db = require('./database')
const store = new session.MemoryStore()
const app = express()
const { v4: uuidv4 } = require('uuid')

const router = require('./router')

const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')

//load static assets
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

app.use(session({
    secret: uuidv4(),
    cookie: {maxAge: 30000},
    reverse: false,
    saveUninitialized: true,
    store
}))

app.use('/route', router)

//home route
app.get('/', (req, res)=> {
    res.render('base', {title: 'Login System'})
})

app.listen(port, () => {
    console.log(`Listening to the server on http://localhost:${port}`)
})