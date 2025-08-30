// AWS CDK Configuration for Amplify Deployment
export const amplifyConfig = {
  // App configuration
  appName: "rizwan-portfolio",
  branch: "main",

  // Build settings optimized for Next.js static export
  buildSpec: {
    version: "1.0",
    frontend: {
      phases: {
        preBuild: {
          commands: ["npm ci"],
        },
        build: {
          commands: ["npm run build"],
        },
      },
      artifacts: {
        baseDirectory: "out",
        files: ["**/*"],
      },
      cache: {
        paths: ["node_modules/**/*", ".next/cache/**/*"],
      },
    },
  },

  // Environment variables for production
  environmentVariables: {
    AMPLIFY_MONOREPO_APP_ROOT: ".",
    AMPLIFY_DIFF_DEPLOY: "false",
    _LIVE_UPDATES: '[{"name":"Next.js version","pkg":"next","type":"npm","version_run":"npx next --version"}]',
  },

  // Custom headers for security and performance
  customRules: [
    {
      source: "/**",
      target: "/index.html",
      status: "404-200",
    },
  ],
}

// CDK Stack configuration
export const cdkStackConfig = {
  stackName: "RizwanPortfolioStack",
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION || "eu-west-2",
  },

  // Amplify app configuration
  amplifyApp: {
    name: "rizwan-portfolio",
    description: "Rizwan Hussain - Cloud Engineer Portfolio",
    platform: "WEB_COMPUTE" as const,

    // Auto branch creation
    autoBranchCreation: {
      enabled: true,
      patterns: ["main", "develop"],
      buildSpec: amplifyConfig.buildSpec,
    },

    // Custom domain configuration (optional)
    customDomain: {
      // domainName: 'your-domain.com',
      // enableAutoSubDomain: true
    },
  },
}
