// Re-export the single canonical handler from the root `api/send-email.js`.
// This ensures both file- and folder-based routing resolve to the same function
// and avoids deployment mismatches on platforms like Vercel.

export { default } from "../send-email.js";
