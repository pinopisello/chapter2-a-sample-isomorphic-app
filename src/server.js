require('babel-register');//https://babeljs.io/docs/usage/babel-register/
                          //The require hook will bind itself to node’s require and automatically compile files on the fly. 
                          //All subsequent files required by node with the extensions .es6, .es, .jsx and .js will be transformed by Babel.
require('./app.js'); 

