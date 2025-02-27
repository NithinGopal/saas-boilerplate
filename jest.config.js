module.exports = {
  roots: ["<rootDir>/packages"],
  testEnvironment: "node",
  preset: "ts-jest",
  collectCoverageFrom: ["packages/**/{src,lib}/**/*.{js,ts,tsx}"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
};
