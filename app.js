const express = require('express')

const app = express()

const indexRoutes = require('./routes/index');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  next()
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/index', indexRoutes);

module.exports = app

console.log('coucou')
