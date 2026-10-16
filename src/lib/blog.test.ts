import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { linkAllowlist, parseBlogDraft, slugify } from "./blog.ts";

const sample = {
  title: "How to reach Pachmarhi from Pipariya station",
  description: "Pipariya is the usual rail stop for Pachmarhi. Ask Satpura Cabs for a cab after you share the train time and group size.",
  slug: "How to reach Pachmarhi!",
  intro: "Pipariya Railway Station is the usual rail access for Pachmarhi. A cab from there is arranged by date, time and group size, and the fare is confirmed before travel.",
  sections: [
    { heading: "Where should the cab meet you?", paragraphs: ["Share the train number so the driver knows which arrival to meet at Pipariya Railway Station."] },
    { heading: "What should you tell Satpura Cabs?", paragraphs: ["Send the date, the number of passengers and whether you need a hotel drop in Pachmarhi."] },
  ],
  faqs: [
    { question: "Is the fare listed?", answer: "No. Ask for the current fare." },
    { question: "Can the drop be a hotel?", answer: "Yes. Name the hotel when you enquire." },
  ],
  related: ["/pipariya-to-pachmarhi-taxi", "https://evil.example"],
};

test("allowlist includes every published page slug", () => {
  const sources = ["src/data/routes.ts", "src/data/destinations.ts"].map((file) => readFileSync(file, "utf8")).join("\n");
  const allowed = new Set(linkAllowlist());
  for (const match of sources.matchAll(/slug: "([^"]+)"/g)) {
    assert.equal(allowed.has(`/${match[1]}`), true, match[1]);
  }
});

test("slugifies a title", () => {
  assert.equal(slugify("How to reach Pachmarhi!"), "how-to-reach-pachmarhi");
});

test("keeps only known internal links", () => {
  const draft = parseBlogDraft(JSON.stringify(sample));
  assert.deepEqual(draft.body.related, ["/pipariya-to-pachmarhi-taxi"]);
});

test("rejects an invented fare", () => {
  assert.throws(() => parseBlogDraft(JSON.stringify({ ...sample, intro: `${sample.intro} The fare is ₹2500.` })));
});
