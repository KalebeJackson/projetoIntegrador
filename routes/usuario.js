const express = require('express');
const cadastroController = require('../controllers/cadastroController');
const router = express.Router();
const loginMiddleware = require('../middlewares/loginMiddleware')

const storage = require('../config/storage')
const uploadAvatar = storage('avatar', '/cadastro')

router.use(loginMiddleware)
router.get('/', cadastroController.index)
router.post('/', uploadAvatar,  cadastroController.save)


router.get('/cadastro', cadastroController.store)
router.get('/:id/edit', cadastroController.edit)
router.put('/:id', uploadAvatar, cadastroController.update)
router.delete('/:id', cadastroController.delete)





module.exports = router