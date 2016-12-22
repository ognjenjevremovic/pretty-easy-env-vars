//  Dependancies
var defaults =  require('../defaults');


//  Construct the path that contains environment variables
function setFilepath(param) {
    'use strict';


    //  init
    var _filePath = '',
        _projectRoot = defaults.filePath + '..\\',
        _fileName, _fileExt, _fileName_arr;

    //  Set full relative path to file
    switch (typeof param) {
        case 'string':
            //  file name
            _filePath = _projectRoot + param;
            break;
        case 'object':
            //  fileName prop
            if (param.hasOwnProperty('fileName') && (!param.hasOwnProperty('fileExtension') || param.hasOwnProperty('filePath'))) {
                _fileName_arr = param.fileName.split('.');
                //  Construct file path
                if (_fileName_arr.length > 1) {
                    _fileExt  = _fileName_arr[_fileName_arr.length - 1];
                    _fileName = _fileName_arr[0];
                }
                else {
                    _fileExt  = defaults.fileExtension;
                    _fileName = param.fileName;
                }
                _filePath = _projectRoot + _fileName + '.' + _fileExt;
            }
            else {
                Object.keys(param).forEach(function(_prop) {
                    _fileName = param.fileName || '';
                    if (_prop === 'fileExtension' && param.fileExtension) {
                        _fileExt  = param.fileExtension;
                    }
                    _filePath  =    param.filePath || _projectRoot;
                    _filePath +=    _fileName;
                    _filePath +=    '.' + _fileExt;
                });
            }
            break;
        default:
            //  use defaults;
    }


    ////////
    return _filePath;
}


//  Export the module
module.exports =    setFilepath;
