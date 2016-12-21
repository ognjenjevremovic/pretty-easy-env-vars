//  Extract the key:value pairs from the file
function getVariables_JSON(fileContent) {
    'use strict';


    //  init
    var _keyValueArr, _env_value, _env_valueLength,
        env_vars = {};

    //  Loop through key:value pairs
    Object.keys(fileContent).forEach(function(_env_key) {
        //  Environment variable present
        if (fileContent[_env_key]) {
            //  Set the env values
            _env_value =    fileContent[_env_key] ? fileContent[_env_key] : '';
            _env_valueLength =   _env_value ? _env_value.length : 0;

            //  Multiline values (wrapped with quotes)
            if (_env_valueLength > 0 && _env_value.charAt(0) === '\"' && _env_value.charAt(_env_valueLength) === '\"') {
                _env_value = _env_value.replace(/\\n/gm, '\n');
            }

            //  Remove quotes and empty spaces (for multiline values)
            _env_value = _env_value.replace(/(^['"]|['"]$)/g, '').trim();

            //  Add the variable (only if it has a value associated with the key)
            if (_env_value) {
                env_vars[_env_key] = _env_value;
            }
        }
    });


    ////////
    return env_vars;
}



//  Export the module
module.exports =    getVariables_JSON;
