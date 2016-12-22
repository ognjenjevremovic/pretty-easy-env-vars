// Require the dependancie modules
var read    =   require('./read'),
    helpers =   require('./helpers'),
    defaults =  require('./defaults'),

    //  Helpers
    log         =   helpers.log,
    setFilepath =   helpers.setFilepath,
    setVars     =   helpers.setVars;


//  Entry point
function getVars(param_one) {
    'use strict';


    //  init
    var _pathToFile, _fileExt, _envVars;


    //  No parameters passed (use defaults)
    if (!param_one) {
        _pathToFile =   setFilepath(defaults);
    }

    //  Parameter passed (filePath || Object)
    if (param_one) {
        _pathToFile =   setFilepath(param_one);
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
