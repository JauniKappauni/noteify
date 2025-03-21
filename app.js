const express = require('express')
const app = express()
const port = 3000

let notes = []

app.set('view engine', 'ejs')
app.use(express.urlencoded( {extended: true}))

app.get('/', (req, res) => {
    res.render('index', { notes: notes });
});

app.post('/', (req, res) => {
    const newNote = req.body.note;
    notes.push(newNote);
    res.redirect('/')
});

app.post('/delete', (req, res) => {
    const index = req.body.index;
    notes.splice(index, 1)
    res.redirect('/')
});


app.listen(port, () => console.log(`Server läuft auf http://localhost:${port}`))