const { Router } = require("express")
const productsRoutes = Router()

productsRoutes.post('/', (req, res)=> {
    const {page, limit} = req.body
    res.json({page, limit})
})

module.exports = productsRoutes;