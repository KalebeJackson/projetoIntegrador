const express = require('express');
const app = express();
const cadastroController = require('../controllers/cadastroController');
const router = express.Router();


const storage = require('../config/storage')
router.get('/cadastro', cadastroController.index)
// router.post('/', uploadAvatar, cadastroController.save)


router.post('/cadastro', cadastroController.store)
// router.get('/:id/edit', cadastroController.edit)
// router.put('/:id', uploadAvatar, cadastroController.update)
// router.delete('/:id', cadastroController.delete)

module.exports = router