// Consolidated all-languages dictionary import
import allLanguagesBadWords from "./languages/english-primary-all-languages.js";

// Advanced algorithm imports
import { AhoCorasick, Match as AhoMatch } from "./algos/aho-corasick.js";
import { BloomFilter } from "./algos/bloom-filter.js";
import { ContextAnalyzer, ContextPatternMatcher } from "./algos/context-patterns.js";

// Cross-language innocence scoring
import { detectLanguages, scoreWord } from "./language-detector.js";
import innocentWords from "./languages/innocent-words.js";
import defaultLeetInnocentWords from "./languages/leet-innocent-words.js";
import { adjustCertaintyForLanguage } from "./innocence-scoring.js";

// Export consolidated dictionary for direct access
export { default as allLanguagesBadWords } from "./languages/english-primary-all-languages.js";

/**
 * Logger interface for BeKind library logging operations.
 *
 * @interface Logger
 * @description Provides a contract for logging implementations used by the BeKind library.
 * Implement this interface to provide custom logging behavior (e.g., logging to files, external services).
 *
 * @example
 * ```typescript
 * class CustomLogger implements Logger {
 *   info(message: string): void {
 *     // Custom info logging logic
 *   }
 *   warn(message: string): void {
 *     // Custom warning logging logic
 *   }
 *   error(message: string): void {
 *     // Custom error logging logic
 *   }
 * }
 * const filter = new BeKind({ logger: new CustomLogger() });
 * ```
 */
export interface Logger {
  /**
   * Log informational messages about normal operations.
   *
   * @param message - The informational message to log
   * @returns void
   */
  info(message: string): void;

  /**
   * Log warning messages about potential issues or deprecated usage.
   *
   * @param message - The warning message to log
   * @returns void
   */
  warn(message: string): void;

  /**
   * Log error messages about failures or critical issues.
   *
   * @param message - The error message to log
   * @returns void
   */
  error(message: string): void;
}

/**
 * Default console logger implementation for BeKind.
 *
 * @class ConsoleLogger
 * @implements {Logger}
 * @description Logs messages to the browser or Node.js console with an "[BeKind]" prefix.
 * This is the default logger used when no custom logger is provided.
 *
 * @internal
 */
class ConsoleLogger implements Logger {
  /**
   * Log informational messages to console.log with [BeKind] prefix.
   *
   * @param message - The message to log
   * @returns void
   */
  info(message: string): void {
    console.log(`[BeKind] ${message}`);
  }

  /**
   * Log warning messages to console.warn with [BeKind] prefix.
   *
   * @param message - The warning message to log
   * @returns void
   */
  warn(message: string): void {
    console.warn(`[BeKind] ${message}`);
  }

  /**
   * Log error messages to console.error with [BeKind] prefix.
   *
   * @param message - The error message to log
   * @returns void
   */
  error(message: string): void {
    console.error(`[BeKind] ${message}`);
  }
}

/**
 * Silent logger implementation that suppresses all log output.
 *
 * @class SilentLogger
 * @implements {Logger}
 * @description A no-op logger that discards all log messages. Used when `silent: true` is set
 * in BeKindOptions, or when you want to completely disable logging.
 *
 * @internal
 */
class SilentLogger implements Logger {
  /**
   * No-op implementation - messages are discarded.
   *
   * @param _message - The message (unused)
   * @returns void
   */
  info(_message: string): void {
    // Silent mode - no logging
  }

  /**
   * No-op implementation - warnings are discarded.
   *
   * @param _message - The warning message (unused)
   * @returns void
   */
  warn(_message: string): void {
    // Silent mode - no logging
  }

  /**
   * No-op implementation - errors are discarded.
   *
   * @param _message - The error message (unused)
   * @returns void
   */
  error(_message: string): void {
    // Silent mode - no logging
  }
}

/**
 * Configuration options for initializing an BeKind instance.
 *
 * @interface BeKindOptions
 * @description Comprehensive configuration object for customizing profanity detection behavior,
 * algorithm selection, performance optimizations, and logging.
 *
 * @example
 * ```typescript
 * const filter = new BeKind({
 *   languages: ['english', 'french'],
 *   enableLeetSpeak: true,
 *   strictMode: true,
 *   algorithm: {
 *     matching: 'hybrid',
 *     useBloomFilter: true
 *   },
 *   performance: {
 *     enableCaching: true,
 *     cacheSize: 500
 *   }
 * });
 * ```
 */
export interface BeKindOptions {
  /**
   * Array of language keys to load (e.g., 'english', 'hindi', 'french').
   * Available languages: english, hindi, french, german, spanish, bengali, tamil, telugu, brazilian.
   *
   * @default ['english', 'hindi'] (loaded by default in constructor)
   */
  languages?: string[];

  /**
   * Custom dictionaries to load in addition to built-in languages.
   * Key is the dictionary name, value is an array of words.
   *
   * @example
   * ```typescript
   * customDictionaries: {
   *   'gaming': ['noob', 'trash'],
   *   'custom': ['word1', 'word2']
   * }
   * ```
   */
  customDictionaries?: Record<string, string[]>;

  /**
   * Single character to use as replacement placeholder for profane characters.
   *
   * @default "*"
   */
  defaultPlaceholder?: string;

  /**
   * Enable detection and normalization of leet speak variations (e.g., "h3ll0" -> "hello").
   *
   * @default true
   */
  enableLeetSpeak?: boolean;

  /**
   * Extra legitimate words to protect from leet-speak normalization, so that
   * ambiguous letter→letter mappings (z→s, v→u, j→y, ph→f) can't mangle them
   * into a dictionary profanity (e.g. "pizza" → "pissa"). Merged with the
   * built-in list in {@link ./languages/leet-innocent-words}. Case-insensitive,
   * matched whole-word.
   *
   * @example ['pizza', 'jazzercise']
   */
  leetInnocentWords?: string[];

  /**
   * Enable case-sensitive matching. When false, all matching is done in lowercase.
   *
   * @default false
   */
  caseSensitive?: boolean;

  /**
   * Array of words to whitelist (never flag as profanity even if in dictionaries).
   *
   * @example ['hello', 'class', 'assignment']
   */
  whitelistWords?: string[];

  /**
   * Strict mode requires profanity to be surrounded by word boundaries (spaces, punctuation).
   * When false, profanity embedded in other words may be detected.
   *
   * @default false
   */
  strictMode?: boolean;

  /**
   * Allow detection of profanity as partial matches within larger words.
   * When true, "badword" will be detected in "mybadwordhere".
   *
   * @default false
   */
  detectPartialWords?: boolean;

  /**
   * Enable embedded profanity detection with certainty decay.
   * When true, profane substrings inside larger words are detected (e.g., "bitch" in "lbitch")
   * with decayed certainty based on extra characters and length ratio.
   * Only reports matches where decayed certainty >= 2.
   *
   * Formula: decayed_c = base_c * (0.9 ^ extra_chars) * (profane_len / total_word_len)
   *
   * @default false
   */
  embeddedProfanityDetection?: boolean;

  /**
   * Allow the trie to skip over separator characters (spaces, @, ., -, _, *, etc.)
   * during matching. Catches evasion patterns like "fu ck", "cun t", "fu@ck@cu@nt@bi@tch".
   *
   * When set to a number, specifies the max consecutive separators to skip per gap
   * (e.g., 5 means "f     uck" is caught but "f      uck" with 6 spaces is not).
   * When true, defaults to 5. When false, disabled.
   *
   * @default true (max 5 separators per gap)
   */
  separatorTolerance?: boolean | number;

  /**
   * Custom logger implementation for handling log messages.
   * If not provided, defaults to ConsoleLogger unless silent mode is enabled.
   */
  logger?: Logger;

  /**
   * Silent mode suppresses all logging output.
   * When true, uses SilentLogger to discard all log messages.
   *
   * @default false
   */
  silent?: boolean;

  /**
   * Sensitive mode flags AMBIVALENT words as profanity too.
   * When true, cross-language collisions that were dampened by innocence
   * scoring (e.g. "bitte" = German "please" dampened from French "bite")
   * still count as profanity in check()/detect().hasProfanity.
   * When false (default), only PROFANE-scored words trigger hasProfanity —
   * dampened words are ignored, reducing false positives.
   *
   * @default false
   */
  sensitiveMode?: boolean;

  /**
   * Advanced algorithm configuration for pattern matching strategies.
   */
  algorithm?: {
    /**
     * Primary matching algorithm to use.
     * - 'trie': Fast prefix tree matching (default, best for most use cases)
     * - 'aho-corasick': Multi-pattern matching (best for large dictionaries)
     * - 'hybrid': Combines Aho-Corasick with Bloom Filter (best for extreme performance)
     *
     * @default "trie"
     */
    matching?: "trie" | "aho-corasick" | "hybrid";

    /**
     * Enable Aho-Corasick automaton for multi-pattern matching.
     * Automatically enabled when matching is set to 'aho-corasick' or 'hybrid'.
     *
     * @default false
     */
    useAhoCorasick?: boolean;

    /**
     * Enable Bloom Filter for probabilistic quick rejection of non-profane text.
     * Automatically enabled when matching is set to 'hybrid'.
     *
     * @default false
     */
    useBloomFilter?: boolean;

    /**
     * Enable context analysis to reduce false positives based on surrounding words.
     *
     * @default false
     */
    useContextAnalysis?: boolean;
  };

  /**
   * Bloom Filter configuration for probabilistic matching optimization.
   */
  bloomFilter?: {
    /**
     * Enable Bloom Filter.
     *
     * @default false
     */
    enabled?: boolean;

    /**
     * Expected number of items to be stored in the Bloom Filter.
     * Higher values increase memory usage but reduce false positive rate.
     *
     * @default 10000
     */
    expectedItems?: number;

    /**
     * Target false positive rate (probability of incorrectly identifying non-profanity as profanity).
     * Lower values increase memory usage but improve accuracy.
     *
     * @default 0.01 (1%)
     */
    falsePositiveRate?: number;
  };

  /**
   * Aho-Corasick automaton configuration for multi-pattern matching.
   */
  ahoCorasick?: {
    /**
     * Enable Aho-Corasick automaton.
     *
     * @default false
     */
    enabled?: boolean;

    /**
     * Pre-build the automaton during initialization.
     * When false, automaton is built lazily on first use.
     *
     * @default false
     */
    prebuild?: boolean;
  };

  /**
   * Context analysis configuration for reducing false positives.
   */
  contextAnalysis?: {
    /**
     * Enable context-aware profanity detection.
     *
     * @default false
     */
    enabled?: boolean;

    /**
     * Number of words before and after the detected word to analyze for context.
     *
     * @default 5
     */
    contextWindow?: number;

    /**
     * Languages to use for context analysis (e.g., ['en', 'es']).
     *
     * @default ['en']
     */
    languages?: string[];

    /**
     * Minimum confidence score (0-1) required to flag as profanity.
     * Higher values reduce false positives but may miss some profanity.
     *
     * @default 0.5
     */
    scoreThreshold?: number;
  };

  /**
   * Performance optimization configuration.
   */
  performance?: {
    /**
     * Maximum number of results to cache in LRU cache.
     *
     * @default 1000
     */
    cacheSize?: number;

    /**
     * Enable result caching to speed up repeated queries.
     * Stores detection results for previously seen text.
     *
     * @default false
     */
    enableCaching?: boolean;
  };
}

/**
 * Severity levels for profanity detection results.
 *
 * @enum {number}
 * @description Categorizes the severity of detected profanity based on the number
 * of unique words and total matches found in the text.
 *
 * @readonly
 * @example
 * ```typescript
 * const result = filter.detect("some text");
 * if (result.severity === ProfanitySeverity.EXTREME) {
 *   // Handle extreme profanity
 * }
 * ```
 */
export enum ProfanitySeverity {
  /** Mild profanity: 1 unique word or 1 total match */
  MILD = 1,

  /** Moderate profanity: 2 unique words or 2 total matches */
  MODERATE = 2,

  /** Severe profanity: 3 unique words or 3 total matches */
  SEVERE = 3,

  /** Extreme profanity: 4+ unique words or 5+ total matches */
  EXTREME = 4,
}

/**
 * Per-word severity classification for individual detected words.
 *
 * @enum {number}
 */
export enum WordSeverity {
  /** Ambivalent: mild/contextual profanity that may be acceptable (damn, hell, crap, suck) */
  AMBIVALENT = 1,

  /** Profane: should be flagged — strong profanity, slurs, explicit content */
  PROFANE = 2,
}

/**
 * A detected word with its individual severity classification.
 */
export interface ScoredWord {
  /** The word as it appeared in the original text */
  word: string;
  /** Severity classification for this specific word */
  severity: WordSeverity;
  /** Which detection method found this match (for debugging/reproduction) */
  detectionMethod?: DetectionMethod;
  /** Context snippet showing the match within surrounding text, e.g. "for [a hou]se after" */
  context?: string;
}

/**
 * Result object returned from profanity detection operations.
 *
 * @interface ProfanityDetectionResult
 * @description Contains comprehensive information about detected profanity including
 * what was found, where it was found, how severe it is, and a cleaned version of the text.
 *
 * @example
 * ```typescript
 * const result = filter.detect("This is a bad word");
 * console.log(result.hasProfanity); // true
 * console.log(result.detectedWords); // ['bad word']
 * console.log(result.cleanedText); // 'This is a *** ****'
 * console.log(result.severity); // ProfanitySeverity.MILD
 * console.log(result.positions); // [{ word: 'bad word', start: 10, end: 18 }]
 * ```
 */
export interface ProfanityDetectionResult {
  /**
   * Whether any profanity was detected in the text.
   *
   * @type {boolean}
   */
  hasProfanity: boolean;

  /**
   * Array of detected profane words/phrases as they appeared in the original text.
   * Includes case and formatting from the original text.
   *
   * @type {string[]}
   */
  detectedWords: string[];

  /**
   * The text with all profanity replaced by placeholder characters.
   * Each profane character is replaced with the configured placeholder (default: '*').
   *
   * @type {string}
   */
  cleanedText: string;

  /**
   * Severity level of detected profanity.
   *
   * @type {ProfanitySeverity}
   */
  severity: ProfanitySeverity;

  /**
   * Precise positions of each detected profane word in the original text.
   * Useful for highlighting or further processing.
   *
   * @type {Array<{ word: string; start: number; end: number }>}
   */
  positions: Array<{ word: string; start: number; end: number }>;

  /**
   * Whether the text contains abhorrent language (hate speech, slurs, extremist terms)
   * that should be flagged for manual review rather than auto-moderated.
   *
   * @type {boolean}
   */
  needsManualReview: boolean;

  /**
   * The specific abhorrent words that triggered the manual review flag.
   * Empty array if needsManualReview is false.
   *
   * @type {string[]}
   */
  flaggedAbhorrentWords: string[];

  /**
   * Each detected word with its individual severity classification.
   * Severity is assigned by the library: AMBIVALENT (1) or PROFANE (2).
   * PROFANE words cross the flag threshold (s:5 any c, s:4+ c:2+, s:3 c:3+).
   * AMBIVALENT words are below threshold — mild or contextually acceptable.
   *
   * @type {ScoredWord[]}
   */
  scoredWords: ScoredWord[];

  /** Highest severity among all detected words. Null if no profanity detected. */
  maxSeverity: WordSeverity | null;

  /**
   * Phrases that matched profanity across space boundaries during separator-tolerant
   * detection. These are NOT flagged as profanity but are captured for review.
   * Each entry includes the matched word, the surrounding context (±5 words),
   * the base score, and the number of space boundaries crossed.
   */
  suspiciousPhrases: SuspiciousPhrase[];
}

/**
 * A phrase that matched profanity across word boundaries (spaces).
 * Not flagged as profanity — captured for manual review or secondary scoring.
 */
export interface SuspiciousPhrase {
  /** The profanity dictionary word that was matched */
  word: string;
  /** The text as it appeared in the original input (with separators) */
  originalText: string;
  /** Surrounding context: ±5 words around the suspicious match */
  context: string;
  /** Context with match boundaries highlighted, e.g. "for [a hou]se after" */
  contextWithMatch: string;
  /** Start position of the match in the original text */
  start: number;
  /** End position of the match in the original text */
  end: number;
  /** Base severity/certainty score from the word list */
  baseScore: { severity: number; certainty: number };
  /** Number of space boundaries crossed to form this match */
  spaceBoundaries: number;
}

/**
 * Internal match result structure for efficient profanity matching and processing.
 *
 * @interface MatchResult
 * @description Used internally during the matching phase to track both the dictionary
 * word that was matched and the actual text that was found.
 *
 * @internal
 */
interface MatchResult {
  /** The dictionary word that was matched (normalized) */
  word: string;

  /** Start index of the match in the original text (0-based, inclusive) */
  start: number;

  /** End index of the match in the original text (0-based, exclusive) */
  end: number;

  /** The actual matched text from the original input (preserves case and formatting) */
  originalWord: string;

  /** Whether this match was found via substring detection (no word boundaries) */
  isSubstringMatch?: boolean;

  /** Decayed severity/certainty scores for substring matches */
  decayedScore?: { severity: number; certainty: number };

  /** Which detection method found this match */
  detectionMethod?: DetectionMethod;
}

/** How a profane word was detected — useful for debugging false positives */
export type DetectionMethod = "direct" | "leet-symbol" | "leet-full" | "separator-tolerant" | "embedded";

/**
 * Validates that an input is a non-empty string.
 *
 * @function validateString
 * @param {unknown} input - The value to validate
 * @param {string} paramName - Name of the parameter being validated (used in error messages)
 * @returns {string} The validated string
 * @throws {TypeError} If input is not a string
 *
 * @internal
 *
 * @example
 * ```typescript
 * const text = validateString(userInput, 'text');
 * // Returns userInput if it's a string, throws TypeError otherwise
 * ```
 */
function validateString(input: unknown, paramName: string): string {
  if (typeof input !== "string") {
    throw new TypeError(`${paramName} must be a string, got ${typeof input}`);
  }
  return input;
}

/**
 * Validates and filters a string array, removing non-string and empty items.
 *
 * @function validateStringArray
 * @param {unknown} input - The value to validate (expected to be an array)
 * @param {string} paramName - Name of the parameter being validated (used in error/warning messages)
 * @returns {string[]} Array of valid, non-empty strings
 * @throws {TypeError} If input is not an array
 *
 * @internal
 *
 * @example
 * ```typescript
 * const words = validateStringArray(['word1', '', 123, 'word2'], 'words');
 * // Returns: ['word1', 'word2']
 * // Logs warning: "Skipping non-string item in words: 123"
 * ```
 */
function validateStringArray(input: unknown, paramName: string): string[] {
  if (!Array.isArray(input)) {
    throw new TypeError(`${paramName} must be an array`);
  }
  return input.filter((item): item is string => {
    if (typeof item !== "string") {
      console.warn(`Skipping non-string item in ${paramName}: ${item}`);
      return false;
    }
    return item.trim().length > 0;
  });
}

/**
 * Trie (prefix tree) node for efficient pattern matching and word storage.
 *
 * @class TrieNode
 * @description Implements a trie data structure for O(m) time complexity word matching,
 * where m is the length of the word being searched. Each node represents a character
 * in the word, and paths from root to nodes with isEndOfWord=true represent complete words.
 *
 * @internal
 *
 * @example
 * ```typescript
 * const trie = new TrieNode();
 * trie.addWord('bad');
 * trie.addWord('badword');
 * const matches = trie.findMatches('badwords here', 0, false);
 * // Returns matches for 'bad' and 'badword'
 * ```
 */
class TrieNode {
  /** Map of characters to child nodes for fast lookups */
  private children: Map<string, TrieNode> = new Map();

  /** Flag indicating if this node represents the end of a complete word */
  isEndOfWord: boolean = false;

  /** The complete word ending at this node (only set when isEndOfWord is true) */
  word: string = "";

  /**
   * Get the child node for a given character.
   */
  getChild(char: string): TrieNode | undefined {
    return this.children.get(char);
  }

  /**
   * Adds a word to the trie structure.
   *
   * @param {string} word - The word to add to the trie
   * @returns {void}
   *
   * @remarks
   * - Time Complexity: O(m) where m is the length of the word
   * - Space Complexity: O(m) in worst case when all characters are new
   * - Supports any Unicode characters
   *
   * @example
   * ```typescript
   * const trie = new TrieNode();
   * trie.addWord('hello');
   * trie.addWord('world');
   * ```
   */
  addWord(word: string): void {
    let current: TrieNode = this;
    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      const nextNode = current.children.get(char);
      if (nextNode) {
        current = nextNode;
      }
    }
    current.isEndOfWord = true;
    current.word = word;
  }

  /**
   * Removes a word from the trie structure.
   *
   * @param {string} word - The word to remove from the trie
   * @returns {boolean} True if the word existed and was removed, false if word was not found
   *
   * @remarks
   * - Time Complexity: O(m) where m is the length of the word
   * - Also removes unnecessary nodes to keep the trie optimized
   * - Only removes the word marking; shared prefixes with other words are preserved
   *
   * @example
   * ```typescript
   * const trie = new TrieNode();
   * trie.addWord('hello');
   * trie.removeWord('hello'); // Returns: true
   * trie.removeWord('world'); // Returns: false (word not in trie)
   * ```
   */
  removeWord(word: string): boolean {
    return this.removeHelper(word, 0);
  }

  /**
   * Recursive helper method for removing a word from the trie.
   *
   * @param {string} word - The word being removed
   * @param {number} index - Current character index in the word
   * @returns {boolean} True if this node should be deleted (has no children and is not end of another word)
   *
   * @internal
   */
  private removeHelper(word: string, index: number): boolean {
    if (index === word.length) {
      if (!this.isEndOfWord) return false;
      this.isEndOfWord = false;
      return this.children.size === 0;
    }

    const char = word[index];
    const node = this.children.get(char);

    if (!node) return false;

    const shouldDeleteChild = node.removeHelper(word, index + 1);

    if (shouldDeleteChild) {
      this.children.delete(char);
      return this.children.size === 0 && !this.isEndOfWord;
    }

    return false;
  }

  /**
   * Finds all word matches in text starting at a specific position.
   *
   * @param {string} text - The text to search for profanity
   * @param {number} startPos - The starting position (0-based index) in the text
   * @param {boolean} allowPartial - If true, finds partial matches within larger words
   * @returns {Array<{ word: string; start: number; end: number }>} Array of match objects with word and position info
   *
   * @remarks
   * - Time Complexity: O(k) where k is the length of the longest match from startPos
   * - Returns all valid words that can be formed starting from startPos
   * - When allowPartial is false, respects word boundaries
   *
   * @example
   * ```typescript
   * const trie = new TrieNode();
   * trie.addWord('bad');
   * const matches = trie.findMatches('badword', 0, false);
   * // Returns: [{ word: 'bad', start: 0, end: 3 }]
   * ```
   */
  findMatches(
    text: string,
    startPos: number,
    allowPartial: boolean
  ): Array<{ word: string; start: number; end: number }> {
    const matches: Array<{ word: string; start: number; end: number }> = [];
    let current: TrieNode = this;
    let pos = startPos;

    while (pos < text.length) {
      const nextNode = current.children.get(text[pos]);
      if (!nextNode) break;
      current = nextNode;
      pos++;

      if (current.isEndOfWord) {
        if (!allowPartial) {
          const wordStart = startPos;
          const wordEnd = pos;

          matches.push({
            word: current.word,
            start: wordStart - startPos,
            end: wordEnd - startPos,
          });
        } else {
          matches.push({
            word: current.word,
            start: 0,
            end: pos - startPos,
          });
        }
      }
    }

    return matches;
  }

  /**
   * Clears all words from the trie, resetting it to empty state.
   *
   * @returns {void}
   *
   * @remarks
   * - Time Complexity: O(1) - clears the root node only (JavaScript GC handles children)
   * - Removes all stored words and resets the trie to initial state
   *
   * @example
   * ```typescript
   * const trie = new TrieNode();
   * trie.addWord('hello');
   * trie.addWord('world');
   * trie.clear();
   * // Trie is now empty
   * ```
   */
  clear(): void {
    this.children.clear();
    this.isEndOfWord = false;
    this.word = "";
  }
}

/**
 * BeKind - Professional-grade multilingual profanity detection and filtering library.
 *
 * @class BeKind
 * @description A comprehensive, high-performance profanity filtering system supporting 9+ languages
 * with advanced features including leet speak detection, context analysis, multiple matching algorithms,
 * and customizable filtering options.
 *
 * @remarks
 * ### Features:
 * - **Multi-language Support**: English, Hindi, French, German, Spanish, Bengali, Tamil, Telugu, Brazilian Portuguese
 * - **Advanced Algorithms**: Trie, Aho-Corasick, Bloom Filter, and hybrid approaches
 * - **Leet Speak Detection**: Automatically normalizes and detects variations like "h3ll0"
 * - **Context Analysis**: Reduces false positives using surrounding word context
 * - **Performance**: Built-in caching and optimized data structures
 * - **Flexible**: Custom dictionaries, whitelisting, severity levels
 *
 * ### Default Behavior:
 * - Loads English and Hindi dictionaries by default
 * - Case-insensitive matching
 * - Leet speak detection enabled
 * - Uses Trie algorithm (fastest for most cases)
 *
 * @example
 * ```typescript
 * // Basic usage with default instance
 * import allProfanity from 'allprofanity';
 *
 * const result = allProfanity.detect("This is some bad text");
 * console.log(result.hasProfanity); // true
 * console.log(result.cleanedText); // "This is some *** text"
 * console.log(result.severity); // ProfanitySeverity.MILD
 * ```
 *
 * @example
 * ```typescript
 * // Advanced usage with custom configuration
 * import { BeKind, ProfanitySeverity } from 'allprofanity';
 *
 * const filter = new BeKind({
 *   languages: ['english', 'french', 'spanish'],
 *   enableLeetSpeak: true,
 *   strictMode: true,
 *   algorithm: {
 *     matching: 'hybrid',
 *     useBloomFilter: true
 *   },
 *   performance: {
 *     enableCaching: true,
 *     cacheSize: 500
 *   },
 *   whitelistWords: ['class', 'assignment']
 * });
 *
 * const text = "This text has some b@d w0rds";
 * const result = filter.detect(text);
 *
 * if (result.hasProfanity) {
 *   console.log(`Found ${result.detectedWords.length} profane words`);
 *   console.log(`Severity: ${ProfanitySeverity[result.severity]}`);
 *   console.log(`Cleaned: ${result.cleanedText}`);
 * }
 * ```
 *
 * @example
 * ```typescript
 * // Using individual methods
 * const filter = new BeKind();
 *
 * // Simple check
 * if (filter.check("some text")) {
 *   console.log("Contains profanity!");
 * }
 *
 * // Clean with custom placeholder
 * const cleaned = filter.clean("bad words here", "#");
 *
 * // Load additional languages
 * filter.loadLanguage('german');
 * filter.loadIndianLanguages(); // Loads hindi, bengali, tamil, telugu
 *
 * // Add custom words
 * filter.add(['customword1', 'customword2']);
 *
 * // Remove words
 * filter.remove(['someword']);
 *
 * // Whitelist words
 * filter.addToWhitelist(['class', 'assignment']);
 * ```
 *
 * @see {@link BeKindOptions} for all configuration options
 * @see {@link ProfanityDetectionResult} for detection result format
 * @see {@link ProfanitySeverity} for severity levels
 */
export class BeKind {
  private readonly profanityTrie: TrieNode = new TrieNode();
  private readonly whitelistSet: Set<string> = new Set();
  private readonly loadedLanguages: Set<string> = new Set();
  private readonly logger: Logger;

  private defaultPlaceholder: string = "*";
  private enableLeetSpeak: boolean = true;
  /** Whole-word regex of legit words protected from leet normalization (or null if none). */
  private leetInnocentRegex: RegExp | null = null;
  private caseSensitive: boolean = false;
  private strictMode: boolean = false;
  private detectPartialWords: boolean = false;
  private embeddedProfanityDetection: boolean = false;
  private separatorTolerance: number = 5;
  private sensitiveMode: boolean = false;

  /**
   * Temporary storage for suspicious matches found during separator-tolerant detection.
   * Populated by findSeparatorTolerantMatches() and consumed by detect().
   */
  private _suspiciousMatches: Array<{
    word: string; start: number; end: number; originalWord: string; spaceBoundaries: number;
  }> | null = null;


  private readonly availableLanguages: Record<string, string[]> = {
    all: Object.keys(allLanguagesBadWords || {}),
  };

  /**
   * Word score lookup map. Maps lowercase words to their severity and certainty scores.
   * Populated from the scored word list on construction.
   */
  private readonly wordScores: Record<string, { severity: number; certainty: number; language: string }> = (() => {
    // Normalize dictionary keys to lowercase so getWordScore() lookups work
    // regardless of how words are cased in the dictionary files.
    const raw = allLanguagesBadWords || {};
    const normalized: Record<string, { severity: number; certainty: number; language: string }> = {};
    for (const [key, value] of Object.entries(raw)) {
      const lk = key.toLowerCase();
      // If duplicate after lowercasing, keep the higher severity entry
      if (!normalized[lk] || value.severity > normalized[lk].severity) {
        normalized[lk] = value;
      }
    }
    return normalized;
  })();

  /**
   * Set of abhorrent words/phrases that trigger needsManualReview.
   * Includes hate groups, slurs, extremist terminology, and Nazi references.
   * Stored in lowercase for case-insensitive matching.
   */
  private readonly abhorrentWords: Set<string> = new Set([
    // Nazi / Third Reich
    "nazi", "nazis", "neonazi", "neo nazi", "neo-nazi", "hitler",
    "heil hitler", "heilhitler", "hitler did nothing wrong",
    "sieg heil", "siegheil", "third reich", "thirdreich",
    "final solution", "finalsolution", "master race", "masterrace",
    "gas the jews", "gasthejews", "holocaust denier", "holocaustdenier",
    "holocaust denial", "holocaustdenial", "holohoax",
    "lebensraum", "herrenvolk", "volkisch", "völkisch",
    "judenfrei", "judenrein", "untermensch", "untermenschen",
    "rassenschande", "übermensch",
    // KKK and white supremacist orgs
    "klan", "klansman", "klansmen", "ku klux klan", "kukluxklan", "kkk",
    "united klans of america", "imperial klans of america",
    "knights of the ku klux klan", "loyal white knights",
    "white camelia knights", "brotherhood of klans",
    "white knights of the kkk",
    // White supremacy / white nationalism
    "white power", "whitepower", "white pride", "whitepride",
    "white supremacy", "whitesupremacy", "white supremacist", "whitesupremacist",
    "white nationalist", "whitenationalist", "white nationalism", "whitenationalism",
    "white ethnostate", "whiteethnostate", "ethnostate",
    "white genocide", "whitegenocide", "racial purity", "racialpurity",
    "race purification", "racepurification", "racial purification", "racialpurification",
    "racial hygiene", "racialhygiene", "ethnic cleansing", "ethniccleansing",
    "aryan nation", "aryan nations", "aryan brotherhood", "aryan circle",
    "aryan guard", "aryan resistance", "aryan strikeforce",
    "white aryan resistance",
    // Extremist groups
    "proud boys", "proudboys", "oath keepers", "oathkeepers",
    "atomwaffen", "atomwaffen division", "patriot front", "patriotfront",
    "vanguard america", "identity evropa", "american identity movement",
    "national socialist", "national socialism", "national socialist movement",
    "american nazi party", "nordic resistance movement",
    "golden dawn", "casa pound", "casapound",
    "generation identity", "identitarian", "identitarian movement",
    "hammerskins", "hammerskin nation", "combat 18", "combat18",
    "blood honour", "blood honor", "volksfront",
    "stormfront", "iron march", "daily stormer", "dailystormer",
    "order of nine angles", "o9a",
    "rise above movement", "vinlanders social club",
    "nazi low riders",
    // Extremist slogans and coded language
    "fourteen words", "fourteenwords", "1488", "14 88",
    "rahowa", "racial holy war", "racialholywar",
    "blood and soil", "bloodandsoil",
    "day of the rope", "dayoftherope",
    "great replacement", "greatreplacement",
    "race war", "racewar",
    "turner diaries", "turnerdiaries",
    "right wing death squad", "rwds",
    "physical removal", "physicalremoval",
    "free helicopter ride", "helicopter ride",
    "race realism", "racerealism", "race realist", "racerealist",
    // Antisemitic
    "jewish question", "jewishquestion", "jq",
    "zionist occupied government", "zog",
    "jewish conspiracy", "jewishconspiracy",
    "protocols of the elders of zion",
    "international jewry", "internationaljewry", "world jewry", "worldjewry",
    "blood libel", "bloodlibel", "jewish problem", "jewishproblem",
    "six million lie", "sixmillionlie",
    "happy merchant", "happymerchant", "le happy merchant",
    "(((them)))", "(((they)))", "(((who)))",
    "oy vey shut it down",
    "death to jews", "kill all jews",
    // Racial slurs — anti-Black
    "lynching", "lynch mob", "lynchmob",
    "jungle bunny", "junglebunny", "jungle bunnies", "junglebunnies",
    "porch monkey", "porchmonkey", "porch monkeys", "porchmonkeys",
    "spear chucker", "spearchucker", "spear chuckers", "spearchuckers",
    "moon cricket", "mooncricket", "moon crickets", "mooncrickets",
    "cotton picker", "cottonpicker", "cotton pickers", "cottonpickers",
    "tar baby", "tarbaby",
    "race soldiers", "racesoldiers",
    "mud people",
    // Racial slurs — anti-Asian
    "gook", "gooks", "chink", "chinks", "chinaman", "chinamen",
    "zipperhead", "zipperheads", "slant eye", "slanteye",
    "ching chong", "chingchong", "yellow peril", "yellowperil",
    "kung flu", "kungflu",
    // Racial slurs — anti-Latino
    "wetback", "wetbacks", "beaner", "beaners",
    "spic", "spics", "spick", "spicks",
    // Racial slurs — anti-Muslim/Arab
    "sand nigger", "sandnigger", "sand niggers", "sandniggers",
    "towel head", "towelhead", "towel heads", "towelheads",
    "raghead", "ragheads", "rag head", "rag heads",
    "camel jockey", "cameljockey", "camel jockeys", "cameljockeys",
    "goat fucker", "goatfucker", "goat fuckers", "goatfuckers",
    "muzzie", "muzzies", "muzrat", "muzrats",
    // Racial slurs — anti-Indigenous
    "prairie nigger", "prairienigger", "timber nigger", "timbernigger",
    "wagon burner", "wagonburner", "wagon burners", "wagonburners",
    "injun", "injuns",
    // Anti-LGBTQ+ hate
    "death to fags", "god hates fags", "godhatesfags",
    "death to gays", "kill all gays",
    // Genocidal language
    "death to muslims", "death to blacks", "death to whites",
    "death to immigrants",
    "kill all muslims", "kill all blacks", "kill all whites",
    "kill all immigrants",
    // Coded hate
    "dindu nuffin", "dindunuffin", "dindu",
    "we wuz kangz", "wewuzkangz",
    "ooga booga", "oogabooga",
    "remove kebab", "removekebab",
    "race traitor", "race traitors", "racetraitor", "racetraitors",
    "sonnenrad", "black sun", "totenkopf", "wolfsangel",

    // ── Additional terms (sourced from ADL, SPLC, GLAAD, Moonshot CVE, ISD Global) ──

    // Anti-Asian slurs — additional
    "jap", "japs", "nip", "nips",
    "coolie", "coolies",
    "paki", "pakis",
    "slope", "slopes", "slopehead", "slopeheads",
    "wog", "wogs",
    "dog eater", "dogeater", "dog eaters", "dogeaters",
    "bat eater", "bateater",
    "china virus", "chinavirus", "wuhan virus", "wuhanvirus",
    "yellow monkey", "yellowmonkey",
    "rice picker", "ricepicker", "rice pickers", "ricepickers",

    // Anti-Latino slurs — additional
    "greaser", "greasers",
    "taco bender", "tacobender",
    "border bunny", "borderbunny", "border bunnies", "borderbunnies",
    "border hopper", "borderhopper", "border hoppers", "borderhoppers",
    "fence hopper", "fencehopper",
    "anchor baby", "anchorbaby", "anchor babies", "anchorbabies",
    "pepper belly", "pepperbelly",

    // Anti-Indigenous slurs — additional
    "redskin", "redskins",
    "squaw", "squaws",
    "half breed", "halfbreed", "half breeds", "halfbreeds",
    "blanket ass", "blanketass",
    "timber monkey", "timbermonkey",
    "red nigger", "rednigger", "bush nigger", "bushnigger",

    // Antisemitic — additional
    "hollowcost", "hollow cost",
    "jewish bankers", "jewishbankers",
    "jewish media", "jewishmedia", "jewish lobby", "jewishlobby",
    "jewed", "jew down",
    "nose check", "nosecheck",
    "early life check", "earlylifecheck", "early life section", "earlylifesection",
    "every single time", "everysingletime",
    "the goyim know", "thegoyimknow",
    "goyim know shut it down", "goyimknowshutitdown",
    "six gorillion", "sixgorillion",
    "oven dodger", "ovendodger", "oven dodgers", "ovendodgers",
    "wooden doors", "woodendoors",
    "holocaust industry", "holocaustindustry",
    "jews will not replace us", "jewswillnotreplaceus",
    "you will not replace us",
    "synagogue of satan", "synagogueofsatan",
    "jewish supremacy", "jewishsupremacy",
    "jewish bolshevism", "jewishbolshevism", "judeo bolshevism", "judeobolshevism",
    "rootless cosmopolitan", "rootlesscosmopolitan",
    "christ killer", "christkiller", "christ killers", "christkillers",
    "greedy jew", "greedyjew", "dirty jew", "dirtyjew",
    "jew rat", "jewrat",
    "sheeny", "sheenies",
    "khazar milkers", "khazarmilkers",
    "small hat", "small hats", "smallhat",

    // Anti-Muslim/Arab — additional
    "deus vult", "deusvult",
    "kebab remover", "kebabremover",
    "mohammedan", "mohammedans",
    "death to islam", "deathtoislam",
    "kill all arabs", "killallarabs",
    "durka durka", "durkadurka",
    "goat lover", "goatlover",
    "cave dweller", "cavedweller", "cave dwellers", "cavedwellers",
    "abeed",
    "islamo fascist", "islamofascist", "islamo fascism", "islamofascism",

    // Anti-Hindu
    "pajeet", "pajeets",
    "poo in loo", "pooinloo", "poo in the loo", "poointheloo",
    "designated shitting street", "designatedshittingstreet",
    "street shitter", "streetshitter", "street shitters", "streetshitters",
    "cow worshipper", "cowworshipper",
    "dot head", "dothead", "dot heads", "dotheads",
    "curry muncher", "currymuncher", "curry munchers", "currymunchers",
    "curry nigger", "currynigger",
    "death to hindus", "kill all hindus",

    // Anti-Sikh
    "diaper head", "diaperhead", "diaper heads", "diaperheads",
    "death to sikhs", "kill all sikhs",

    // Anti-LGBTQ+ hate — eliminationist phrases
    "death to trannies", "death to queers", "death to lesbians",
    "death to transgenders", "death to bisexuals",
    "kill all trannies", "kill all queers", "kill all lesbians",
    "kill all transgenders",
    "hang all fags", "hang all gays", "hang all trannies",
    "burn all fags", "burn all gays",
    "stone the gays", "stone the fags",
    "gas the gays", "gas the fags", "gas the trannies",

    // Anti-LGBTQ+ hate — religious extremist slogans
    "god hates gays", "godhatesgays",
    "god hates queers", "godhatesqueers",
    "god hates trannies", "godhatestrannies",
    "fags deserve death", "fagsdeservedeath",
    "fags burn in hell", "fagsburninhell",
    "gays burn in hell", "gaysburninhell",

    // Anti-trans specific hate
    "troon", "troons",
    "troid", "troids",
    "trannoid", "trannoids",
    "transtrender", "transtrenders",
    "trans are groomers", "transaregroomers",
    "tranny groomers", "trannygroomers",
    "transgender groomers", "transgendergroomers",
    "trans predator", "transpredator", "trans predators", "transpredators",
    "trans are pedophiles", "transarepedophiles",
    "trans are degenerates", "transaredegenerates",

    // Anti-trans suicide baiting
    "join the 41", "jointhe41", "41 percent", "41percent",
    "dilate and cope", "dilateandcope",
    "you will never be a woman", "youwillneverbeawoman",
    "you will never be a real woman", "youwillneverbeareawoman",
    "you will never pass", "youwillneverpass",

    // Anti-LGBTQ+ groomer rhetoric
    "gay groomers", "gaygroomers",
    "lgbtq groomers", "lgbtqgroomers", "lgbt groomers", "lgbtgroomers",
    "drag queen groomers", "dragqueengroomers",
    "ok groomer", "okgroomer",
    "homosexual agenda", "homosexualagenda",
    "gay agenda", "gayagenda", "trans agenda", "transagenda",
    "coming for your children", "comingforyourchildren",

    // Anti-LGBTQ+ dehumanizing slurs — additional
    "carpet muncher", "carpetmuncher", "carpet munchers", "carpetmunchers",
    "pillow biter", "pillowbiter", "fudge packer", "fudgepacker",
    "batty boy", "battyboy", "batty man", "battyman",
    "chi chi man", "chichiman",
    "poof", "poofs", "poofter", "poofters",

    // Anti-LGBTQ+ conversion/cure rhetoric
    "pray the gay away", "praythegayaway",
    "homosexuality is a disease", "homosexualityisadisease",

    // Anti-LGBTQ+ coded mockery
    "attack helicopter", "attackhelicopter",
    "i identify as an attack helicopter",
    "superstraight", "super straight",

    // Modern extremist groups (post-2020, ADL/SPLC documented)
    "active club", "active clubs", "activeclub",
    "white lives matter", "whitelivesmatter",
    "patriot prayer", "patriotprayer",
    "the base", "thebase",
    "feuerkrieg division", "feuerkrieg",
    "terrorgram", "terrorgram collective",
    "goyim defense league", "goyimdefenseleague",
    "national socialist order",
    "aryan freedom network",
    "nationalist social club", "nsc 131", "nsc131",
    "groyper", "groypers", "groyper army",
    "rapewaffen", "rapewaffen division",

    // Boogaloo movement (ADL documented)
    "boogaloo boi", "boogaloo bois", "boogaloo boys",
    "big igloo", "bigigloo",
    "boojahideen",

    // Accelerationist terminology (Moonshot CVE / ISD)
    "siege culture", "siegeculture",
    "siege pill", "siegepill", "siegepilled",
    "read siege", "readsiege",
    "saint tarrant", "sainttarrant",
    "saint breivik", "saintbreivik",
    "saint roof", "saintroof",
    "saint bowers", "saintbowers",
    "dotr",

    // Incel extremist hate speech (ADL/academic research)
    "incel rebellion", "incelrebellion",
    "beta uprising", "betauprising",
    "supreme gentleman", "supremegentleman",
    "foid", "foids", "femoid", "femoids",
    "roastie", "roasties",

    // Eco-fascist terminology (ISD)
    "eco fascism", "ecofascism", "eco fascist", "ecofascist",
    "pine tree gang", "pinetreegang",

    // Internet-era coded hate — additional
    "clown world", "clownworld", "honk honk", "honkhonk", "honkler",
    "despite being 13 percent", "despite 13",
    "6 million wasn't enough", "6mwe",
    "it's okay to be white", "iotbw",
    "skull mask", "skullmask",
    "white boy summer", "whiteboysummer",
    "wpww", "white pride world wide",

    // Coded numbers (ADL Hate Symbols Database)
    "1312",

    // Genocide denial — additional
    "armenian genocide denial",
    "rwandan genocide denial",

    // Anti-immigrant hate — additional
    "remigration",
    "camp of the saints", "campofthesaints",
    "migrant invasion",
  ]);

  private readonly leetMappings: Map<string, string> = new Map([
    ["@", "a"],
    ["^", "a"],
    ["4", "a"],
    ["8", "b"],
    ["6", "b"],
    ["|3", "b"],
    ["(", "c"],
    ["<", "c"],
    ["©", "c"],
    ["|)", "d"],
    ["0", "o"],
    ["3", "e"],
    ["€", "e"],
    ["|=", "f"],
    ["ph", "f"],
    ["9", "g"],
    ["#", "h"],
    ["|-|", "h"],
    ["1", "i"],
    ["!", "i"],
    ["|", "i"],
    ["_|", "j"],
    ["¿", "j"],
    ["|<", "k"],
    ["1<", "k"],
    ["7", "l"],
    ["|\\/|", "m"],
    ["/\\/\\", "m"],
    ["|\\|", "n"],
    ["//", "n"],
    ["()", "o"],
    ["|*", "p"],
    ["|o", "p"],
    ["(_,)", "q"],
    ["()_", "q"],
    ["|2", "r"],
    ["12", "r"],
    ["5", "s"],
    ["$", "s"],
    ["z", "s"],
    ["7", "t"],
    ["+", "t"],
    ["†", "t"],
    ["|_|", "u"],
    ["(_)", "u"],
    ["v", "u"],
    ["\\/", "v"],
    ["|/", "v"],
    ["\\/\\/", "w"],
    ["vv", "w"],
    ["><", "x"],
    ["}{", "x"],
    ["`/", "y"],
    ["j", "y"],
    ["2", "z"],
    ["7_", "z"],
  ]);

  private readonly dynamicWords: Set<string> = new Set();

  // Advanced algorithms
  private ahoCorasickAutomaton: AhoCorasick | null = null;
  private bloomFilter: BloomFilter | null = null;
  private contextAnalyzer: ContextAnalyzer | null = null;
  private matchingAlgorithm: "trie" | "aho-corasick" | "hybrid" = "trie";
  private resultCache: Map<string, ProfanityDetectionResult> | null = null;

  /**
   * Creates a new BeKind instance with the specified configuration.
   *
   * @constructor
   * @param {BeKindOptions} [options] - Configuration options for profanity detection behavior
   *
   * @remarks
   * ### Default Initialization:
   * - Loads English and Hindi dictionaries automatically
   * - Enables leet speak detection
   * - Case-insensitive matching
   * - Uses Trie algorithm for pattern matching
   *
   * ### Performance Considerations:
   * - Initial load time depends on number of languages loaded
   * - Aho-Corasick automaton (if enabled) is built during construction
   * - Bloom Filter (if enabled) is populated during construction
   *
   * @throws {TypeError} If invalid options are provided
   *
   * @example
   * ```typescript
   * // Default instance
   * const filter = new BeKind();
   *
   * // Custom configuration
   * const filter = new BeKind({
   *   languages: ['english', 'french'],
   *   strictMode: true,
   *   defaultPlaceholder: '#',
   *   algorithm: { matching: 'hybrid' }
   * });
   *
   * // Silent mode (no logging)
   * const filter = new BeKind({ silent: true });
   * ```
   *
   * @see {@link BeKindOptions} for all available configuration options
   */
  constructor(options?: BeKindOptions) {
    // Use silent logger if silent mode is enabled, otherwise use provided logger or console logger
    this.logger = options?.logger || (options?.silent ? new SilentLogger() : new ConsoleLogger());

    if (options?.defaultPlaceholder !== undefined) {
      this.setPlaceholder(options.defaultPlaceholder);
    }

    this.enableLeetSpeak = options?.enableLeetSpeak ?? true;
    this.setLeetInnocentWords(options?.leetInnocentWords);
    this.caseSensitive = options?.caseSensitive ?? false;
    this.strictMode = options?.strictMode ?? false;
    this.detectPartialWords = options?.detectPartialWords ?? false;
    this.embeddedProfanityDetection = options?.embeddedProfanityDetection ?? false;
    this.sensitiveMode = options?.sensitiveMode ?? false;
    const sepTol = options?.separatorTolerance;
    if (sepTol === false) {
      this.separatorTolerance = 0;
    } else if (typeof sepTol === "number") {
      this.separatorTolerance = Math.max(0, sepTol);
    } else {
      // true or undefined → default 5
      this.separatorTolerance = 5;
    }

    if (options?.whitelistWords) {
      this.addToWhitelist(options.whitelistWords);
    }

    // Initialize advanced algorithms BEFORE loading dictionaries
    // so that words can be added to all data structures
    this.initializeAdvancedAlgorithms(options);

    this.loadLanguage("all");

    if (options?.languages?.length) {
      options.languages.forEach((lang) => this.loadLanguage(lang));
    }

    if (options?.customDictionaries) {
      Object.entries(options.customDictionaries).forEach(([name, words]) => {
        this.loadCustomDictionary(name, words);
      });
    }
  }

  /**
   * Initialize advanced algorithms based on configuration
   */
  private initializeAdvancedAlgorithms(options?: BeKindOptions): void {
    // Set matching algorithm
    if (options?.algorithm?.matching) {
      this.matchingAlgorithm = options.algorithm.matching;
    }

    // Initialize Bloom Filter if enabled
    const bloomEnabled =
      options?.algorithm?.useBloomFilter ||
      options?.bloomFilter?.enabled ||
      this.matchingAlgorithm === "hybrid";

    if (bloomEnabled) {
      const expectedItems = options?.bloomFilter?.expectedItems || 10000;
      const falsePositiveRate = options?.bloomFilter?.falsePositiveRate || 0.01;
      this.bloomFilter = new BloomFilter(expectedItems, falsePositiveRate);
      this.logger.info(
        `Bloom Filter initialized with ${expectedItems} expected items and ${(
          falsePositiveRate * 100
        ).toFixed(2)}% false positive rate`
      );
    }

    // Initialize Aho-Corasick if enabled
    const ahoEnabled =
      options?.algorithm?.useAhoCorasick ||
      options?.ahoCorasick?.enabled ||
      this.matchingAlgorithm === "aho-corasick" ||
      this.matchingAlgorithm === "hybrid";

    if (ahoEnabled) {
      this.ahoCorasickAutomaton = new AhoCorasick([]);
      this.logger.info("Aho-Corasick automaton initialized");
    }

    // Initialize Context Analyzer if enabled
    const contextEnabled =
      options?.algorithm?.useContextAnalysis ||
      options?.contextAnalysis?.enabled;

    if (contextEnabled) {
      const contextLanguages =
        options?.contextAnalysis?.languages || ["en"];
      this.contextAnalyzer = new ContextAnalyzer(contextLanguages);

      if (options?.contextAnalysis?.contextWindow) {
        this.contextAnalyzer.setContextWindow(
          options.contextAnalysis.contextWindow
        );
      }

      this.logger.info(
        `Context Analyzer initialized for languages: ${contextLanguages.join(", ")}`
      );
    }

    // Initialize result cache if enabled
    if (options?.performance?.enableCaching) {
      const cacheSize = options.performance.cacheSize || 1000;
      this.resultCache = new Map();
      this.logger.info(`Result caching enabled with size limit: ${cacheSize}`);
    }
  }

  /**
   * Leet mappings where the source is a regular letter (e.g. z→s, v→u, j→y).
   * These are ambiguous because they can destroy legitimate words during
   * normalization (e.g. "nazi" → "nasi"). Separated so that layered
   * normalization can try symbol-only mappings first.
   */
  private readonly letterToLetterLeetKeys: Set<string> = new Set(
    [...this.leetMappings.keys()].filter((k) => /^[a-zA-Z]+$/.test(k))
  );

  /**
   * Normalize leet speak to regular characters (full pass — all mappings).
   * @param text - The input text.
   * @returns Normalized text.
   */
  /**
   * Regex matching numeric-punctuation clusters that should never be leet-decoded.
   * Covers phone numbers "(206) 366-3311", prices "$8,575!", quantities "1,000",
   * percentages "5%", times "7:30", and other numeric expressions.
   * Matches any token that starts with or contains digits mixed with common
   * numeric punctuation (,.!?:;$%#()/-) and has no adjacent letters.
   */
  /**
   * Matches whitespace-delimited tokens that contain NO letters — only
   * digits, punctuation, and symbols. These are pure numeric expressions
   * (phone numbers, prices, years, quantities) and should never be
   * leet-decoded. Tokens containing at least one letter (like "f0ck",
   * "6006s", "b00bs") are left for leet-speak processing.
   */
  private static readonly PURE_NUMERIC_TOKEN_RE = /(?:^|(?<=\s))([^a-z\s]*\d[^a-z\s]*)(?=\s|$)/gi;

  /**
   * Build the whole-word regex used to shield legitimate words from leet
   * normalization. Merges the built-in list with any caller-supplied words.
   */
  private setLeetInnocentWords(extra?: string[]): void {
    const words = new Set<string>(defaultLeetInnocentWords.map((w) => w.toLowerCase()));
    for (const w of extra ?? []) {
      const trimmed = w.trim().toLowerCase();
      if (trimmed) words.add(trimmed);
    }
    if (words.size === 0) {
      this.leetInnocentRegex = null;
      return;
    }
    const alternation = Array.from(words)
      .map((w) => this.escapeRegex(w))
      .join("|");
    // \b…\b keeps the guard whole-word so "pizza" is protected but a profane
    // substring host (if any) still matches normally.
    this.leetInnocentRegex = new RegExp(`\\b(?:${alternation})\\b`, "gi");
  }

  /**
   * Replace protected leet-innocent words with inert placeholders so the
   * subsequent leet-mapping passes cannot rewrite their letters. Mirrors the
   * numeric-token protection used in the leet normalizers. Returns the guarded
   * text plus the restore list.
   */
  private protectLeetInnocentWords(
    text: string,
    startIndex: number
  ): { text: string; tokens: { placeholder: string; original: string }[] } {
    const tokens: { placeholder: string; original: string }[] = [];
    if (!this.leetInnocentRegex) return { text, tokens };
    this.leetInnocentRegex.lastIndex = 0;
    const guarded = text.replace(this.leetInnocentRegex, (match) => {
      const n = startIndex + tokens.length;
      const a = String.fromCharCode(65 + (n % 26));
      const b = String.fromCharCode(65 + (Math.floor(n / 26) % 26));
      // Uppercase + \x00 delimiters can never match the lowercase leet keys.
      const placeholder = `\x00LW${a}${b}\x00`;
      tokens.push({ placeholder, original: match });
      return placeholder;
    });
    return { text: guarded, tokens };
  }

  private normalizeLeetSpeak(text: string): string {
    if (!this.enableLeetSpeak) return text;

    let normalized = text.toLowerCase();
    // Protect pure numeric tokens (no letters) from leet-decode.
    // "206", "$8,575!", "(206) 366-3311" → protected
    // "f0ck", "b00bs", "6006s" → NOT protected (contain letters)
    const numericTokens: { placeholder: string; original: string }[] = [];
    normalized = normalized.replace(BeKind.PURE_NUMERIC_TOKEN_RE, (match) => {
      const n = numericTokens.length;
      const a = String.fromCharCode(65 + (n % 26));
      const b = String.fromCharCode(65 + (Math.floor(n / 26) % 26));
      const placeholder = `\x00NT${a}${b}\x00`;
      numericTokens.push({ placeholder, original: match });
      return placeholder;
    });
    // Protect legitimate words (e.g. "pizza") from being mangled into profanity
    // by letter→letter mappings (z→s).
    const { text: guarded, tokens: innocentTokens } =
      this.protectLeetInnocentWords(normalized, numericTokens.length);
    normalized = guarded;
    const sortedMappings = Array.from(this.leetMappings.entries()).sort(
      ([leetA], [leetB]) => leetB.length - leetA.length
    );
    for (const [leet, normal] of sortedMappings) {
      const regex = new RegExp(this.escapeRegex(leet), "g");
      normalized = normalized.replace(regex, normal);
    }
    // Restore protected tokens
    for (const { placeholder, original } of [...numericTokens, ...innocentTokens]) {
      normalized = normalized.replace(placeholder, original);
    }
    return normalized;
  }

  /**
   * Conservative leet normalization — only replaces non-letter characters
   * (digits, symbols, punctuation) with their letter equivalents.
   * Letter-to-letter mappings (z→s, v→u, j→y, ph→f) are skipped so that
   * real letters are preserved, avoiding collisions like "nazi" → "nasi".
   */
  private normalizeLeetSpeakSymbolsOnly(text: string): string {
    if (!this.enableLeetSpeak) return text;

    let normalized = text.toLowerCase();
    // Protect pure numeric tokens (same regex as normalizeLeetSpeak)
    const numericTokens: { placeholder: string; original: string }[] = [];
    normalized = normalized.replace(BeKind.PURE_NUMERIC_TOKEN_RE, (match) => {
      const n = numericTokens.length;
      const a = String.fromCharCode(65 + (n % 26));
      const b = String.fromCharCode(65 + (Math.floor(n / 26) % 26));
      const placeholder = `\x00NT${a}${b}\x00`;
      numericTokens.push({ placeholder, original: match });
      return placeholder;
    });
    // Protect legitimate words from letter-preserving symbol decoding too, so
    // both leet variants stay consistent for protected tokens.
    const { text: guarded, tokens: innocentTokens } =
      this.protectLeetInnocentWords(normalized, numericTokens.length);
    normalized = guarded;
    const sortedMappings = Array.from(this.leetMappings.entries()).sort(
      ([leetA], [leetB]) => leetB.length - leetA.length
    );
    for (const [leet, normal] of sortedMappings) {
      if (this.letterToLetterLeetKeys.has(leet)) continue;
      const regex = new RegExp(this.escapeRegex(leet), "g");
      normalized = normalized.replace(regex, normal);
    }
    // Restore protected tokens
    for (const { placeholder, original } of [...numericTokens, ...innocentTokens]) {
      normalized = normalized.replace(placeholder, original);
    }
    return normalized;
  }

  /**
   * Returns all unique leet-normalized variants of the text that differ
   * from the base normalizedText. Runs two layers:
   *   1. Symbol-only normalization (digits/special → letters, preserves real letters)
   *   2. Full normalization (all mappings including letter→letter)
   *
   * This layered approach catches both "n4zi" (symbol-only → "nazi") and
   * "a55" (full → "ass") without one breaking the other.
   */
  private getLeetVariants(normalizedText: string): string[] {
    if (!this.enableLeetSpeak) return [];

    const variants: string[] = [];
    const seen = new Set<string>([normalizedText]);

    // Layer 1: symbol-only (conservative) — catches n4zi→nazi, wh1te→white
    const symbolOnly = this.normalizeLeetSpeakSymbolsOnly(normalizedText);
    if (!seen.has(symbolOnly)) {
      seen.add(symbolOnly);
      variants.push(symbolOnly);
    }

    // Layer 2: full normalization — catches z→s substitutions like a55→ass
    const full = this.normalizeLeetSpeak(normalizedText);
    if (!seen.has(full)) {
      seen.add(full);
      variants.push(full);
    }

    return variants;
  }

  /**
   * Non-space separator characters (evasion symbols like @, ., -, etc.)
   * These are skipped freely with no certainty penalty.
   */
  private static readonly SYMBOL_SEPARATOR_SET = new Set(
    "@._-*#~`|\\\/+^=:;,!?'\"(){}[]<>".split("")
  );

  /**
   * Check if a character is a non-space separator (skipped freely).
   */
  private static isSymbolSeparator(char: string): boolean {
    return BeKind.SYMBOL_SEPARATOR_SET.has(char);
  }

  /**
   * Check if a character is whitespace (skipped with certainty penalty).
   */
  private static isWhitespaceSeparator(char: string): boolean {
    return char === " " || char === "\t" || char === "\n" || char === "\r";
  }

  /**
   * Check if a character is any kind of separator.
   */
  private static isSeparator(char: string): boolean {
    return BeKind.isSymbolSeparator(char) || BeKind.isWhitespaceSeparator(char);
  }

  /**
   * Certainty penalty per space boundary crossed during separator-tolerant matching.
   * Each distinct whitespace gap reduces the matched word's certainty by this amount.
   * e.g., "fu ck" → fuck (c:5) → c:5-2 = c:3 → still flags at s:3
   * e.g., "No m" → nom (c:3) → c:3-2 = c:1 → drops below threshold
   */
  private static readonly SPACE_CERTAINTY_PENALTY = 2;

  /**
   * Extract surrounding context (±N words) around a match position in text.
   */
  private extractSurroundingContext(text: string, start: number, end: number, wordCount: number): string {
    const words = text.split(/\s+/);
    let charPos = 0;
    let startWordIdx = 0;
    let endWordIdx = words.length - 1;

    for (let i = 0; i < words.length; i++) {
      const wordStart = text.indexOf(words[i], charPos);
      const wordEnd = wordStart + words[i].length;
      if (wordEnd <= start) startWordIdx = i;
      if (wordStart < end) endWordIdx = i;
      charPos = wordEnd;
    }

    const contextStart = Math.max(0, startWordIdx - wordCount);
    const contextEnd = Math.min(words.length - 1, endWordIdx + wordCount);
    return words.slice(contextStart, contextEnd + 1).join(" ");
  }

  /**
   * Escape regex special characters in a string.
   * @param str - The string to escape.
   * @returns The escaped string.
   */
  private escapeRegex(str: string): string {
    return str.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
  }

  /**
   * Check if a match is bounded by word boundaries (strict mode).
   * @param text - The text.
   * @param start - Start index.
   * @param end - End index.
   * @returns True if match is at word boundaries, false otherwise.
   */
  private hasWordBoundaries(text: string, start: number, end: number): boolean {
    if (!this.strictMode) return true;
    const beforeChar = start > 0 ? text[start - 1] : " ";
    const afterChar = end < text.length ? text[end] : " ";
    const wordBoundaryRegex = /[\s\p{P}\p{S}]/u;
    return (
      wordBoundaryRegex.test(beforeChar) && wordBoundaryRegex.test(afterChar)
    );
  }

  /**
   * Determine if a match is a whole word.
   * @param text - The text.
   * @param start - Start index.
   * @param end - End index.
   * @returns True if whole word, false otherwise.
   */
  private static readonly CJK_RE = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}]/u;

  private isWholeWord(text: string, start: number, end: number): boolean {
    // CJK scripts (Chinese, Japanese, Korean) have no spaces between words.
    // If the matched word is CJK, treat it as a whole-word hit unconditionally —
    // the language-signal guard in isHighCoverageEmbed handles cross-script FPs.
    if (BeKind.CJK_RE.test(text.slice(start, end))) return true;

    // Use \p{L} (Unicode letter) not \w (ASCII-only) so that accented and
    // non-Latin characters (ü, ş, ğ, é, ñ, …) are correctly recognised as
    // word characters and do not act as false word-boundaries.
    if (start !== 0 && /\p{L}/u.test(text[start - 1])) return false;
    if (end !== text.length && /\p{L}/u.test(text[end])) return false;
    return true;
  }

  /**
   * Returns the char-index bounds of the host word containing [start, end).
   * Scans outward using the same Unicode-letter definition as isWholeWord.
   */
  private getHostWordBounds(
    text: string,
    start: number,
    end: number
  ): { hostStart: number; hostEnd: number } {
    let hostStart = start;
    while (hostStart > 0 && /\p{L}/u.test(text[hostStart - 1])) hostStart--;
    let hostEnd = end;
    while (hostEnd < text.length && /\p{L}/u.test(text[hostEnd])) hostEnd++;
    return { hostStart, hostEnd };
  }

  /**
   * When a match is embedded (not a whole word), check whether the profane
   * substring covers a large enough fraction of its host word to be flagged
   * anyway. This catches deliberate obfuscation like "urASSHOLEbro" where
   * "asshole" (7 chars) = 58 % of the 12-char host word.
   *
   * Guards (all must pass):
   *   1. Match length ≥ 6 chars — short words (ass/shit/anal/semen) are too common.
   *   2. Graduated coverage threshold — shorter matches need higher coverage:
   *      - 6-char matches: ≥ 85% (only catches near-exact wraps like "ufucker")
   *      - 7+ char matches: ≥ 55% (catches obfuscation like "urASSHOLEbro")
   *   3. Language signal — scoreWord() on the host word must show signal for
   *      the profane word's language. If the host word has no signal for that
   *      language it's a cross-language collision (e.g. "singe" = French slur
   *      inside "singer" which scores as English → skip).
   *
   * Examples:
   *   "asshole" (7, en) in "urASSHOLEbro" (en signal) = 58 % → flagged ✓
   *   "fucker"  (6, en) in "ufucker"      (en signal) = 86 % → flagged ✓
   *   "raging"  (6, en) in "foraging"     = 75 % → below 85% for 6-char → safe ✓
   *   "semen"   (5)     in "basement"              → too short → safe ✓
   *   "anal"    (4)     in "canal"                  → too short → safe ✓
   *   "singe"   (5, fr) in "singer"                → too short → safe ✓
   *   "negro"   (5, en) in "negroni"               → too short → safe ✓
   */
  private static readonly HIGH_COVERAGE_THRESHOLD_SHORT = 0.85;  // 6-char matches
  private static readonly HIGH_COVERAGE_THRESHOLD_LONG = 0.55;   // 7+ char matches
  private static readonly HIGH_COVERAGE_MIN_MATCH_LEN = 6;
  private static readonly HIGH_COVERAGE_LANG_SIGNAL_MIN = 0.05;

  private isHighCoverageEmbed(
    text: string,
    matchStart: number,
    matchEnd: number,
    matchWord?: string,
    docLangSignal?: Record<string, number>
  ): boolean {
    const matchLen = matchEnd - matchStart;
    if (matchLen < BeKind.HIGH_COVERAGE_MIN_MATCH_LEN) return false;

    const { hostStart, hostEnd } = this.getHostWordBounds(text, matchStart, matchEnd);
    const hostLen = hostEnd - hostStart;
    if (hostLen === 0) return false;
    // Graduated coverage: shorter matches need higher coverage to reduce FPs
    const coverageThreshold = matchLen <= 6
      ? BeKind.HIGH_COVERAGE_THRESHOLD_SHORT
      : BeKind.HIGH_COVERAGE_THRESHOLD_LONG;
    if (matchLen / hostLen < coverageThreshold) return false;

    if (matchWord) {
      const wordScore = this.wordScores[matchWord.toLowerCase()];
      if (wordScore) {
        const profaneLang = wordScore.language;
        const hostWord = text.slice(hostStart, hostEnd);

        // Word-level language signal guard
        const hostSignal = scoreWord(hostWord);
        const wordLangSignal = (hostSignal as Record<string, number>)[profaneLang] ?? 0;
        if (wordLangSignal < BeKind.HIGH_COVERAGE_LANG_SIGNAL_MIN) return false;

        // Document-level language mismatch guard: if the doc is strongly one
        // language and the profane word is from a DIFFERENT language, skip.
        // e.g. English doc + French "engin" in "engine" → skip
        if (docLangSignal) {
          const docProfaneLangSignal = docLangSignal[profaneLang] ?? 0;
          const docTopSignal = Math.max(...Object.values(docLangSignal), 0);
          // If profane word's language has < 10% doc signal AND another language
          // dominates the doc (> 50%), this is almost certainly a cross-language FP
          if (docProfaneLangSignal < 0.1 && docTopSignal > 0.5) return false;
        }

        // Innocent embed guard: check hostWords allowlist and partialDampeningFactor
        const innocentEntries = innocentWords[matchWord.toLowerCase()];
        if (innocentEntries) {
          const lowerHost = hostWord.toLowerCase();
          if (innocentEntries.some(e => e.hostWords?.includes(lowerHost))) return false;
          if (innocentEntries.some(e => (e.partialDampeningFactor ?? 0) >= 0.5)) return false;
        }
      }
    }

    return true;
  }

  /**
   * Check if a match is whitelisted.
   * @param word - Word from dictionary.
   * @param matchedText - Actual matched text.
   * @returns True if whitelisted, false otherwise.
   */
  private isWhitelistedMatch(word: string, matchedText: string): boolean {
    if (this.caseSensitive) {
      return this.whitelistSet.has(word) || this.whitelistSet.has(matchedText);
    } else {
      return (
        this.whitelistSet.has(word.toLowerCase()) ||
        this.whitelistSet.has(matchedText.toLowerCase())
      );
    }
  }

  /**
   * Remove overlapping matches, keeping only the longest at each start position.
   * @param matches - Array of match results.
   * @returns Deduplicated matches.
   */
  private deduplicateMatches(matches: MatchResult[]): MatchResult[] {
    const sorted = [...matches].sort((a, b) => {
      if (a.start !== b.start) return a.start - b.start;
      return b.end - a.end;
    });
    const result: MatchResult[] = [];
    let lastEnd = -1;
    for (const match of sorted) {
      if (match.start >= lastEnd) {
        result.push(match);
        lastEnd = match.end;
      }
    }
    return result;
  }

  /**
   * Use Aho-Corasick algorithm for pattern matching
   */
  private findMatchesWithAhoCorasick(
    searchText: string,
    originalText: string
  ): MatchResult[] {
    if (!this.ahoCorasickAutomaton) {
      return [];
    }

    const ahoMatches = this.ahoCorasickAutomaton.findAll(searchText);
    const results: MatchResult[] = [];

    // Compute doc-level language signal once for all embed checks
    let docLangSignal: Record<string, number> | undefined;
    const getDocLang = () => {
      if (!docLangSignal) {
        const detected = detectLanguages(originalText, { maxLanguages: 3 });
        docLangSignal = {};
        for (const lang of detected.languages) {
          docLangSignal[lang.language] = lang.proportion;
        }
      }
      return docLangSignal;
    };

    for (const match of ahoMatches) {
      const isWhole = this.isWholeWord(originalText, match.start, match.end);
      if (!this.detectPartialWords && !isWhole) {
        if (!this.isHighCoverageEmbed(originalText, match.start, match.end, match.pattern, getDocLang())) {
          continue;
        }
      }

      const matchedText = originalText.substring(match.start, match.end);
      if (this.isWhitelistedMatch(match.pattern, matchedText)) {
        continue;
      }

      if (this.hasWordBoundaries(originalText, match.start, match.end)) {
        results.push({
          word: match.pattern,
          start: match.start,
          end: match.end,
          originalWord: matchedText,
        });
      }
    }

    return results;
  }

  /**
   * Hybrid approach: Aho-Corasick for fast matching, Bloom Filter for validation
   */
  private findMatchesHybrid(
    searchText: string,
    originalText: string
  ): MatchResult[] {
    // Use Aho-Corasick for primary matching if available
    if (this.ahoCorasickAutomaton) {
      const matches = this.findMatchesWithAhoCorasick(searchText, originalText);

      // If Bloom Filter is enabled, validate matches
      if (this.bloomFilter) {
        return matches.filter((match) =>
          this.bloomFilter!.mightContain(match.word)
        );
      }

      return matches;
    }

    // Fallback to Trie if Aho-Corasick not available
    const matches: MatchResult[] = [];
    this.findMatches(searchText, originalText, matches);

    // Validate with Bloom Filter if enabled
    if (this.bloomFilter) {
      return matches.filter((match) =>
        this.bloomFilter!.mightContain(match.word)
      );
    }

    return matches;
  }

  /**
   * Apply context analysis to filter false positives
   */
  private applyContextAnalysis(
    text: string,
    matches: MatchResult[],
    scoreThreshold: number = 0.5
  ): MatchResult[] {
    if (!this.contextAnalyzer) {
      return matches;
    }

    return matches.filter((match) => {
      const analysis = this.contextAnalyzer!.analyzeContext(
        text,
        match.start,
        match.end,
        match.word
      );

      // If score is above threshold, it's likely profanity
      return analysis.score >= scoreThreshold;
    });
  }

  /**
   * Detects profanity in the provided text and returns comprehensive analysis.
   *
   * @param {string} text - The text to analyze for profanity
   * @returns {ProfanityDetectionResult} Detailed detection result including matches, positions, severity, and cleaned text
   *
   * @throws {TypeError} If text is not a string
   *
   * @remarks
   * ### Performance:
   * - Time Complexity: O(n*m) where n is text length, m is average word length in dictionary
   * - With Bloom Filter: O(n) average case (faster early rejection)
   * - With Caching: O(1) for repeated identical text
   *
   * ### Features:
   * - Detects leet speak variations (if enabled): "h3ll0" → "hello"
   * - Respects word boundaries (strict mode) or detects partial matches
   * - Returns exact positions for highlighting/masking
   * - Calculates severity based on match count and uniqueness
   *
   * ### Caching:
   * - Results are cached if `performance.enableCaching` is true
   * - Cache uses LRU eviction when size limit is reached
   *
   * @example
   * ```typescript
   * const filter = new BeKind();
   * const result = filter.detect("This has bad words");
   *
   * console.log(result.hasProfanity); // true
   * console.log(result.detectedWords); // ['bad']
   * console.log(result.cleanedText); // 'This has *** words'
   * console.log(result.severity); // ProfanitySeverity.MILD
   * console.log(result.positions); // [{ word: 'bad', start: 9, end: 12 }]
   * ```
   *
   * @example
   * ```typescript
   * // With leet speak detection
   * const filter = new BeKind({ enableLeetSpeak: true });
   * const result = filter.detect("st0p b3ing b@d");
   *
   * if (result.hasProfanity) {
   *   result.positions.forEach(pos => {
   *     console.log(`Found "${pos.word}" at position ${pos.start}-${pos.end}`);
   *   });
   * }
   * ```
   *
   * @see {@link ProfanityDetectionResult} for result structure
   * @see {@link ProfanitySeverity} for severity levels
   */
  detect(text: string): ProfanityDetectionResult {
    const validatedText = validateString(text, "text");
    if (validatedText.length === 0) {
      return {
        hasProfanity: false,
        detectedWords: [],
        cleanedText: validatedText,
        severity: ProfanitySeverity.MILD,
        positions: [],
        needsManualReview: false,
        flaggedAbhorrentWords: [],
        scoredWords: [],
        maxSeverity: null,
        suspiciousPhrases: [],
      };
    }

    // Check cache first if enabled
    if (this.resultCache?.has(validatedText)) {
      return this.resultCache.get(validatedText)!;
    }

    // Reset temporary suspicious match storage
    this._suspiciousMatches = null;

    let matches: MatchResult[] = [];
    const normalizedText = this.caseSensitive
      ? validatedText
      : validatedText.toLowerCase();

    // Choose matching algorithm based on configuration
    // Leet-speak uses layered normalization: symbol-only first, then full,
    // so that letter→letter mappings (z→s) don't clobber legitimate letters.
    const leetVariants = this.getLeetVariants(normalizedText);

    // Tag: leet variant labels (variants[0] = symbol-only, variants[1] = full)
    const leetLabels: DetectionMethod[] = ["leet-symbol", "leet-full"];

    switch (this.matchingAlgorithm) {
      case "aho-corasick":
        matches = this.findMatchesWithAhoCorasick(normalizedText, validatedText);
        matches.forEach(m => { m.detectionMethod = "direct"; });
        for (let vi = 0; vi < leetVariants.length; vi++) {
          const variant = leetVariants[vi];
          // Use variant as originalText to avoid position misalignment when
          // leet normalization changes text length (e.g., "//" → "n", "|3" → "b")
          const leetMatches = this.findMatchesWithAhoCorasick(variant, variant);
          leetMatches.forEach(m => { m.detectionMethod = leetLabels[vi] ?? "leet-full"; });
          matches.push(...leetMatches);
        }
        break;

      case "hybrid":
        matches = this.findMatchesHybrid(normalizedText, validatedText);
        matches.forEach(m => { m.detectionMethod = "direct"; });
        for (let vi = 0; vi < leetVariants.length; vi++) {
          const variant = leetVariants[vi];
          const leetMatches = this.findMatchesHybrid(variant, variant);
          leetMatches.forEach(m => { m.detectionMethod = leetLabels[vi] ?? "leet-full"; });
          matches.push(...leetMatches);
        }
        break;

      case "trie":
      default:
        this.findMatches(normalizedText, validatedText, matches);
        const directCount = matches.length;
        for (let i = 0; i < directCount; i++) matches[i].detectionMethod = "direct";
        for (let vi = 0; vi < leetVariants.length; vi++) {
          const variant = leetVariants[vi];
          const beforeLen = matches.length;
          this.findMatches(variant, variant, matches);
          for (let i = beforeLen; i < matches.length; i++) {
            matches[i].detectionMethod = leetLabels[vi] ?? "leet-full";
          }
        }
        break;
    }

    // Separator-tolerant matching: re-walk the trie but skip over separators
    if (this.separatorTolerance > 0) {
      this.findSeparatorTolerantMatches(normalizedText, validatedText, matches);
    }

    // Context analysis is handled via certainty-delta in shouldFlagWithContext()

    const allUniqueMatches = this.deduplicateMatches(matches);

    // Partition: certainty:0 matches become suspicious phrases, not profanity
    const uniqueMatches = allUniqueMatches.filter((m) => {
      const score = this.getWordScore(m.word);
      return !score || score.certainty !== 0;
    });
    const suspiciousFromCertaintyZero = allUniqueMatches.filter((m) => {
      const score = this.getWordScore(m.word);
      return score && score.certainty === 0;
    });

    const detectedWords = uniqueMatches.map((m) => m.originalWord);
    const severity = this.calculateSeverity(uniqueMatches);
    const cleanedText = this.generateCleanedText(validatedText, uniqueMatches);

    // Check for abhorrent words that need manual review
    const flaggedAbhorrentWords = uniqueMatches
      .filter((m) => this.abhorrentWords.has(m.word.toLowerCase()))
      .map((m) => m.originalWord);
    const uniqueAbhorrent = [...new Set(flaggedAbhorrentWords)];

    // Lazy document-level language detection — only computed if a collision word is matched
    let docSignal: Record<string, number> | null = null;
    function getDocSignal(): Record<string, number> {
      if (docSignal === null) {
        docSignal = {};
        const docResult = detectLanguages(text);
        for (const lang of docResult.languages) {
          docSignal[lang.language] = lang.proportion;
        }
      }
      return docSignal;
    }

    // Build scoredWords: PROFANE if shouldFlag(), AMBIVALENT otherwise
    // For embedded/substring matches, use the decayed scores for flag determination
    const scoredWords: ScoredWord[] = uniqueMatches.map((m) => {
      let wordSev: WordSeverity;
      if (m.isSubstringMatch && m.decayedScore) {
        const { severity, certainty } = m.decayedScore;
        const shouldFlagEmbedded = BeKind.shouldFlagWithCertainty(severity, certainty);
        wordSev = shouldFlagEmbedded ? WordSeverity.PROFANE : WordSeverity.AMBIVALENT;
      } else {
        // Check for cross-language innocence before standard shouldFlag
        const normalizedWord = m.word.toLowerCase();
        const innocentEntries = innocentWords[normalizedWord];
        if (innocentEntries && innocentEntries.length > 0) {
          const wordScore = this.getWordScore(m.word);
          if (wordScore) {
            const ds = getDocSignal();
            const wordSignal = scoreWord(normalizedWord);
            const DOC_WEIGHT = 1.5;
            const WORD_WEIGHT = 1.0;
            const TOTAL_WEIGHT = DOC_WEIGHT + WORD_WEIGHT;
            const amplified: Record<string, number> = {};
            for (const lang of new Set([...Object.keys(wordSignal), ...Object.keys(ds)])) {
              const lk = lang as keyof typeof wordSignal;
              amplified[lang] = ((wordSignal[lk] ?? 0) * WORD_WEIGHT + (ds[lk] ?? 0) * DOC_WEIGHT) / TOTAL_WEIGHT;
            }
            let adjustedCertainty = adjustCertaintyForLanguage(
              wordScore.certainty, wordScore.language, innocentEntries, amplified
            );
            // Apply context-based certainty delta on top of language adjustment
            if (this.contextAnalyzer) {
              const delta = this.contextAnalyzer.getCertaintyDelta(
                validatedText, m.start, m.end, m.word
              );
              adjustedCertainty = Math.max(0, Math.min(5, adjustedCertainty + delta));
            }
            const adjustedShouldFlag = BeKind.shouldFlagWithCertainty(wordScore.severity, adjustedCertainty);
            wordSev = adjustedShouldFlag ? WordSeverity.PROFANE : WordSeverity.AMBIVALENT;
          } else {
            wordSev = this.shouldFlagWithContext(m.word, validatedText, m.start, m.end) ? WordSeverity.PROFANE : WordSeverity.AMBIVALENT;
          }
        } else {
          wordSev = this.shouldFlagWithContext(m.word, validatedText, m.start, m.end) ? WordSeverity.PROFANE : WordSeverity.AMBIVALENT;
        }
      }
      // Build context snippet: "...surrounding [matched text] surrounding..."
      const CONTEXT_CHARS = 20;
      const beforeText = validatedText.substring(Math.max(0, m.start - CONTEXT_CHARS), m.start);
      const matchText = validatedText.substring(m.start, m.end);
      const afterText = validatedText.substring(m.end, Math.min(validatedText.length, m.end + CONTEXT_CHARS));
      const context = `${m.start > CONTEXT_CHARS ? "..." : ""}${beforeText}[${matchText}]${afterText}${m.end + CONTEXT_CHARS < validatedText.length ? "..." : ""}`;

      return { word: m.originalWord, severity: wordSev, detectionMethod: m.detectionMethod, context };
    });

    const maxSeverity = scoredWords.length > 0
      ? Math.max(...scoredWords.map((sw) => sw.severity)) as WordSeverity
      : null;

    // Build suspicious phrases from space-bridged separator matches,
    // filtering out words with high innocence scores (cross-language false positives)
    type SuspiciousMatch = { word: string; start: number; end: number; originalWord: string; spaceBoundaries: number };
    const rawSuspicious: SuspiciousMatch[] = (this._suspiciousMatches as SuspiciousMatch[] | null) ?? [];
    const suspiciousPhrases: SuspiciousPhrase[] = rawSuspicious
      .filter((sm) => {
        const entries = innocentWords[sm.word.toLowerCase()];
        if (!entries || entries.length === 0) return true;
        // If any innocence entry has a high dampening factor (>= 0.7),
        // the word is likely innocent and should not be flagged as suspicious
        return !entries.some(e => e.dampeningFactor >= 0.7);
      })
      .map((sm) => {
        const score = this.getWordScore(sm.word);
        const baseScore = score
          ? { severity: score.severity, certainty: score.certainty }
          : { severity: 1, certainty: 1 };
        const context = this.extractSurroundingContext(validatedText, sm.start, sm.end, 5);
        const CW = 20;
        const bef = validatedText.substring(Math.max(0, sm.start - CW), sm.start);
        const mat = validatedText.substring(sm.start, sm.end);
        const aft = validatedText.substring(sm.end, Math.min(validatedText.length, sm.end + CW));
        const contextWithMatch = `${sm.start > CW ? "..." : ""}${bef}[${mat}]${aft}${sm.end + CW < validatedText.length ? "..." : ""}`;
        return {
          word: sm.word,
          originalText: sm.originalWord,
          context,
          contextWithMatch,
          start: sm.start,
          end: sm.end,
          baseScore,
          spaceBoundaries: sm.spaceBoundaries,
        };
      });
    this._suspiciousMatches = null;

    // Append certainty:0 matches as suspicious phrases
    for (const m of suspiciousFromCertaintyZero) {
      const score = this.getWordScore(m.word);
      const context = this.extractSurroundingContext(validatedText, m.start, m.end, 5);
      const CW2 = 20;
      const bef2 = validatedText.substring(Math.max(0, m.start - CW2), m.start);
      const mat2 = validatedText.substring(m.start, m.end);
      const aft2 = validatedText.substring(m.end, Math.min(validatedText.length, m.end + CW2));
      const contextWithMatch2 = `${m.start > CW2 ? "..." : ""}${bef2}[${mat2}]${aft2}${m.end + CW2 < validatedText.length ? "..." : ""}`;
      suspiciousPhrases.push({
        word: m.word,
        originalText: m.originalWord,
        context,
        contextWithMatch: contextWithMatch2,
        start: m.start,
        end: m.end,
        baseScore: { severity: score?.severity ?? 1, certainty: 0 },
        spaceBoundaries: 0,
      });
    }

    // sensitiveMode (default: false) controls whether AMBIVALENT words trigger hasProfanity.
    // When sensitiveMode is true, any match (including AMBIVALENT cross-language collisions
    // like "bitte" in German text) counts as profanity.
    // When false (default), only PROFANE-scored words count.
    const hasProfane = this.sensitiveMode
      ? uniqueMatches.length > 0
      : scoredWords.some((sw) => sw.severity === WordSeverity.PROFANE);
    const result: ProfanityDetectionResult = {
      hasProfanity: hasProfane,
      detectedWords,
      cleanedText,
      severity,
      positions: uniqueMatches.map((m) => ({
        word: m.originalWord,
        start: m.start,
        end: m.end,
      })),
      needsManualReview: uniqueAbhorrent.length > 0,
      flaggedAbhorrentWords: uniqueAbhorrent,
      scoredWords,
      maxSeverity,
      suspiciousPhrases,
    };

    // Cache result if caching is enabled
    if (this.resultCache) {
      this.resultCache.set(validatedText, result);
      // Implement simple LRU by clearing cache when it gets too large
      if (this.resultCache.size > 1000) {
        const firstKey = this.resultCache.keys().next().value;
        if (firstKey !== undefined) {
          this.resultCache.delete(firstKey);
        }
      }
    }

    return result;
  }

  /**
   * Main matching function, with whole-word logic.
   * @param searchText - The normalized text to search.
   * @param originalText - The original text.
   * @param matches - Array to collect matches.
   */
  private findMatches(
    searchText: string,
    originalText: string,
    matches: MatchResult[]
  ): void {
    const boundaryMatchedRanges: Array<{ start: number; end: number }> = [];

    // Compute doc-level language signal once for all embed checks
    let docLangSignal: Record<string, number> | undefined;
    const getDocLang = () => {
      if (!docLangSignal) {
        const detected = detectLanguages(originalText, { maxLanguages: 3 });
        docLangSignal = {};
        for (const lang of detected.languages) {
          docLangSignal[lang.language] = lang.proportion;
        }
      }
      return docLangSignal;
    };

    for (let i = 0; i < searchText.length; i++) {
      const matchResults = this.profanityTrie.findMatches(
        searchText,
        i,
        this.detectPartialWords
      );
      for (const match of matchResults) {
        const start = i + match.start;
        const end = i + match.end;
        const isWhole = this.isWholeWord(originalText, start, end);
        if (!this.detectPartialWords && !isWhole) {
          if (!this.isHighCoverageEmbed(originalText, start, end, match.word, getDocLang())) {
            continue;
          }
        }
        const matchedText = originalText.substring(start, end);
        if (this.isWhitelistedMatch(match.word, matchedText)) {
          continue;
        }
        if (this.hasWordBoundaries(originalText, start, end)) {
          matches.push({
            word: match.word,
            start,
            end,
            originalWord: matchedText,
          });
          boundaryMatchedRanges.push({ start, end });
        }
      }
    }

    // Embedded profanity detection: find profane substrings inside words
    // that weren't caught by word-boundary matching
    if (this.embeddedProfanityDetection) {
      this.findEmbeddedMatches(searchText, originalText, matches, boundaryMatchedRanges);
    }
  }

  /**
   * Walk the trie while tolerating separator characters between letters.
   * Catches evasion patterns: "fu ck", "c.u.n.t", "fu@ck@cu@nt@bi@tch"
   *
   * Symbol separators (@, ., -, etc.) are skipped freely.
   * Space separators reduce certainty by SPACE_CERTAINTY_PENALTY per gap.
   * Matches that drop below the flagging threshold become "suspicious" instead.
   */
  private findSeparatorTolerantMatches(
    searchText: string,
    originalText: string,
    matches: MatchResult[]
  ): void {
    const alreadyFound = new Set(matches.map((m) => m.word.toLowerCase()));
    const maxSkip = this.separatorTolerance;

    for (let i = 0; i < searchText.length; i++) {
      // Only start walks from non-separator characters at word-boundary positions
      if (BeKind.isSeparator(searchText[i])) continue;
      if (i > 0 && /\w/.test(searchText[i - 1])) continue;

      const found = this.walkTrieWithSeparators(
        this.profanityTrie,
        searchText,
        i,
        maxSkip,
        0, // spaceBoundaries
      );

      for (const { word, endPos, anySeparatorSkipped, spaceBoundaries } of found) {
        // Only report if separators were actually skipped (normal matching handles the rest)
        if (!anySeparatorSkipped) continue;
        // Require minimum word length of 3 to avoid short false positives
        if (word.length < 3) continue;
        if (alreadyFound.has(word.toLowerCase())) continue;
        if (this.isWhitelistedMatch(word, originalText.substring(i, endPos))) continue;

        alreadyFound.add(word.toLowerCase());

        // All separator-tolerant matches are suspicious only for now.
        // They're captured with context for review but don't flag as profanity.
        if (!this._suspiciousMatches) this._suspiciousMatches = [];
        this._suspiciousMatches.push({
          word,
          start: i,
          end: endPos,
          originalWord: originalText.substring(i, endPos),
          spaceBoundaries,
        });
      }
    }
  }

  /**
   * Recursively walk the trie from a given node, skipping separator chars.
   * Tracks space boundaries crossed (for certainty penalty) separately from
   * symbol separators (which are free to skip).
   */
  private walkTrieWithSeparators(
    node: TrieNode,
    text: string,
    pos: number,
    maxSkip: number,
    spaceBoundaries: number,
    totalSkips: number = 0,
  ): Array<{ word: string; endPos: number; anySeparatorSkipped: boolean; spaceBoundaries: number }> {
    const results: Array<{ word: string; endPos: number; anySeparatorSkipped: boolean; spaceBoundaries: number }> = [];

    if (pos >= text.length) {
      if (node.isEndOfWord) {
        results.push({ word: node.word, endPos: pos, anySeparatorSkipped: totalSkips > 0, spaceBoundaries });
      }
      return results;
    }

    const char = text[pos];

    // Try matching the character directly in the trie
    const nextNode = node.getChild(char);
    if (nextNode) {
      if (nextNode.isEndOfWord) {
        results.push({ word: nextNode.word, endPos: pos + 1, anySeparatorSkipped: totalSkips > 0, spaceBoundaries });
      }
      results.push(
        ...this.walkTrieWithSeparators(nextNode, text, pos + 1, maxSkip, spaceBoundaries, totalSkips)
      );
    }

    // If current char is a separator, skip over consecutive separators
    if (BeKind.isSeparator(char)) {
      let skipCount = 0;
      let skipPos = pos;
      let hasSpace = false;
      while (skipPos < text.length && BeKind.isSeparator(text[skipPos]) && skipCount < maxSkip) {
        if (BeKind.isWhitespaceSeparator(text[skipPos])) hasSpace = true;
        skipPos++;
        skipCount++;
      }
      if (skipPos < text.length && skipCount > 0) {
        const newSpaceBoundaries = spaceBoundaries + (hasSpace ? 1 : 0);
        results.push(
          ...this.walkTrieWithSeparators(node, text, skipPos, maxSkip, newSpaceBoundaries, totalSkips + skipCount)
        );
      }
    }

    return results;
  }

  /**
   * Decay constant for embedded profanity detection.
   * Each extra character beyond the profane root reduces certainty by this factor.
   */
  private static readonly EMBEDDED_DECAY_RATE = 0.9;

  /**
   * Minimum decayed certainty to report an embedded match.
   */
  private static readonly EMBEDDED_MIN_CERTAINTY = 2;

  /**
   * Find profane substrings embedded inside larger words with certainty decay.
   *
   * Formula: decayed_c = base_c * (DECAY_RATE ^ extra_chars) * (profane_len / host_word_len)
   *
   * Multi-profanity bonus: if a host word contains multiple profane substrings,
   * certainty is boosted (sum of base severities used as multiplier, capped at c:5).
   *
   * Unusually long words (12+ chars) containing profanity get a certainty bonus
   * since legitimate words rarely exceed this length.
   */
  private findEmbeddedMatches(
    searchText: string,
    originalText: string,
    matches: MatchResult[],
    alreadyMatched: Array<{ start: number; end: number }>
  ): void {
    // Extract individual words from text with their positions
    const wordPattern = /[a-zA-Z\u00C0-\u024F\u0400-\u04FF\u0600-\u06FF\u3000-\u9FFF\uAC00-\uD7AF]+/g;
    let wordMatch: RegExpExecArray | null;

    while ((wordMatch = wordPattern.exec(searchText)) !== null) {
      const hostWord = wordMatch[0];
      const hostStart = wordMatch.index;
      const hostEnd = hostStart + hostWord.length;

      // Skip if this word was already fully matched by boundary detection
      const fullyMatched = alreadyMatched.some(
        (r) => r.start <= hostStart && r.end >= hostEnd
      );
      if (fullyMatched) continue;

      // Find all profane substrings within this word
      const embeddedFinds: Array<{
        word: string;
        start: number;
        end: number;
        baseSeverity: number;
        baseCertainty: number;
      }> = [];

      for (let i = 0; i < hostWord.length; i++) {
        const subMatches = this.profanityTrie.findMatches(hostWord.toLowerCase(), i, true);
        for (const sub of subMatches) {
          const subStart = hostStart + i + sub.start;
          const subEnd = hostStart + i + sub.end;

          // Skip if this exact range was already boundary-matched
          const alreadyCovered = alreadyMatched.some(
            (r) => r.start === subStart && r.end === subEnd
          );
          if (alreadyCovered) continue;

          const score = this.wordScores[sub.word];
          if (!score) continue;

          embeddedFinds.push({
            word: sub.word,
            start: subStart,
            end: subEnd,
            baseSeverity: score.severity,
            baseCertainty: score.certainty,
          });
        }
      }

      if (embeddedFinds.length === 0) continue;

      // Deduplicate: keep longest match at each position
      const dedupedFinds = this.deduplicateEmbeddedFinds(embeddedFinds);

      // Multi-profanity bonus: if multiple distinct profane roots found, boost certainty
      const multiBonus = dedupedFinds.length >= 2
        ? Math.min(dedupedFinds.length * 0.5, 2.0) // +0.5 per extra root, cap +2
        : 0;

      // Unusually long word bonus (12+ chars with profanity = likely evasion)
      const lengthBonus = hostWord.length >= 12 ? 1.0 : 0;

      for (const find of dedupedFinds) {
        const profaneLen = find.word.length;
        const extraChars = hostWord.length - profaneLen;
        const decayFactor = Math.pow(BeKind.EMBEDDED_DECAY_RATE, extraChars);
        const lengthRatio = profaneLen / hostWord.length;

        let decayedCertainty = find.baseCertainty * decayFactor * lengthRatio + multiBonus + lengthBonus;
        decayedCertainty = Math.round(Math.max(1, Math.min(5, decayedCertainty)));

        if (decayedCertainty < BeKind.EMBEDDED_MIN_CERTAINTY) continue;

        const matchedText = originalText.substring(find.start, find.end);
        matches.push({
          word: find.word,
          start: find.start,
          end: find.end,
          originalWord: matchedText,
          isSubstringMatch: true,
          decayedScore: { severity: find.baseSeverity, certainty: decayedCertainty },
          detectionMethod: "embedded",
        });
      }
    }
  }

  /**
   * Deduplicate embedded finds: at overlapping positions, keep the longest match.
   */
  private deduplicateEmbeddedFinds(
    finds: Array<{ word: string; start: number; end: number; baseSeverity: number; baseCertainty: number }>
  ): Array<{ word: string; start: number; end: number; baseSeverity: number; baseCertainty: number }> {
    // Sort by start, then by length descending
    const sorted = [...finds].sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));
    const result: typeof sorted = [];
    let lastEnd = -1;

    for (const find of sorted) {
      // Skip if fully contained within a previous match
      if (find.start >= lastEnd || find.end > lastEnd) {
        result.push(find);
        lastEnd = Math.max(lastEnd, find.end);
      }
    }
    return result;
  }

  /**
   * Generate cleaned text by replacing profane words.
   * @param originalText - The original text.
   * @param matches - Array of matches.
   * @returns Cleaned text.
   */
  private generateCleanedText(
    originalText: string,
    matches: MatchResult[]
  ): string {
    if (matches.length === 0) return originalText;

    let result = originalText;
    const sortedMatches = [...this.deduplicateMatches(matches)].sort(
      (a, b) => b.start - a.start
    );

    for (const match of sortedMatches) {
      const replacement = this.defaultPlaceholder.repeat(
        match.originalWord.length
      );
      result =
        result.substring(0, match.start) +
        replacement +
        result.substring(match.end);
    }

    return result;
  }

  /**
   * Quick boolean check for profanity presence in text.
   *
   * @param {string} text - The text to check for profanity
   * @returns {boolean} True if profanity is detected, false otherwise
   *
   * @throws {TypeError} If text is not a string
   *
   * @remarks
   * - Convenience method that internally calls `detect()` and returns only the boolean result
   * - For detailed information about matches, use `detect()` instead
   * - Results are cached if caching is enabled (same cache as `detect()`)
   *
   * @example
   * ```typescript
   * const filter = new BeKind();
   *
   * if (filter.check("This has bad words")) {
   *   console.log("Profanity detected!");
   * }
   *
   * // Quick validation
   * const isClean = !filter.check(userInput);
   * ```
   *
   * @see {@link detect} for detailed profanity analysis
   */
  check(text: string): boolean {
    return this.detect(text).hasProfanity;
  }

  /**
   * Cleans text by replacing profanity with a placeholder character.
   *
   * @param {string} text - The text to clean
   * @param {string} [placeholder] - Optional custom placeholder character (uses default if not provided)
   * @returns {string} The cleaned text with profanity replaced
   *
   * @throws {TypeError} If text is not a string
   *
   * @remarks
   * ### Character-level Replacement:
   * - Each profane character is replaced individually
   * - "bad" with placeholder "*" becomes "***"
   * - Preserves text length and structure
   *
   * ### Placeholder Behavior:
   * - If no placeholder provided, uses the instance's default placeholder
   * - If placeholder provided, uses only the first character
   * - Empty placeholder throws error
   *
   * @example
   * ```typescript
   * const filter = new BeKind();
   *
   * // Using default placeholder (*)
   * const cleaned = filter.clean("This has bad words");
   * console.log(cleaned); // "This has *** *****"
   *
   * // Using custom placeholder
   * const cleaned = filter.clean("This has bad words", "#");
   * console.log(cleaned); // "This has ### #####"
   * ```
   *
   * @example
   * ```typescript
   * // Clean user-generated content for display
   * const userComment = "Some inappropriate words here";
   * const safeComment = filter.clean(userComment);
   * displayComment(safeComment);
   * ```
   *
   * @see {@link cleanWithPlaceholder} for word-level replacement
   * @see {@link setPlaceholder} to change default placeholder
   */
  clean(text: string, placeholder?: string): string {
    const detection = this.detect(text);

    if (!placeholder || placeholder === this.defaultPlaceholder) {
      return detection.cleanedText;
    }

    let result = text;
    const sortedPositions = [
      ...this.deduplicateMatches(
        detection.positions.map((p) => ({
          word: p.word,
          start: p.start,
          end: p.end,
          originalWord: text.substring(p.start, p.end),
        }))
      ),
    ].sort((a, b) => b.start - a.start);

    for (const pos of sortedPositions) {
      const originalWord = text.substring(pos.start, pos.end);
      const replacement = placeholder.repeat(originalWord.length);
      result =
        result.substring(0, pos.start) +
        replacement +
        result.substring(pos.end);
    }

    return result;
  }

  /**
   * Cleans text by replacing each profane word with a single placeholder string (word-level replacement).
   *
   * @param {string} text - The text to clean
   * @param {string} [placeholder="***"] - The placeholder string to use for each profane word
   * @returns {string} The cleaned text with each profane word replaced by the placeholder
   *
   * @throws {TypeError} If text is not a string
   *
   * @remarks
   * ### Word-level Replacement:
   * - Each profane word is replaced with the entire placeholder string (not character-by-character)
   * - "bad words" with placeholder "***" becomes "*** ***"
   * - Does NOT preserve original text length
   *
   * ### Difference from `clean()`:
   * - `clean()`: Character-level replacement - "bad" becomes "***" (preserves length)
   * - `cleanWithPlaceholder()`: Word-level replacement - "bad" becomes "***" (fixed placeholder)
   *
   * @example
   * ```typescript
   * const filter = new BeKind();
   *
   * // Default placeholder (***) const text = "This has bad words";
   * const cleaned = filter.cleanWithPlaceholder(text);
   * console.log(cleaned); // "This has *** ***"
   *
   * // Custom placeholder
   * const cleaned2 = filter.cleanWithPlaceholder(text, "[CENSORED]");
   * console.log(cleaned2); // "This has [CENSORED] [CENSORED]"
   * ```
   *
   * @example
   * ```typescript
   * // Censoring chat messages
   * const message = "You are a badword and stupid";
   * const censored = filter.cleanWithPlaceholder(message, "[***]");
   * // Result: "You are a [***] and [***]"
   * ```
   *
   * @see {@link clean} for character-level replacement
   */
  cleanWithPlaceholder(text: string, placeholder: string = "***"): string {
    const detection = this.detect(text);
    if (detection.positions.length === 0) return text;

    let result = text;
    const sortedPositions = [
      ...this.deduplicateMatches(
        detection.positions.map((p) => ({
          word: p.word,
          start: p.start,
          end: p.end,
          originalWord: text.substring(p.start, p.end),
        }))
      ),
    ].sort((a, b) => b.start - a.start);

    for (const pos of sortedPositions) {
      if (!this.isWholeWord(result, pos.start, pos.end)) continue;
      result =
        result.substring(0, pos.start) +
        placeholder +
        result.substring(pos.end);
    }

    return result;
  }

  /**
   * Dynamically adds one or more words to the profanity filter at runtime.
   *
   * @param {string | string[]} word - A single word or array of words to add to the filter
   * @returns {void}
   *
   * @remarks
   * ### Behavior:
   * - Words are added to all active data structures (Trie, Aho-Corasick, Bloom Filter)
   * - Automatically normalizes words based on caseSensitive setting
   * - Skips whitelisted words
   * - Validates and filters out non-string or empty values
   * - Changes take effect immediately for subsequent detect/check/clean calls
   *
   * ### Use Cases:
   * - Adding context-specific profanity
   * - Building dynamic word lists from user reports
   * - Customizing filters for specific communities/applications
   *
   * @example
   * ```typescript
   * const filter = new BeKind();
   *
   * // Add single word
   * filter.add('newbadword');
   *
   * // Add multiple words
   * filter.add(['word1', 'word2', 'word3']);
   *
   * // Now these words will be detected
   * filter.check('newbadword'); // true
   * ```
   *
   * @example
   * ```typescript
   * // Add game-specific slang dynamically
   * const filter = new BeKind();
   * const gamingSlang = ['noob', 'trash', 'tryhard'];
   * filter.add(gamingSlang);
   *
   * const message = "You're such a noob";
   * console.log(filter.check(message)); // true
   * ```
   *
   * @see {@link remove} to remove words
   * @see {@link loadCustomDictionary} for loading named dictionaries
   */
  add(word: string | string[]): void {
    const words = Array.isArray(word) ? word : [word];
    const validatedWords = validateStringArray(words, "words to add");
    for (const w of validatedWords) {
      this.dynamicWords.add(w);
      this.addWordToTrie(w);
    }
  }

  /**
   * Dynamically removes one or more words from the profanity filter at runtime.
   *
   * @param {string | string[]} word - A single word or array of words to remove from the filter
   * @returns {void}
   *
   * @remarks
   * ### Behavior:
   * - Removes words from all active data structures (Trie, dynamic words set)
   * - Normalizes words based on caseSensitive setting before removal
   * - Only removes dynamically added words, not words from loaded language dictionaries
   * - Changes take effect immediately for subsequent detect/check/clean calls
   *
   * ### Important Notes:
   * - Cannot remove words from built-in language dictionaries
   * - To exclude dictionary words, use `addToWhitelist()` instead
   * - Validates and filters out non-string or empty values
   *
   * @example
   * ```typescript
   * const filter = new BeKind();
   *
   * // Add then remove a word
   * filter.add('tempword');
   * filter.check('tempword'); // true
   *
   * filter.remove('tempword');
   * filter.check('tempword'); // false
   *
   * // Remove multiple words
   * filter.remove(['word1', 'word2']);
   * ```
   *
   * @example
   * ```typescript
   * // Managing custom word list
   * const filter = new BeKind();
   * filter.add(['custom1', 'custom2', 'custom3']);
   *
   * // Later, remove one that's no longer needed
   * filter.remove('custom2');
   * ```
   *
   * @see {@link add} to add words
   * @see {@link addToWhitelist} to exclude dictionary words without removing them
   */
  remove(word: string | string[]): void {
    const words = Array.isArray(word) ? word : [word];
    const validatedWords = validateStringArray(words, "words to remove");
    for (const w of validatedWords) {
      const normalizedWord = this.caseSensitive ? w : w.toLowerCase();
      this.profanityTrie.removeWord(normalizedWord);
      this.dynamicWords.delete(w);
    }
  }

  /**
   * Add words to the whitelist.
   * @param words - Words to whitelist.
   */
  addToWhitelist(words: string[]): void {
    const validatedWords = validateStringArray(words, "whitelist words");
    for (const word of validatedWords) {
      const normalizedWord = this.caseSensitive ? word : word.toLowerCase();
      this.whitelistSet.add(normalizedWord);
    }
  }

  /**
   * Remove words from the whitelist.
   * @param words - Words to remove from whitelist.
   */
  removeFromWhitelist(words: string[]): void {
    const validatedWords = validateStringArray(words, "whitelist words");
    for (const word of validatedWords) {
      const normalizedWord = this.caseSensitive ? word : word.toLowerCase();
      this.whitelistSet.delete(normalizedWord);
    }
  }

  /**
   * Check if a word is whitelisted.
   * @param word - The word to check.
   * @returns True if whitelisted, false otherwise.
   */
  private isWhitelisted(word: string): boolean {
    const normalizedWord = this.caseSensitive ? word : word.toLowerCase();
    return this.whitelistSet.has(normalizedWord);
  }

  /**
   * Loads a built-in language dictionary into the profanity filter.
   *
   * @param {string} language - The language key to load (case-insensitive)
   * @returns {boolean} True if language was loaded successfully, false if not found or already loaded
   *
   * @remarks
   * ### Available Languages:
   * - `'english'` - English profanity words
   * - `'hindi'` - Hindi profanity words
   * - `'french'` - French profanity words
   * - `'german'` - German profanity words
   * - `'spanish'` - Spanish profanity words
   * - `'bengali'` - Bengali profanity words
   * - `'tamil'` - Tamil profanity words
   * - `'telugu'` - Telugu profanity words
   * - `'brazilian'` - Brazilian Portuguese profanity words
   *
   * ### Behavior:
   * - Language keys are case-insensitive
   * - Loading is idempotent - calling multiple times for same language is safe
   * - Returns true if language loaded successfully or was already loaded
   * - Returns false if language not found
   * - Logs success/failure messages (unless silent mode enabled)
   * - Words are added to all active data structures
   *
   * ### Default Languages:
   * English and Hindi are loaded automatically in the constructor
   *
   * @example
   * ```typescript
   * const filter = new BeKind();
   *
   * // Load additional languages
   * filter.loadLanguage('french');
   * filter.loadLanguage('spanish');
   *
   * // Case-insensitive
   * filter.loadLanguage('GERMAN'); // Works
   *
   * // Check if loaded
   * console.log(filter.getLoadedLanguages()); // ['english', 'hindi', 'french', 'spanish', 'german']
   * ```
   *
   * @example
   * ```typescript
   * // Load all Indian languages at once
   * const filter = new BeKind();
   * filter.loadIndianLanguages();
   * ```
   *
   * @see {@link loadLanguages} to load multiple languages at once
   * @see {@link loadIndianLanguages} for convenience method
   * @see {@link getAvailableLanguages} to see all available languages
   * @see {@link getLoadedLanguages} to see currently loaded languages
   */
  loadLanguage(language: string): boolean {
    if (!language || typeof language !== "string") {
      this.logger.warn(`Invalid language parameter: ${language}`);
      return false;
    }

    const langKey = language.toLowerCase().trim();

    if (this.loadedLanguages.has(langKey)) {
      return true;
    }

    const words = this.availableLanguages[langKey];
    if (!words || words.length === 0) {
      this.logger.warn(`Language '${language}' not found or empty`);
      return false;
    }

    try {
      let addedCount = 0;
      for (const word of words) {
        if (this.addWordToTrie(word)) {
          addedCount++;
        }
      }

      this.loadedLanguages.add(langKey);
      this.logger.info(
        `Loaded ${addedCount} words from ${language} dictionary`
      );
      return true;
    } catch (error) {
      this.logger.error(`Failed to load language ${language}: ${error}`);
      return false;
    }
  }

  /**
   * Load multiple language dictionaries.
   * @param languages - Array of languages to load.
   * @returns Number of successfully loaded languages.
   */
  loadLanguages(languages: string[]): number {
    const validatedLanguages = validateStringArray(languages, "languages");
    return validatedLanguages.reduce((count, lang) => {
      return this.loadLanguage(lang) ? count + 1 : count;
    }, 0);
  }

  /**
   * Load all supported Indian languages.
   * @returns Number of loaded Indian languages.
   */
  loadIndianLanguages(): number {
    const indianLanguages = ["hindi", "bengali", "tamil", "telugu"];
    return this.loadLanguages(indianLanguages);
  }

  /**
   * Loads a custom dictionary of profane words with a specific name.
   *
   * @param {string} name - Unique name/identifier for this custom dictionary
   * @param {string[]} words - Array of profane words to add to the dictionary
   * @returns {void}
   *
   * @throws {TypeError} If name is not a string or words is not an array
   *
   * @remarks
   * ### Behavior:
   * - Creates a new named dictionary or overwrites existing one with same name
   * - Validates and filters out non-string and empty values from words array
   * - Words are added to all active data structures (Trie, Aho-Corasick, Bloom Filter)
   * - Dictionary name is converted to lowercase for storage
   * - Logs count of loaded words (unless silent mode enabled)
   *
   * ### Use Cases:
   * - Domain-specific profanity (gaming, medical, legal, etc.)
   * - Organization-specific word lists
   * - Temporary or context-dependent filters
   * - Testing and development
   *
   * @example
   * ```typescript
   * const filter = new BeKind();
   *
   * // Load gaming-specific slang
   * filter.loadCustomDictionary('gaming', [
   *   'noob',
   *   'scrub',
   *   'tryhard',
   *   'trash'
   * ]);
   *
   * // Load company-specific terms
   * filter.loadCustomDictionary('company', [
   *   'competitor1',
   *   'bannedTerm1',
   *   'inappropriateJargon'
   * ]);
   *
   * console.log(filter.check('You are such a noob')); // true
   * ```
   *
   * @example
   * ```typescript
   * // Load from external source
   * const filter = new BeKind();
   *
   * async function loadExternalDictionary() {
   *   const response = await fetch('https://example.com/custom-words.json');
   *   const customWords = await response.json();
   *   filter.loadCustomDictionary('external', customWords);
   * }
   * ```
   *
   * @see {@link add} for adding individual words dynamically
   * @see {@link loadLanguage} for loading built-in language dictionaries
   */
  loadCustomDictionary(name: string, words: string[]): void {
    validateString(name, "dictionary name");
    const validatedWords = validateStringArray(
      words,
      "custom dictionary words"
    );

    if (validatedWords.length === 0) {
      this.logger.warn(`Custom dictionary '${name}' contains no valid words`);
      return;
    }

    try {
      let addedCount = 0;
      for (const word of validatedWords) {
        if (this.addWordToTrie(word)) {
          addedCount++;
        }
      }

      this.availableLanguages[name.toLowerCase()] = validatedWords;
      this.loadedLanguages.add(name.toLowerCase());

      this.logger.info(
        `Loaded ${addedCount} words from custom dictionary '${name}'`
      );
    } catch (error) {
      this.logger.error(`Failed to load custom dictionary ${name}: ${error}`);
    }
  }

  /**
   * Add a single word to the trie.
   * @param word - The word to add.
   * @returns True if added, false otherwise.
   */
  private addWordToTrie(word: string): boolean {
    if (!word || typeof word !== "string" || word.trim().length === 0) {
      return false;
    }

    const normalizedWord = this.caseSensitive
      ? word.trim()
      : word.trim().toLowerCase();

    if (this.isWhitelisted(normalizedWord)) {
      return false;
    }

    // Add to Trie (always used as fallback)
    this.profanityTrie.addWord(normalizedWord);

    // Add to Bloom Filter if enabled
    if (this.bloomFilter) {
      this.bloomFilter.add(normalizedWord);
    }

    // Add to Aho-Corasick automaton if enabled
    if (this.ahoCorasickAutomaton) {
      this.ahoCorasickAutomaton.addPattern(normalizedWord);
    }

    return true;
  }

  /**
   * Calculate severity from matches.
   * @param matches - Array of matches.
   * @returns Severity level.
   */
  private calculateSeverity(matches: MatchResult[]): ProfanitySeverity {
    if (matches.length === 0) return ProfanitySeverity.MILD;

    const uniqueWords = new Set(matches.map((m) => m.word)).size;
    const totalMatches = matches.length;

    if (totalMatches >= 5 || uniqueWords >= 4) return ProfanitySeverity.EXTREME;
    if (totalMatches >= 3 || uniqueWords >= 3) return ProfanitySeverity.SEVERE;
    if (totalMatches >= 2 || uniqueWords >= 2)
      return ProfanitySeverity.MODERATE;
    return ProfanitySeverity.MILD;
  }

  /**
   * Get the severity (s) and certainty (c) scores for a word.
   * Returns null if the word has no score entry.
   *
   * @param word - The word to look up
   * @returns The score object or null
   */
  getWordScore(word: string): { severity: number; certainty: number; language: string } | null {
    const normalized = word.toLowerCase().trim();
    return this.wordScores[normalized] ?? null;
  }

  /**
   * Check whether a word should be flagged based on its severity/certainty scores.
   *
   * Threshold rules:
   * - Flag if s:5 (any certainty)
   * - Flag if s:4+ AND c:2+
   * - Flag if s:3 AND c:3+
   * - Allow everything else
   *
   * @param word - The word to check
   * @returns true if the word should be flagged
   */
  /**
   * Shared threshold logic: determines whether a severity/certainty pair
   * crosses the flag threshold. Used by shouldFlag, shouldFlagWithContext,
   * and inline threshold checks.
   */
  static shouldFlagWithCertainty(severity: number, certainty: number): boolean {
    return severity === 5 || (severity >= 4 && certainty >= 2) || (severity === 3 && certainty >= 3);
  }

  shouldFlag(word: string): boolean {
    const score = this.getWordScore(word);
    if (!score) return false;
    return BeKind.shouldFlagWithCertainty(score.severity, score.certainty);
  }

  /**
   * Context-aware shouldFlag: for words with certainty ≤ 3, applies
   * certainty-delta adjustments from surrounding context before evaluating
   * the shouldFlag threshold. Words with certainty > 3 skip context analysis.
   */
  private shouldFlagWithContext(
    word: string,
    text: string,
    matchStart: number,
    matchEnd: number
  ): boolean {
    const wordScore = this.getWordScore(word);
    if (!wordScore) return false;

    if (this.contextAnalyzer) {
      const delta = this.contextAnalyzer.getCertaintyDelta(
        text, matchStart, matchEnd, word
      );
      const adjustedCertainty = Math.max(0, Math.min(5, wordScore.certainty + delta));
      return BeKind.shouldFlagWithCertainty(wordScore.severity, adjustedCertainty);
    }

    return this.shouldFlag(word);
  }

  /**
   * Clear all loaded dictionaries and dynamic words.
   */
  clearList(): void {
    this.profanityTrie.clear();
    this.loadedLanguages.clear();
    this.dynamicWords.clear();
  }

  /**
   * Set the placeholder character for filtered words.
   * @param placeholder - The placeholder character.
   */
  setPlaceholder(placeholder: string): void {
    validateString(placeholder, "placeholder");

    if (placeholder.length === 0) {
      throw new Error("Placeholder cannot be empty");
    }

    this.defaultPlaceholder = placeholder.charAt(0);
  }

  /**
   * Get the list of loaded languages.
   * @returns Array of loaded language keys.
   */
  getLoadedLanguages(): string[] {
    return Array.from(this.loadedLanguages);
  }

  /**
   * Get the list of available built-in languages.
   * @returns Array of available language keys.
   */
  getAvailableLanguages(): string[] {
    return Object.keys(this.availableLanguages);
  }

  /**
   * Get the current configuration of the profanity filter.
   * @returns Partial configuration object.
   */
  getConfig(): Partial<BeKindOptions> {
    return {
      defaultPlaceholder: this.defaultPlaceholder,
      enableLeetSpeak: this.enableLeetSpeak,
      caseSensitive: this.caseSensitive,
      strictMode: this.strictMode,
      detectPartialWords: this.detectPartialWords,
      languages: this.getLoadedLanguages(),
      whitelistWords: Array.from(this.whitelistSet),
    };
  }

  /**
   * Rebuild the profanity trie from loaded dictionaries and dynamic words.
   */
  private rebuildTrie(): void {
    this.profanityTrie.clear();
    for (const lang of this.loadedLanguages) {
      const words = this.availableLanguages[lang] || [];
      for (const word of words) {
        this.addWordToTrie(word);
      }
    }
    for (const word of this.dynamicWords) {
      this.addWordToTrie(word);
    }
  }

  /**
   * Update configuration options for the profanity filter.
   * @param options - Partial configuration object.
   */
  updateConfig(options: Partial<BeKindOptions>): void {
    let rebuildNeeded = false;
    if (options.defaultPlaceholder !== undefined) {
      this.setPlaceholder(options.defaultPlaceholder);
    }
    if (options.enableLeetSpeak !== undefined) {
      this.enableLeetSpeak = options.enableLeetSpeak;
    }
    if (options.leetInnocentWords !== undefined) {
      this.setLeetInnocentWords(options.leetInnocentWords);
    }
    if (
      options.caseSensitive !== undefined &&
      options.caseSensitive !== this.caseSensitive
    ) {
      this.caseSensitive = options.caseSensitive;
      rebuildNeeded = true;
    }
    if (options.strictMode !== undefined) {
      this.strictMode = options.strictMode;
    }
    if (options.detectPartialWords !== undefined) {
      this.detectPartialWords = options.detectPartialWords;
    }
    if (options.embeddedProfanityDetection !== undefined) {
      this.embeddedProfanityDetection = options.embeddedProfanityDetection;
    }
    if (options.separatorTolerance !== undefined) {
      const sepTol = options.separatorTolerance;
      if (sepTol === false) {
        this.separatorTolerance = 0;
      } else if (typeof sepTol === "number") {
        this.separatorTolerance = Math.max(0, sepTol);
      } else {
        this.separatorTolerance = 5;
      }
    }
    if (options.whitelistWords) {
      this.addToWhitelist(options.whitelistWords);
    }
    if (rebuildNeeded) {
      this.rebuildTrie();
    }
  }

  /**
   * Create an BeKind instance from a configuration object.
   * @param config - Configuration object
   * @returns A new BeKind instance
   */
  static fromConfig(config: BeKindOptions | any): BeKind {
    const options: BeKindOptions = {};

    if (config.algorithm) options.algorithm = config.algorithm;
    if (config.bloomFilter) options.bloomFilter = config.bloomFilter;
    if (config.ahoCorasick) options.ahoCorasick = config.ahoCorasick;
    if (config.contextAnalysis) options.contextAnalysis = config.contextAnalysis;
    if (config.performance) options.performance = config.performance;

    if (config.profanityDetection) {
      options.enableLeetSpeak = config.profanityDetection.enableLeetSpeak;
      options.caseSensitive = config.profanityDetection.caseSensitive;
      options.strictMode = config.profanityDetection.strictMode;
      options.detectPartialWords = config.profanityDetection.detectPartialWords;
      options.defaultPlaceholder = config.profanityDetection.defaultPlaceholder;
    }

    if (config.enableLeetSpeak !== undefined) options.enableLeetSpeak = config.enableLeetSpeak;
    if (config.caseSensitive !== undefined) options.caseSensitive = config.caseSensitive;
    if (config.strictMode !== undefined) options.strictMode = config.strictMode;
    if (config.detectPartialWords !== undefined) options.detectPartialWords = config.detectPartialWords;
    if (config.defaultPlaceholder !== undefined) options.defaultPlaceholder = config.defaultPlaceholder;
    if (config.languages) options.languages = config.languages;
    if (config.whitelistWords) options.whitelistWords = config.whitelistWords;
    if (config.customDictionaries) options.customDictionaries = config.customDictionaries;
    if (config.logger) options.logger = config.logger;

    return new BeKind(options);
  }
}

/**
 * Singleton instance of BeKind with default configuration.
 */
const allProfanity = new BeKind();
export default allProfanity;
