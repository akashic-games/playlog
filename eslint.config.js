const eslintConfig = require("@akashic/eslint-config");

module.exports = [
    ...eslintConfig,
    {
        files: ["src/**/*.ts"],
        languageOptions: {
            sourceType: "module",
            parserOptions: {
                project: "tsconfig.json",
            },
        },
        "rules": {
          "@typescript-eslint/naming-convention": [
             "error",
             {
              "selector": "variable",
              "format": ["camelCase", "PascalCase"]
            }
          ]
        },
        ignores: ["**/*.js"]
    },
    {
      files: ["test/*.ts"],
        languageOptions: {
            sourceType: "module",
            parserOptions: {
                project: "test/tsconfig.json",
            },
        },
        ignores: ["**/*.js"]
    }
];
