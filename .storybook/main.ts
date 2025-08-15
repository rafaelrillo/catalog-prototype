import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding", 
    "@storybook/addon-a11y",
    "@storybook/addon-designs",
    "@storybook/addon-vitest"
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {
      builder: {
        useSWC: true, // Enable SWC for compatibility with Next.js 15
      },
    }
  },
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  staticDirs: ["../public"],
  core: {
    disableTelemetry: true,
  },
};
export default config;