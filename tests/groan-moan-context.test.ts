import { BeKind } from "../src/index";

/**
 * Regression tests for the "groan" / "moan" ambiguity.
 *
 * These words are everyday English ("you'll groan at the dad jokes",
 * "don't moan about the weather") but are profane in clearly sexual contexts.
 *
 * They are scored s:3 c:1 in the dictionary — below the standalone flag
 * threshold (s:3 requires c:3). The sexual-context boosters in
 * WORD_SPECIFIC_PATTERNS add +3 certainty, re-flagging them only when an
 * unambiguously sexual cue sits next to the word.
 *
 * NOTE: this context behaviour only governs the flag decision when
 * `sensitiveMode` is OFF. With `sensitiveMode: true`, ANY dictionary match
 * flags regardless of certainty/context (see index.ts hasProfane logic).
 */
describe('"groan" / "moan" context-aware detection', () => {
  // Context analysis on, sensitiveMode off — the mode in which certainty/context
  // governs flagging.
  const filter = new BeKind({
    contextAnalysis: { enabled: true, languages: ["en"] },
  });

  describe("innocent usage should NOT be flagged", () => {
    test.each([
      ["You'll groan at the dad jokes during trivia night."],
      ["We heard a collective groan when the rain started."],
      ["Please don't moan about the cold — bring a warm coat!"],
      ["No moaning about the menu — it's all donated!"],
      ["The crowd let out a groan when the home team missed the goal."],
      ["Stop your moaning and lend a hand at the bake sale."],
    ])("should NOT flag: %s", (text) => {
      expect(filter.check(text)).toBe(false);
    });
  });

  describe("sexual usage SHOULD be flagged via context boosters", () => {
    test.each([
      ["She let out a moan of pleasure."],
      ["Moans of ecstasy could be heard."],
      ["An orgasmic moan escaped her lips."],
      ["His erotic groan filled the bedroom."],
      ["a sensual moan"],
    ])("should flag: %s", (text) => {
      expect(filter.check(text)).toBe(true);
    });
  });

  describe("standalone words sit below the flag threshold", () => {
    test.each([["groan"], ["moan"]])(
      "%s alone is not flagged without sexual context",
      (word) => {
        expect(filter.check(word)).toBe(false);
      },
    );
  });
});
