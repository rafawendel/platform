module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb",
        "plugin:react/recommended",
        "prettier",
        "prettier/react",
        // "plugin:react-hooks/recommended",
        "plugin:import/recommended",
        "plugin:jsx-a11y/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "settings": {
        "react": {
          "createClass": "createReactClass",
          "pragma": "React",
          "version": "detect",
          "flowVersion": "0.53"
        },
        "propWrapperFunctions": [
            "forbidExtraProps",
            {"property": "freeze", "object": "Object"},
            {"property": "myFavoriteWrapper"}
        ],
        "linkComponents": [
          "Hyperlink",
          {"name": "Link", "linkAttribute": "to"}
        ]
      },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "prettier",
        "react",
        "react-hooks",
        "import",
        "jsx-a11y"
    ],
    "rules": {
        "prettier/prettier": ["error", {}, {
            "usePrettierrc": true
          }],
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": "off",
        "import/prefer-default-export": "off",
        "react/no-array-index-key": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-nested-ternary": "off",
        // "react/jsx-wrap-multilines": ["error", {"declaration": false, "assignment": false}],
        // "indent": ["error", 2],
        "arrow-parens": ["error", "as-needed"],
        "no-console": "off",
        "react/jsx-props-no-spreading": "off"
    }
}