const express = require('express');
const app = express();
const cadastroController = require('../controllers/cadastroController');
const router = express.Router();


const storage = require('../config/storage')
const uploadAvatar = storage('avatar', '/cadastro')
router.get('/', cadastroController.index)
router.post('/', uploadAvatar, cadastroController.save)


router.get('/cadastro', cadastroController.store)
router.get('/:id/edit', cadastroController.edit)
router.put('/:id', uploadAvatar, cadastroController.update)
router.delete('/:id', cadastroController.delete)

module.exports = router