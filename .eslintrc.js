module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {},
    "globals": {
        "Phaser": "readonly"
    },
    "settings": {
        "import/core-modules": ["phaser"]
    }
};