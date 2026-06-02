import { test, expect } from "bun:test";
import { mapSummary, productivityLabel } from "./rescuetime.ts";

test("mapSummary renames the snake_case API fields to the domain shape", () => {
  const s = mapSummary({
    date: "2026-05-31",
    productivity_pulse: 67,
    total_hours: 8,
    all_productive_percentage: 52,
    neutral_percentage: 23,
    all_distracting_percentage: 25,
    software_development_duration_formatted: "3h",
    communication_and_scheduling_duration_formatted: "1h",
    reference_and_learning_duration_formatted: "30m",
    business_duration_formatted: "15m",
    social_networking_duration_formatted: "10m",
    entertainment_duration_formatted: "20m",
    news_duration_formatted: "5m",
    utilities_duration_formatted: "2m",
  });
  expect(s.date).toBe("2026-05-31");
  expect(s.productivityPulse).toBe(67);
  expect(s.productivePercentage).toBe(52);
  expect(s.softwareDevFormatted).toBe("3h");
});

test("mapSummary falls back to '0s' for missing duration fields", () => {
  const s = mapSummary({
    date: "2026-05-31",
    productivity_pulse: 0,
    total_hours: 0,
    all_productive_percentage: 0,
    neutral_percentage: 0,
    all_distracting_percentage: 0,
  } as never);
  expect(s.softwareDevFormatted).toBe("0s");
  expect(s.newsFormatted).toBe("0s");
});

test("productivityLabel maps the -2..2 scale to human labels", () => {
  expect(productivityLabel(2)).toBe("Very Productive");
  expect(productivityLabel(1)).toBe("Productive");
  expect(productivityLabel(0)).toBe("Neutral");
  expect(productivityLabel(-1)).toBe("Distracting");
  expect(productivityLabel(-2)).toBe("Very Distracting");
  expect(productivityLabel(99)).toBe("Unknown");
});
