
'use strict';

/* eslint-env node, es6 */

const express = require('express');
const app = express();
const watson = require('watson-developer-cloud');
const AuthorizationV1 = require('watson-developer-cloud/authorization/v1');
const vcapServices = require('vcap_services');


const cors = require('cors');

// on bluemix, enable rate-limiting and force https
if (process.env.VCAP_SERVICES) {
  // enable rate-limiting
  const RateLimit = require('express-rate-limit');
  app.enable('trust proxy'); // required to work properly behind Bluemix's reverse proxy

  const limiter = new RateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    delayMs: 0 // disable delaying - full speed until the max limit is reached
  });

  //  apply to /api/*
  app.use('/api/', limiter);

  // force https - microphone access requires https in Chrome and possibly other browsers
  // (*.mybluemix.net domains all have built-in https support)
  const secure = require('express-secure-only');
  app.use(secure());
}

app.use(express.static(__dirname + '/static'));
app.use(cors());




// token endpoints
// **Warning**: these endpoints should probably be guarded with additional authentication & authorization for production use


const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
 //const AuthorizationV1 = require('watson-developer-cloud/authorization/v1');
const IamTokenManagerV1 = require('watson-developer-cloud/iam-token-manager/v1');

require('dotenv').load({ silent: true });
// Bootstrap application settings
//require('./config/express')(app);


//Create the token manager
let tokenManager;
let instanceType;
const serviceUrl = process.env.SPEECH_TO_TEXT_URL || 'https://stream.watsonplatform.net/speech-to-text/api';

// if (process.env.SPEECH_TO_TEXT_IAM_APIKEY && process.env.SPEECH_TO_TEXT_IAM_APIKEY !== '') {
let test = 3;

if( test === 3) {
  instanceType = 'iam';
  tokenManager = new IamTokenManagerV1.IamTokenManagerV1({
    iamApikey: process.env.SPEECH_TO_TEXT_IAM_APIKEY || 'v2psmP3OvJnasK8whzBSsTIOvgc6nvkwBgsE_WpS-7eo',
    
    iamUrl: process.env.SPEECH_TO_TEXT_IAM_URL || 'https://iam.bluemix.net/identity/token',
  });
} else {
  instanceType = 'cf';
  const speechService = new SpeechToTextV1({
    username: process.env.SPEECH_TO_TEXT_USERNAME || 'a7f003f3-455d-4af8-8a06-28d2e3ad62a9',
    password: process.env.SPEECH_TO_TEXT_PASSWORD || 'V4iGIb8OOMf0',
    url: serviceUrl,
  });
  tokenManager = new AuthorizationV1(speechService.getCredentials());
}



// Get credentials using your credentials
app.get('/api/credentials', (req, res, next) => {
  tokenManager.getToken((err, token) => {
    console.log(tokenManager);
    if (err) {
      next(err);
      console.log(err);
    } else {
      let credentials;
      console.log(credentials);
      if (instanceType === 'iam') {
        credentials = {
          accessToken: token,
          serviceUrl,
        };
      } else {
        credentials = {
          token,
          serviceUrl,
        };
      }
      res.send(credentials.accessToken);
      console.log(credentials.accessToken);
    }
  });
});




const port = process.env.PORT || process.env.VCAP_APP_PORT || 3002;
app.listen(port, function() {
  console.log('Example IBM Watson Speech JS SDK client app & token server live at http://localhost:%s/', port);
});

// Chrome requires https to access the user's microphone unless it's a localhost url so
// this sets up a basic server on port 3001 using an included self-signed certificate
// note: this is not suitable for production use
// however bluemix automatically adds https support at https://<myapp>.mybluemix.net
// if (!process.env.VCAP_SERVICES) {
//   const fs = require('fs');
//   const https = require('https');
//   const HTTPS_PORT = 3001;

//   const options = {
//     key: fs.readFileSync(__dirname + '/keys/localhost.pem'),
//     cert: fs.readFileSync(__dirname + '/keys/localhost.cert')
//   };
//   https.createServer(options, app).listen(HTTPS_PORT, function() {
//     console.log('Secure server live at https://localhost:%s/', HTTPS_PORT);
//   });
// }


