import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from './schema'

const sql = neon(
    "postgresql://expense-insight_owner:UQCE0iTOBGF2@ep-raspy-smoke-a51xdupt.us-east-2.aws.neon.tech/expense-insight?sslmode=require"
)

export const db = drizzle(sql,{schema});