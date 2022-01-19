module.exports = {
  // So parent files don't get applied
  root: true,
  globals: {
    preval: false,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
  },
  extends: ["airbnb", "prettier", "plugin:node/recommended"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
  },
  plugins: ["babel", "import", "jsx-a11y"],
  rules: {
    "prettier/prettier": "error",
    "no-plusplus": "off",
    "prefer-rest-params": "off",
    "no-restricted-syntax": "off",
    "no-prototype-builtins": "off",
    "prefer-destructuring": "off",
    "react/button-has-type": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": "off",
    "react/require-default-props": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/interactive-supports-focus": "off",
    "jsx-a11y/click-events-have-key-events": "off",
  },
};
