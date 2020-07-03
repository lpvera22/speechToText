//@ts-ignore
const express=require('express');
const app=express();
const multer = require('multer')
const cors = require('cors');
const mm = require('music-metadata');
const util = require('util');
const speech = require('@google-cloud/speech');
const fs = require('fs');
const { delimiter } = require("path");
const Cloud = require('@google-cloud/storage')
const path = require('path')
const serviceKey = path.join(__dirname, './keys.json')
const { Storage } = Cloud
// const extendTimeoutMiddleware=require('./middleware/timeout')



const gc = new Storage({
  keyFilename: serviceKey,
  projectId: 'my-project-1591361650101',
})
const client = new speech.SpeechClient();
const bucket = gc.bucket('speechtotextall') // should be your bucket name


function getPublicUrl (filename) {
  // console.log(`https://storage.googleapis.com/speechtotextall/${filename}`)
  return `gs://speechtotextall/${filename}`;
}


// app.use(extendTimeoutMiddleware);

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})
var upload = multer({ storage: storage }).single('file')

app.get('/',(req,res)=>{
  res.send('Index')
})


app.post('/speechtotext',async (req, res, next)=> {
  
  
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
    } else if (err) {
        return res.status(500).json(err)
    }
    const myFile = req.file
    console.log(myFile)
    const file = bucket.file(myFile.filename);
     bucket.upload(myFile.path)
	
      .then(() => file.makePublic())
	
      .then(() => {
        const audiourl=getPublicUrl(myFile.filename)
        
        
        const ext=path.extname(req.file.path);
      
      
        mm.parseFile(req.file.path)
          .then( async (metadata) => {
            let e=''
              if (metadata.format.codec==='PCM'){
                e='LINEAR16'
              }else if(metadata.format.codec==='Opus'){
                e='OGG_OPUS'
              }else if(metadata.format.codec=='MPEG 1 Layer 3'){
                e='MP3'
              }else if (metadata.format.codec=='FLAC'){
                e='FLAC'
              }else {
                res.status(503).send({
                  message:'Format of the file not supported'
                });
              }
            
            const p=(req.body.punt==String(req.body.punt?true:false))?(req.body.punt?true:false):(!req.body.punt?true:false)
            
            let config={}
            if (req.body.diari==='On'){
              const num_speakers=Number(req.body.n_speakers)
              config = {
                encoding:e ,
                audioChannelCount:metadata.format.numberOfChannels,
                languageCode: req.body.lang,
                sampleRateHertz:metadata.format.sampleRate,
                enableAutomaticPunctuation: p,
                enableSpeakerDiarization:true,
                diarizationSpeakerCount:num_speakers
              }


            }else{
              config = {
                encoding:e ,
                audioChannelCount:metadata.format.numberOfChannels,
                languageCode: req.body.lang,
                sampleRateHertz:metadata.format.sampleRate,
                enableAutomaticPunctuation: p
              }

            }
            
          
          
            console.log('===========Config===================================')
            console.log(config)
            const audio = {
              uri: audiourl,
            };
            
            const request = {
              config: config,
              audio: audio,
            };
            
            console.log('=========Request=====================================')
            console.log(request)
            
           
              
              
            console.log('========Transcription========')
            const [operation] = await client.longRunningRecognize(request);
            const [response] = await operation.promise();
            const transcription = response.results
              .map(result => result.alternatives[0].transcript)
              .join('\n');
            console.log(transcription)
            
            res.status(200).send(transcription)
            
            
            
            

            
            

        });  
      
      

    
        

        
    });
      
    

    // (async ()=>{
      
    //   
    //   const ext=path.extname(req.file.path);
      
    //   const file = fs.readFileSync(req.file.path);
    //   const audioBytes = file.toString('base64');
    //   const audio = {
    //     content: audioBytes,
    //   };
      
    //   mm.parseFile(req.file.path)
    //     .then( async (metadata) => {
    //       let e=''
    //       if (metadata.format.codec==='PCM'){
    //         e='LINEAR16'
    //       }else if(metadata.format.codec==='Opus'){
    //         e='OGG_OPUS'
    //       }else if(metadata.format.codec=='MPEG 1 Layer 3'){
    //         e='MP3'
    //       }else if (metadata.format.codec=='FLAC'){
    //         e='FLAC'
    //       }else {
    //         res.status(503).send({
    //           message:'Format of the file not supported'
    //         });
    //       }
    //       console.log(metadata.format)
    //       const p=(req.body.punt==String(req.body.punt?true:false))?(req.body.punt?true:false):(!req.body.punt?true:false)
    //       let config={}
    //       if (req.body.diari==='On'){
    //         const num_speakers=Number(req.body.n_speakers)
    //         config = {
    //           encoding:e ,
    //           audioChannelCount:metadata.format.numberOfChannels,
    //           languageCode: req.body.lang,
    //           sampleRateHertz:metadata.format.sampleRate,
    //           enableAutomaticPunctuation: p,
    //           enableSpeakerDiarization:true,
    //           diarizationSpeakerCount:num_speakers
    //         }


    //       }else{
    //         config = {
    //           encoding:e ,
    //           audioChannelCount:metadata.format.numberOfChannels,
    //           languageCode: req.body.lang,
    //           sampleRateHertz:metadata.format.sampleRate,
    //           enableAutomaticPunctuation: p
    //         }

    //       }
          
          
    //       console.log('===========Config===================================')
    //       console.log(config)
    //       const request = {
    //         audio: audio,
    //         config: config,
    //       };

    //       console.log("=============Converting to speech start=============");
    //       client
    //       .longRunningRecognize(request)
    //       .then(data=>{
    //         const response = data[0];
    //         const operation = response;
    //         // Get a Promise representation of the final result of the job
    //         return operation.promise();

    //       })
    //       .then(data => {
    //         const response = data[0];
    //         const transcription = response.results
    //         .map(result => result.alternatives[0].transcript)
    //         .join('\n');
    //         console.log("=============Transcript=============");
    //         console.log(transcription);
            
    //         res.status(200).send(transcription)
    //       })
    //       .catch(err => {
    //         console.error('ERROR:', err);
    //       });

    //       // const [operation] = await client.longRunningRecognize(request);
          
    //       // const [response] = await operation.promise();

          
    //       // const transcription = response.results
    //       //   .map(result => result.alternatives[0].transcript)
    //       //   .join('\n');
    //       // console.log(transcription)
    //       // res.status(200).send('transcription')
          
    //     })
    //     .catch( err => {
    //       console.error(err.message);
    //     });  
      
      

    // })()
    

      
    })
    
    
    
    

})
  





const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log('Listening',PORT));