module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    '(?<!temp/)node_modules/(?!(react-native|@react-native|react-router-native))',
  ],
  reporters: ['jest-standard-reporter'],
};
