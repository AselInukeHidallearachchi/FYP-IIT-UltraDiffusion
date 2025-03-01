module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest"
  },
  testEnvironment: "jsdom",  // Ensure this is set
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};
