const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Importando o arquivo de rotas
const usersRoutes = require('./routes/api/users');
const postRoutes = require('./routes/api/posts');

// Para entender o que está sendo enviado pelo body json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Setando os path e caminhos
app.use('/api/users', usersRoutes);
app.use('/api/posts', postRoutes);

// Open Server
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})