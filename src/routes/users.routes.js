const { Router } = require("express")
const UsersController = require('../controllers/UsersController')
const usersRoutes = Router()

/**
 * Criar uma instância da classe: UsersController que foi importada
 */
const usersController = new UsersController()

usersRoutes.post('/', usersController.create)

module.exports = usersRoutes;