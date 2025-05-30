module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest"
  },
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "<rootDir>/src/__tests__/setup.ts"
  ],
  testMatch: [
    "<rootDir>/src/__tests__/**/*.test.(ts|tsx|js|jsx)"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/src/__tests__/__mocks__/"
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/src/__tests__/__mocks__/fileMock.js"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/main.tsx",
    "!src/vite-env.d.ts"
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
  verbose: true,
  testEnvironmentOptions: {
    url: "http://localhost"
  }
};
