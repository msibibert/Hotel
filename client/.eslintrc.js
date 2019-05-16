module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-unused-vars": "off",
        "no-cond-assign": "off",
        "space-before-blocks": "error",
        "spaced-comment": "error",
        "curly": "error",
        "guard-for-in": "error",
        "no-caller": "error",
        "no-else-return": "error",
        "no-empty-function": "error",
        "no-new-wrappers": "error",
        "no-with": "error",
        "block-spacing": "error",
        "brace-style": [
          "error",
          "1tbs"
        ],
        "indent": [
          "error",
          4,
          {
            "SwitchCase": 1
          }
        ],
        "max-len": [
          "error",
          120,
          { "ignoreComments": true }
        ],
        "newline-after-var": "error",
        "newline-before-return": "error",
        "no-multiple-empty-lines": [
          "error",
          {
            "max": 1,
            "maxEOF": 1
          }
        ],
        "no-nested-ternary": "error",
        "no-tabs": "error",
        "one-var-declaration-per-line": "error",
        "quotes": [
          "error",
          "single"
        ],
        "max-statements-per-line": [
          "error",
          {
            "max": 1
          }
        ],
        "keyword-spacing": [
          "error",
          {
            "after": true
          }
        ],
        "key-spacing": [
          "error",
          {
            "afterColon": true
          }
        ],
        "object-curly-spacing": ["error", "always"],
        "dot-notation": "error",
        "no-eval": "error",
        "no-multi-spaces": "error",
        "yoda": "error",
        "camelcase": [
          "error",
          {
            "properties": "never"
          }
        ],
        "comma-spacing": [
          "error",
          {
            "after": true
          }
        ],
        "consistent-this": [
          "error",
          "that"
        ],
        "lines-around-directive": [
          "error",
          "always"
        ],
        "max-nested-callbacks": [
          "error",
          4
        ]
      }
};