# **pretty-easy**

### **pretty-easy** is a pack (bundle) of NodeJS modules for common tasks, such as:
  - getting the **dates** [ [**Git repository**](https://github.com/ognjenjevremovic/pretty-easy-dates), [**npm module**](https://www.npmjs.com/package/pretty-easy-dates) ],
  - displaying **logs** to the console (*including writing them to files*) [ [**Git repository**](https://github.com/ognjenjevremovic/pretty-easy-logs), [**npm module**](https://www.npmjs.com/package/pretty-easy-logs) ],
  - setting and reading **environment variables** [ [**Git repository**](https://github.com/ognjenjevremovic/pretty-easy-env-vars), [**npm module**](https://www.npmjs.com/package/pretty-easy-env-vars) ],
  - **CRUD operations** using MongoDB database collections [[**Git repository** - *in development*](https://github.com/ognjenjevremovic/pretty-easy-crud)],
  - **Crypting and decrypting** the data [(***planned for the later date***)],
  - easily **sending the mails** [(***planned for the later date***)]

&nbsp;

## Still in development
Please do note that the module is ***still in development*** and not all of the features (planned for initial release) are yet implemented.
As such, the module is **NOT** intended for production yet and is not found on the npm repository because of the same reason.

If you're eager to see the module production ready, please consider making a pull request and contribute to the project.

&nbsp;

### *What is pretty-easy-env-vars?*
***pretty-easy-env-vars*** *is a NodeJS module for setting and retrieving **environment-specific variables** from a file*.
It helps you store your sensitive information, such as database passwords or API keys in a file - either in default **'.envVars'** (UNIX hidden) file or from a custom **'.json'** or **'.txt'** file).
You are **strongly encouraged *NOT!* to** include the file containing environment-specific variables in the version control systems repository (such as ***Github***), but rather:

- create a *'.envFile'* on a deployment server,
- populate it with data and
- then require the module as early as possible in your application

&nbsp;

### *Why use this module?*
Version control systems such as **Git** allows us to share our work with other like-minded developers and get their help in debugging and deploying our ideas (read *software*). But sometimes, we don't want our *sensitive information* (such as **passwords** and **API keys**) to be included in our public repositories and be seen by everyone.
However, removing those by hand each time we want to make a commit or defining a *commit task* (in build tools such as *Gulp* or *Grunt*) that would automate the process of masking sensitive info, is not an easy task.
But, we don't want our **passwords, IP addresses, port numbers, hashes and API keys** exposed; don't we?!

That's where this module comes in handy!

All of your *sensitive information* (or the information that you don't want to be publicly exposed for others to see) should go in a file, that you don't include in your **VC system** repository.
The file could either be a UNIX hidden file (with it's name prefixed with a dot) or you could just add the name of your file (that contains your sensitive information) to **'.gitignore'** file and exclude it from the repository.

### *How to use this module?*
By default the module requires ***'.envVars'*** file in the root of your project, populated with ***key=value*** pairs.
However, you could define another file (either in ***'.txt'*** or ***'.json'*** format) and pass it's name (and optionally **file path** - if it's not located in the root of your project; and **file extension** - if the file is not in *'.envVars'* extension) to the function call.
You're advised to set your environment variables from within your main entry point file (*'server.js'*, *'app.js'*, *'index.js'* or *'howeverYouCall_It.js'*) at the very beginning.

&nbsp;

# Install
This is a [NodeJS](http://www.node.js) module available through the [npm](http://npmjs.org) registry. Installation is done using the **npm install** command:
```sh
$ npm install pretty-easy-env-vars
```

&nbsp;

# Usage
After installing the module (locally in your project directory), in order to use it in your file you first need to require it.
```javascript
var envVars = require('pretty-easy-env-vars');
```

The module returns a function for you to call (with optional parameter to be passed< *Object literal || string* >) which then sets **environment-specific variables** from the file.


&nbsp;

## Examples

### 1. Simple usage (no parameter)

The most simplest use is to call the function returned by the module (without any parameter being supplied to the function), which will then set **environment variables** for your working environment from :
- **'.envVars'** file,
- located in the **root** of your project

```javascript
//	Require the module
var envVars = require('pretty-easy-env-vars');

// 	Set environment variables, from within '.envVars' file  
//	located in the root of the project (default filename, file path, file extension)
envVars();
```


### 2. Simple usage (string parameter)
If you'd like to store your environment variables in the file other than *'.envVars'*, you're more than welcome to.
However, there are few things to note:

- supported file formats are : ***'.envVars'***, ***'.txt'***, ***'.json'***,
- you should include the full filename (including the file extension) -> *i.e* ***'vars.txt'*** or default ***'envVars'*** extension will be used instead,
- file should be located in the root of your application,
- only files prefixed with a '.' (dot) are automatically excluded from the version control systems (such as *Git*); if however, you don't want to prefix your file with a dot, you'll need to put the filename to your **.gitignore** file, in order NOT to include it to version control system.

```javascript
//	Require the module
var envVars = require('pretty-easy-env-vars');

// 	Set environment variables, from within 'my-variables.txt' file  
//	located in the root of the project (default file path)
envVars('my-variables.txt');
```

If you'd like to preserve the default file format (*'.envVars'*), but name your file rather differently ('myvars.envVars' for example) you can pass the filename only and *NOT* the file extension to the function call.
```javascript
//	Require the module
var envVars = require('pretty-easy-env-vars');

// 	Set environment variables, from within 'myvars.envVars' file  
//	located in the root of the project (default file path, extension)
envVars('myvars');
```

***Important!***
When passing a string parameter, the file containing your *sensitive information* (that you want to set as an environment variable) **must** be located in the root of your application!
If you'd like to change the file path, you'll need to pass *Object literal* instead.

### 3. Object literal parameter supplied
When passing an Object literal parameter, the ***'fileName'*** property must be set on the Object, otherwise the default values are used instead.
Properties that are considered valid for the Object parameter passed:
- **fileName** - which defines the name of the file (full file name, including the extension or without the extension - if file extension is defined here, it will not be overwritten with a value from 'fileExtension' property),
- **fileExtension** - defining the extension of the file (supported files extensions are *envVars*, *txt*, *json*) - without a ***.*** (very important!),
- **filePath** - which defines the **relative** path to your file (from the *__dirname* perspective).

Default values for the properties of a JavaScript Object literal supplied to the function :"
- *fileName* === '' -> empty string,
- *fileExntesion* === 'envVars',
- *filePath* === root of your project

```javascript
//	Require the module
var envVars = require('pretty-easy-env-vars');

//	environment variables options
var envOptions = {};
envOptions.fileName = 'myvars';
envOptions.fileExtension = 'txt';

// 	Set environment variables, from within 'myvars.txt' file  
//	located in the root of the project (default file path)
envVars(envOptions);
```

&nbsp;

# Syntax
##### For *.envVars* and *.txt* files :

```sh
VARIABLE_NAME=VARIABLE_VALUE
ANOTHER_VARNAME=SOME_VALUE
```

Multiline variable values are allowed, when wrapped with **quotes** ("" || '').
```sh
MULTILINE_VAR='Multi
line
variable
value'
```

##### For *.json* files :

```js
{
	"VARIABLE_NAME" : "VARIABLE_VALUE",
	"ANOTHER_VARNAME" : "SOME_VALUE"
}
```

&nbsp;

### Want to contribute?
**Great!**
Anyone can help make this project better - check out the [github](https://github.com/ognjenjevremovic/pretty-easy-dates) repository!

&nbsp;

### License
Copyright (c) 2016 [Ognjen Jevremović](https://github.com/ognjenjevremovic)

Licensed under the [MIT](https://github.com/ognjenjevremovic/pretty-easy-dates/blob/master/LICENSE) License.
