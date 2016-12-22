//  Dependancies
var envVars =   require('./index'),
    path    =   require('path');


//  Set environment variables, by passing the string argument
envVars();              //  Set environment variables from .envVars file, from the project root diretory    [DEFAULT]
console.log(process.env.NAME);

envVars('');            //  Set environment variables from .envVars file, from the project root diretory
console.log(process.env.NAME);

envVars('vars.txt');    //  Set environment variables from vars.txt file, from the project root diretory
console.log(process.env.NAME);

envVars('vars.json');   //  Set environment variables from vars.json file, from the project root diretory
console.log(process.env.NAME);

//  Set environment variables, by passing the Object literal argument
envVars({
    fileName : '',                  //  Set environment variables from
    fileExtension : 'envVars'       //  .envVars file, from the from the project root diretory
});
console.log(process.env.NAME);

envVars({
    fileName : 'vars',              //  Set environment variables from
    fileExtension : 'txt'           //  vars.txt file, from the from the project root diretory
});
console.log(process.env.NAME);

envVars({
    fileName :  'vars',             //  Set environment variables from
    fileExtension : 'json'          //  vars.json file, from the project root diretory
});
console.log(process.env.NAME);

    //////

envVars({
    fileName :  'vars',             //  Set environment variables from
    fileExtension : 'json',         //  vars.json file
    filePath :  process.env.PATH    //  from the defined diretory
});
console.log(process.env.NAME);

envVars({
    fileName :  'vars',             //  Set environment variables from
    fileExtension : 'txt',          //  vars.txt file
    filePath :  process.env.PATH    //  from the defined diretory
});
console.log(process.env.NAME);

envVars({
    fileName :  'vars',            //  Set environment variables from
    fileExtension : 'envvars',      //  vars.txt file
    filePath :  process.env.PATH    //  from the defined diretory
});
console.log(process.env.NAME);
