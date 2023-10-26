"use strict";

var _auth = _interopRequireDefault(require("./routes/auth"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import config from "../config";
// import Hapi from "@hapi/hapi"
// import health from "./routes/health";

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
app.get("/health", function (req, res) {
  res.send("ok");
});
app.post("/auth", function (req, res) {
  (0, _auth.default)();
  const allowedOrigins = ['*'];
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
    sameSite: "lax",
    // "strict" | "lax" | "none" (secure must be true)
    // maxAge = how long the cookie is valid for in milliseconds
    maxAge: 3600000 // 1 hour
  });

  res.send("Authenticated");
  // res.redirect('https://kafka.incubation.sentinel.unifo.in/wss/health');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXV0aCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwib2JqIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJleHByZXNzIiwiYXBwIiwicG9ydCIsImdldCIsInJlcSIsInJlcyIsInNlbmQiLCJwb3N0IiwiYXV0aCIsImFsbG93ZWRPcmlnaW5zIiwib3JpZ2luIiwiaGVhZGVycyIsImluY2x1ZGVzIiwic2V0SGVhZGVyIiwiY29va2llIiwiaHR0cE9ubHkiLCJwYXRoIiwiZG9tYWluIiwic2VjdXJlIiwic2FtZVNpdGUiLCJtYXhBZ2UiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZXMiOlsiLi4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCI7XG4vLyBpbXBvcnQgSGFwaSBmcm9tIFwiQGhhcGkvaGFwaVwiXG4vLyBpbXBvcnQgaGVhbHRoIGZyb20gXCIuL3JvdXRlcy9oZWFsdGhcIjtcbmltcG9ydCBhdXRoIGZyb20gXCIuL3JvdXRlcy9hdXRoXCI7XG4vLyB2YXIgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKVxuXG4vLyBjb25zdCBpbml0SHR0cCA9IGFzeW5jICgpID0+IHtcbi8vICAgICBjb25zdCBzZXJ2ZXIgPSBIYXBpLnNlcnZlcih7XG4vLyAgICAgICAgIHBvcnQ6IGNvbmZpZy5odHRwU2VydmVyY29uZmlnLmxpc3RlblBvcnQsXG4vLyAgICAgICAgIGhvc3Q6IGNvbmZpZy5odHRwU2VydmVyY29uZmlnLmxpc3Rlbkhvc3QsXG4vLyAgICAgICAgIHJvdXRlczoge1xuLy8gICAgICAgICAgICAgY29yczoge1xuLy8gICAgICAgICAgICAgICAgIG9yaWdpbjogW1wiKlwiXSxcbi8vICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczp0cnVlXG4gICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9KVxuXG4vLyAgICAgLy9odHRwIHJvdXRlc1xuLy8gICAgIHNlcnZlci5yb3V0ZShoZWFsdGgpXG4vLyAgICAgc2VydmVyLnJvdXRlKGF1dGgpXG5cbi8vICAgICBzZXJ2ZXIuc3RhdGUoJ2JlZWJlZScsIHtcbi8vICAgICAgICAgdHRsOiAyNCAqIDYwICogNjAgKiAxMDAwLCAgICAgLy8gT25lIGRheVxuLy8gICAgICAgICBpc1NlY3VyZTogZmFsc2UsXG4vLyAgICAgICAgIC8vIGlzU2VjdXJlOiB0cnVlLFxuLy8gICAgICAgICAvLyBpc0h0dHBPbmx5OiB0cnVlLFxuLy8gICAgICAgICAvL3N0cmljdEhlYWRlcjogdHJ1ZSxcbi8vICAgICAgICAgcGF0aDogJy8nLFxuLy8gICAgICAgICBlbmNvZGluZzogJ2Jhc2U2NGpzb24nXG4vLyAgICAgfSk7XG5cblxuLy8gICAgIGF3YWl0IHNlcnZlci5zdGFydCgpXG5cbi8vICAgICBjb25zb2xlLmxvZyhgU2VydmVyIHJ1bm5pbmcgb24gJHtzZXJ2ZXIuaW5mby51cml9IGFuZCBzZXJ2ZXIgaWQgaXMgJHtzZXJ2ZXIuaW5mby5pZH0uYClcbi8vIH1cblxuLy8gcHJvY2Vzcy5vbigndW5oYW5kbGVkUmVqZWN0aW9uJywgKGVycikgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKFwiUHJvYmxlbSB3aGlsZSBzdGFydGluZyB0aGUgc2VydmVyOiBcIiArIGVycilcbi8vICAgICBwcm9jZXNzLmV4aXQoMSlcbi8vIH0pXG5cbi8vIGluaXRIdHRwKClcblxuY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgcG9ydCA9IDIyMjI7XG5cbi8vIGFwcC51c2UoXG4vLyAgICAgY29ycyh7XG4vLyAgICAgICBvcmlnaW46XCIqXCIsXG4vLyAgICAgICBjcmVkZW50aWFsczogdHJ1ZSxcbi8vICAgICAgIGV4cG9zZWRIZWFkZXJzOiBbXCJTZXQtQ29va2llXCJdXG4vLyAgICAgfSlcbi8vICAgKTtcbiAgLy8gYXBwLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcbiAgLy8gICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscycsIHRydWUpO1xuICAvLyAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnR0VULFBVVCxQT1NULERFTEVURSxVUERBVEUsT1BUSU9OUycpO1xuICAvLyAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAnWC1SZXF1ZXN0ZWQtV2l0aCwgWC1IVFRQLU1ldGhvZC1PdmVycmlkZSwgQ29udGVudC1UeXBlLCBBY2NlcHQnKTtcbiAgLy8gICBuZXh0KCk7XG4gIC8vIH0pO1xuICBhcHAuZ2V0KFwiL2hlYWx0aFwiLGZ1bmN0aW9uKHJlcSxyZXMpe1xuICAgIHJlcy5zZW5kKFwib2tcIilcbiAgfSk7XG5cbmFwcC5wb3N0KFwiL2F1dGhcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gICAgYXV0aCgpXG4gICAgXG4gICAgY29uc3QgYWxsb3dlZE9yaWdpbnMgPSBbJyonXVxuICBjb25zdCBvcmlnaW4gPSByZXEuaGVhZGVycy5vcmlnaW47XG4gIGlmIChhbGxvd2VkT3JpZ2lucy5pbmNsdWRlcyhvcmlnaW4pKSB7XG4gICAgICAgcmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgb3JpZ2luKTtcbiAgfVxuLy8gICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCApO1xuICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscycsIHRydWUpO1xuICByZXMuY29va2llKCdteUNvb2tpZScsICdleGFtcGxlVmFsdWUnLCB7XG4gICAgLy8gY2FuIG9ubHkgYmUgYWNjZXNzZWQgYnkgc2VydmVyIHJlcXVlc3RzXG4gICAgaHR0cE9ubHk6IGZhbHNlLFxuICAgIC8vIHBhdGggPSB3aGVyZSB0aGUgY29va2llIGlzIHZhbGlkXG4gICAgcGF0aDogXCIvXCIsXG4gICAgLy8gZG9tYWluID0gd2hhdCBkb21haW4gdGhlIGNvb2tpZSBpcyB2YWxpZCBvblxuICAgICBkb21haW46IFwidW5pZm8uaW5cIixcbiAgICAvLyBzZWN1cmUgPSBvbmx5IHNlbmQgY29va2llIG92ZXIgaHR0cHNcbiAgICBzZWN1cmU6IGZhbHNlLFxuICAgIC8vIHNhbWVTaXRlID0gb25seSBzZW5kIGNvb2tpZSBpZiB0aGUgcmVxdWVzdCBpcyBjb21pbmcgZnJvbSB0aGUgc2FtZSBvcmlnaW5cbiAgICBzYW1lU2l0ZTogXCJsYXhcIiwgLy8gXCJzdHJpY3RcIiB8IFwibGF4XCIgfCBcIm5vbmVcIiAoc2VjdXJlIG11c3QgYmUgdHJ1ZSlcbiAgICAvLyBtYXhBZ2UgPSBob3cgbG9uZyB0aGUgY29va2llIGlzIHZhbGlkIGZvciBpbiBtaWxsaXNlY29uZHNcbiAgICBtYXhBZ2U6IDM2MDAwMDAsIC8vIDEgaG91clxuICB9KTtcbiAgcmVzLnNlbmQoXCJBdXRoZW50aWNhdGVkXCIpO1xuLy8gcmVzLnJlZGlyZWN0KCdodHRwczovL2thZmthLmluY3ViYXRpb24uc2VudGluZWwudW5pZm8uaW4vd3NzL2hlYWx0aCcpO1xufSk7XG5cbmFwcC5saXN0ZW4ocG9ydCwgZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZyhgRXhhbXBsZSBhcHAgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fSFgKTtcbn0pOyJdLCJtYXBwaW5ncyI6Ijs7QUFHQSxJQUFBQSxLQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFBaUMsU0FBQUQsdUJBQUFFLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxLQUFBRSxPQUFBLEVBQUFGLEdBQUE7QUFIakM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsTUFBTUcsT0FBTyxHQUFHSixPQUFPLENBQUMsU0FBUyxDQUFDO0FBQ2xDLE1BQU1LLEdBQUcsR0FBR0QsT0FBTyxDQUFDLENBQUM7QUFDckIsTUFBTUUsSUFBSSxHQUFHLElBQUk7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FELEdBQUcsQ0FBQ0UsR0FBRyxDQUFDLFNBQVMsRUFBQyxVQUFTQyxHQUFHLEVBQUNDLEdBQUcsRUFBQztFQUNqQ0EsR0FBRyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVKTCxHQUFHLENBQUNNLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVUgsR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFDbEMsSUFBQUcsYUFBSSxFQUFDLENBQUM7RUFFTixNQUFNQyxjQUFjLEdBQUcsQ0FBQyxHQUFHLENBQUM7RUFDOUIsTUFBTUMsTUFBTSxHQUFHTixHQUFHLENBQUNPLE9BQU8sQ0FBQ0QsTUFBTTtFQUNqQyxJQUFJRCxjQUFjLENBQUNHLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLEVBQUU7SUFDaENMLEdBQUcsQ0FBQ1EsU0FBUyxDQUFDLDZCQUE2QixFQUFFSCxNQUFNLENBQUM7RUFDekQ7RUFDRjtFQUNFTCxHQUFHLENBQUNRLFNBQVMsQ0FBQyxrQ0FBa0MsRUFBRSxJQUFJLENBQUM7RUFDdkRSLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUU7SUFDckM7SUFDQUMsUUFBUSxFQUFFLEtBQUs7SUFDZjtJQUNBQyxJQUFJLEVBQUUsR0FBRztJQUNUO0lBQ0NDLE1BQU0sRUFBRSxVQUFVO0lBQ25CO0lBQ0FDLE1BQU0sRUFBRSxLQUFLO0lBQ2I7SUFDQUMsUUFBUSxFQUFFLEtBQUs7SUFBRTtJQUNqQjtJQUNBQyxNQUFNLEVBQUUsT0FBTyxDQUFFO0VBQ25CLENBQUMsQ0FBQzs7RUFDRmYsR0FBRyxDQUFDQyxJQUFJLENBQUMsZUFBZSxDQUFDO0VBQzNCO0FBQ0EsQ0FBQyxDQUFDOztBQUVGTCxHQUFHLENBQUNvQixNQUFNLENBQUNuQixJQUFJLEVBQUUsWUFBWTtFQUMzQm9CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFLGlDQUFnQ3JCLElBQUssR0FBRSxDQUFDO0FBQ3ZELENBQUMsQ0FBQyJ9