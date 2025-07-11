import { defineConfig, type Config } from "drizzle-kit";

export default defineConfig({
	out: "./drizzle",
	dialect: "postgresql",
	schema: "./app/_utils/db/schema.ts",
	dbCredentials: {
		url: process.env.POSTGRES_URL!,
	},
});
