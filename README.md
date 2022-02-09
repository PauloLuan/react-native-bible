## 💡 Introduction

This is my React Native version of the Holy bible project.

You can check the NextJS version [here](https://github.com/PauloLuan/bible)

<span id="top"></span>

<p align="center">
    <a href="#"><img src="https://github.com/pauloluan/assets/blob/master/back.png?raw=true" width="100"></a>
</p>

<p align="center">
    <a href="https://github.com/PauloLuan/react-native-bible/actions/workflows/ci.yml"><img src="https://img.shields.io/github/workflow/status/pauloluan/react-native-bible/ci?style=for-the-badge"></a>
    <a href="https://github.com/PauloLuan/react-native-bible/actions/workflows/ci.yml"><img src="https://forthebadge.com/images/badges/it-works-why.svg"></a>
</p>

## 📝 Minimal Requirements

- NodeJs 14.x
- Yarn
- React Native environment

## Getting Started

Just install the dependencies with yarn

```bash
yarn
```

Then, run the development script (ps: This will both react native and also the storybook server.)

```bash
yarn dev
```

Just open the mobile emulator :)

Open [http://localhost:9999](http://localhost:9999) to check your stories.

## Commands

- `dev`: runs your application on the emulator and also starts the storybook
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `typecheck`: check typescript types
- `generate`: creates a component scaffold (you can also choose between styled component and chackra component)
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook


`dev`: starts both the emulator and the storybook server.
`start`: starts the app using expo
`ios`: starts expo for ios
`ios:cache`: remove all watchman metadata before start with ios
`cache:clean:hard`: resets all unversioned metadata and starts the app
`format`: runs eslint and fix everything
`android`: starts the app for android.
`web`: starts the app for web
`eject`: eject from expo
`test`: runs the unit tests with jest
`prestorybook`: runs the script `rnstl`in which updates all new storybook files.
`storybook`: starts the storybook server.
`build-storybook`: build the storybook.

## What is inside?

This project uses:


- [React Native](https://www.reactnative.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)

## :pencil: Author

Paulo Luan

<table>
  <tr>
    <td align="center"><a href="https://github.com/pauloluan"><img src="https://github.com/pauloluan.png" width="100px;" alt=""/><br /><sub><b>Paulo Luan</b></sub></a><br /></td>
  <tr>
</table>
