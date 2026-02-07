const http = require('http')

// const server = http.createServer((req, res) => {
//     console.log(req)
// })

// server.listen(3000)

// Notes
// http Node.js ka core module hai jo:
// server banana + request handle + response bhejna ka kaam karta hai

// Simple words me:
// Browser → request bhejta hai
// Server → response deta hai
// Ye beech ka kaam http karta hai

// Req vs Res 
// req client/browser se araha ha is ma URL, Method, Headers hota ha 
// res server jo bejh raha ha is ma Status Code, Data, Headers hoga

// Status code set karna 
// res.statusCode = 200;
// res.end('Ok')

//Status Code 
// 200 => Success 
// 404 => Page Not Found 
// 500 => Server error

// Headers set karna 
// for plain text
// res.setHeader('Content-Type', 'text/plain')
// res.send("Hello")

// for html
// res.setHeader('Content-Type', 'text/html')
// res.send('<h1>Hello</h1>')

// for json response (API style)
// const data = {
//   name: 'Node',
//   type: 'Backend'
// };
// res.setHeader('Content-Type', 'application/json')
// res.send(JSON.stringify(data))


// Event Loop 
// 🔥 Priority Order (VERY IMPORTANT)
// 1️⃣ process.nextTick()
// 2️⃣ Promise (microtasks)
// 3️⃣ setTimeout / setInterval
// 4️⃣ I/O callbacks
// 5️⃣ setImmediate
// 🧠 Is order ko yaad rakhna = Node mastery 💯