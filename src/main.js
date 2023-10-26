// import config from "../config";
// import Hapi from "@hapi/hapi"
// import health from "./routes/health";
import auth from "./routes/auth";
// var cors = require('cors')

// const initHttp = async () => {
//     const server = Hapi.server({
//         port: config.httpServerconfig.listenPort,
//         host: config.httpServerconfig.listenHost,
//         routes: {
//             cors: {
//                 origin: ["*"],
//                 credentials:true
                
//             }
//         }
//     })

//     //http routes
//     server.route(health)
//     server.route(auth)

//     server.state('beebee', {
//         ttl: 24 * 60 * 60 * 1000,     // One day
//         isSecure: false,
//         // isSecure: true,
//         // isHttpOnly: true,
//         //strictHeader: true,
//         path: '/',
//         encoding: 'base64json'
//     });


//     await server.start()

//     console.log(`Server running on ${server.info.uri} and server id is ${server.info.id}.`)
// }

// process.on('unhandledRejection', (err) => {
//     console.log("Problem while starting the server: " + err)
//     process.exit(1)
// })

// initHttp()

const express = require("express");
const app = express();
const port = 8080;

// app.use(
//     cors({
//       origin:"*",
//       credentials: true,
//       exposedHeaders: ["Set-Cookie"]
//     })
//   );
  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Credentials', true);
  //   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
  //   res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  //   next();
  // });
  app.get("/health",function(req,res){
    res.send("ok")
  });

app.post("/auth", function (req, res) {
    auth()
    
    const allowedOrigins = ['*']
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
//   res.setHeader('Access-Control-Allow-Origin', );
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.cookie('myCookie', 'exampleValue', {
    // can only be accessed by server requests
    httpOnly: false,
    // path = where the cookie is valid
    path: "/",
    // domain = what domain the cookie is valid on
     domain: "unifo.in",
    // secure = only send cookie over https
    secure: false,
    // sameSite = only send cookie if the request is coming from the same origin
    sameSite: "lax", // "strict" | "lax" | "none" (secure must be true)
    // maxAge = how long the cookie is valid for in milliseconds
    maxAge: 3600000, // 1 hour
  });
  res.send("Authenticated");
// res.redirect('https://kafka.incubation.sentinel.unifo.in/wss/health');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});