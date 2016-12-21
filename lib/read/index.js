//  Dependancies
var fs       =  require('fs'),
    fromJSON =  require('./fromJSON'),
    fromENV  =  require('./fromENVVARS');


//  Read from file
function readFromFile(filepath) {
    'use strict';


    //  init
    var _return, _fileExt;

    //  Get the file extension
    _fileExt =  filepath.split('.');
    _fileExt =  _fileExt[_fileExt.length - 1];
    _fileExt =  _fileExt.toLowerCase();

    //  Supported file extensions
    if (['envvars', 'json', 'txt'].indexOf(_fileExt) >= 0) {
        switch (_fileExt) {
            case 'json':
                _envVars =  fromJSON(fs.readFileSync(filepath, { encoding: 'utf8' }));
                break;
            case 'envvars':
            case 'txt':
                _envVars =  fromENV(fs.readFileSync(filepath, { encoding: 'utf8' }));
                break;
            default:
                //  do nothing!
        }

        _return =   {variables : _envVars};
        setVars(_envVars);
    }
    //  error out!
    else {
        _return =   {_error : true};
    }

    ////////
    return _return;
}


//  Export the module
module.exports =    readFromFile;
