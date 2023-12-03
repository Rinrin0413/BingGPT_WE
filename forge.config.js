module.exports = {
  packagerConfig: {
    appCopyright: 'Copyright © 2023 dice2o',
    appBundleId: 'com.dice2o.binggpt.we',
    icon: 'icon',
    platforms: [
      // 'darwin',
      'linux',
      // 'win32'
    ],
    arch: [
      'x64',
      // 'arm64'
    ],
    asar: true,
    executableName: 'BingGPT-WE',
  },
  rebuildConfig: {},
  makers: [
    // {
    //   name: '@electron-forge/maker-squirrel',
    //   config: {
    //     iconUrl: 'https://github.com/dice2o/BingGPT/raw/main/icon.ico',
    //     setupIcon: 'icon.ico',
    //     authors: 'dice2o',
    //     description: 'AI-powered copilot',
    //   },
    // },
    // {
    //   name: '@electron-forge/maker-zip',
    //   platforms: ['darwin', 'win32'],
    // },
    // {
    //   name: '@electron-forge/maker-dmg',
    //   config: {
    //     icon: 'icon.icns',
    //     background: 'bg.png',
    //     overwrite: true,
    //   },
    // },
    // {
    //   name: '@electron-forge/maker-deb',
    //   config: {
    //     options: {
    //       bin: 'BingGPT',
    //       name: 'binggpt',
    //       productName: 'BingGPT',
    //       description: 'AI-powered copilot',
    //       productDescription: 'AI-powered copilot',
    //       version: '0.3.7',
    //       categories: ['Utility'],
    //       maintainer: 'dice2o',
    //       homepage: 'https://github.com/dice2o/BingGPT',
    //       icon: 'icon.png',
    //     },
    //   },
    // },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          bin: 'BingGPT-WE',
          name: 'binggpt-we',
          productName: 'BingGPT (Works on my machine Edition)',
          description: 'AI-powered copilot that works on my machine',
          productDescription: 'AI-powered copilot that works on my machine',
          version: '0.3.7-we.2',
          categories: ['Utility'],
          maintainer: 'Rinrin.rs',
          homepage: 'https://github.com/Rinrin0413/BingGPT-WE',
          icon: 'icon.png',
        },
      },
    },
  ],
}
