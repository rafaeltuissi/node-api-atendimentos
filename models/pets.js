const conexao = require('../infraestructure/connection')
const archiveUploader = require('../archiveUploader/archiveUploader')

class Pet {
    
    adiciona(pet, res){

        const query = `INSERT INTO Pets SET ?`

        archiveUploader(pet.image, pet.name, (error, newPath) => {

            if(error){
                res.status(400).json({ error })
            } else {
                const newPet = {name: pet.name, image: newPath}

                conexao.query(query, newPet, erro => {
                    if(erro){
                        console.log(erro)
                        res.status(400).json(erro)
                    } else {
                        res.status(200).json(newPet)
                    }
                })  
            }
        })
           

    }
}

module.exports = new Pet