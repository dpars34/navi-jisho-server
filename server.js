import express from 'express'

const app = express()

import fetch from 'node-fetch'
import cors from 'cors'

app.use(cors())

app.get('/search/:query', async (req, res) => {
    const response = await fetch(`https://jisho.org/api/v1/search/words?keyword=${req.params.query}`)
    res.json(await response.json())
})

app.listen(5000, () => {
    console.log('Listening on Port 5000')
})