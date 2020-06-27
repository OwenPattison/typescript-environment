module.exports = {
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node", "scss"],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupFilesAfterEnv: ["<rootDir>/setup-tests.js"],
    moduleNameMapper: {
        "\\.scss$": "identity-obj-proxy"
    }
};
