CREATE TABLE IF NOT EXISTS enquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  pickup TEXT NOT NULL,
  destination TEXT NOT NULL,
  travel_date TEXT NOT NULL,
  travel_time TEXT NOT NULL,
  passengers TEXT,
  vehicle TEXT,
  trip_type TEXT,
  notes TEXT,
  source_page TEXT,
  landing_page TEXT,
  referrer TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  quoted_fare TEXT,
  final_fare TEXT,
  assigned_driver TEXT
);

CREATE INDEX IF NOT EXISTS enquiries_status_created ON enquiries (status, created_at DESC);

CREATE TABLE IF NOT EXISTS rate_limits (
  bucket TEXT PRIMARY KEY,
  hits INTEGER NOT NULL,
  window_start INTEGER NOT NULL
);
