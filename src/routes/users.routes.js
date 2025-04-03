const { Router } = require("express")
const UsersController = require('../controllers/UsersController')
const usersRoutes = Router()

/**
 * Criar uma instância da classe: UsersController que foi importada
 */
const usersController = new UsersController()


function myMiddleware(req, res, next){
    console.log('passou no middleware')
    next()
}


usersRoutes.post('/', myMiddleware, usersController.create)

module.exports = usersRoutes;