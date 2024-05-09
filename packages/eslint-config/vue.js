const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
    extends: [
        "@vue/eslint-config-typescript",
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: "latest",
    },
    settings: {
        "import/resolver": {
            typescript: {
                project,
            },
        },
    },
    ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js"],

    rules: {
        "import/no-default-export": "off",
        "vue/multi-word-component-names": "off",
        // add specific rules configurations here
    },
};