module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  plugins: ["@typescript-eslint"], // Uses the typescript eslint plugin
  extends: [
    "airbnb", // Use the Airbnb style guide
    //"eslint:recommended",
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    ecmaVersion: 6, // Allows for the parsing ECMAScript 6 features
    // project: "./tsconfig.json", // Optional. Reuses the TSLint config file
    sourceType: "module" // Allows for the use of imports
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/indent": [2, 2], // Used to avoid conflict. Ident with two spaces (Airbnb style guide)
    /**
     * @description rules of eslint-plugin-react
    */
    "react/jsx-filename-extension": ["warn", {
      "extensions": [".jsx", ".tsx"]
    }], // also want to use with ".tsx"
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}