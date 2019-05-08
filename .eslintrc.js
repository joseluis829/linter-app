module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    plugins: ["@typescript-eslint"], // Uses the typescript eslint plugin
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"], // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    parserOptions: {
        ecmaVersion: 6, // Allows for the parsing ECMAScript 6 features
        project: "./tsconfig.json", // Optional
        sourceType: "module" // Allows for the use of imports
    }
}