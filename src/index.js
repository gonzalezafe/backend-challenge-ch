const mongoose = require('mongoose')
const express = require('express')

const app = express()

const connectionString= 'mongodb+srv://magnoliadb:magnolia20121@cluster0.5iwna.mongodb.net/magnoliadb?retryWrites=true&w=majority'

//conexion a mongodb
mongoose.connect(connectionString,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true
})
  .then(()=> {
    console.log('Database connected')
  }).catch(err => {
    console.log(err)
  })

  app.get('/', (_req, res) => {
    console.log('ping here')
    res.send('pong')
  })

  const PORT = 3001

  app.listen(PORT, () => {
    console.log('listening on port', PORT)
  })