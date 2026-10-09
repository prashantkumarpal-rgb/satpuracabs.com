const COOKIE = "sc_admin";
const PAYLOAD = "satpura-admin-v1";

function bytesToHex(bytes: ArrayBuffer): string {
  return [...new Uint8Array(bytes)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function adminToken(secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(PAYLOAD));
  return bytesToHex(signature);
}

export async function adminCookieMatches(cookie: string | undefined, secret: string | undefined): Promise<boolean> {
  if (!cookie || !secret) return false;
  const expected = await adminToken(secret);
  if (cookie.length !== expected.length) return false;
  let mismatch = 0;
  for (let index = 0; index < cookie.length; index += 1) {
    mismatch |= cookie.charCodeAt(index) ^ expected.charCodeAt(index);
  }
  return mismatch === 0;
}

export const adminCookieName = COOKIE;
