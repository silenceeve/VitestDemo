import { defineConfig } from "vitest/config";

export default defineConfig({
    // do not use import.meta.vitest in your code when building
    define: {
        "import.meta.vitest": "undifined",
    },
    test: {
        // in case you have test in function ts file
        includeSource: ["src/**/*.{ts,tsx,js,jsx}"],
        coverage: {
            reporter: ["text", "html"],
        },
    },
})