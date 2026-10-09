import assert from "node:assert/strict";
import test from "node:test";
import { isEnquiryStatus, validateEnquiry } from "./enquiry.ts";

const valid = {
  name: "Asha",
  phone: "9876543210",
  pickup: "Pipariya Railway Station",
  destination: "Pachmarhi",
  date: "2026-11-15",
  time: "10:00",
  passengers: "4–5",
  vehicle: "SUV / Ertiga",
  tripType: "One way",
  notes: "Train 12187",
};

test("accepts a complete enquiry", () => {
  const result = validateEnquiry(valid);
  assert.equal(result.ok, true);
  if (result.ok) assert.equal(result.value.destination, "Pachmarhi");
});

test("rejects a short phone number", () => {
  const result = validateEnquiry({ ...valid, phone: "12345" });
  assert.equal(result.ok, false);
});

test("treats a filled honeypot as a silent drop", () => {
  const result = validateEnquiry({ ...valid, company: "spam" });
  assert.equal(result.ok, true);
  if (result.ok) assert.equal(result.silent, true);
});

test("rejects an unknown status", () => {
  assert.equal(isEnquiryStatus("quoted"), true);
  assert.equal(isEnquiryStatus("paid"), false);
});
