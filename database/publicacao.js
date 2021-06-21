const cliente = require("./connection")

exports.Insert = async function(usuario, conteudo, link) {
    const comando = "INSERT INTO publicacao(usuario, conteudo, link) VALUES($1, $2, $3);"
    try {
        await cliente.query(comando, [usuario, conteudo, link])
        console.log(`${usuario} - FEZ UMA NOVA PUBLICACÃO!`)
    }
    catch (erro) {
        return erro
    }
}

exports.Select = async function() {
    const comando = "SELECT * FROM publicacao;"
    const resultado = await cliente.query(comando)
    return resultado.rows
}

exports.Delete = async function(codigo) {
    const comando = "DELETE FROM publicacao WHERE codigo = $1;"
    try {
        await cliente.query(comando, [codigo])
        console.log(`${codigo} - POSTAGEM FOI DELETADA!`)
    }
    catch (erro) {
        return erro
    }
}