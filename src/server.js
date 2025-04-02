const express = require('express')

const app = express()

app.get('/users/:id/:name', (request, response)=> {
    const {id, name} = request.params
    response.send(`User ID: ${id}. User: ${name}`)
})

app.get('/products', (request, response)=> {
    const {page, limit} = request.query
    response.send(`Page: ${page}. Limit: ${limit}`)
})


const PORT = 3333

app.listen(PORT, ()=> console.log(`Server is running on Port ${PORT}`))