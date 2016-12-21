//  Set environment variables
function setVars(env_vars) {
    'use strict';


    //  Set environment variables
    Object.keys(env_vars).forEach(function(_key) {
        process.env[_key] = process.env[_key] || env_vars[_key];
    });

}



//  Export the module
module.exports =    setVars;
