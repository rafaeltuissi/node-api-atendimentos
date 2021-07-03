const customExpress = require('./config/customExpress')
const conexao = require('./infraestructure/connection')
const Tabelas = require('./infraestructure/tables')

conexao.connect((erro) => {
    if(erro){
        console.log(erro)
    } else {
        console.log('sucessfully connected')

        Tabelas.init(conexao)

        const app = customExpress()

        app.listen(3000, () => console.log('servidor up na porta 3000'))
    }
})



