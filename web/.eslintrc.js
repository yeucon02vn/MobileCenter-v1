module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // E
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "react/prop-types": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "prettier/prettier": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/ban-ts-ignore:": 0,
    "jsx-a11y/anchor-is-valid": 0
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
