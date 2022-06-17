module.exports = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        './src/modules/*/Domain/*',
        './src/modules/*/Services/*',
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