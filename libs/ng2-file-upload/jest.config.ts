/* eslint-disable */
export default {
  displayName: 'ng2-file-upload',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/testing/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',

    }
  },
  coverageDirectory: '../../coverage/libs/ng2-file-upload',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment'
  ],
  transform: { '^.+.(ts|mjs|js|html)$': 'jest-preset-angular' },
  transformIgnorePatterns: ['node_modules/(?!.*.mjs$)'],
  moduleFileExtensions: ['mjs', 'ts', 'js', 'html']
};
