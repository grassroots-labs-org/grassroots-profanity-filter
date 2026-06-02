import { BeKind } from "../src/index";

/**
 * Regression tests for dual-use words scored s:3 c:1 (innocent by default,
 * below the PROFANE threshold) whose profane sense is re-escalated by the
 * shared sexual-context boosters: shaft, shag, snatch, slag.
 *
 * Also covers roped/dilate, which were lowered out of the always-PROFANE band
 * (roped s:4 c:2 → s:3 c:1; dilate s:5 → s:3 c:1) so the everyday sense no
 * longer auto-classifies as PROFANE.
 *
 * Context analysis on, sensitiveMode off — the mode in which the PROFANE /
 * AMBIVALENT classification (and thus check()) is context-aware.
 */
describe("dual-use words: innocent by default, escalate in sexual context", () => {
  const filter = new BeKind({
    contextAnalysis: { enabled: true, languages: ["en"] },
  });

  describe("innocent usage should NOT be flagged", () => {
    test.each([
      ["Tour the old mine shaft and learn about local history."],
      ["Bring a rug for the shag carpet restoration workshop."],
      ["Olympic lifting clinic: master the snatch and clean-and-jerk."],
      ["Field trip to the slag heap to study industrial metallurgy."],
      ["We roped off the VIP seating area for the gala."],
      ["Pupils dilate in low light — a vision science demo for kids."],
    ])("should NOT flag: %s", (text) => {
      expect(filter.check(text)).toBe(false);
    });
  });

  describe("genuinely sexual usage SHOULD escalate to a flag", () => {
    test.each([
      ["stroke his shaft"],
      ["They went home to shag in bed."],
      ["erotic snatch"],
    ])("should flag: %s", (text) => {
      expect(filter.check(text)).toBe(true);
    });
  });

  describe('"lusty" is kept flagging (innocent sense is rare/archaic)', () => {
    test("flags standalone", () => {
      expect(filter.check("a lusty performance")).toBe(true);
    });
  });
});
