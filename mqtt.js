const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
const httpServer = require('http').createServer()
const ws = require('websocket-stream')
const port = 1883

server.listen(port, function () {
  console.log('server started and listening on port ', port)
})


const portws = 1884

ws.createServer({ server: httpServer }, aedes.handle)

httpServer.listen(portws, function () {
  console.log('websocket server listening on port ', portws)
})