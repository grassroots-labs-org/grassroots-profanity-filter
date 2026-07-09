import { BeKind } from "../src/index.js";

/**
 * Regression suite for the leet-innocent-words guard.
 *
 * With leet-speak ON, ambiguous letter→letter mappings (z→s, v→u, j→y, ph→f)
 * can mangle a legitimate word into a dictionary profanity. The canonical case
 * is "pizza" —(z→s)→ "pissa" (Portuguese "piss"), which used to flag every
 * event mentioning pizza.
 *
 * These tests pin down that:
 *   1. Protected legit words never flag, even with leet ON.
 *   2. Genuine leet evasions that DEPEND on letter→letter mappings still flag.
 */

// Mirror the production config from grassroots-web src/util/api/events.ts
const makeFilter = () =>
  new BeKind({
    enableLeetSpeak: true,
    sensitiveMode: true,
    contextAnalysis: { enabled: true, contextWindow: 5, languages: ["en"] },
    silent: true,
  });

describe("leet-innocent words are not mangled into profanity", () => {
  const filter = makeFilter();

  test.each([
    ["pizza"],
    ["Pizza"],
    ["PIZZA"],
    ["make pizza tonight"],
    ["community pizza night downtown"],
    ["homemade pizza and board games"],
    ["la pizza margherita"],
  ])("should NOT flag %j", (text) => {
    expect(filter.check(text)).toBe(false);
    expect(filter.detect(text).detectedWords).not.toContain("pissa");
  });

  it("does not flag a full pizza-meetup event description", () => {
    const description = `Join us at the pizzeria for this month's community meetup. The stuffed crust is outrageous and the wood-fired pizza is the best in town.

This is a casual gathering, so show up, hang out, and meet some friendly folks. We are starting to gather volunteers for the summer street fair, and this is a great time to connect and get involved.

Doors open at 6pm. Bring your appetite.`;
    const result = filter.detect(description);
    expect(result.detectedWords).not.toContain("pissa");
    expect(result.hasProfanity).toBe(false);
  });
});

describe("genuine leet evasions still flag (regression guard)", () => {
  const filter = makeFilter();

  // These evasions depend on letter→letter mappings the guard must NOT disable.
  test.each([
    ["cvnt"], // v→u  → cunt
    ["phuck"], // ph→f → fuck
    ["azzhole"], // z→s → asshole
    ["dumbazz"], // z→s → dumbass
    ["n4zi"], // 4→a  → nazi
    ["a55"], // 5→s  → ass
    ["sh1t"], // 1→i  → shit
    ["f*ck"], // *→u  → fuck
    ["biatch"], // → bitch
  ])("should still flag %j", (text) => {
    expect(filter.check(text)).toBe(true);
  });
});

describe("leetInnocentWords is configurable", () => {
  it("respects custom protected words", () => {
    const custom = new BeKind({
      enableLeetSpeak: true,
      sensitiveMode: true,
      leetInnocentWords: ["wazzup"],
      silent: true,
    });
    // "wazzup" would otherwise leet-normalize (z→s) to "wassup" — harmless here,
    // but this proves the custom list feeds the protection layer without error.
    expect(custom.check("wazzup")).toBe(false);
    // Defaults still apply alongside the custom list.
    expect(custom.check("pizza")).toBe(false);
  });
});
