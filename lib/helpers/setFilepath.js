//  Dependancies
var defaults =  require('../defaults');


//  Construct the path that contains environment variables
function setFilepath(param) {
    'use strict';


    //  init
    var _filePath = '',
        _fileName, _fileExt, _fileName_arr, _helper;

    console.log('\n\n' + typeof param + '\n\n');

    //  Set full relative path to file
    switch (typeof param) {
        case 'string':

            //  Retrieve object with more info
            _helper   = _getFilename(param);
            //  Set filename and extension
            _fileName = _helper.fileName;
            _fileExt  = _helper.fileExtension;
            if (!_fileExt) {
                _fileExt =  defaults.fileExtension;
            }
            //  Retrieve the file
            _filePath = defaults.filePath;
            _filePath +=_fileName;
            _filePath +='.';
            _filePath +=_fileExt;

            break;
        case 'object':

            //  Check fileName parameter
            switch (typeof param.fileName) {
                //  Filename included
                case 'string':
                    //  Retrieve object with more info
                    _helper   = _getFilename(param.fileName);
                    //  Set fileName
                    _fileName = _helper.fileName;
                    //  Set fileExtension
                    _fileExt  = _helper.fileExtension;
                    break;
                //  Filename not included or invalid format passed
                default:
                    _fileName = defaults.fileName;
            }

            //  Check fileExtension parameter
            if (param.fileExtension) {
                switch (typeof param.fileExtension) {
                    case 'string':
                        //  Check if the file extension is NOT already set (included in fileName parameter)
                        if (!_fileExt) {
                            _fileExt =  param.fileExtension;
                        }
                        break;
                    //  Set default
                    default:
                        _fileExt =  defaults.fileExtension;
                }
            }

            //  Check filePath parameter
            if (param.filePath) {
                switch (typeof param.filePath) {
                    case 'string':
                        _filePath = param.filePath;
                        break;
                    //  Set default
                    default:
                        _filePath = defaults.filePath;
                }
            }

            //  Locate the file
            _filePath +=    _fileName;
            _filePath +=    '.';
            _filePath +=    _fileExt;

            break;
        //  Invalid (use defaults)
        default:
            _fileName = defaults.fileName;
            _fileExt  = defaults.fileExtension;
            _filePath = defaults.filePath + _fileName + '.' + _fileExt;
    }


    ////////
    return _filePath;
}

//  Get filename
function _getFilename(fileName) {

    //  init
    var _fileName_arr, _fileName, _fileExt;


    //  Split the filename passed by dot ('.')
    _fileName_arr = fileName.split('.');
    _fileName = '';

    //  File extension included
    if (_fileName_arr.length > 1) {
        _fileName_arr.forEach(function(part, _index) {
            //  Set file extension
            if (_index === (_fileName_arr.length - 1)) {
                _fileExt =  part;
            }
            //  Set filename
            else {
                _fileName += part;
            }
        });
    }

    //  File extension not included
    else {
        _fileName = _fileName_arr[0];
    }

    ////////
    return {
        fileName      : _fileName,
        fileExtension : _fileExt
    };
}


//  Export the module
module.exports =    setFilepath;
