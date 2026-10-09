import type { EnquiryDatabase } from "./db";

export async function isRateLimited(db: EnquiryDatabase, bucket: string, maxHits: number): Promise<boolean> {
  const now = Math.floor(Date.now() / 1000);
  const row = await db
    .prepare("SELECT hits, window_start FROM rate_limits WHERE bucket = ?")
    .bind(bucket)
    .first<{ hits: number; window_start: number }>();

  if (!row || now - Number(row.window_start) > 3600) {
    await db
      .prepare(
        "INSERT INTO rate_limits (bucket, hits, window_start) VALUES (?, 1, ?) ON CONFLICT(bucket) DO UPDATE SET hits = 1, window_start = excluded.window_start",
      )
      .bind(bucket, now)
      .run();
    return false;
  }

  if (Number(row.hits) >= maxHits) return true;
  await db.prepare("UPDATE rate_limits SET hits = hits + 1 WHERE bucket = ?").bind(bucket).run();
  return false;
}
