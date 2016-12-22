//  Dependancies
var setFilepath  =  require('./setFilepath'),
    setVariables =  require('./setVariables');




//  Test filepath
console.log(setFilepath({
    filePath : __dirname,
    fileName : '',
    fileExtension : 'envvars'    
}));
