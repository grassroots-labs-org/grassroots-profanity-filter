/**
 * Leet-innocent words — legitimate words that leet-speak normalization must
 * never rewrite into profanity.
 *
 * Unlike innocent-words.ts (cross-language homographs scored AFTER a match),
 * these words are protected BEFORE leet normalization runs. The ambiguous
 * letter→letter mappings (z→s, v→u, j→y, ph→f) can otherwise mangle a real
 * word into a dictionary profanity:
 *
 *   "pizza" —(z→s)→ "pissa"  (Portuguese "piss")
 *
 * Protecting the surface token keeps genuine evasions like "cvnt", "phuck",
 * "azzhole", and "dumbazz" fully detectable — those are misspellings, not real
 * words, so they are never protected.
 *
 * Entries MUST be lowercase. Matching is whole-word and case-insensitive.
 */
const leetInnocentWords: readonly string[] = [
  "pizza", // z→s → "pissa" (PT "piss")
];

export default leetInnocentWords;
