const esModules = ["@angular", "tslib", "rxjs"];

module.exports = {
  verbose: true,
  silent: true,
  transform: {
    "^.+\\.(ts|mjs|js|html)$": ["jest-preset-angular", {
      tsconfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.(html|svg)$",
    }],
  },
  transformIgnorePatterns: [
    `<rootDir>/node_modules/(?!.*\\.mjs$|${esModules.join("|")})`,
  ],
};
