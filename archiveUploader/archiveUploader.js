const { Console } = require('console')
const fs = require('fs')
const path = require('path')

module.exports = (archivePath, archiveName, callbackCreatedImage)  => {

    const acceptedTypes = ['jpg', 'png', 'jpeg']
    const type = path.extname(archivePath)
    const isAcceptedType = acceptedTypes.indexOf(type.substring(1) !==1) 
    
    if(isAcceptedType){
        const newPath = `./assets/images/${archiveName}${type}`

        fs.createReadStream(archivePath)
            .pipe(fs.createWriteStream(newPath))
            .on('finish', () => callbackCreatedImage(false, newPath))

    } else {
        const error = 'ERROR! Invalid archive extension.'
        console.log('ERROR! Invalid archive extension.')
        callbackCreatedImage(error)
    } 
}

