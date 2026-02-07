// Express:
// Ik framework jo ke node js pe bana he Http server banana, routes ko easily banana, middleware handle karna ye sub express js easily kr deta ha

// Middleware:
// Express code ko line by line nahi chalata wo request ko middleware k through pass kr deta ha

// app.use()
// middleware ko register krta ha middleware kya ha wo function ko request aur response ke beech ma run ho
// Real usecase => logging user, authentation etc
// app.use path k sath be use hota ha like
// app.use('/api', (req, res, next) => {
//     console.log("Middleware")
//      next()
// })

// built in middleware 
// app.use(express.json())
// app.use(express.urlencodede({ extended: true }))
// ye POST data pare krta ha 

// app.get()
// ye route handle he srf get request handle krta ha 

// req Obj important 
// req.params() => URL Parameters 
// req.query() => ?name=ali
// req.headers() => req headers

// app.post() kya karta ha?
// data recieve krta ha form + apis ke leye use hota ha

// agar json ma ho tu ye zaror use hoga 
// app.use(express.json())

// agar form ho tu ye must ha 
// app.use((express.urlencoded({ extended: true })))

// Body Parser kya ha?
// ye ik middleware he jo ke incoming HTTP request k body ko parse krta ha aur usey req.body ma convert krta ha ta ka server usey easily ise keya ja sake 

// kyun zarori ha 
// q k express post/put data ko nahi smajta q ke data stream form ma ata ha body parser json ya form data ko readable js object bana deta ha 


// Example 01
const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
    console.log("Home Page")
    res.send("Home Page")
    // next()
})

app.use('/add-product', (req, res, next) => {
    console.log("Home Page")
    res.send("This is Add Product Page")
})

app.listen(3000, () => {
    console.log("App listen on port 3000!")
})