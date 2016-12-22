//  Extract the key:value pairs from the file
function getVariables_ENVVARS(fileContent) {
    'use strict';


    //  init
    var _keyValueArr, _env_key, _env_value, _env_valueLength,
        env_vars = {};

    //  Loop through key:value pairs
    fileContent.split('\n').forEach(function(keyValPair) {
        //  Get the single key:value pair
        _keyValueArr = keyValPair.match(/^\s*([\w\.\-]+)\s*=\s*(.*)?\s*$/);

        //  Environment variable present
        if (_keyValueArr) {
            //  Set the env values
            _env_key   =    _keyValueArr[1];
            _env_value =    _keyValueArr[2] ? _keyValueArr[2] : '';
            _env_valueLength =   _env_value ? _env_value.length : 0;

            //  Multiline values (wrapped with quotes)
            if (_env_valueLength > 0 && _env_value.charAt(0) === '\"' && _env_value.charAt(_env_valueLength) === '\"') {
                _env_value = _env_value.replace(/\\n/gm, '\n');
            }

            //  Remove empty arrays && empty Object literals ([] || {})
            _env_value =    _env_value.replace(/\[(\s)*\]|\{(\s)*\}/, '');
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
module.exports =    getVariables_ENVVARS;
