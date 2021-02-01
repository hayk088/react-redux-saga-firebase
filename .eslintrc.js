module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["react-app", "prettier"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
      "prettier"
    ],
    "rules": {
        "semi": "warn"
    }
};
