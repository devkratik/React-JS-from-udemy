import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  // 1. Global ignores
  globalIgnores(["dist"]),

  // 2. Base Configuration for JS/JSX files
  {
    files: ["**/*.{js,jsx}"],

    // Modern ESLint Flat Config utility handles extending recommended rules seamlessly
    extends: [
      js.configs.recommended,
      react.configs.flat.recommended,
      react.configs.flat["jsx-runtime"], // Required for React 17+ JSX transform
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    // 3. Custom Rule Overrides (No need to spread recommended rules manually here)
    rules: {
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-unused-vars": "warn",
      "react/prop-types": "off", // Usually set to 'off' if using TypeScript/Vite defaults, or change to 'warn' if you prefer
      "react/jsx-key": "warn",
    },
  },
]);
