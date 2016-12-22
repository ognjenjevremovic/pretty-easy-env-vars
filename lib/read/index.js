//  Dependancies
var fs       =  require('fs'),
    fromJSON =  require('./fromJSON'),
    fromENV  =  require('./fromENVVARS');


//  Read from file
function readFromFile(filepath) {
    'use strict';


    //  init
    var _return, fileContent, _envVars, _fileExt, _fileName, _filePath;

    //  Get the file extension
    switch (typeof filepath) {
        //  'relative/path/passed'
        case 'string':
            //  get file extension
            _fileExt =  filepath.split('.');
            _fileExt =  _fileExt[_fileExt.length - 1];
            _fileExt =  _fileExt.toLowerCase();
            _fileExt = (_fileExt === 'envvars') ? 'envVars' : _fileExt;
            break;
        case 'object':
            //  get file extension
            _fileExt  = (filepath.hasOwnProperty('fileExtension')) ? filepath.fileExtension : '';
            _fileExt = (_fileExt === 'envvars') ? 'envVars' : _fileExt;
            //  construct a file path
            _fileName = (filepath.hasOwnProperty('fileName')) ? filepath.fileName : '';
            _filePath = (filepath.hasOwnProperty('filePath')) ? filepath.filePath : '';
            filepath =  _filePath + "\\";
            filepath += _fileName + '.';
            filepath += _fileExt;
            break;
        default:
            //  do nothing!
    }

    //  Supported file extensions
    if (['envVars', 'json', 'txt'].indexOf(_fileExt) >= 0) {
        switch (_fileExt) {
            case 'json':
                fileContent = fs.readFileSync(filepath, { encoding: 'utf8' });
                _envVars =  fromJSON(fileContent);
                break;
            case 'envVars':
            case 'txt':
                fileContent = fs.readFileSync(filepath, { encoding: 'utf8' });
                _envVars =  fromENV(fileContent);
                break;
            default:
                //  do nothing!
        }
        _return =   {
            variables : _envVars
        };
    }
    //  error out!
    else {
        _return =   {
            _error : true
        };
    }

    ////////
    return _return;
}


//  Export the module
module.exports =    readFromFile;
