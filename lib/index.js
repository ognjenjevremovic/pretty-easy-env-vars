// Require the dependancie modules
var read    =   require('./read'),
    helpers =   require('./helpers'),

    //  Helpers
    log         =   helpers.log,
    setFilepath =   helpers.setFilepath,
    setVars     =   helpers.setVars;


//  Entry point
function getVars(param_one) {
    'use strict';


    //  init
    var _pathToFile, _fileExt, _envVars,
        //  defaults
        defaults =  {};
        defaults.fileExtension =    'envvars';
        defaults.fileName      =    '';
        defaults.filePath      =    __dirname + '/../';


    //  No parameters passed (use defaults)
    if (!param_one) {
        _pathToFile =    setFilepath(defaults);
    }

    //  Parameter passed (filePath || Object)
    if (param_one) {
        switch (typeof param_one) {
            //  'relative/path/to/the/environment/variables.file'
            case 'string':
                _pathToFile = setFilepath(param_one);
                break;
            //  Object containing path to file
            case 'object':
                if (param_one.hasOwnProperty('fileName')) {
                    param_one.fileExtension =   param_one.fileExtension || defaults.fileExtension;
                    param_one.filePath      =   param_one.filePath || defaults.filePath;
                    _pathToFile = setFilepath(param_one);
                }
                else {
                    _pathToFile = setFilepath(defaults);
                }
                break;
            default:
                _pathToFile = setFilepath(defaults);
        }
    }


    //  Get environment variables from file
    _envVars =  read(_pathToFile);
    if (!_envVars._error && _envVars.variables) {
        setVars(_envVars.variables);
        log.info('Environment variables set');
    }
    else {
        log.error(['Invalid file containing environment variables', 'File must be in either of the formats : ', '.envVars', '.json', '.txt']);
        throw new Error("\n\n    => Error setting environment variables \n\n".red);
    }
}


// Export the module
module.exports = getVars;
