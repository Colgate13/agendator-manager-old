module.exports = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        './src/modules/**/Domain/**.ts',
        './src/modules/**/Services/**.ts',
    ],
    coverageDirectory: 'coverage',
    coverageProvider: "v8",
    coverageReporters: [
        "text-summary",
        "lcov",
        "html"
    ],
    preset: 'ts-jest',
    testEnvironment: "node",
    testMatch: [
        "**/*.spec.ts",
        "**/*.test.ts",
    ],
};