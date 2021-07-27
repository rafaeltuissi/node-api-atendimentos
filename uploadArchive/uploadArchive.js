const fs = require('fs')

fs.createReadStream('./assets/SELFIE.png')
    .pipe(fs.createWriteStream('./assets/selfie-stream.png'))
    .on('finish', () => console.log('Image was sucessfully created'))