import * as cdk from "aws-cdk-lib"
import * as amplify from "@aws-cdk/aws-amplify-alpha"
import * as codebuild from "aws-cdk-lib/aws-codebuild"
import type { Construct } from "constructs"

export class PortfolioInfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // Amplify Application
    const amplifyApp = new amplify.App(this, "PortfolioApplication", {
      appName: "Portfolio",
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: "CloudRizz",
        repository: "portfolio_website",
        oauthToken: cdk.SecretValue.secretsManager("github-token"),
      }),
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: "1.0",
        frontend: {
          phases: {
            preBuild: {
              commands: [
                'echo "Starting preBuild..."',
                "pwd",
                "ls -la",
                "cd portfolio",
                'echo "Changed to portfolio directory"',
                "pwd",
                "ls -la",
                "npm ci",
              ],
            },
            build: {
              commands: [
                'echo "Building Next.js static app..."',
                "npm run build-and-export",
                'echo "Build completed successfully"',
              ],
            },
          },
          artifacts: {
            baseDirectory: "portfolio/out",
            files: ["**/*"],
          },
          cache: {
            paths: ["portfolio/node_modules/**/*", "portfolio/.next/cache/**/*"],
          },
          runtime: {
            nodejs: "20",
          },
        },
      }),
    })

    // Main branch with autoBuild
    amplifyApp.addBranch("main", {
      autoBuild: true,
    })
  }
}
