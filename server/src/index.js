const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const multipart = require('connect-multiparty')

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

const corsOption = {
    origin: '*',
    optionsSuccessStatus: 200
}

const multipartMiddleware = multipart({ uploadDir: './uploads' })
app.post('/upload', multipartMiddleware, (req, res) => {
    const files = req.files
    console.log(files)
    return res.json({ message: files })
})

app.get('/', (req, res) => {
    return res.json({ message: 'Success' })
})

app.use((err, req, res, next) => res.json({ error: err.message }))

app.use(cors(corsOption))

app.listen(8000, () => {
    console.log('Servidor porta 8000')
});