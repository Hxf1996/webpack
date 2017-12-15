const path = require('path')
const fs = require('fs')
const {
    sortDependencies,
    installDependencies,
    runLintFix,
    printMessage,
} = require('./utils')

module.exports = {
    helpers: {
        if_or: function(v1, v2, options) {
            if (v1 || v2) {
                return options.fn(this);
            }

            return options.inverse(this);
        }
    },
    prompts: {
        name: {
            type: "string",
            required: true,
            message: "Project name",
        },
        description: {
            type: "string",
            required: false,
            message: "Project description",
            default: "A Vue.js@latest project",
        },
        author: {
            type: "string",
            message: "Your name",
            default: "Huxfjxj",
        },
        email: {
            type: "string",
            message: "Your email",
            default: "Huxfjxj@gmail.com",
        },
        router: {
            type: "confirm",
            message: "Install vue-router ?",
        },
        store: {
            type: "confirm",
            message: "Install vuex ?",
        },
        http: {
            type: "confirm",
            message: "Install Axios ?",
        },
        autoInstall: {
            type: 'list',
            message: 'Should we run `npm install`? (recommended)',
            choices: [
                {
                    name: 'Yes',
                    value: 'npm',
                    short: 'npm',
                },
                {
                    name: 'No',
                    value: false,
                    short: 'no',
                },
            ],
        },
    },
    filters: {
        "src/router/**/*": "router",
        "src/store/**/*": "store",
    },
    complete: function(data, { chalk }) {
        const green = chalk.green;
        sortDependencies(data, green);
        const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName);

        if (data.autoInstall) {
            installDependencies(cwd, data.autoInstall, green)
                .then(() => {
                    return runLintFix(cwd, data, green);
                })
                .then(() => {
                    printMessage(data, green);
                })
                .catch(e => {
                    console.log(chalk.red('Error:'), e);
                })
        } else {
            printMessage(data, chalk);
        }
    },
};
