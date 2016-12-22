//  Dependancies
var read =  require('./index'),
    log  =  require('../helpers').log;



read('vars.txt');
setTimeout(function() {
    console.log(process.env.NAME);
}, 1000);
