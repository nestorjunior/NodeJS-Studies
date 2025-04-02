class UsersController {
    /**
     * index: GET para listar vários registros
     * show: GET para exibir um registro específico
     * create: POST para criar um registro
     * update: PUT para atualizar um registro
     * delete: DELETE para remover um registro
     */

    create(req, res) {
        const {name, email, pass} = req.body
        res.json({name, email, pass})
    }
}

module.exports = UsersController