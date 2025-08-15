// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals", "next/typescript"), {
  ignores: [
    ".next/**", 
    "scripts/**", 
    "*.log", 
    "node_modules/**",
    "**/*.stories.tsx",
    "**/*.stories.ts", 
    "**/*.stories.jsx",
    "**/*.stories.js",
    "src/stories/**",
    ".storybook/**",
    "storybook-static/**"
  ],
}, ...storybook.configs["flat/recommended"]];

export default eslintConfig;
