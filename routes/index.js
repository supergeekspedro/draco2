const express = require("express")
const router = express.Router()
const publicacao = require("../database/publicacao")

router.get("/", function(req, res) {
    publicacao.Select().then(function(resultados) {
        res.render("index.pug", { resultados: resultados })
    })
})

router.get("/delete/:codigo", function(req, res) {
    const { codigo } = req.params
    publicacao.Delete(codigo)
    res.redirect("back")
})

router.post("/publicacao", function(req, res) {
    const { usuario, conteudo, link } = req.body
    publicacao.Insert(usuario, conteudo, link)
    res.redirect("back")
})

module.exports = router