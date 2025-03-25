//import json-server
const jsonserver = require("json-server")

// create server
const mediaPlayerServer = jsonserver.create()

//create a middleware to parse the json data
const middleware = jsonserver.defaults()

//set path for the data to store
const routes = jsonserver.router('db.json')

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(routes)

// set server port
PORT = 4001 || process.env.PORT //process.env.PORT will work only when deployed

// server run
mediaPlayerServer.listen(PORT, () => {
    console.log(`Port is ${PORT}`);
    
})