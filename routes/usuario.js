const express = require('express')
const router = express.Router()

router.get("/registro", (req,res) => {
    res.render("usuarios/registro")
})




module.exports = router