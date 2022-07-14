module.exports = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.ts',
        '!src/**/server.ts',
        '!src/**/I*.ts',
        '!src/**/*run.ts',
        '!src/**/Errors/*.ts',
        '!src/**/infra/*.ts',
        '!src/**/@types/*.ts',
        '!src/**/config/*.ts',
        '!src/**/Repositories/*.ts',
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