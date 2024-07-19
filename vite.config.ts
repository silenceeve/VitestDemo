import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        // in case you have test in function ts file
        includeSource: ["src/**/*.{ts,tsx,js,jsx}"],
        coverage: {
            reporter: ["text", "html"],
        },
    },
})