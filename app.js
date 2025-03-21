const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
express.urlencoded( {extended: true})

app.listen(port, () => console.log(`Server läuft auf http://localhost:${port}`))