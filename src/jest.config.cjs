module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest"
  },
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: [
    "<rootDir>/../node_modules/@testing-library/jest-dom/dist/index.js",
    "<rootDir>/__tests__/setup.ts"
  ],
  testMatch: [
    "<rootDir>/__tests__/**/*.test.(ts|tsx|js|jsx)"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/__tests__/__mocks__/"
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__tests__/__mocks__/fileMock.cjs"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "./**/*.{ts,tsx}",
    "!./**/*.d.ts",
    "!./main.tsx",
    "!./vite-env.d.ts",
    "!./__tests__/**/*",
    "!./**/*.test.{ts,tsx}"
  ],
  coverageDirectory: "../coverage",
  coverageReporters: ["text", "lcov"],
  verbose: true,
  testEnvironmentOptions: {
    url: "http://localhost"
  }
}; 