# Alteryx Dev Harness

The Dev Harness is a real time development environment for building custom tools that will be used within the Alteryx platform. It allows you to rapidly prototype and prove out UIs for your custom tools utilizing the UI-SDK packages: [react-comms](https://alteryx.github.io/react-comms/) and [alteryx-ui](https://alteryx.github.io/alteryx-ui/).

### Getting Started

The Dev Harness is already equipped with all of the packages you'll need to build a custom tool. After cloning the repo, an `npm install` will get you setup.

To run the Dev Harness, the standard `npm run start` command will launch the Dev Harness at localhost port 8080.


### Templates

The Dev Harness provides 4 example templates for basic tool frontends. You can simply copy and paste these into the `src/index.tsx` file, or you can change your webpack configuration to use one of those templates as your entry point.


### Webpack

We provide a basic webpack configuration that can be extended to your individual use case. The configuration that comes with the Dev Harness is setup for both dev and prod environments.