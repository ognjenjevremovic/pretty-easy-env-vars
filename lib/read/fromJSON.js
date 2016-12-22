//  Extract the key:value pairs from the file
function getVariables_JSON(fileContent) {
    'use strict';



    //  init
    var _env_value, _env_valueLength,
        env_vars = {};

    //  Parse the JSON
    fileContent =   JSON.parse(fileContent);

    //  Loop through key:value pairs
    for (var _env_key in fileContent) {
        _env_value =    fileContent[_env_key];
        _env_valueLength =   _env_value ? _env_value.length : 0;

        switch (typeof _env_value) {
            case 'string':
                //  non-empty strings
                if (_env_value) {
                    env_vars[_env_key] =    _env_value;
                }
                break;
            case 'number':
            case 'boolean':
                //  any number || boolean value
                env_vars[_env_key] =    _env_value;
                break;
            case 'object':
                //  non-empty arrays
                if (_env_value instanceof Array) {
                    if (_env_value.length !== 0) {
                        env_vars[_env_key] =    _env_value;
                    }
                }
                //  non-empty Object literals
                if (Object.keys(_env_value).length !== 0) {
                    env_vars[_env_key] =    _env_value;
                }
                break;
            default:
                //  no other values supported in JSON
        }
    }

    //  Caps the variables
    for (var _prop in env_vars) {
        env_vars[_prop.toUpperCase()] = env_vars[_prop];
        delete env_vars[_prop];
    }

    
    ////////
    return env_vars;
}



//  Export the module
module.exports =    getVariables_JSON;
