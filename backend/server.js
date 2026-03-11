const express = require('express')
const client = require('prom-client')
const cors = require('cors')

const app = express()
app.use(cors())

const collectDefaultMetrics = client.collectDefaultMetrics
collectDefaultMetrics()

// HTTP request counter
const httpRequestsTotal = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests'
})

app.get('/api', (req,res)=>{
  httpRequestsTotal.inc()
  res.json({message:"Hello from backend"})
})

app.get('/metrics', async (req,res)=>{
  res.set('Content-Type', client.register.contentType)
  res.end(await client.register.metrics())
})

app.listen(5000, ()=>{
  console.log("Backend running on port 5000")
})