const { Router } = require("express")
const usersRoutes = Router()

usersRoutes.post('/', (req, res)=> {
    const {name, email, pass} = req.body
    res.json({name, email, pass})
})

module.exports = usersRoutes;