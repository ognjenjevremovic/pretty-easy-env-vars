//  Dependancies
var read =  require('./index'),
    log  =  require('../helpers').log;


var filePaths = {
    default : {
        fileExtension :    'envvars',
        fileName      :    '',
        filePath      :    __dirname
    },
    txt : {
        fileName : 'vars.txt'
    },
    json : {
        fileName : 'vars.json'
    }
};

console.log(read('.txt'));

/*
//  Check
readFrom_envVars()
    .then(readFrom_txt)
    .then(readFrom_json)
    .then(exit)
    .catch(catch_err);


//  Read from .envVars file
function readFrom_envVars() {
    'use strict';


    //  Return new Promise
    return new Promise(_promise_cb);

    //  Promise callback
    function _promise_cb(resolve, reject) {
        var vars =  read(filePaths.default);
        log.info(read(filePaths.default));
        log.info('\n Environment variables read from \'default\' (.envVars file)\n\n');
        resolve();
    }

}

//  Read from .txt file
function readFrom_txt() {

    //  Return new Promise
    return new Promise(_promise_cb);

    //  Promise callback
    function _promise_cb(resolve, reject) {
        log.info(read(filePaths.txt));
        log.scs('\n Environment variables read from vars.txt file\n\n');
        resolve();
    }

}

//  Read from .json file
function readFrom_json() {

    //  Return new Promise
    return new Promise(_promise_cb);

    //  Promise callback
    function _promise_cb(resolve, reject) {
        log.info(read(filePaths.json));
        log.scs('\n Environment variables read from vars.json file\n\n');
        resolve();
    }

}

//  Exit
function exit() {
    log.info('Finished reading the variables');
}

//  Exception
function catch_err(error) {
    log.err('ERROR!');
    log.err(error);
    return;
}
*/
