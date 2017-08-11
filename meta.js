module.exports = {
    "helpers": {
        "if_or": function(v1, v2, options) {
            if (v1 || v2) {
                return options.fn(this);
            }

            return options.inverse(this);
        }
    },
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "message": "Project name"
        },
        "description": {
            "type": "string",
            "required": false,
            "message": "Project description",
            "default": "A Vue.js@latest project"
        },
        "author": {
            "type": "string",
            "message": "Your name",
            "default": "Huxfjxj"
        },
        "email": {
            "type": "string",
            "message": "Your email",
            "default": "Huxfjxj@gmail.com"
        },
        "router": {
            "type": "confirm",
            "message": "Install vue-router ?"
        },
        "store": {
            "type": "confirm",
            "message": "Install vuex ?"
        },
        "http": {
            "type": "confirm",
            "message": "Install Axios ?"
        },
    },
    "filters": {
        "src/router/**/*": "router",
        "src/store/**/*": "store"
    },
    "completeMessage": "To get started !"
};
