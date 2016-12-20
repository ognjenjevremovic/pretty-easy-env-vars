# **pretty-easy**

### **pretty-easy** is a pack (bundle) of NodeJS modules for common tasks, such as:
  - getting the **dates** [ [**Git repository**](https://github.com/ognjenjevremovic/pretty-easy-dates), [**npm module**](https://www.npmjs.com/package/pretty-easy-dates) ],
  - displaying **logs** to the console (*including writing them to files*) [ [**Git repository**](https://github.com/ognjenjevremovic/pretty-easy-logs), [**npm module**](https://www.npmjs.com/package/pretty-easy-logs) ],
  - setting and reading **environment variables** [(***in development***)],
  - **CRUD operations** using MongoDB database collections [(***in development***)],
  - **Crypting and decrypting** the data [(***planned for the later date***)],
  - easily **sending the mails** [(***planned for the later date***)]

&nbsp;

### *What is pretty-easy-env-vars?*
***pretty-easy-env-vars*** *is a NodeJS module for setting and retrieving **environment-specific variables** from a file.
It helps you store your sensitive information, such as database passwords or API keys in a file (either UNIX hidden file [prefixed with a dot] '.envVars' or from a 'envVars.json' file).
You are **strongly encouraged NOT! to** include the file in the version control systems repository (such as ***Github***), but rather:
    - create a '.envFile' on a deployment server,
    - populate it with data and
    - then require the module as early as possible in your application

&nbsp;

## Still in development
Please do note that the module is ***still in development*** and not all of the features (planned for initial release) are yet implemented.
As such, the module is **NOT** intended for production yet and is not found on the npm repository because of the same reason.

If you're eager to see the module production ready, please consider making a pull request and contribute to the project.

&nbsp;

### Want to contribute?
**Great!**
Anyone can help make this project better - check out the [github](https://github.com/ognjenjevremovic/pretty-easy-crud) repository!

&nbsp;

### License
Copyright (c) 2016 [Ognjen Jevremović](https://github.com/ognjenjevremovic)

Licensed under the [MIT](https://github.com/ognjenjevremovic/pretty-easy-crud/blob/master/LICENSE) License.
