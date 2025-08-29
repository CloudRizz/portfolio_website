import * as cdk from 'aws-cdk-lib';
import * as amplify from '@aws-cdk/aws-amplify-alpha';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import { Construct } from 'constructs';

export class PortfolioInfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Amplify Application
    const amplifyApp = new amplify.App(this, 'PortfolioApplication', {
      appName: 'Portfolio',
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: 'CloudRizz',
        repository: 'portfolio_website',
        oauthToken: cdk.SecretValue.secretsManager('github-token') 
      }),
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: '1.0',
        frontend: {
          phases: {
            preBuild: {
              commands: [
                'echo "Starting this build"', 
                'cd portfolio',
                'npm install'
              ],
            },
            build: {
              commands: [
                'echo "Building our NextJs app"',
                'npm run build-and-export',
                'echo "Build is completed"', 
              ],
            },
          },
          artifacts: {
            baseDirectory: 'out',    // fixed path
            files: ['**/*']
          },
          cache: { 
            paths: [
              'node_modules/**/*',    // fixed typo
              '.next/cache/**/*',
            ]
          }
        }
      })
    });

    const mainBranch = amplifyApp.addBranch('main', {
      autoBuild: true
    });
  }
}
