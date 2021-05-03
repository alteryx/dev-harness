module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        corejs: 3,
        targets: {
          browsers: ['>0.25%', 'not dead', 'not ie 11', 'not op_mini all']
        }
      }
    ]
  ],
  env: {
    production: {
      ignore: ['**/*.test.*', '**/__test__', '**/__mocks__']
    }
  },
  plugins: [
    ['@babel/plugin-syntax-dynamic-import'],
    ['@babel/transform-runtime'],
    ["transform-imports", {
      "@alteryx/icons\/?(((\\w*)?\/?)*)": {
        "transform": importName => {
          const splitName = importName.split(/(?=[A-Z])/)
          const folderName = splitName !== null ? splitName.join('-').toLocaleLowerCase() : importName.toLocaleLowerCase();
          return `@alteryx/icons/icons/${folderName}`;
        }
      },
    }],
  ],
  
};
