const Cloud = require('@google-cloud/storage')
const path = require('path')
const serviceKey = path.join(__dirname, './keys.json')

const { Storage } = Cloud
const gc = new Storage({
  keyFilename: serviceKey,
  projectId: 'my-project-1591361650101',
})



const bucket = gc.bucket('speechtotextall') // should be your bucket name

exports.copyFileToGCS = (localFilePath) => {
	
    
	
  
	
	
    const fileName = path.basename(localFilePath);
	
    const file = bucket.file(fileName);
	
    console.log(file)
	
    return bucket.upload(localFilePath, options)
	
      .then(() => file.makePublic())
	
      .then(() => exports.getPublicUrl(bucketName, gcsName));
	
  };