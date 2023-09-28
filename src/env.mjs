import { cwd } from "process";
import pkg from "@next/env";
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

pkg.loadEnvConfig(cwd());

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(["production" | "development" | "test"]),
  },
  client: {
    // NEXT_PUBLIC_PUBLISHABLE_KEY: z.string().min(1),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
  },
});
