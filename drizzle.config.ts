import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: 'postgresql',
    schema: "./src/scheme.ts",
    out: "./src/lib/db",
    dbCredentials: {
        // url: config.dbUrl
        url: "postgres://benjaminhamrick:@localhost:5432/gator"
    },
});