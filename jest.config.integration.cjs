module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  testEnvironment: "<rootDir>/tests/config/integration_test_environment.ts",
  testMatch: ["<rootDir>/tests/integration/**/*.ts"],
  setupFilesAfterEnv: ["<rootDir>/tests/config/setup.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/tests/integration/healthcheckControllerTest.ts",
  ],
  workerIdleMemoryLimit: "512MB",
};
