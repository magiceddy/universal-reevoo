module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        quotes: ["error", "single", {
            avoidEscape: true,
            allowTemplateLiterals: true
        }],
        "semi": [
            "error",
            "always"
        ],
        "no-undef": 1,
        "no-unused-vars": 0,
        "no-console": 0,
        "no-class-assign": 0
    }
};