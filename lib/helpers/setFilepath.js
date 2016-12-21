//  Construct the path that contains environment variables
function setFilepath(param) {
    'use strict';


    //  init
    var _filePath = '';

    //  Set full relative path to file
    switch (typeof param) {
        case 'string':
            _filePath = __dirname + '/' + param;
            break;
        case 'object':
            Object.keys(param).forEach(function(_prop) {
                if (_prop === 'filePath' && param.filePath) {
                    _filePath =     param.filePath;
                    // _filePath +=    '/';
                }
                if (_prop === 'fileName' && param.fileName) {
                    _filePath +=    param.fileName;
                }
                if (_prop === 'fileExtension' && param.fileExtension) {
                    _filePath +=    '.';
                    _filePath =     param.fileExtension.toLowerCase();
                }
            });
            break;
        default:
            //  use defaults;
    }
    console.log(_filePath);


    ////////
    return _filePath;
}


//  Export the module
module.exports =    setFilepath;
