// src/hindi-words.ts

/**
 * Hindi/Hinglish profanity words list
 * Contains common profanities in both Devanagari and Roman scripts
 * ⚠️ Warning: This file contains explicit language in Hindi
 */
const _d: Record<string, [number, number]> = {
  "bc": [3, 4], // Abbreviation for behenchod
  "mc": [5, 5], // Abbreviation for madarchod
  // ========================================
  // === Original Seed Words ===
  // ========================================
  // Roman script Hindi/Hinglish profanities
  "behen chod": [3, 5], // Sister fucker
  "behenchod": [3, 5], // Sister fucker
  "bhenchod": [5, 5], // Sister fucker
  "bakchod": [3, 5], // Bullshitter
  "chutiya": [2, 4], // Idiot / Fool (vulgar)
  "chutiyapa": [1, 4], // Idiocy / Foolishness (vulgar)
  "gandu": [3, 4], // Asshole
  "gaandu": [3, 4], // Asshole
  "harami": [2, 4], // Bastard
  "haramzada": [2, 4], // Bastard (born of sin)
  "kutta": [2, 4], // Dog (insult)
  "kutte": [2, 4], // Dogs (insult)
  "kamina": [2, 4], // Scoundrel
  "lund": [4, 4], // Penis (vulgar)
  "lauda": [4, 4], // Penis (vulgar)
  "loda": [4, 4], // Penis (vulgar)
  "randi": [3, 4], // Prostitute
  "saala": [2, 4], // Brother-in-law (used as insult: bastard)
  "madarchod": [5, 5], // Motherfucker
  "chod": [3, 5], // Fuck
  "chodu": [3, 4], // Fucker / Idiot

  // Devanagari script profanities
  "भड़वा": [3, 4], // Pimp
  "भोसड़ी": [4, 4], // Vagina (extremely vulgar)
  "बहन चोद": [3, 5], // Sister fucker
  "भेन चोद": [3, 5], // Sister fucker
  "चूतिया": [1, 4], // Idiot / Fool (vulgar)
  "हरामी": [2, 4], // Bastard
  "हरामज़ादा": [2, 4], // Bastard (born of sin)
  "कमीना": [2, 4], // Scoundrel
  "लंड": [4, 4], // Penis (vulgar)
  "लौड़ा": [4, 4], // Penis (vulgar)
  "रंडी": [5, 4], // Prostitute
  "साला": [2, 4], // Brother-in-law (used as insult)
  "मादरचोद": [5, 5], // Motherfucker

  // Common misspellings and variations (Original)
  "bhnchd": [3, 5], // Abbreviation/Variation of behenchod
  "behanchod": [3, 5], // Sister fucker (variant)
  "bhanchod": [3, 5], // Sister fucker (variant)
  "bhen chod": [3, 5], // Sister fucker (variant)
  "chutia": [1, 5], // Idiot (variant spelling)
  "rendi": [5, 5], // Prostitute (variant)
  "maderchod": [5, 5], // Motherfucker (variant)
  "madarchood": [5, 5], // Motherfucker (variant)
  "madarjaat": [5, 5], // Motherfucker's kind
  "gandoo": [3, 5], // Asshole (variant)

  // ========================================
  // === Expanded List (Roman Script) ===
  // ========================================

  // --- Variations of 'Behenchod' ---
  "behanchood": [3, 5], // Sister fucker (variant)
  "behenchood": [3, 5], // Sister fucker (variant)
  "bhenchood": [3, 5], // Sister fucker (variant)
  "bhainchod": [3, 5], // Sister fucker (variant)
  "bhain chood": [3, 5], // Sister fucker (variant)
  "bahenchod": [3, 5], // Sister fucker (variant)
  "behnchod": [3, 5], // Sister fucker (variant)
  "behncod": [3, 5], // Sister fucker (variant)
  "behn chod": [3, 5], // Sister fucker (variant)
  "bhen cod": [3, 5], // Sister fucker (variant)
  "bhen chood": [3, 5], // Sister fucker (variant)
  "bahanchod": [3, 5], // Sister fucker (variant)
  "bhenco": [3, 5], // Sister fucker (shortened)
  "bhencho": [3, 5], // Sister fucker (shortened)
  "b c": [3, 4], // Abbreviation for behenchod
  "be si": [3, 5], // Phonetic abbreviation for BC
  "bee see": [3, 5], // Phonetic abbreviation for BC
  "behenkechodo": [3, 5], // Compound: sister fuckers
  "bhenkelode": [4, 4], // Compound: sister's dicks
  "bkl": [3, 4], // Abbreviation for Behen ke Lode
  "bahan chod": [3, 5], // Sister fucker (variant)
  "bahan ke": [3, 4], // Sister's... (start of insult)

  // --- Variations of 'Madarchod' ---
  "madar chod": [5, 5], // Motherfucker (variant)
  "madarchodd": [5, 5], // Motherfucker (variant)
  "madarchoddd": [5, 5], // Motherfucker (variant)
  "madar chood": [5, 5], // Motherfucker (variant)
  "madrchod": [5, 5], // Motherfucker (variant)
  "madarchud": [5, 5], // Motherfucker (variant)
  "mader chod": [5, 5], // Motherfucker (variant)
  "maderchood": [5, 5], // Motherfucker (variant)
  "modarchod": [5, 5], // Motherfucker (variant)
  "mother chod": [5, 5], // Motherfucker (Hinglish)
  "motherchodd": [5, 5], // Motherfucker (Hinglish variant)
  "mother fucker": [3, 5], // English, but used in Hinglish context
  "maachod": [5, 5], // Motherfucker (shortened)
  "maa chod": [5, 5], // Motherfucker (shortened)
  "ma chod": [5, 5], // Motherfucker (shortened)
  "maa chood": [5, 5], // Motherfucker (variant)
  "m c": [5, 5], // Abbreviation for madarchod
  "em cee": [3, 5], // Phonetic abbreviation for MC
  "em see": [3, 5], // Phonetic abbreviation for MC
  "madarjaad": [5, 5], // Motherfucker's kind (variant)
  "madarzaat": [5, 5], // Motherfucker's kind (variant)
  "madarjatt": [5, 5], // Motherfucker's kind (variant)
  "madarchom": [5, 5], // Slang/Typo for madarchod
  "teri maa chod": [3, 5], // Compound: fuck your mother
  "teri ma ki chut": [4, 4], // Compound: your mother's vagina

  // --- Variations of 'Chutiya' ---
  "chutiyaa": [1, 4], // Idiot (variant)
  "chutiye": [1, 4], // Idiot (vocative)
  "chuthiya": [1, 4], // Idiot (variant)
  "chutya": [1, 4], // Idiot (variant)
  "chutiyaap": [3, 4], // Idiocy (variant)
  "chutiyap": [3, 4], // Idiocy (variant)
  "chutyapa": [3, 4], // Idiocy (variant)
  "chutiyapaa": [3, 4], // Idiocy (variant)
  "chutiyapanti": [1, 4], // Idiocy / Foolish behavior
  "chutiyapnatee": [3, 4], // Idiocy (variant)
  "chootiya": [1, 4], // Idiot (variant)
  "chootya": [1, 4], // Idiot (variant)
  "chootiye": [1, 4], // Idiot (vocative variant)
  "chootiyapa": [3, 4], // Idiocy (variant)
  "chut": [4, 4], // Vagina (extremely vulgar)
  "choot": [4, 4], // Vagina (variant)
  "chuchiya": [3, 4], // Mishearing/variation of chutiya
  "chodu ram": [3, 5], // Mocking name (fucker)
  "chutmarike": [4, 4], // Vulgar insult, lit. born of vagina
  "chut ke": [4, 4], // Your vagina's... (implying offspring)
  "maha chutiya": [1, 4], // Great idiot
  "ek number ka chutiya": [1, 4], // Number one idiot
  "asli chutiya": [1, 4], // Real idiot

  // --- Variations of 'Gandu' / 'Gaand' ---
  "gandu lal": [3, 4], // Mocking name (asshole)
  "gandul": [3, 4], // Asshole (variant)
  "ganduu": [3, 4], // Asshole (variant)
  "gand": [3, 4], // Ass (vulgar)
  "gaand": [3, 4], // Ass (vulgar)
  "g@ndu": [3, 5], // Asshole (leetspeak variant)
  "g@nd": [3, 5], // Ass (leetspeak variant)
  "gaandfat": [3, 4], // Scared (lit. ass ripped)
  "gandfattu": [1, 4], // Coward (lit. ass-ripper)
  "gaand mara": [3, 4], // Get your ass f***ed
  "gaand marwa": [3, 4], // Get your ass f***ed
  "gaandmasti": [1, 4], // Fooling around (can be offensive)
  "gandu giri": [3, 4], // Asshole behavior
  "gaandu giri": [3, 4], // Asshole behavior (variant)
  "gandu augmentation": [3, 4], // Nonsense phrase sometimes used humorously/insultingly
  "gandfaad": [3, 4], // Ass-ripping (intense action/insult)
  "gandu bachcha": [3, 4], // Asshole kid
  "teri gaand mein": [3, 4], // In your ass... (common start to insults)

  // --- Variations of 'Lund' / 'Lauda' ---
  "laund": [4, 4], // Penis (variant)
  "lawda": [4, 4], // Penis (variant)
  "lora": [4, 4], // Penis (variant)
  // "laura": [3, 4], // Penis (variant) — false positive: extremely common English female name
  "lulla": [4, 4], // Slang/childish for penis
  "lund choos": [4, 4], // Dick sucker
  "lund fakir": [4, 4], // Useless person (lit. dick beggar)
  "lund hilana": [4, 4], // Masturbate
  "lund ka baal": [3, 4], // Pubic hair (implying worthless)
  "lundtopi": [4, 4], // Glans penis (used insultingly)
  "laude": [3, 4], // Vocative form of lauda
  "laude lag gaye": [3, 4], // Things got f***ed up
  "lauda lasan": [3, 4], // Nonsense rhyming insult
  "mere lund se": [4, 4], // From my dick (expressing indifference/contempt)

  // --- Variations of 'Bhosda' / 'Bhosdike' ---
  "bhosda": [4, 4], // Vagina (extremely vulgar)
  "bhosada": [4, 4], // Vagina (variant)
  "bhosra": [4, 4], // Vagina (variant)
  "bhosrika": [4, 4], // Vagina (variant)
  "bhosarike": [4, 4], // Born of a vagina (insult)
  "bhosdike": [3, 4], // Born of a vagina (extremely vulgar insult)
  "bhoshdike": [4, 4], // Born of a vagina (variant)
  "bhosdi ke": [4, 4], // Born of a vagina (variant)
  "bhosdiwala": [4, 4], // Vagina person (insult)
  "bhosdiwale": [4, 4], // Vagina people (insult)
  "bhosdiwaale": [4, 4], // Vagina people (variant)
  "bhosadchod": [4, 4], // Vagina f***er
  "bhosad": [3, 4], // Shortened form of bhosda
  "teri maa ka bhosda": [4, 4], // Your mother's vagina (extreme insult)

  // --- Variations of 'Randi' ---
  "randvi": [3, 4], // Male equivalent (insulting)
  "randwe": [3, 4], // Male equivalent (insulting)
  "randibaaz": [3, 4], // Womanizer / Brothel-goer
  "randibaazi": [3, 4], // Womanizing / Brothel-going
  "randibaj": [3, 4], // Womanizer (variant)
  "randi ka": [5, 4], // Implying son of a prostitute
  "randi ki aulad": [5, 4], // Offspring of a prostitute
  "randi khana": [3, 4], // Brothel (used insultingly)
  "chakke": [3, 4], // Eunuch/trans (often used with randi)
  "gashti": [5, 4], // Prostitute (Urdu/Punjabi influence)
  "patur": [5, 4], // Prostitute (regional)
  "beswa": [5, 4], // Prostitute

  // --- Variations of 'Harami' / 'Haramzada' ---
  "haraami": [3, 4], // Bastard (variant)
  "harami pilla": [3, 4], // Bastard puppy
  "haramipana": [3, 4], // Act of being a harami
  "haramzade": [3, 4], // Bastards (plural)
  "haramzadeh": [3, 4], // Bastard (variant)
  "haram zaada": [3, 5], // Bastard (spaced variant)
  "haramjada": [3, 4], // Bastard (variant)
  "haramjaade": [3, 4], // Bastards (variant)
  "haramkhor": [3, 4], // One who eats forbidden things (freeloader)
  "haraamkhor": [3, 4], // Freeloader (variant)
  "haram ka": [3, 4], // Illegitimate / forbidden
  "haram ka pilla": [3, 4], // Illegitimate puppy

  // --- Variations of 'Kamina' ---
  "kameena": [3, 4], // Scoundrel (variant)
  "kaminay": [3, 4], // Scoundrels (variant)
  "kaminey": [3, 4], // Scoundrels (variant)
  "kaminapan": [3, 4], // Scoundrel behavior
  "kaminpana": [3, 4], // Scoundrel behavior (variant)
  "kamini": [3, 4], // Female scoundrel

  // --- Variations of 'Kutta' ---
  "kutte kamine": [3, 4], // Compound insult: dogs and scoundrels
  "kutti": [3, 4], // Bitch (derogatory female)
  "kutiya": [3, 4], // Bitch (derogatory female)
  "kutya": [3, 4], // Bitch (variant)
  "kuttiya": [3, 4], // Bitch (variant)
  "kutri": [3, 4], // Bitch (regional variant)
  "kutte ki maut": [5, 5], // Dog's death (miserable death)
  "kutte ka pilla": [3, 4], // Puppy (insult)
  "gali ka kutta": [3, 4], // Street dog (worthless)
  "kutte ki aulad": [3, 4], // Offspring of a dog

  // --- Variations of 'Saala' ---
  "saale": [3, 4], // Brother-in-law (insult variant)
  "saaley": [3, 4], // Brother-in-law (insult variant)
  "sala kutta": [3, 4], // Bastard dog (compound)
  "sala harami": [3, 4], // Bastard (compound)
  "saale chutiye": [3, 4], // Bastard idiot (compound)

  // --- Variations of 'Chod' / 'Chodu' ---
  "chodd": [3, 5], // Fuck (variant)
  "chhod": [3, 4], // Sometimes used for 'leave', but context is key
  "chodumal": [3, 5], // Mocking name (fucker)
  "choduram": [3, 5], // Mocking name (fucker)
  "chhodu": [3, 5], // Fucker (variant)
  "chud": [3, 4], // Act of f***ing / getting f***ed
  "chudai": [3, 4], // The act of f***ing
  "chudwa": [3, 4], // Get f***ed
  "chudakkad": [3, 4], // Someone obsessed with sex
  "chudasi": [3, 4], // Horny (female - vulgar)
  "chudasa": [3, 4], // Horny (male - vulgar)
  "chudwana": [3, 4], // Get someone f***ed
  "chudwaana": [3, 4], // Get someone f***ed (variant)
  "chudwaya": [3, 4], // Got someone f***ed
  "chodne": [3, 4], // To f***

  // --- Variations of 'Bakchod' / 'Bakchodi' ---
  "bakchodd": [3, 5], // Bullshitter (variant)
  "bakchodi": [3, 5], // Bullshitting
  "bakchodiya": [3, 5], // Bullshitter (variant)
  "bakchodhi": [3, 5], // Bullshitting (variant)
  "bakchodi pelna": [3, 5], // To bullshit
  "bakait": [3, 5], // Braggart/Bullshitter
  "bakwaas": [1, 3], // Nonsense (less profane but used insultingly)

  // --- Bodily Functions / Parts (Vulgar) ---
  "jhaant": [3, 4], // Pubic hair
  "jhaat": [3, 4], // Pubic hair
  "jhant": [3, 4], // Pubic hair (variant)
  "jhantu": [3, 4], // Pubic-haired (insult)
  "jhatu": [3, 4], // Pubic-haired (insult)
  "jantoo": [3, 4], // Pubic-haired (variant)
  "jhaat barabar": [3, 4], // Worthless as pubic hair
  "jhaat ka baal": [3, 4], // Pubic hair
  "tatte": [4, 4], // Testicles
  "tatta": [4, 4], // Testicle
  "tatti": [1, 4], // Shit / Feces
  "tati": [1, 4], // Shit (variant)
  // "tat": [4, 5], // Testicles/Shit (shortened) — commented out: collides with English "tit for tat", "tattoo"
  "tatti khana": [3, 5], // Eat shit
  "tatti surat": [3, 5], // Shitty face
  // "goo": [3, 5], // Dung/shit — commented out: collides with English "goo", "gooey", "Google"
  "goobar": [3, 5], // Dung/shit (variant of gobar)
  // "mut": [3, 4], // Piss/Urine — commented out: collides with English "mutt", "mutter"
  "moot": [1, 3], // Piss/Urine (variant)
  "mutra": [1, 2], // Urine (formal)
  "mutna": [1, 3], // To piss
  "peshab": [1, 2], // Urine (less vulgar but can be used insultingly)
  "muth": [4, 4], // Masturbation
  "mutthi": [4, 4], // Fist / Masturbation
  "muthal": [4, 4], // Someone who masturbates (insult)
  "hastmaithun": [4, 4], // Masturbation (formal, rarely used as insult)

  // --- Slurs & Related Insults ---
  "hijra": [4, 4], // Transgender/Eunuch (derogatory)
  "hijda": [4, 4], // Transgender/Eunuch (derogatory variant)
  "hijraa": [5, 4], // Transgender/Eunuch (derogatory variant)
  "hizra": [5, 4], // Transgender/Eunuch (derogatory variant)
  "hijjra": [4, 4], // Transgender/Eunuch (derogatory variant)
  "chakka": [4, 4], // Transgender/Eunuch (derogatory)
  "chhakka": [5, 4], // Transgender/Eunuch (derogatory variant)
  "chaka": [5, 4], // Transgender/Eunuch (derogatory variant)
  "namard": [3, 4], // Impotent / Unmanly
  "naamard": [3, 4], // Impotent (variant)
  "namardangi": [5, 4], // Impotence
  "napunsak": [3, 4], // Impotent (formal)
  "napunsakta": [5, 4], // Impotence
  "khusra": [5, 4], // Eunuch/Transgender (derogatory)
  "khassi": [5, 4], // Castrated (animal, used insultingly for humans)
  "launda": [3, 4], // Boy (can be used derogatorily, implying effeminate or young lover)
  "laundiya": [3, 4], // Girl (can be used derogatorily)
  "laundebaaz": [5, 4], // Sodomite / Boy-lover (offensive)

  // --- General Insults & Offensive Terms ---
  "bhadwa": [1, 4], // Pimp (highly offensive)
  "bhadwe": [1, 4], // Pimp (plural/vocative)
  "bharwa": [1, 4], // Pimp (variant)
  "bhadua": [1, 4], // Pimp (variant)
  "bhadva": [1, 4], // Pimp (variant)
  "dalal": [1, 4], // Broker, pimp (insult)
  "dalla": [1, 4], // Pimp (variant)
  "dalaal": [1, 4], // Pimp (variant)
  "besharam": [1, 4], // Shameless
  "besharm": [1, 4], // Shameless (variant)
  "besaram": [1, 4], // Shameless (variant)
  "besharmi": [1, 4], // Shamelessness
  "behaya": [1, 4], // Shameless
  "behayaa": [1, 4], // Shameless (variant)
  "behayaai": [1, 4], // Shamelessness
  "neech": [1, 4], // Low-life, despicable person
  "nich": [1, 4], // Low-life (variant)
  "neech admi": [1, 4], // Low-life person
  "paaji": [1, 4], // Mean, low (Punjabi influence)
  "paji": [1, 4], // Mean, low (variant)
  "pajji": [1, 4], // Mean, low (variant)
  "badmaash": [1, 4], // Bad character, hooligan
  "badmash": [1, 4], // Hooligan (variant)
  "badmashi": [1, 4], // Hooliganism
  "luchha": [1, 4], // Lewd, debauched person
  "lucha": [1, 4], // Lewd person (variant)
  "luchchai": [1, 4], // Lewdness
  "lafanga": [1, 4], // Loafer, rogue
  "lafange": [1, 4], // Loafers, rogues (plural)
  "lafangey": [1, 4], // Loafers, rogues (variant)
  "lafantar": [1, 4], // Loafer (variant)
  "awaara": [1, 4], // Vagrant, loafer
  "gadha": [1, 4], // Donkey (insult for stupid)
  "gadhe": [1, 4], // Donkeys (plural insult)
  "gadhi": [1, 4], // Female donkey (insult)
  "ullu": [1, 4], // Owl (stupid)
  "ullu ka pattha": [1, 4], // Son of an owl (insult for stupid)
  "ullu ki patthi": [1, 4], // Daughter of an owl
  "bandar": [1, 4], // Monkey
  "suar": [1, 4], // Pig (insult)
  "suwar": [1, 4], // Pig (variant)
  "soar": [1, 4], // Pig (variant)
  "suar ki aulad": [1, 4], // Offspring of a pig
  "janwar": [5, 5], // Animal (dehumanizing)
  "shaitan": [1, 4], // Devil
  "rakshas": [1, 4], // Demon
  "chichora": [1, 4], // Petty, shallow
  "charsi": [1, 4], // Drug addict (hashish)
  "ganjedi": [1, 4], // Drug addict (marijuana)
  "bewakoof": [1, 4], // Idiot (common, less profane)
  "bevakoof": [1, 4], // Idiot (variant)
  "bewaqoof": [1, 4], // Idiot (variant)
  "murkh": [1, 4], // Fool (formal)
  "paagal": [1, 3], // Mad, crazy
  "pagal": [1, 4], // Mad, crazy (variant)
  "pagla": [1, 4], // Mad person (male)
  "pagli": [1, 4], // Mad person (female)
  "dekh lunga": [5, 5], // I'll see you / I'll deal with you (threat)
  "aukat": [3, 4], // Status / standing (used in challenges: "teri aukat kya hai?")
  "aukaat": [1, 4], // Status (variant spelling)
  "chapri": [3, 4], // Low-class, tacky (modern slang insult)
  "nibba": [1, 3], // Immature online person (modern slang)
  "nibbi": [1, 3], // Immature online person, female (modern slang)
  "dhakkan": [1, 4], // Lid (stupid)
  "paltu": [1, 4], // Turncoat
  "chamcha": [1, 4], // Sycophant
  "bhikari": [1, 4], // Beggar
  "kanjoos": [1, 4], // Miser
  "makhi choos": [1, 4], // Extreme miser (lit. sucks flies)
  "phattu": [1, 4], // Scaredy-cat
  "darpok": [1, 4], // Coward
  "kayar": [1, 4], // Coward
  "ghatiya": [1, 4], // Low quality, despicable
  "khota": [1, 4], // Donkey / Fake (coin)
  "haram ka khana": [1, 4], // Eating illegitimate earnings
  "muh kala karna": [1, 4], // Blacken face (bring shame)
  "izzat lutna": [5, 5], // Rob honor (rape/molestation)
  "phitte muh": [1, 4], // Shame on you (Punjabi)
  "dur fitte muh": [1, 4], // Stronger version of above
  "mar ja": [5, 5], // Go die
  "khudkushi kar le": [5, 5], // Commit suicide (extremely harsh)
  "joota maru": [1, 4], // I'll hit you with a shoe
  "joota": [1, 4], // Shoe (implying worthlessness)
  "nalayak": [1, 4], // Worthless, undeserving
  "nikamma": [1, 4], // Useless
  "kamchor": [1, 4], // Shirker
  "gawar": [1, 4], // Rustic, uncivilized
  "jungli": [1, 4], // Wild, uncivilized

  // --- Compound Insults & Phrases ---
  "madarchod gandu": [5, 5], // Motherfucker asshole
  "gandu madarchod": [5, 5], // Asshole motherfucker
  "behenchod chutiya": [1, 4], // Sister fucker idiot
  "chutiya behenchod": [1, 4], // Idiot sister fucker
  "saala kutta kamina": [3, 4], // Bastard dog scoundrel
  "harami kutta": [3, 4], // Bastard dog
  "kaminey suar": [1, 4], // Scoundrel pig
  "randi ki beti": [5, 4], // Daughter of a prostitute
  "bhadwe ki aulad": [1, 4], // Offspring of a pimp
  "bhosdi ke kutte": [4, 4], // Dog born of a vagina
  "lund fakir chutiya": [1, 4], // Dick beggar idiot
  "chutiya sala": [3, 4], // Idiot bastard
  "gandu sala": [3, 4], // Asshole bastard
  "abe saale": [3, 4], // Hey bastard
  "oye harami": [3, 4], // Hey bastard
  "chal be chutiye": [1, 4], // Get moving, idiot
  "nikal laude": [4, 4], // Get lost, dick
  "teri maa ka yaar": [1, 4], // Your mother's lover
  "teri behen ka yaar": [1, 4], // Your sister's lover
  "baap ka maal": [1, 4], // Father's property (objectifying women)
  "gandi naali ke keede": [1, 4], // Worm from a dirty drain
  "tere baap ka naukar": [1, 4], // Your father's servant? (challenging)
  "khandan pe mat ja": [1, 4], // Don't involve my family
  "behen ke lode": [4, 4], // Sister's dick (highly offensive)
  "teri maa ki": [4, 4], // Your mother's... (start of a common insult, often implies '...vagina')

  // --- More Obscure/Regional/Figurative ---
  "chutiya sala gandu": [3, 4], // Triple combo: idiot bastard asshole
  "bhen ke takke": [3, 4], // Sister's ... (similar to lode, very offensive)
  "khatey": [4, 4], // Testicles (regional slang)
  "pataka": [1, 2], // Firecracker (sometimes used for attractive woman, can be objectifying/vulgar)
  "maal": [1, 2], // Goods/Stuff (objectifying term for women)
  // "item" removed: collides with the everyday English noun "item" (e.g. "handmade item"),
  // causing false positives. Genuinely objectifying uses remain covered by multi-word Tamil
  // entries (e.g. "item koothi") and the Devanagari "आइटम".
  "topibaaz": [3, 4], // Deceiver, trickster (lit. hat-wearer)
  "dhongi": [3, 4], // Hypocrite, imposter
  "pakhandi": [3, 4], // Hypocrite
  "ghoos khor": [3, 4], // Bribe taker
  "char sau bees": [3, 4], // 420 (IPC section for cheating, used for cheater)
  "dedh shana": [3, 4], // Over-smart (lit. one and a half clever)
  "bitodi": [3, 4], // Woman (derogatory, regional)
  "chidimar": [3, 4], // Bird catcher (implying low status/predatory)
  "natak karna": [3, 5], // To act/pretend (used like 'stop bullshitting')
  "raand": [3, 4], // Widow (can be used extremely derogatorily, similar to Randi in some contexts)


  // ========================================
  // === Expanded List (Devanagari Script) ===
  // ========================================
  "बहनचोद": [3, 5], // Sister fucker
  "भैनचोद": [3, 5], // Sister fucker (variant)
  "भेनचोड": [3, 5], // Sister fucker (variant)
  "बहेनचोद": [3, 5], // Sister fucker (variant)
  "बी सी": [3, 4], // BC (abbreviation for behenchod)
  "बकलोल": [3, 4], // Related insult sometimes abbreviated as BKL
  "मादर चोद": [5, 5], // Motherfucker (spaced)
  "मादरचूड": [5, 5], // Motherfucker (variant)
  "मदरचोद": [5, 5], // Motherfucker (variant)
  "माचोद": [5, 5], // Motherfucker (shortened)
  "मादरजात": [5, 5], // Motherfucker's kind
  "तेरी माँ चोद": [3, 5], // Fuck your mother
  "तेरी माँ की चूत": [4, 4], // Your mother's vagina
  "एम् सी": [5, 5], // MC (phonetic abbreviation for madarchod)
  "चूतिये": [1, 4], // Idiot (vocative)
  "चूतियापा": [3, 4], // Idiocy
  "चूतियापंती": [1, 4], // Foolish behavior
  "चूत": [4, 4], // Vagina (extremely vulgar)
  "चूचीया": [1, 4], // Idiot (mishearing variant)
  "चूतड़": [1, 4], // Buttocks, sometimes used like idiot
  "चूतर": [3, 4], // Buttocks
  "चूत मारीके": [4, 4], // Born of a vagina (insult)
  "महा चूतिया": [1, 4], // Great idiot
  "असली चूतिया": [1, 4], // Real idiot
  "गांड": [3, 4], // Ass (vulgar)
  "गांद": [3, 4], // Ass (variant)
  "गंड": [3, 4], // Ass (variant)
  "गांडफत": [3, 4], // Scared (lit. ass ripped)
  "गांडू गिरी": [3, 4], // Asshole behavior
  "गांड मरा": [3, 5], // Get your ass fucked
  "गांड मरवा": [3, 5], // Get your ass fucked
  "तेरी गांड में": [3, 4], // In your ass
  "लोड़ा": [4, 4], // Penis (variant)
  "लवड़ा": [4, 4], // Penis (variant)
  "लंड चूस": [4, 4], // Dick sucker
  "लंड का बाल": [3, 4], // Pubic hair (implying worthless)
  "लौड़े": [4, 4], // Dicks (vocative)
  "मेरे लंड से": [4, 4], // From my dick (expressing contempt)
  "भोसड़ा": [4, 4], // Vagina (extremely vulgar)
  "भोसड़ीके": [4, 4], // Born of a vagina (extreme insult)
  "भोसडीके": [4, 4], // Born of a vagina (variant)
  "भोस्डिके": [4, 4], // Born of a vagina (variant)
  "भोसड़ी वाला": [4, 4], // Vagina person (insult)
  "भोसड़ी वाले": [4, 4], // Vagina people (insult)
  "तेरी माँ का भोसड़ा": [4, 4], // Your mother's vagina (extreme insult)
  "रंडीबाज़": [3, 4], // Womanizer
  "रंडी की औलाद": [5, 4], // Offspring of a prostitute
  "रंडीखाना": [3, 4], // Brothel
  "गश्ती": [5, 4], // Prostitute (Urdu/Punjabi)
  "बेसवा": [5, 4], // Prostitute
  "हरामीपना": [3, 4], // Act of being a bastard
  "हरामज़ादे": [3, 4], // Bastards (plural)
  "हरामखोर": [3, 4], // Freeloader (eats forbidden things)
  "हराम का": [3, 4], // Illegitimate / Forbidden
  "कमीने": [3, 4], // Scoundrels (plural)
  "कमीनी": [3, 4], // Female scoundrel
  "कमीनापन": [3, 4], // Scoundrel behavior
  "कुत्ती": [3, 4], // Bitch
  "कुतिया": [3, 4], // Bitch (variant)
  "कुत्ते की मौत": [5, 5], // Dog's death (miserable death)
  "कुत्ते का पिल्ला": [3, 4], // Puppy (insult)
  "गली का कुत्ता": [3, 4], // Street dog (worthless)
  "कुत्ते की औलाद": [3, 4], // Offspring of a dog
  "साले": [3, 4], // Bastards (plural insult)
  "साले कुत्ते": [3, 4], // Bastard dogs (compound)
  "छोड़": [3, 5], // Leave / Fuck (context-dependent)
  "चोदू": [1, 4], // Fucker / Idiot
  "चुदक्कड़": [3, 4], // Sex-obsessed person
  "चुदाई": [3, 5], // The act of fucking
  "चुदवाना": [3, 5], // Get someone fucked
  "चोदने": [3, 5], // To fuck
  "बकचोदी": [3, 5], // Bullshitting
  "बकैत": [3, 5], // Braggart / Bullshitter
  "बकवास": [1, 3], // Nonsense
  "झांट": [3, 4], // Pubic hair
  "झाँट": [3, 4], // Pubic hair (variant)
  "झाटू": [3, 4], // Pubic-haired (insult)
  "झाँटू": [3, 4], // Pubic-haired (variant)
  "टट्टे": [4, 4], // Testicles
  "टट्टी": [1, 4], // Shit / Feces
  "गू": [1, 4], // Shit / Dung
  "गोबर": [1, 4], // Cow dung / Shit
  "मूत": [1, 3], // Piss / Urine
  "मूत्र": [3, 4], // Urine (formal)
  "पेशाब": [1, 2], // Urine
  "मूठ": [4, 4], // Masturbation
  "मुठ्ठी": [4, 4], // Fist / Masturbation
  "मुठल": [4, 4], // Masturbator (insult)
  "हस्तमैथुन": [4, 4], // Masturbation (formal)
  "हिजड़ा": [3, 4], // Transgender/Eunuch (derogatory)
  "छक्का": [3, 4], // Transgender/Eunuch (derogatory)
  "नामर्द": [3, 4], // Impotent / Unmanly
  "नपुंसक": [3, 4], // Impotent (formal)
  "खुसरा": [3, 4], // Eunuch/Transgender (derogatory)
  "खस्सी": [3, 4], // Castrated (derogatory)
  "लौंडा": [3, 4], // Boy (derogatory, implying effeminate)
  "लौंडिया": [3, 4], // Girl (derogatory)
  "लौंडेबाज़": [3, 4], // Sodomite / Boy-lover (offensive)
  "भरवा": [3, 4], // Pimp (variant)
  "दलाल": [3, 4], // Pimp / Broker (insult)
  "दल्ला": [3, 4], // Pimp (variant)
  "बेशर्म": [3, 4], // Shameless
  "बेशर्मी": [3, 4], // Shamelessness
  "बेहया": [3, 4], // Shameless
  "नीच": [3, 4], // Low-life, despicable
  "पाजी": [3, 4], // Mean, low (Punjabi)
  "बदमाश": [3, 4], // Hooligan
  "बदमाशी": [3, 4], // Hooliganism
  "लुच्चा": [3, 4], // Lewd, debauched person
  "लफंगा": [3, 4], // Loafer, rogue
  "आवारा": [3, 4], // Vagrant, loafer
  "गधा": [1, 4], // Donkey (stupid)
  "गधी": [1, 4], // Female donkey (stupid)
  "उल्लू": [1, 4], // Owl (stupid)
  "उल्लू का पट्ठा": [1, 4], // Son of an owl (stupid)
  "बंदर": [1, 3], // Monkey
  "सूअर": [2, 4], // Pig (insult)
  "सुअर": [3, 4], // Pig (variant)
  "सूअर की औलाद": [3, 4], // Offspring of a pig
  "जानवर": [5, 5], // Animal (dehumanizing)
  "शैतान": [1, 3], // Devil
  "राक्षस": [1, 3], // Demon
  "चिचोरा": [3, 4], // Petty, shallow
  "चर्सी": [3, 4], // Drug addict (hashish)
  "गंजेड़ी": [3, 4], // Drug addict (marijuana)
  "बेवकूफ": [1, 4], // Idiot
  "मूर्ख": [1, 4], // Fool (formal)
  "पागल": [1, 3], // Mad, crazy
  "पगला": [1, 3], // Mad person (male)
  "पगली": [1, 3], // Mad person (female)
  "देख लूँगा": [5, 5], // I'll deal with you (threat)
  "औकात": [3, 4], // Status (used in challenges)
  "ढक्कन": [1, 4], // Lid (stupid)
  "पलटू": [3, 4], // Turncoat
  "चमचा": [3, 4], // Sycophant
  "भिखारी": [3, 4], // Beggar
  "कंजूस": [3, 4], // Miser
  "मक्खीचूस": [3, 4], // Extreme miser (lit. fly-sucker)
  "फट्टू": [3, 4], // Scaredy-cat
  "डरपोक": [1, 4], // Coward
  "कायर": [1, 4], // Coward
  "घटिया": [3, 4], // Low quality, despicable
  "खोटा": [3, 4], // Fake / Donkey
  "नालायक": [3, 4], // Worthless, undeserving
  "निकम्मा": [3, 4], // Useless
  "कामचोर": [3, 4], // Shirker
  "गंवार": [3, 4], // Rustic, uncivilized
  "जंगली": [3, 4], // Wild, uncivilized
  "फिट्टे मुह": [3, 4], // Shame on you (Punjabi)
  "मर जा": [5, 5], // Go die
  "जूता मारूं": [3, 4], // I'll hit you with a shoe
  "मादरचोद गांडू": [5, 5], // Motherfucker asshole
  "बहनचोद चूतिया": [1, 4], // Sister fucker idiot
  "साला कुत्ता कमीना": [3, 4], // Bastard dog scoundrel
  "हरामी कुत्ता": [3, 4], // Bastard dog
  "कमीने सूअर": [3, 4], // Scoundrel pig
  "रंडी की बेटी": [5, 4], // Daughter of a prostitute
  "भड़वे की औलाद": [3, 4], // Offspring of a pimp
  "भोसड़ी के कुत्ते": [4, 4], // Dog born of a vagina
  "चूतिया साला": [3, 4], // Idiot bastard
  "अबे साले": [3, 4], // Hey bastard
  "निकल लौड़े": [4, 4], // Get lost, dick
  "तेरी माँ का यार": [3, 4], // Your mother's lover
  "तेरी बहन का यार": [3, 4], // Your sister's lover
  "गंदी नाली के कीड़े": [3, 4], // Worm from a dirty drain
  "तेरे बाप का नौकर": [1, 4], // Your father's servant? (challenging)
  "बहन के टके": [3, 4], // Bhen ke takke (sister's... very offensive)
  "खाते": [4, 4], // Khatey (Testicles - regional)
  "पटाका": [3, 4], // Pataka (firecracker / attractive woman - objectifying)
  "माल": [3, 4], // Maal (goods - objectifying term for women)
  "आइटम": [3, 4], // Item (objectifying term for women)
  "टोपीबाज़": [3, 4], // Topibaaz (deceiver, trickster)
  "ढोंगी": [3, 4], // Dhongi (hypocrite, imposter)
  "पाखंडी": [3, 4], // Pakhandi (hypocrite)
  "घूसखोर": [3, 4], // Ghooskhor (bribe taker)
  "चार सौ बीस": [3, 4], // Char sau bees (420 - cheater)
  "डेढ़ शाणा": [3, 4], // Dedh shana (over-smart)
  "रांड": [3, 4], // Raand (Widow - derogatory use)
  "तेरी माँ की": [3, 4], // Teri maa ki... (start of insult)
  "बहन के लोड़े": [4, 4], // Behen ke lode (Sister's dick - offensive)

  // Additional Hindi profanity
  "bhosdika": [3, 4], // Variant of bhosdike
  "bsdk": [3, 4], // Abbreviation: bhosdike
  "chinal": [3, 4], // Promiscuous woman
  "chinaal": [3, 4], // Promiscuous woman (variant)
  "chut ka dhakkan": [4, 4], // Vagina's lid (useless)
  "fuddi": [4, 4], // Pussy (Punjabi-Hindi)
  "gand fad dunga": [3, 4], // I'll rip your ass
  "gaand mein danda": [3, 4], // Stick in your ass
  "jhand": [3, 4], // Screwed
  "jhandu": [3, 4], // Pubic-haired (insult)
  "lodu": [4, 4], // Dick (insult)
  "lodha": [3, 4], // Variant of lauda
  "mc bc": [3, 4], // Compound abbreviation
  // "rand": [3, 4], // Variant of randi — false positive: currency (South African Rand), RAND Corp, programming term
  "randi rona": [5, 4], // Whore crying (whining)
  "tharki": [3, 4], // Pervert
  "tharak": [3, 4], // Lust (derogatory)
  "bhad mein ja": [3, 4], // Go to hell
  "chutad": [3, 4], // Buttocks (vulgar)
  "ganwar sala": [3, 4], // Uncivilized bastard
  "lulli": [4, 4], // Small penis (childish/insulting)
  "teri maa ki chut": [4, 4], // Your mother's vagina
  "tere muh mein": [3, 4], // In your mouth (vulgar implied)

  // Devanagari additions
  "बीएसडीके": [3, 4], // BSDK (abbreviation for bhosdike)
  "छिनाल": [3, 4], // Chinal (promiscuous woman)
  "फुद्दी": [4, 4], // Fuddi (pussy - Punjabi-Hindi)
  "झंडू": [3, 4], // Jhandu (pubic-haired insult)
  "लोडू": [4, 4], // Lodu (dick insult)
  "एमसी बीसी": [3, 4], // MC BC (compound abbreviation)
  "ठरकी": [3, 4], // Tharki (pervert)
  "लुल्ली": [4, 4], // Lulli (small penis)

  // More Urdu crossover profanity
  "haramzaadi": [3, 4], // Female bastard
  "kameeni": [3, 4], // Female scoundrel
  "kameenipana": [3, 4], // Scoundrel behavior (female)
  "sali randi": [5, 4], // Damn prostitute
  "sali kutti": [3, 4], // Damn bitch
  "haram ki paidaish": [3, 4], // Illegitimate birth
  "lanati": [3, 4], // Cursed one
  "laanati": [3, 4], // Cursed one (variant)
  "zaalim": [3, 4], // Cruel/oppressor
  "haiwan": [5, 5], // Beast (dehumanizing)
  "haiwaan": [3, 4], // Beast (variant)
  "khotey da puttar": [3, 4], // Son of a donkey (Punjabi-Urdu)
  "kanjar": [3, 4], // Low caste insult (very offensive)
  "kanjari": [3, 4], // Female variant of kanjar
  "kanjarkhana": [3, 4], // Brothel (extremely vulgar)
  "sulli": [3, 4], // Derogatory slur
  "mulli": [3, 4], // Derogatory slur
  "katua": [3, 4], // Derogatory slur (circumcised)
  "katwe": [3, 4], // Plural variant of katua

  // Punjabi-Hindi crossover
  "penchod": [3, 5], // Sister fucker (Punjabi)
  "painchod": [3, 5], // Sister fucker (Punjabi variant)
  "benchod": [3, 4], // Sister fucker (Punjabi variant)
  "bhen di phuddi": [4, 4], // Sister's pussy
  "teri pen di": [3, 4], // Your sister's... (Punjabi)
  "phuddu": [1, 4], // Pussy/coward (Punjabi)
  "phuddi chod": [4, 5], // Pussy fucker
  "gandasi": [5, 5], // Axe (threatening)
  "kutte de bachche": [3, 4], // Puppy (Punjabi insult)
  "tere pyo da": [1, 4], // Your father's (Punjabi)

  // Bhojpuri crossover
  "bhosdhari": [3, 4], // Variant of bhosdi
  "chodua": [3, 5], // Fucker (Bhojpuri)
  "chodni": [3, 5], // Fuckable (Bhojpuri vulgar)
  "harua": [3, 4], // Bastard (Bhojpuri)
  "maichod": [5, 5], // Motherfucker (Bhojpuri)
  // "bur": [4, 4], // Vagina (Bhojpuri) — commented out: collides with English "burger", "burn", "burp"
  "burwa": [4, 4], // Vagina (Bhojpuri variant)

  // More internet abbreviations
  "bsdk gandu": [2, 3], // Compound abbreviation insult
  "mkb": [2, 3], // Abbreviation: maa ki bhosda
  "mkc": [2, 3], // Abbreviation: maa ki chut
  "tkc": [2, 3], // Abbreviation: teri ki chut
  "gnd": [2, 3], // Abbreviation: gaand
  "bhn k lode": [4, 3], // Abbreviated compound: sister's dicks
  "tmkb": [2, 3], // Abbreviation: teri maa ka bhosda
  "tmkc": [2, 3], // Abbreviation: teri maa ki chut
  "lkb": [2, 3], // Abbreviation: lund ka baal

  // More transliterations and variants
  "choothiya": [1, 5], // Idiot (variant)
  "gandmasti": [1, 5], // Fooling around
  "gaandphad": [3, 5], // Ass-ripping
  "laudu": [4, 5], // Dick (variant of lodu)
  "laudey": [4, 5], // Dicks (variant)
  "bhosadpappu": [4, 5], // Vagina person (insult)
  "raandwa": [5, 5], // Male prostitute
  "randikhor": [5, 5], // Prostitute-eater (womanizer)
  "tharkey": [3, 5], // Pervert (variant)
  "jhaat ke baal": [3, 5], // Pubic hair (worthless)
  "mutthi maar": [4, 5], // Masturbate (fist hit)
  "chutiyagiri": [1, 5], // Acting like an idiot
  "gandugiri": [3, 5], // Acting like an asshole
  "teri aukat mein": [3, 5], // Within your status (challenging)
  "muh mein le": [3, 5], // Take it in your mouth
  "lund choosna": [4, 5], // Dick sucking
  "gaand chatna": [3, 5], // Ass licking
  "chut chatna": [4, 5], // Pussy licking
  "lund pe chadh": [4, 5], // Climb on the dick

  // More Devanagari additions
  "हरामज़ादी": [3, 4], // Haramzaadi (female bastard)
  "लानती": [3, 4], // Laanati (cursed one)
  "हैवान": [5, 5], // Haiwan (beast - dehumanizing)
  "कंजर": [3, 4], // Kanjar (low caste insult)
  "कंजरी": [3, 4], // Kanjari (female variant)
  "कंजरखाना": [3, 4], // Kanjarkhana (brothel)
  "पेनचोद": [3, 5], // Penchod (sister fucker - Punjabi)
  "फुद्दू": [1, 4], // Phuddu (pussy/coward)
  "भोसधरी": [3, 4], // Bhosdhari (variant of bhosdi)
  "चोदुआ": [3, 5], // Chodua (fucker - Bhojpuri)
  "मईचोद": [5, 5], // Maichod (motherfucker - Bhojpuri)
  "बुर": [4, 4], // Bur (vagina - Bhojpuri)
  "टीएमकेबी": [3, 4], // TMKB (teri maa ka bhosda)
  "टीएमकेसी": [3, 4], // TMKC (teri maa ki chut)
  "एमकेबी": [3, 4], // MKB (maa ki bhosda)
  "रांडवा": [5, 4], // Raandwa (male prostitute)
  "चूतियागिरी": [1, 4], // Chutiyagiri (acting like an idiot)
  "गांडूगिरी": [3, 4], // Gandugiri (acting like an asshole)
  "मुँह में ले": [3, 4], // Muh mein le (take it in your mouth)
  "लंड चूसना": [4, 4], // Lund choosna (dick sucking)
  "गांड चाटना": [3, 4], // Gaand chatna (ass licking)
  "चूत चाटना": [4, 4], // Chut chatna (pussy licking)

  // ========================================
  // === Marathi Crossover Profanity ===
  // ========================================
  "zavnya": [3, 5], // Fucker (Marathi)
  "madvya": [1, 4], // Idiot/fucker (Marathi)
  "bhadvya": [3, 4], // Son of a pimp (Marathi)
  "ghanta": [4, 4], // Dick/nothing (Marathi slang)
  "aaichi gand": [3, 4], // Mother's ass (Marathi)
  "aaicha gho": [3, 4], // Mother's... (Marathi insult)
  "aaila": [3, 4], // Mother (Marathi expletive)
  "aai zavadya": [5, 5], // Motherfucker (Marathi)
  "aaicha zhavla": [3, 5], // Fucked your mother (Marathi)
  "aaichya gavat": [3, 4], // In your mother's village (Marathi insult)
  "aaichi chut": [4, 4], // Mother's vagina (Marathi)
  "chutnya": [1, 4], // Idiot (Marathi)
  "randichya": [5, 4], // Son of a prostitute (Marathi)
  "bokya": [3, 4], // Nonsense talker (Marathi)
  "zhavnya": [3, 5], // Fucker (Marathi variant)
  "zhavadya": [3, 5], // Fucker (Marathi variant)
  "tuzha aaicha": [3, 4], // Your mother's (Marathi insult)
  "tuzi aai": [3, 4], // Your mother (Marathi start of insult)
  "halkat": [3, 4], // Wretched (Marathi)
  "gandya": [3, 4], // Asshole (Marathi)
  "lundya": [4, 4], // Dick (Marathi)
  "chhinaal": [3, 4], // Promiscuous woman (Marathi)
  "fataka": [5, 5], // Slap (Marathi threatening)
  "lavsya": [4, 4], // Dickhead (Marathi)
  "zhav": [3, 5], // Fuck (Marathi)
  "chiknya": [3, 4], // Pretty boy (Marathi derogatory)
  "tuzha bapacha": [1, 4], // Your father's (Marathi insult)
  "gavthi": [3, 4], // Rustic/uncouth (Marathi insult)
  "popat": [1, 3], // Parrot/fooled (Marathi slang)
  "supari": [3, 4], // Betel nut/contract kill (Marathi slang)

  // Marathi Devanagari
  "झवण्या": [3, 5], // Zavnya (fucker)
  "मद्व्या": [1, 4], // Madvya (idiot)
  "भाड्व्या": [3, 4], // Bhadvya (pimp's son)
  "घंटा": [4, 4], // Ghanta (dick/nothing)
  "आईची गांड": [3, 4], // Aaichi gand (mother's ass)
  "आईचा घो": [3, 4], // Aaicha gho (mother's...)
  "आईला": [3, 4], // Aaila (mother - expletive)
  "आई झवाड्या": [5, 5], // Aai zavadya (motherfucker)
  "रांडीच्या": [5, 4], // Randichya (son of prostitute)
  "हलकट": [3, 4], // Halkat (wretched)
  "गांड्या": [3, 4], // Gandya (asshole)
  "लवड्या": [4, 4], // Lavdya (dickhead)
  "झव": [3, 5], // Zhav (fuck)

  // ========================================
  // === Gujarati Crossover Profanity ===
  // ========================================
  "gando": [3, 4], // Mad/crazy (Gujarati)
  "gandi": [3, 4], // Mad (female, Gujarati)
  "bhosdo": [4, 4], // Vagina-born (Gujarati)
  "chodyu": [3, 5], // Fucked (Gujarati)
  "ghelu": [3, 4], // Mad/crazy (Gujarati)
  "ghelchhodyu": [3, 5], // Mad fucker (Gujarati)
  "lodo": [4, 4], // Dick (Gujarati)
  "randva": [5, 4], // Male prostitute (Gujarati)
  "fattu": [1, 4], // Coward (Gujarati)
  "bhungro": [3, 4], // Asshole (Gujarati)
  "chutyo": [1, 4], // Idiot (Gujarati)
  "tari maa ne": [3, 4], // Your mother's (Gujarati insult)
  "tari ben ne": [3, 4], // Your sister's (Gujarati insult)
  "sala gando": [3, 4], // Crazy bastard (Gujarati)
  "gandhyu": [3, 4], // Smelly (Gujarati insult)
  "bhadvo": [3, 4], // Pimp (Gujarati)
  "randno": [5, 4], // Prostitute's (Gujarati)
  "lukhhu": [3, 4], // Lewd (Gujarati)
  "bakho": [1, 4], // Idiot (Gujarati)
  "maa no bhosdo": [4, 4], // Mother's vagina (Gujarati)
  "gand maravi": [3, 5], // Get your ass fucked (Gujarati)

  // ========================================
  // === Bhojpuri/Bihari Expanded ===
  // ========================================
  "bur chod": [4, 5], // Vagina fucker (Bhojpuri)
  "burchod": [4, 5], // Vagina fucker (Bhojpuri compound)
  "bhosarwa": [4, 4], // Vagina-born (Bhojpuri)
  "chodwa": [3, 5], // Fucker (Bhojpuri variant)
  "randi ke baccha": [5, 4], // Son of a prostitute (Bhojpuri)
  "harua sala": [3, 4], // Bastard (Bhojpuri compound)
  "maichodi": [5, 5], // Motherfucker (Bhojpuri variant)
  "chodar": [3, 5], // Fucker (Bhojpuri)
  "bur ke baal": [3, 4], // Pubic hair (Bhojpuri vulgar)
  "gand faad": [3, 4], // Ass ripper (Bhojpuri)
  "lund hilao": [4, 4], // Jerk off (Bhojpuri)
  "lota": [4, 4], // Vessel/penis (Bhojpuri slang)
  "bur mein": [4, 4], // In the vagina (Bhojpuri vulgar)
  "tatte choos": [4, 4], // Suck testicles (Bhojpuri)
  "aaba ka lund": [1, 4], // Father's dick (Bhojpuri)
  "maai chod": [5, 5], // Motherfucker (Bhojpuri variant)
  "gaand ke keede": [3, 4], // Worms from ass (Bhojpuri insult)
  "bhokwa": [3, 4], // Nonsense talker (Bhojpuri)
  "chuttar": [3, 4], // Buttocks (Bhojpuri vulgar)

  // ========================================
  // === Rajasthani Dialect Profanity ===
  // ========================================
  "bhand": [1, 3], // Drunk/jester (Rajasthani insult)
  "bhanda": [1, 3], // Drunkard (Rajasthani)
  "gotiya": [4, 4], // Testicles (Rajasthani)
  "randka": [5, 4], // Prostitute's (Rajasthani)
  "chod diyo": [3, 5], // Fucked (Rajasthani past tense)
  "lund ka pakoda": [4, 4], // Dick fritter (Rajasthani vulgar insult)
  "ghani gandi": [3, 4], // Very dirty (Rajasthani)
  "bawli gaand": [3, 4], // Crazy ass (Rajasthani)
  "charba": [1, 4], // Fat/greasy (Rajasthani insult)
  "dhila": [3, 4], // Loose/useless (Rajasthani)
  "khasam": [3, 4], // Husband/pimp (Rajasthani derogatory)
  "lugaai": [3, 4], // Woman (Rajasthani derogatory)
  "chod de re": [3, 5], // Fuck it (Rajasthani)
  "gaand ghis": [3, 4], // Ass grinder (Rajasthani sycophant)
  "jhaal": [3, 4], // Irritating/spicy (Rajasthani insult)

  // ========================================
  // === Haryanvi Dialect Profanity ===
  // ========================================
  "tau ke tatte": [4, 4], // Uncle's testicles (Haryanvi)
  "teri bhen ka bhosda": [4, 4], // Your sister's vagina (Haryanvi)
  "ghooghat mein lund": [4, 4], // Dick under veil (Haryanvi vulgar)
  "chod de be": [3, 5], // Fuck it (Haryanvi)
  "tere baap ki gaand": [1, 4], // Your father's ass (Haryanvi)
  "teri taai ka": [3, 4], // Your aunt's (Haryanvi insult)
  "gaand tod dunga": [5, 5], // I'll break your ass (Haryanvi threat)
  "bhadak": [5, 5], // Anger/threatening (Haryanvi)
  "chod ke rakh dunga": [3, 5], // I'll fuck you up (Haryanvi)
  "ghochhi": [4, 4], // Vagina (Haryanvi vulgar)
  "lund pe dhokla": [4, 4], // Dick cake (Haryanvi absurd insult)
  "hadd harami": [3, 4], // Ultimate bastard (Haryanvi)
  "chhinar": [3, 4], // Promiscuous woman (Haryanvi)
  "bhains ki aankh": [3, 4], // Buffalo's eye (Haryanvi expletive)
  "tatti kha le": [3, 5], // Eat shit (Haryanvi)
  "kutte ki jaat": [3, 4], // Dog's caste (Haryanvi insult)
  "lathait": [3, 4], // Violent thug (Haryanvi)
  "bawla": [3, 4], // Crazy (Haryanvi)
  "ghaasguss": [3, 4], // Worthless (Haryanvi)

  // ========================================
  // === Remaining Devanagari for Romanized ===
  // ========================================
  "बखोड़": [3, 5], // Bakchod variant
  "बकलौड़ा": [3, 5], // Baklauda (bullshitter)
  "चिनाल": [3, 5], // Chinal (promiscuous)
  "चूत का ढक्कन": [4, 5], // Chut ka dhakkan (vagina's lid)
  "गांड फाड़ दूंगा": [3, 5], // Gand fad dunga (I'll rip your ass)
  "गांड में डंडा": [3, 5], // Gaand mein danda (stick in your ass)
  "झंड": [3, 5], // Jhand (screwed)
  "रंडीरोना": [3, 5], // Randi rona (whining)
  "भड़ में जा": [3, 5], // Bhad mein ja (go to hell)
  "गंवार साला": [3, 5], // Ganwar sala (uncivilized bastard)
  "तेरे मुँह में": [3, 5], // Tere muh mein (in your mouth)
  "सुल्ली": [3, 5], // Sulli (derogatory slur)
  "मुल्ली": [3, 5], // Mulli (derogatory slur)
  "कटुआ": [3, 5], // Katua (derogatory slur)
  "जालिम": [3, 5], // Zaalim (cruel)
  "खोटे दा पुत्तर": [3, 5], // Khotey da puttar (son of donkey)
  "पेनचोड": [3, 5], // Penchod (Punjabi sister fucker)
  "तेरे प्यो दा": [1, 5], // Tere pyo da (your father's)
  "बुरवा": [4, 5], // Burwa (vagina - Bhojpuri)
  "चोदनी": [3, 5], // Chodni (fuckable - Bhojpuri)
  "हरुआ": [3, 5], // Harua (bastard - Bhojpuri)
  "गांडू बच्चा": [3, 5], // Gandu bachcha (asshole kid)
  "लंड हिलाना": [4, 5], // Lund hilana (masturbate)
  "तेरी औकात में": [3, 5], // Teri aukat mein (within your status)
  "लंड पे चढ़": [4, 5], // Lund pe chadh (climb on dick)
  "रंडीखोर": [3, 5], // Randikhor (womanizer)
  "भोसडपपू": [4, 5], // Bhosadpappu (vagina person)

  // ========================================
  // === Internet/Texting Hindi Slang ===
  // ========================================
  "bc sale": [2, 3], // BC + sale compound
  "mc sala": [2, 3], // MC + sala compound
  "bsdk saale": [2, 3], // BSDK + saale compound
  "gandmein": [3, 3], // In the ass (texting)
  "chutiyape": [2, 3], // Idiocy (texting variant)
  "gandu log": [3, 3], // Asshole people
  "chutiye log": [1, 4], // Idiot people
  "bkchod": [2, 3], // Abbreviation for bakchod
  "bkchdi": [2, 3], // Abbreviation for bakchodi
  "lndbr": [2, 3], // Abbreviation for lundbaz
  "chtya": [2, 3], // Abbreviation for chutiya
  "gndu": [2, 3], // Abbreviation for gandu
  "bhsdka": [2, 3], // Abbreviation variant for bhosdika
  "mkbsdk": [2, 3], // Compound: maa ka bhosda + bhosdike
  "lnd": [2, 3], // Abbreviation for lund
  "chdai": [2, 3], // Abbreviation for chudai
  "ttharak": [2, 3], // Tharak variant

  // ========================================
  // === More Compound Insults ===
  // ========================================
  "chutiya madarchod": [1, 4], // Idiot motherfucker
  "gandu bhosdi ke": [4, 4], // Asshole vagina-born
  "behenchod harami": [3, 4], // Sister fucker bastard
  "madarchod kutta": [5, 5], // Motherfucker dog
  "randi ka beta": [5, 4], // Son of a prostitute
  "bhadwe ka bachcha": [1, 4], // Pimp's child
  "jhaat ka baal sala": [3, 4], // Pubic hair bastard
  "tatti khane wala": [3, 5], // Shit eater
  "gaand ke baal": [3, 4], // Ass hair
  "lund ke tope": [4, 4], // Glans penis (insult)
  "bhosda faad": [4, 4], // Rip the vagina
  "gaand mein lund": [4, 4], // Dick in ass
  "chut mein ungli": [4, 4], // Finger in vagina
  "tere muh mein mera lund": [4, 4], // My dick in your mouth
  "teri maa ko chodu": [3, 5], // I'll fuck your mother
  "teri behen ko chodu": [3, 5], // I'll fuck your sister
  "sala bewda": [1, 3], // Damn drunkard
  "chodu bhagat": [1, 4], // Idiot devotee (ironic insult)
  "lund khajoor": [4, 4], // Dick date-palm (worthless)
  "gaand ka andha": [1, 4], // Ass-blind (oblivious idiot)
  "chut ka chamcha": [4, 4], // Vagina's sycophant
  "tatte ka saudagar": [4, 4], // Testicle merchant
  "maa kasam chutiya": [1, 4], // Swear on mother - idiot
  "chut mein bambu": [4, 4], // Bamboo in vagina (extreme insult)
  "harami ki nasal": [3, 4], // Bastard's breed
  "suar ki nasal": [1, 4], // Pig's breed
  "gandmein ghus ja": [3, 4], // Go into the ass
  "lund pe rakh": [4, 4], // Keep it on the dick (indifference)

  // ========================================
  // === Leetspeak / Evasion Spellings ===
  // ========================================
  "bh3nchod": [3, 5], // Sister fucker (evasion)
  "m@darchod": [5, 5], // Motherfucker (evasion)
  "chut!ya": [1, 5], // Idiot (evasion)
  "l@uda": [4, 5], // Penis (evasion)
  "bh0sdike": [4, 5], // Born of vagina (evasion)
  "r@ndi": [5, 5], // Prostitute (evasion)
  "ch0d": [3, 5], // Fuck (evasion)
  "ch00tiya": [1, 5], // Idiot (evasion)
  "lun0": [4, 5], // Penis (evasion)
  "g4ndu": [3, 5], // Asshole (evasion)
  "m4darchod": [5, 5], // Motherfucker (evasion)
  "beh3nchod": [3, 5], // Sister fucker (evasion)
  "bhench0d": [3, 5], // Sister fucker (evasion)
  "madarc#od": [5, 5], // Motherfucker (evasion)
  "ch*tiya": [1, 5], // Idiot (evasion)
  "bh*sdike": [4, 5], // Born of vagina (evasion)
  "g*ndu": [3, 5], // Asshole (evasion)
  "l*nd": [4, 5], // Penis (evasion)
  "r*ndi": [5, 5], // Prostitute (evasion)
  "chut1ya": [1, 5], // Idiot (evasion)
  "madar$hod": [5, 5], // Motherfucker (evasion)
  "behen$hod": [3, 5], // Sister fucker (evasion)
  "bhenchd": [3, 5], // Sister fucker (evasion shorthand)
  "madarchd": [5, 5], // Motherfucker (evasion shorthand)
  "gaandfaad": [3, 5], // Ass-ripper (evasion)
  "bh0sda": [4, 5], // Vagina (evasion)
  "ch00t": [4, 5], // Vagina (evasion)
  "l@und": [4, 5], // Penis (evasion)
  "r@nd1": [5, 5], // Prostitute (evasion)
  "ch0du": [3, 5], // Fucker (evasion)
  "chuut": [4, 5], // Vagina (evasion)
  "lundd": [4, 5], // Penis (evasion)
  "laudaa": [4, 5], // Penis (evasion)
  "bhosadike": [4, 5], // Born of vagina (evasion)
  "chutiyee": [1, 5], // Idiot (evasion)
  "randii": [5, 5], // Prostitute (evasion)
  "bh3nch0d": [3, 5], // Sister fucker (double evasion)
  "m@d@rchod": [5, 5], // Motherfucker (double evasion)

  // ========================================
  // === Hinglish (Hindi-English Mix) Profanity ===
  // ========================================
  "bloody benchod": [3, 5], // Bloody sister fucker
  "fucking chutiya": [1, 4], // Fucking idiot
  "bloody madarchod": [5, 5], // Bloody motherfucker
  "fucking gandu": [3, 5], // Fucking asshole
  "damn harami": [3, 4], // Damn bastard
  "bloody randi": [5, 4], // Bloody prostitute
  "bloody kamina": [3, 4], // Bloody scoundrel
  "bloody saala": [3, 4], // Bloody bastard
  "fucking bhosdi ke": [4, 5], // Fucking vagina-born
  "shut up chutiye": [1, 4], // Shut up idiot
  "fuck off behenchod": [3, 5], // Fuck off sister fucker
  "asshole gandu": [3, 4], // Asshole asshole (Hinglish)
  "bloody kutta": [3, 4], // Bloody dog
  "mother chod sala": [3, 4], // Motherfucker bastard (Hinglish)
  "bastard harami": [3, 4], // Bastard bastard (Hinglish)
  "bitch kutti": [3, 4], // Bitch bitch (Hinglish)
  "fucking lauda": [4, 5], // Fucking penis
  "bloody bhosdike": [4, 4], // Bloody vagina-born
  "damn chutiyapa": [3, 4], // Damn idiocy
  "go to hell behenchod": [3, 5], // Go to hell sister fucker
  "son of a randi": [5, 4], // Son of a prostitute (Hinglish)
  "bloody hijda": [3, 4], // Bloody eunuch (Hinglish)
  "shut the fuck up chutiye": [1, 4], // Shut up idiot (Hinglish)
  "die madarchod": [5, 5], // Die motherfucker (Hinglish)
  "piece of shit chutiya": [1, 4], // Piece of shit idiot (Hinglish)
  "stupid chutiya": [1, 4], // Stupid idiot (Hinglish)
  "idiot gandu": [1, 4], // Idiot asshole (Hinglish)
  "loser chutiya": [1, 4], // Loser idiot (Hinglish)
  "useless gandu": [3, 4], // Useless asshole (Hinglish)
  "dumbass chutiye": [1, 4], // Dumbass idiot (Hinglish)
  "nonsense bakchodi": [3, 5], // Nonsense bullshitting (Hinglish)
  "pathetic chutiya": [1, 4], // Pathetic idiot (Hinglish)
  "disgusting tharki": [3, 4], // Disgusting pervert (Hinglish)
  "ugly randi": [1, 4], // Ugly prostitute (Hinglish)
  "cheap randi": [5, 4], // Cheap prostitute (Hinglish)
  "dirty gandu": [3, 4], // Dirty asshole (Hinglish)
  "bloody suar": [3, 4], // Bloody pig (Hinglish)
  "fucking gadha": [3, 5], // Fucking donkey (Hinglish)
  "bitch randve ki": [3, 4], // Bitch from a womanizer (Hinglish)

  // ========================================
  // === More Regional Dialect Crossover ===
  // ========================================
  // Awadhi dialect
  "choda ke aulad": [3, 5], // Offspring of a fucker (Awadhi)
  "bur chato": [4, 4], // Vagina licker (Awadhi)
  "gaand ghusao": [3, 4], // Shove in the ass (Awadhi)
  "launda chod": [3, 5], // Boy fucker (Awadhi)
  "randi ka baccha": [5, 4], // Son of a prostitute (Awadhi variant)
  "maai ke bhosra": [4, 4], // Mother's vagina (Awadhi)
  "jhantu sala awadhi": [3, 4], // Pubic-haired bastard (Awadhi)

  // Chhattisgarhi dialect
  "chod diye re": [3, 5], // Fucked it (Chhattisgarhi)
  "bhokwa sala": [3, 4], // Nonsense-talker bastard (Chhattisgarhi)
  "chuttar maaro": [3, 4], // Hit the buttocks (Chhattisgarhi)
  "gand ke keera": [3, 4], // Worm of the ass (Chhattisgarhi)
  "bura mein ghus": [4, 4], // Get into the vagina (Chhattisgarhi)
  "launda bada harami": [3, 4], // Boy is a big bastard (Chhattisgarhi)

  // Maithili dialect
  "chhodh de be": [3, 5], // Leave it / fuck it (Maithili)
  "kaniya chod": [3, 5], // Wife fucker (Maithili)
  "gaand mein laat": [3, 4], // Kick in the ass (Maithili)
  "bur chat": [4, 4], // Vagina lick (Maithili)
  "chodhan": [3, 5], // Fucking (Maithili)
  "haramai ka beta": [3, 4], // Son of a bastard (Maithili)
  "randi ka poot": [5, 4], // Son of a prostitute (Maithili)

  // Dogri/Kashmiri crossover
  "chodd de yaar": [3, 5], // Fuck it friend (Dogri)
  "gaand fad dunga teri": [3, 4], // I'll rip your ass (Dogri)
  "tatti khana tu": [3, 5], // You eat shit (Dogri)
  "kutta kamina sala": [3, 4], // Dog scoundrel bastard (Dogri)
  "lund di topi": [4, 4], // Glans penis (Dogri)
  "phuddi chod saale": [3, 4], // Pussy fucker bastard (Dogri)

  // Konkani crossover
  "ghand": [3, 4], // Ass (Konkani)
  "ghand mharo": [3, 4], // Hit the ass (Konkani)
  "yede": [1, 4], // Idiot (Konkani)
  "cheddya": [3, 4], // Boy (derogatory, Konkani)
  "rand che pooth": [5, 5], // Son of a whore (Konkani)
  "soor": [3, 4], // Pig (Konkani insult)

  // Sindhi crossover
  "bhenchoro": [3, 5], // Sister fucker (Sindhi)
  "madarchoro": [5, 5], // Motherfucker (Sindhi)
  "haram jo bachho": [3, 4], // Bastard child (Sindhi)
  "kuttey jo bachho": [3, 4], // Son of a dog (Sindhi)
  "randi jo putar": [5, 4], // Son of a prostitute (Sindhi)
  "gadha kameena": [3, 4], // Donkey scoundrel (Sindhi)
  "choru": [3, 5], // Fucker (Sindhi)

  // ========================================
  // === More Compound Insults Extended ===
  // ========================================
  "chutiya number one": [1, 4], // Number one idiot
  "gandu number one": [3, 4], // Number one asshole
  "bhosdi ke chutiye": [1, 4], // Vagina-born idiot
  "madarchod bhosdi ke": [5, 5], // Motherfucker vagina-born
  "teri maa ka bhosda faad dunga": [4, 4], // I'll rip your mother's vagina
  "teri behen ka bhosda": [4, 4], // Your sister's vagina
  "tere baap ki gaand faad dunga": [1, 4], // I'll rip your father's ass
  "teri maa ko randi banaunga": [5, 4], // I'll make your mother a prostitute
  "tere muh mein mera tatta": [4, 4], // My testicle in your mouth
  "tere baap ka lund": [1, 4], // Your father's dick
  "teri maa ki gaand": [3, 4], // Your mother's ass
  "teri behen ki chut faad dunga": [4, 4], // I'll rip your sister's vagina
  "gaand mein baans dal dunga": [3, 4], // I'll shove bamboo in your ass
  "tatte tod dunga tere": [4, 4], // I'll break your testicles
  "teri maa ka choosna": [1, 4], // Suck your mother's
  "lund choosi ka": [4, 4], // Dick sucker
  "gaand mein ghusa ja": [3, 4], // Go into the ass
  "tere muh mein mera lauda": [4, 4], // My penis in your mouth
  "chut ka chamcha sala": [3, 4], // Vagina's sycophant bastard
  "lund pe baitha": [4, 4], // Sit on the dick
  "gaand ka keeda sala": [3, 4], // Worm of the ass bastard
  "jhaat ke baal bhi nahi": [1, 4], // Not even a pubic hair (worthless)
  "kutte ki maut marega": [5, 5], // You'll die a dog's death
  "suar ke muh wala": [1, 4], // Pig-faced one
  "chutiya sala madarchod gandu": [3, 4], // Idiot bastard motherfucker asshole
  "bhosdi ke randi ke bachche": [5, 4], // Vagina-born son of a prostitute
  "haramzada kutta kamina gandu": [3, 4], // Bastard dog scoundrel asshole
  "teri maa ki chut mein danda": [4, 4], // Stick in your mother's vagina
  "gaand se dum nikal": [3, 4], // Pull tail from ass (useless)
  "jhaat barabar bhi nahi": [1, 4], // Not even worth a pubic hair
  "tatti ka tukda": [3, 5], // Piece of shit
  "gobar ka keeda": [1, 4], // Worm of cow dung
  "suar ki tatti": [3, 5], // Pig's shit

  // ========================================
  // === More Devanagari Extended ===
  // ========================================
  "ब्लडी बहनचोद": [3, 4], // Bloody behenchod (Hinglish)
  "फकिंग चूतिया": [3, 5], // Fucking chutiya (Hinglish)
  "ब्लडी मादरचोद": [5, 5], // Bloody madarchod (Hinglish)
  "फकिंग गांडू": [3, 5], // Fucking gandu (Hinglish)
  "तेरी माँ को रंडी बनाऊंगा": [5, 4], // I'll make your mother a prostitute
  "तेरी माँ का भोसड़ा फाड़ दूंगा": [4, 4], // I'll rip your mother's vagina
  "तेरी बहन का भोसड़ा": [4, 4], // Your sister's vagina
  "तेरे बाप की गांड फाड़ दूंगा": [1, 4], // I'll rip your father's ass
  "तेरे बाप का लंड": [1, 4], // Your father's dick
  "तेरी माँ की गांड": [3, 4], // Your mother's ass
  "गांड में बांस डाल दूंगा": [3, 4], // I'll shove bamboo in your ass
  "टट्टे तोड़ दूंगा तेरे": [4, 4], // I'll break your testicles
  "लंड चूसी का": [4, 4], // Dick sucker
  "गांड में घुस जा": [3, 4], // Go into the ass
  "गांड का कीड़ा": [3, 4], // Worm of the ass
  "झाँट के बाल भी नहीं": [3, 4], // Not even a pubic hair (worthless)
  "कुत्ते की मौत मरेगा": [5, 5], // You'll die a dog's death
  "सूअर के मुँह वाला": [3, 4], // Pig-faced one
  "टट्टी का टुकड़ा": [3, 5], // Piece of shit
  "गोबर का कीड़ा": [3, 4], // Worm of cow dung
  "सूअर की टट्टी": [3, 5], // Pig's shit
  "चूत में बम्बू": [4, 4], // Bamboo in vagina
  "गांड फाटू गांडू": [3, 4], // Ass-ripped asshole
  "भड़वे का नौकर": [3, 4], // Pimp's servant
  "रंडी बाज़ार": [5, 4], // Prostitute market
  "लौड़े का बाल": [4, 4], // Dick's hair (worthless)
  "चूत की पैदाइश": [4, 4], // Birth of a vagina
  "गांड का अंधा": [3, 4], // Ass-blind (totally oblivious)

  // ========================================
  // === More Internet/Gaming Slang ===
  // ========================================
  "mc bc lodu": [2, 3], // MC BC Lodu compound
  "bsdk chutiye nikal": [1, 4], // BSDK idiot get out
  "gandu sala mc": [3, 4], // Asshole bastard MC
  "tmkc bsdk": [2, 3], // TMKC BSDK compound
  "bc mc tmkc tmkb": [2, 3], // All abbreviations compound
  "nikal lavde pehli fursat mein": [4, 3], // Get out dick at first opportunity (meme)
  "aukad mein reh chutiye": [1, 4], // Stay in your place idiot
  "apni maa chuda": [5, 5], // Get your mother fucked
  "teri maa ka chutiya": [1, 4], // Your mother's idiot
  "teri maa randi hai": [5, 4], // Your mother is a prostitute

  // ========================================
  // === Assamese Crossover Profanity ===
  // ========================================
  "kenekoi": [3, 4], // How (used dismissively, Assamese)
  "bor soor": [3, 4], // Big pig (Assamese)
  "puti mara": [3, 5], // Ass fucker (Assamese)
  "bhot gandu": [3, 4], // Very asshole (Assamese-Hindi mix)
  "betichod": [3, 5], // Daughter fucker (Assamese crossover)
  "huila": [3, 4], // Crazy (Assamese derogatory)
  "dangor soor": [3, 4], // Big pig (Assamese variant)
  "boga puti": [3, 4], // White ass (Assamese vulgar)
  "bhondami": [3, 5], // Nonsense/bullshit (Assamese)
  "bondor soor": [3, 4], // Monkey pig (Assamese compound)
  "sali besya": [5, 4], // Damn prostitute (Assamese)
  "maa sudi": [5, 5], // Motherfucker (Assamese variant)

  // ========================================
  // === More Evasion Variants ===
  // ========================================
  "bhnchd gandu": [3, 5], // Abbreviation compound
  "behen ch0d": [3, 5], // Sister fucker evasion
  "ch00t1ya": [1, 5], // Idiot evasion
  "maad@rchod": [5, 5], // Motherfucker evasion
  "bhos@dike": [4, 5], // Born of vagina evasion
  "l@ude": [4, 5], // Dicks evasion

  // ========================================
  // === Extended Gaali - Devanagari Script ===
  // ========================================
  "भोसड़ीवाला": [4, 4], // One with a loose vagina
  "भोसड़ीवाली": [3, 4], // Female form of above
  "लौड़ी": [3, 4], // Female genitalia (vulgar)
  "लंडूरा": [4, 4], // Dick-like person
  "गांड का ढक्कन": [1, 4], // Ass's lid (idiot)
  "रंडवा": [5, 4], // Male prostitute
  "छिनार": [3, 4], // Adulteress
  "गांडू मल": [3, 4], // Asshole filth
  "तवायफ़": [5, 4], // Courtesan/prostitute
  "वेश्या": [5, 4], // Prostitute (formal)
  "रखैल": [3, 4], // Kept woman/mistress
  "दल्ली": [3, 4], // Pimp (female)
  "लफंगी": [3, 4], // Female loafer/rogue
  "लुच्ची": [3, 4], // Lecherous (female)
  "चालू": [3, 4], // Cunning/promiscuous
  "नटखट": [3, 4], // Naughty (used derogatorily)
  "बदतमीज़": [3, 4], // Ill-mannered
  "बेग़ैरत": [3, 4], // Shameless (Urdu influence)
  "निर्लज्ज": [3, 4], // Shameless (formal)
  "निकम्मी": [3, 4], // Useless (female)
  "कमज़ात": [3, 4], // Low-born
  "नीचे की पैदाइश": [3, 4], // Born of lowly origin
  "बदज़ात": [3, 4], // Evil-natured
  "चमार": [3, 4], // Caste-based slur (leatherworker)
  "भंगी": [3, 4], // Caste-based slur (sweeper)
  "चूहड़ा": [3, 4], // Caste-based slur (sweeper)
  "डोम": [3, 4], // Caste-based slur (funeral workers)
  "धोबी": [3, 4], // Caste-based slur (washerman, used derogatorily)
  "चूड़ीवाला": [3, 4], // Bangle-seller (effeminate insult)
  "हिजड़ापन": [3, 4], // Transgenderism (used as insult)
  "गधे": [3, 4], // Donkeys (insult)
  "उल्लू के पट्ठे": [3, 4], // Owl's offspring (plural)
  "भैंस": [3, 4], // Buffalo (insult, usually at women)
  "भैंसा": [3, 4], // Male buffalo (insult)
  "सूअरनी": [3, 4], // Female pig (insult)
  "बिल्ला": [3, 4], // Tom cat (sneaky person)
  "बंदरिया": [3, 4], // Female monkey
  "लोभी": [3, 4], // Greedy
  "ठग": [3, 4], // Cheat/thief
  "लुटेरा": [3, 4], // Robber
  "डाकू": [3, 4], // Bandit
  "गुंडा": [3, 4], // Thug
  "गुंडागर्दी": [3, 4], // Thuggery
  "टपोरी": [3, 4], // Street ruffian
  "लुच्चड़": [3, 4], // Lecherous (variant)
  "अंडबाज़": [4, 4], // Testicle player (vulgar)
  "टट्टू": [3, 4], // Pony (weak person)
  "रांड की": [5, 4], // Of a prostitute
  "बेवड़ा": [1, 3], // Drunkard
  "बेवड़ी": [1, 3], // Female drunkard
  "नशेड़ी": [3, 4], // Drug addict
  "चरसी": [3, 4], // Hash smoker
  "गांजेड़ी": [3, 4], // Marijuana addict
  "अफ़ीमची": [3, 4], // Opium addict
  "भड़वाग़ीरी": [3, 4], // Pimping
  "चमगादड़": [3, 4], // Bat (insult)
  "सांड": [3, 4], // Bull (uncontrolled person)
  "गूदड़": [3, 4], // Rag (worthless)
  "पागलखाने का": [3, 4], // From the madhouse
  "पागल कुत्ता": [3, 4], // Mad dog
  "चुटिया कटा": [1, 4], // Circumcised idiot (offensive)
  "मुल्ला": [3, 4], // Muslim cleric (used as slur)
  "पंडित": [3, 4], // Brahmin (used sarcastically)
  "बामन": [3, 4], // Brahmin (derogatory form)
  "ठाकुर साला": [3, 4], // Thakur bastard (caste insult)
  "बनिया": [3, 4], // Merchant caste (used derogatorily)
  "चमारी": [3, 4], // Female caste slur
  "झाँट के बाल": [3, 4], // Pubic hair strands
  "लंड के बाल": [4, 4], // Dick hair (worthless)
  "चूत के बाल": [4, 4], // Vaginal hair (insult)
  "मूत पी": [3, 4], // Drink piss
  "मूतने जा": [3, 4], // Go urinate (dismissive)
  "हगने जा": [3, 4], // Go defecate (dismissive)
  "पाद": [3, 4], // Fart
  "पादू": [3, 4], // One who farts
  "गोबर गणेश": [1, 4], // Cow dung Ganesh (stupid person)
  "चूहा": [1, 4], // Rat (coward)
  "बिच्छू": [3, 4], // Scorpion (treacherous)
  "साँप": [3, 4], // Snake (treacherous)
  "केंचुआ": [3, 4], // Earthworm (spineless)
  "जोंक": [3, 4], // Leech (parasite)
  "गिद्ध": [3, 4], // Vulture (opportunistic)
  "कौआ": [1, 4], // Crow (bad omen/ugly)

  // ========================================
  // === Extended Romanized Hindi Gaali ===
  // ========================================
  "bhosdiwali": [3, 5], // Female form
  "laudi": [3, 5], // Female genitalia (vulgar)
  "landura": [4, 5], // Dick-like person
  "laude ka baal": [4, 5], // Dick's pubic hair (worthless)
  "gaand ka dhakkan": [1, 5], // Ass's lid (idiot)
  "randwa": [5, 5], // Male prostitute
  "chhinal": [3, 5], // Adulteress (variant)
  "tawaif": [5, 5], // Courtesan/prostitute
  "veshya": [5, 5], // Prostitute (formal)
  "rakhail": [3, 5], // Kept woman
  "dalli": [3, 5], // Pimp (female)
  "lafangi": [3, 5], // Female loafer/rogue
  "luchcha": [3, 5], // Lecherous
  "luchchi": [3, 5], // Lecherous (female)
  "badtameez": [3, 5], // Ill-mannered
  "begairat": [3, 5], // Shameless
  "nirlajj": [3, 5], // Shameless (formal)
  "nikammi": [3, 5], // Useless (female)
  "kamzaat": [3, 5], // Low-born
  "neech ki paidaish": [3, 5], // Born of lowly origin
  "badzaat": [3, 5], // Evil-natured
  "ullu ke patthe": [3, 5], // Owl's offspring (plural)
  "bhains": [3, 5], // Buffalo
  "bhainsa": [3, 5], // Male buffalo
  "suarni": [3, 5], // Female pig
  "makkhi choos": [3, 5], // Fly-sucker (miser)
  "lobhi": [3, 5], // Greedy
  // "thug": [3, 5], // Cheat — false positive: extremely common English word
  "lutera": [3, 5], // Robber
  "daku": [3, 5], // Bandit
  "gunda": [3, 5], // Thug
  "gundagardi": [3, 5], // Thuggery
  "tapori": [3, 5], // Street ruffian
  "luchchar": [3, 5], // Lecherous (variant)
  "andbaaz": [4, 5], // Testicle player
  "tattu": [3, 5], // Pony (weak person)
  "paakhandi": [3, 5], // Hypocrite (variant)
  "raand ki": [5, 5], // Of a prostitute
  "bewda": [1, 5], // Drunkard (male)
  "bewdi": [1, 5], // Drunkard (female)
  "nashedi": [3, 5], // Drug addict
  "gaanjedi": [3, 5], // Marijuana addict
  "afimchi": [3, 5], // Opium addict
  "bhadwagiri": [3, 5], // Pimping
  "saand": [3, 5], // Bull (uncontrolled)
  "pagal kutta": [3, 5], // Mad dog
  "mulla": [3, 5], // Muslim cleric (slur)
  "baman": [3, 5], // Brahmin (derogatory)
  "jhaant ke baal": [3, 5], // Pubic hair strands
  "land ke baal": [4, 5], // Dick hair (worthless)
  "chut ke baal": [4, 5], // Vaginal hair
  "moot pi": [3, 5], // Drink piss
  "hagney ja": [3, 5], // Go defecate
  "paad": [3, 5], // Fart
  "paadu": [3, 5], // Farter
  "gobar": [3, 5], // Cow dung
  "gobar ganesh": [1, 5], // Cow dung Ganesh (stupid)
  "chuha": [1, 5], // Rat (coward)
  "bichhu": [3, 5], // Scorpion
  "saanp": [3, 5], // Snake
  "kenchua": [3, 5], // Earthworm (spineless)
  "jonk": [3, 5], // Leech
  "giddh": [3, 5], // Vulture

  // ========================================
  // === Extended Compound Insults (Romanized) ===
  // ========================================
  "madarchod kamina": [5, 5], // Motherfucker scoundrel
  "chutiya kamina": [1, 5], // Idiot scoundrel
  "gandu harami": [3, 5], // Asshole bastard
  "bhosdi ke gandu": [4, 5], // Vagina-born asshole
  "laude ke baal chutiye": [1, 5], // Dick-hair idiot
  "madarchod bhosdike": [5, 5], // Motherfucker vagina-born
  "behenchod bhosdike": [4, 5], // Sisterfucker vagina-born
  "randi ka baccha chutiya": [1, 5], // Prostitute's child idiot
  "haramzadi randi": [3, 5], // Bastard prostitute (female)
  "kamina kutta": [1, 5], // Scoundrel dog
  "gandu lauda": [4, 5], // Asshole dick
  "chutiya sala harami": [3, 5], // Idiot bastard (compound)
  "madarchod gandu kamina": [5, 5], // Motherfucker asshole scoundrel
  "behenchod laude": [4, 5], // Sisterfucker dicks
  "teri maa ki chut mein keeda": [4, 5], // Worm in your mother's vagina
  "teri behen ki gaand mein": [3, 5], // In your sister's ass
  "baap ka lauda choos": [1, 5], // Suck your father's dick
  "maa ko bech de randi": [5, 5], // Sell your mother prostitute
  "behen ko randi bana": [5, 5], // Make your sister a prostitute
  "teri aukat chutiye": [1, 5], // Your status idiot
  "aukaat mein reh": [1, 5], // Stay in your place
  "teri maa ka bharosa": [1, 5], // Your mother's trust (ironic insult)
  "teri maa gaand marae": [3, 5], // Your mother gets ass-fucked
  "lund pe charh ja": [4, 5], // Climb on the dick
  "gaand marwa le": [3, 5], // Get your ass fucked
  "chut marwa le": [4, 5], // Get your vagina fucked
  "lund chooste reh": [4, 5], // Keep sucking dick
  "gaand mein ungli": [3, 5], // Finger in ass
  "chut mein lund": [4, 5], // Dick in vagina
  "tatte masle": [4, 5], // Crush the testicles
  "tatte tod de": [4, 5], // Break the testicles
  "lund kaat dunga": [4, 5], // I'll cut your dick
  "chut faad dunga": [4, 5], // I'll rip your vagina
  "gaand faad dunga": [3, 5], // I'll rip your ass
  "maa chod dunga": [3, 5], // I'll fuck your mother
  "behen chod dunga": [3, 5], // I'll fuck your sister
  "biwi chod dunga": [3, 5], // I'll fuck your wife
  "baap chod dunga": [1, 5], // I'll fuck your father
  "khandaan chod dunga": [3, 5], // I'll fuck your lineage
  "khandan ki izzat le lunga": [1, 5], // I'll take your family's honor
  "teri maa ka bharwa": [1, 5], // Your mother's pimp
  "teri behen ka dalla": [1, 5], // Your sister's pimp
  "teri maa mujhe randi lagti hai": [5, 5], // Your mother seems like a prostitute to me
  "sab ki randi": [5, 5], // Everyone's prostitute
  "naukrani ki tarah": [1, 5], // Like a servant (demeaning)
  "bazaaru aurat": [5, 5], // Market woman (prostitute)
  "sadak chaap": [1, 5], // Street-level (worthless)
  "naali ka keeda": [1, 5], // Gutter worm
  "gutter mein pad": [1, 5], // Fall in the gutter

  // ========================================
  // === Bhojpuri Crossover Profanity ===
  // ========================================
  "भोकवा": [1, 4], // Idiot (Bhojpuri)
  "bokwa": [1, 4], // Idiot (Bhojpuri romanized)
  "छौड़ी": [3, 4], // Girl (derogatory, Bhojpuri)
  "chhaudi": [3, 4], // Girl (derogatory, Bhojpuri romanized)
  "रंडी रोना": [5, 4], // Prostitute crying (Bhojpuri)
  "छिनरा": [3, 4], // Male adulteress (Bhojpuri)
  "chhinra": [3, 4], // Male adulteress (Bhojpuri, romanized)
  "भड़वागिरी": [3, 4], // Pimping (Bhojpuri)
  "हरामज़दगी": [3, 4], // Bastardry (Bhojpuri)
  "haramzadgi": [3, 4], // Bastardry (Bhojpuri romanized)
  "baklol": [1, 4], // Talkative idiot (Bhojpuri romanized)
  "ढोसू": [1, 4], // Stupid (Bhojpuri)
  "dhosu": [1, 4], // Stupid (Bhojpuri romanized)
  "पगहा": [3, 4], // Rope for tying cattle (Bhojpuri insult)
  "pagha": [3, 4], // Rope insult (Bhojpuri romanized)
  "बेकूफ़": [1, 4], // Stupid (Bhojpuri)
  "bekoof": [1, 4], // Stupid (Bhojpuri romanized)
  "लतखोर": [1, 3], // Drunkard (Bhojpuri)
  "latkhor": [1, 3], // Drunkard (Bhojpuri romanized)
  "भँउव़ा": [1, 4], // Idiot (Bhojpuri)
  "bhauwa": [1, 4], // Idiot (Bhojpuri romanized)
  "गमार": [3, 4], // Bumpkin (Bhojpuri)
  "gamaar": [3, 4], // Bumpkin (Bhojpuri romanized)
  "भुक्कड़": [3, 4], // Glutton (Bhojpuri)
  "bhukkad": [3, 4], // Glutton (Bhojpuri romanized)
  "चोदवा": [3, 5], // Fucker (Bhojpuri)
  "फदियल": [1, 3], // Drunkard/useless (Bhojpuri)
  "fadiyal": [1, 3], // Drunkard/useless (Bhojpuri romanized)
  "मटरू": [3, 4], // Simpleton (Bhojpuri)
  "matru": [3, 4], // Simpleton (Bhojpuri romanized)
  "लोटा": [3, 4], // Pot (worthless, Bhojpuri)
  "ठरकीपन": [3, 4], // Lustfulness
  "tharkipan": [3, 4], // Lustfulness (romanized)
  "चिरकुट": [3, 4], // Worthless/small-time
  "chirkut": [3, 4], // Worthless/small-time (romanized)
  "चपरी": [3, 4], // Low-class person
  "छपरी": [3, 4], // Low-class person (variant)
  "chhapri": [3, 4], // Low-class person (romanized variant)
  "गवार": [3, 4], // Bumpkin/uncivilized
  "gawaar": [3, 4], // Bumpkin/uncivilized (romanized)

  // ========================================
  // === Marathi Crossover Profanity ===
  // ========================================
  "झवाड्या": [3, 5], // Fucker (Marathi)
  "भाड्या": [3, 5], // Pimp/fucker (Marathi)
  "bhadya": [3, 5], // Pimp/fucker (Marathi romanized)
  "आईझवाड्या": [5, 5], // Motherfucker (Marathi)
  "aaizhavadya": [5, 5], // Motherfucker (Marathi romanized)
  "बहिणीचोद": [3, 5], // Sisterfucker (Marathi)
  "bahinichod": [3, 5], // Sisterfucker (Marathi romanized)
  "गांडीत घे": [3, 4], // Take it in the ass (Marathi)
  "gandit ghe": [3, 4], // Take it in the ass (Marathi romanized)
  "चुत्या": [1, 4], // Idiot (Marathi)
  "बोकड": [3, 4], // Goat (Marathi insult)
  "bokad": [3, 4], // Goat (Marathi insult romanized)
  "रांडेचा": [5, 4], // Son of a prostitute (Marathi)
  "randecha": [5, 4], // Son of a prostitute (Marathi romanized)
  "मावशीच्या": [3, 4], // Aunt's (Marathi, start of insult)
  "mavshichya": [3, 4], // Aunt's (Marathi romanized)
  "तुझ्या आईला": [3, 4], // To your mother (Marathi insult)
  "tujhya aaila": [3, 4], // To your mother (Marathi romanized)
  "तुझी आई गं": [3, 4], // Your mother oh (Marathi insult)
  "tujhi aai ga": [3, 4], // Your mother (Marathi romanized)
  "बायकोला झव": [3, 5], // Fuck the wife (Marathi)
  "baykola zhav": [3, 5], // Fuck the wife (Marathi romanized)
  "चावट": [3, 4], // Lustful/pervert (Marathi)
  "chavat": [3, 4], // Lustful/pervert (Marathi romanized)
  "पोरकट": [3, 4], // Childish/immature (Marathi insult)
  "porkat": [3, 4], // Childish (Marathi romanized)
  "पोरगट": [3, 4], // Childish (Marathi variant)
  "porgat": [3, 4], // Childish (Marathi romanized)
  "हलकट कमीना": [3, 4], // Scoundrel scoundrel (Marathi compound)
  "halkat kamina": [3, 4], // Scoundrel (Marathi romanized)
  "तेरी गांड झव": [3, 5], // Fuck your ass (Marathi-Hindi mix)
  "teri gaand zhav": [3, 5], // Fuck your ass (Marathi-Hindi romanized)

  // ========================================
  // === Gujarati Crossover Profanity ===
  // ========================================
  "ઘાંટી ચોદ": [3, 5], // Throat fucker (Gujarati)
  "ghanti chod": [3, 5], // Throat fucker (Gujarati romanized)
  "ભોસ": [4, 4], // Vagina (Gujarati)
  "bhos": [4, 4], // Vagina (Gujarati romanized)
  "ચુતિયો": [1, 4], // Idiot (Gujarati)
  "chutiyo": [1, 4], // Idiot (Gujarati romanized)
  "ગાંડમારો": [3, 5], // Ass fucker (Gujarati)
  "gaandmaro": [3, 5], // Ass fucker (Gujarati romanized)
  "ગાંડિયો": [3, 4], // Asshole (Gujarati)
  "gaandiyo": [3, 4], // Asshole (Gujarati romanized)
  "લોડો": [4, 4], // Dick (Gujarati)
  "ફૂદી": [4, 4], // Vagina (Gujarati)
  "foodi": [4, 4], // Vagina (Gujarati romanized)
  "ફૂદીમારી": [4, 5], // Vagina fucker (Gujarati)
  "foodimari": [4, 5], // Vagina fucker (Gujarati romanized)
  "ભેંશ": [3, 4], // Buffalo (Gujarati insult)
  "bhensh": [3, 4], // Buffalo (Gujarati romanized)
  "ઢીલો": [3, 4], // Loose/weak (Gujarati insult)
  "dhilo": [3, 4], // Loose/weak (Gujarati romanized)
  "ભાભીચોદ": [3, 5], // Aunt fucker (Gujarati)
  "bhabhichod": [3, 5], // Aunt fucker (Gujarati romanized)
  "છોકરીચોદ": [3, 5], // Girl fucker (Gujarati)
  "chhokrichod": [3, 5], // Girl fucker (Gujarati romanized)
  "રાંડ": [5, 4], // Prostitute (Gujarati)
  "ટટ્ટો": [1, 4], // Pony/weakling (Gujarati)
  "tatto": [1, 4], // Pony/weakling (Gujarati romanized)
  "ગમાર": [3, 4], // Bumpkin (Gujarati)
  "gamaar guj": [3, 4], // Bumpkin (Gujarati variant)
  "ભવાડો": [3, 4], // Pimp (Gujarati)
  "bhavado": [3, 4], // Pimp (Gujarati romanized)

  // ========================================
  // === Rajasthani Crossover Profanity ===
  // ========================================
  "साली छोरी": [3, 4], // Damn girl (Rajasthani)
  "saali chhori": [3, 4], // Damn girl (Rajasthani romanized)
  "कमीनी छोरी": [3, 4], // Scoundrel girl (Rajasthani)
  "kamini chhori": [3, 4], // Scoundrel girl (Rajasthani romanized)
  "बायसा की": [3, 4], // Lady's (Rajasthani insult start)
  "baysa ki": [3, 4], // Lady's (Rajasthani romanized)
  "ढेड बुद्धि": [3, 4], // Half-brained (Rajasthani)
  "dhed buddhi": [3, 4], // Half-brained (Rajasthani romanized)
  "गधेड़ा": [3, 4], // Donkey (Rajasthani)
  "gadheda": [3, 4], // Donkey (Rajasthani romanized)
  "भुंड": [1, 4], // Ugly/pig (Rajasthani)
  "bhund": [1, 4], // Ugly/pig (Rajasthani romanized)
  "लबार": [3, 4], // Liar (Rajasthani)
  "labar": [3, 4], // Liar (Rajasthani romanized)
  "बावलो": [3, 4], // Mad (Rajasthani)
  "bawlo": [3, 4], // Mad (Rajasthani romanized)
  "बावली": [3, 4], // Mad (female, Rajasthani)
  "bawli": [3, 4], // Mad (female, Rajasthani romanized)
  "खूसट": [1, 4], // Miser/old fool (Rajasthani)
  "khoosad": [1, 4], // Miser/old fool (Rajasthani romanized)
  "छोरा हरामी": [3, 4], // Bastard boy (Rajasthani)
  "chhora harami": [3, 4], // Bastard boy (Rajasthani romanized)
  "लुगाई चोद": [3, 5], // Wife fucker (Rajasthani)
  "lugai chod": [3, 5], // Wife fucker (Rajasthani romanized)
  "टोबा ली": [3, 4], // Shame on you (Rajasthani)
  "toba li": [3, 4], // Shame on you (Rajasthani romanized)

  // ========================================
  // === Haryanvi Crossover Profanity ===
  // ========================================
  "ताऊ की गांड": [3, 4], // Uncle's ass (Haryanvi)
  "tau ki gaand": [3, 4], // Uncle's ass (Haryanvi romanized)
  "भैंस की गांड": [3, 4], // Buffalo's ass (Haryanvi)
  "bhains ki gaand": [3, 4], // Buffalo's ass (Haryanvi romanized)
  "छोरे तेरी मां की": [3, 4], // Boy your mother's (Haryanvi insult)
  "chhore teri maa ki": [3, 4], // Boy your mother's (Haryanvi romanized)
  "हरामी छोरा": [3, 4], // Bastard boy (Haryanvi)
  "harami chhora": [3, 4], // Bastard boy (Haryanvi romanized)
  "कमीने छोरा": [3, 4], // Scoundrel boy (Haryanvi)
  "kamine chhora": [3, 4], // Scoundrel boy (Haryanvi romanized)
  "तेरी ताई की": [3, 4], // Your aunt's (Haryanvi insult)
  "teri tai ki": [3, 4], // Your aunt's (Haryanvi romanized)
  "गांड मारने वाला": [3, 5], // One who fucks asses (Haryanvi)
  "gaand marne wala": [3, 5], // One who fucks asses (Haryanvi romanized)
  "गांड फट गई": [3, 4], // Ass got ripped (scared, Haryanvi)
  "gaand fat gayi": [3, 4], // Ass got ripped (Haryanvi romanized)
  "मां चुदा": [5, 5], // Get your mother fucked (Haryanvi)
  "maa chuda": [5, 5], // Get your mother fucked (Haryanvi romanized)
  "बहन चुदा": [3, 5], // Get your sister fucked (Haryanvi)
  "behen chuda": [3, 5], // Get your sister fucked (Haryanvi romanized)
  "लंड बहादुर": [4, 4], // Dick hero (sarcastic, Haryanvi)
  "land bahadur": [4, 4], // Dick hero (Haryanvi romanized)
  "चूत फाड़ दूँगा": [4, 4], // I'll rip your vagina (Haryanvi)
  "chut fad dunga": [4, 4], // I'll rip vagina (Haryanvi romanized)
  "छोरे की गांड मार": [3, 5], // Fuck the boy's ass (Haryanvi)
  "chhore ki gaand maar": [3, 5], // Fuck boy's ass (Haryanvi romanized)
  "तू छक्का है": [3, 4], // You're a eunuch (Haryanvi)
  "tu chakka hai": [3, 4], // You're a eunuch (Haryanvi romanized)
  "ताऊ चोद": [3, 5], // Uncle fucker (Haryanvi)
  "tau chod": [3, 5], // Uncle fucker (Haryanvi romanized)
  "भैंस चोद": [3, 5], // Buffalo fucker (Haryanvi)
  "bhains chod": [3, 5], // Buffalo fucker (Haryanvi romanized)

  // ========================================
  // === Punjabi Crossover Profanity ===
  // ========================================
  "ਪੈਂਚੋ": [3, 4], // Short for behenchod (Punjabi)
  "paincho": [3, 4], // Short for behenchod (Punjabi romanized)
  "ਕੁੱਤੇ ਦਾ ਪੁੱਤ": [3, 4], // Dog's son (Punjabi)
  "kutte da putt": [3, 4], // Dog's son (Punjabi romanized)
  "ਕੰਜਰ": [3, 4], // Pimp (Punjabi)
  "ਕੰਜਰੀ": [3, 4], // Pimp's woman (Punjabi)
  "kanjri": [3, 4], // Pimp's woman (Punjabi romanized)
  "ਤੱਤੀ ਲੱਸੀ": [3, 4], // Hot lassi (Punjabi derogatory)
  "tatti lassi": [3, 4], // Hot lassi (Punjabi romanized)
  "ਛਡ ਯਾਰ ਮੱਚੋ": [3, 4], // Leave it MC (Punjabi)
  "chhad yaar macho": [3, 4], // Leave it MC (Punjabi romanized)
  "ਫੁੱਦੂ": [4, 4], // Vagina (Punjabi)
  "fuddu": [4, 4], // Vagina (Punjabi romanized)
  "ਫੁੱਦੀ": [4, 4], // Vagina (Punjabi variant)
  "ਲੂਣ ਹਰਾਮ": [3, 4], // Salt traitor (Punjabi)
  "loon haram": [3, 4], // Salt traitor (Punjabi romanized)
  "ਤੇਰੀ ਮਾਂ ਦੀ": [3, 4], // Your mother's (Punjabi insult)
  "teri maan di": [3, 4], // Your mother's (Punjabi romanized)
  "ਤੇਰੀ ਪੈਂ ਦੀ": [3, 4], // Your sister's (Punjabi insult)
  "teri pain di": [3, 4], // Your sister's (Punjabi romanized)
  "ਚੂਤੜ": [3, 4], // Buttocks (Punjabi vulgar)
  "chootar": [3, 4], // Buttocks (Punjabi romanized)
  "ਪੁੱਠ": [3, 4], // Ass (Punjabi)
  "putth": [3, 4], // Ass (Punjabi romanized)
  "ਤੱਤੇ": [4, 4], // Testicles (Punjabi)
  "teri phen di fuddi": [4, 4], // Your sister's vagina (Punjabi romanized)
  "teri maa di fuddi": [4, 4], // Your mother's vagina (Punjabi romanized)
  "kanjar da putt": [3, 4], // Pimp's son (Punjabi romanized)
  "kanjri di": [3, 4], // Pimp woman's (Punjabi romanized)
  "khotey da putt": [3, 4], // Donkey's son (Punjabi romanized)
  "khotey di gaand": [3, 4], // Donkey's ass (Punjabi romanized)
  "soor da putt": [3, 4], // Pig's son (Punjabi romanized)
  "haramda": [3, 4], // Bastard (Punjabi romanized)
  "haramdi": [3, 4], // Bastard female (Punjabi romanized)
  "ullu da putt": [3, 4], // Owl's son (Punjabi romanized)
  "laun": [4, 4], // Dick (Punjabi romanized)
  "laun da baal": [4, 4], // Dick hair (Punjabi romanized)
  "kutte di aulad": [3, 4], // Dog's offspring (Punjabi romanized)

  // ========================================
  // === More Compound Madarchod Variations ===
  // ========================================
  "maadarchod": [5, 5], // Motherfucker (variant)
  "maaderchood": [5, 5], // Motherfucker (variant)
  "maader chod": [5, 5], // Motherfucker (spaced)
  "maadar chod": [5, 5], // Motherfucker (variant spaced)
  "madar ch0d": [5, 5], // Motherfucker (evasion)
  "m@dar chod": [5, 5], // Motherfucker (evasion)
  "mc bc bsdk": [3, 5], // MC BC BSDK compound
  // "emcee": [3, 5], // MC phonetic — false positive: common English word ("master of ceremonies")
  "emcee beecee": [3, 5], // MC BC phonetic

  // ========================================
  // === More Compound Behenchod Variations ===
  // ========================================
  "bhnchod": [3, 5], // Sisterfucker (abbreviation)
  "behench0d": [3, 5], // Sisterfucker (evasion)
  "b3henchod": [3, 5], // Sisterfucker (evasion)
  "bahinchod": [3, 5], // Sisterfucker (variant)
  "boginchod": [3, 5], // Sisterfucker (dialectal)
  "bc sala": [3, 4], // BC bastard
  "beecee": [3, 5], // BC phonetic

  // ========================================
  // === More Body Part Insult Combinations ===
  // ========================================
  "chut ka bhoot": [1, 4], // Vagina's ghost (idiot)
  "gaand ka bhoot": [1, 4], // Ass's ghost (idiot)
  "gaand ka pakoda": [4, 3], // Ass's fritter (useless)
  "lund ki topi": [4, 3], // Dick's cap (foreskin insult)
  "chut ki dhool": [4, 3], // Vagina's dust (worthless)
  "gaand ki dhool": [4, 3], // Ass's dust (worthless)
  "lund ka kira": [4, 3], // Dick's worm (worthless)
  "chut ka kira": [4, 3], // Vagina's worm (worthless)
  "gaand ka kira": [4, 3], // Ass's worm (annoying)
  "tatte ka paseena": [4, 3], // Testicle sweat (disgusting)
  "lund ka makkhi": [4, 3], // Dick's fly (worthless)
  "chut ka jhaag": [4, 3], // Vagina's foam (worthless)
  "gaand ka maal": [4, 5], // Ass's product (shit)
  "lund ka raita": [4, 3], // Dick's raita (mess)
  "chut ka raita": [4, 3], // Vagina's raita (mess)
  "gaand ka raita": [4, 3], // Ass's raita (mess)
  "tatte ka halwa": [4, 3], // Testicle halwa (mess)
  "lund ki safai": [4, 3], // Dick's cleaning (degrading)
  "chut ki safai": [4, 3], // Vagina's cleaning (degrading)
  "gaand ki safai": [4, 3], // Ass's cleaning (degrading)
  "lund ka sipahi": [5, 5], // Dick's soldier (sycophant)
  "chut ka naukri": [4, 3], // Vagina's servant (degrading)
  "gaand ka chamcha": [4, 3], // Ass's spoon (bootlicker)
  "lund ka chaata": [4, 3], // Dick's licker (degrading)
  "chut ka chaata": [4, 3], // Vagina's licker (degrading)
  "gaand ka chaata": [4, 3], // Ass's licker (bootlicker)

  // ========================================
  // === Hinglish Internet Slang Extended ===
  // ========================================
  "bsdk nikal": [2, 3], // BSDK get out
  "mc ki aulaad": [2, 3], // MC's offspring
  "bc ki aulaad": [2, 3], // BC's offspring
  "chutiye madarjaat": [1, 4], // Idiot motherfucker
  "randi ki dukan": [5, 4], // Prostitute's shop
  "lund pe baith": [4, 3], // Sit on the dick
  "gaand mara bsdk": [3, 5], // Fuck off BSDK
  "teri gaand tod dunga": [3, 3], // I'll break your ass
  "teri chut mein bamboo": [4, 3], // Bamboo in your vagina
  "tere muh mein lund": [4, 3], // Dick in your mouth
  "lund choosle": [4, 3], // Suck the dick (texting)
  "gaand marale": [3, 5], // Get your ass fucked (texting)
  "chut dikha randi": [5, 4], // Show vagina prostitute
  "lund se khel": [4, 3], // Play with dick
  "gaand se nikal": [3, 3], // Come out of the ass
  "chut mein ghus": [4, 3], // Go into the vagina
  "gaand mein dum nahi": [3, 3], // No courage (no strength in ass)
  "lund hilake soja": [4, 4], // Shake dick and sleep (masturbate)
  "gaand phati padi hai": [3, 3], // Ass is ripped (scared)
  "chut ka champion": [4, 3], // Champion of vagina
  "gaand ka king": [3, 3], // King of ass (sarcastic)
  "lund ka raja": [4, 3], // King of dick (sarcastic)
  "tatte ke sardaar": [4, 3], // Chief of testicles (sarcastic)
  "mc ki property": [2, 3], // MC's property (insult)
  "bc ki dukaan": [2, 3], // BC's shop (insult)
  "bsdk ki factory": [2, 3], // BSDK's factory (insult)
  "tmkc ka member": [2, 3], // TMKC's member
  "chutiye ka sara": [1, 4], // Village of idiots
  "gandu ka baap": [1, 4], // Father of assholes
  "randi ka mahol": [5, 4], // Prostitute atmosphere
  "harami ka khandaan": [3, 4], // Bastard's family
  "kamina ka baap": [1, 4], // Father of scoundrels
  "laude ka fayda": [4, 3], // Dick's benefit (useless)
  "chut ka fayda": [4, 3], // Vagina's benefit (useless)
  "gaand ka fayda": [3, 3], // Ass's benefit (useless)
  "mc ka beta": [2, 3], // MC's son
  "bc ka beta": [2, 3], // BC's son
  "mc ki beti": [2, 3], // MC's daughter
  "bc ki beti": [2, 3], // BC's daughter

  // ========================================
  // === Religious Insults (Hindi) ===
  // ========================================
  "मुल्ले": [2, 3], // Muslims (derogatory plural)
  "mulle": [2, 3], // Muslims (derogatory, romanized)
  "काफ़िर": [2, 3], // Infidel (used as slur)
  "kafir": [2, 3], // Infidel (romanized)
  "पंडू": [2, 3], // Brahmin (derogatory)
  "pandu": [2, 3], // Brahmin (derogatory, romanized)
  "तुल्ला": [2, 3], // Slur for Muslims
  "tulla": [2, 3], // Slur for Muslims (romanized)
  "मल्लू": [2, 3], // Slur for South Indians
  "mallu": [2, 3], // Slur for South Indians (romanized)
  "गोमांसी": [2, 3], // Beef-eater (anti-Muslim)
  "gomansi": [2, 3], // Beef-eater (romanized)
  "जिहादी": [2, 3], // Jihadist (used as slur)
  "jihadi": [2, 3], // Jihadist (romanized)
  "धर्मध्वजी": [2, 3], // False religious person
  "dharmdhwaji": [2, 3], // False religious (romanized)
  "ढोंगी बाबा": [2, 3], // Fake holy man
  "dhongi baba": [2, 3], // Fake holy man (romanized)
  "पोंगा पंडित": [2, 3], // Hollow priest
  "ponga pandit": [2, 3], // Hollow priest (romanized)
  "चमड़चोर": [2, 3], // Skin thief (caste slur)
  "chamadchor": [2, 3], // Skin thief (romanized)
  "भाटिया": [2, 3], // Caste slur variant
  "bhatiya": [2, 3], // Caste slur variant (romanized)

  // ========================================
  // === More Devanagari Compound Insults ===
  // ========================================
  "तेरी माँ की गांड में कुत्ता": [3, 4], // Dog in your mother's ass
  "तेरे बाप की गांड में लंड": [1, 4], // Dick in your father's ass
  "तेरी बहन की चूत में बम": [4, 4], // Bomb in your sister's vagina
  "तेरी बीवी रंडी": [5, 4], // Your wife is a prostitute
  "तेरा बाप भड़वा": [1, 4], // Your father is a pimp
  "तेरी माँ छिनार": [1, 4], // Your mother is an adulteress
  "तेरे खानदान की रंडी": [5, 4], // Your lineage's prostitute
  "सारा खानदान हरामी": [3, 4], // Entire lineage bastard
  "तेरी औकात कुत्ते की": [1, 4], // Your status is of a dog
  "चूत में बांस": [4, 4], // Bamboo in vagina
  "गांड में लट्ठ": [3, 4], // Club in ass
  "लंड पे मूत": [4, 4], // Piss on dick
  "चूत में उंगली": [4, 4], // Finger in vagina
  "तेरी नानी की गांड": [3, 4], // Your grandmother's ass
  "तेरे दादा की गांड": [1, 4], // Your grandfather's ass
  "तेरी चाची की चूत": [4, 4], // Your aunt's vagina
  "तेरे चाचा का लंड": [4, 4], // Your uncle's dick
  "तेरी भाभी रंडी": [5, 4], // Your sister-in-law prostitute
  "तेरा जीजा गांडू": [3, 4], // Your brother-in-law asshole
  "मेरा लंड ले तेरे मुँह में": [4, 4], // My dick in your mouth
  "तेरी गांड में मेरा लंड": [4, 4], // My dick in your ass
  "तेरी चूत में मेरा लंड": [4, 4], // My dick in your vagina
  "लंड काटके मुँह में डालूंगा": [4, 4], // I'll cut your dick and put it in your mouth
  "गांड तोड़ के हाथ में दूंगा": [3, 4], // I'll break your ass and hand it to you
  "चूत सिलवा दूंगा": [4, 4], // I'll sew up your vagina

  // ========================================
  // === More Romanized Extended Insults ===
  // ========================================
  "teri maa ki gaand mein kutta": [3, 5], // Dog in your mother's ass
  "tere baap ki gaand mein lund": [1, 5], // Dick in your father's ass
  "teri behen ki chut mein bomb": [4, 5], // Bomb in your sister's vagina
  "teri biwi randi": [5, 5], // Your wife is a prostitute
  "tera baap bhadwa": [1, 5], // Your father is a pimp
  "teri maa chhinar": [1, 5], // Your mother is an adulteress
  "tere khandaan ki randi": [5, 5], // Your lineage's prostitute
  "saara khandaan harami": [3, 5], // Entire lineage bastard
  "teri aukaat kutte ki": [1, 5], // Your status is of a dog
  "chut mein baans": [4, 5], // Bamboo in vagina
  "gaand mein latth": [3, 5], // Club in ass
  "lund pe moot": [4, 5], // Piss on dick
  "teri naani ki gaand": [3, 5], // Your grandmother's ass
  "tere daada ki gaand": [1, 5], // Your grandfather's ass
  "teri chaachi ki chut": [4, 5], // Your aunt's vagina
  "tere chaacha ka lund": [4, 5], // Your uncle's dick
  "teri bhabhi randi": [5, 5], // Your sister-in-law prostitute
  "tera jija gandu": [3, 5], // Your brother-in-law asshole
  "mera lund le tere muh mein": [4, 5], // My dick in your mouth
  "teri gaand mein mera lund": [4, 5], // My dick in your ass
  "teri chut mein mera lund": [4, 5], // My dick in your vagina
  "lund kaatke muh mein dalunga": [4, 5], // Cut dick put in mouth
  "gaand todke haath mein dunga": [3, 5], // Break ass hand it over
  "chut silwa dunga": [4, 5], // Sew up vagina

  // ========================================
  // === More Evasion Spellings Extended ===
  // ========================================
  "m@darch0d": [5, 5], // Motherfucker evasion
  "bhens ch0d": [3, 5], // Sisterfucker evasion
  "choot1ya": [1, 5], // Idiot evasion
  "h@rami": [3, 5], // Bastard evasion
  "har@mi": [3, 5], // Bastard evasion
  "r4ndi": [5, 5], // Prostitute evasion
  "l0da": [4, 5], // Dick evasion
  "bh0sd1ke": [4, 5], // Vagina-born evasion
  "jh@nt": [3, 5], // Pubic hair evasion
  "t@tti": [3, 5], // Feces evasion
  "g@@nd": [3, 5], // Ass evasion
  "l#nd": [4, 5], // Dick evasion
  "bh@dwa": [3, 5], // Pimp evasion
  "k@mina": [3, 5], // Scoundrel evasion
  "k4mina": [3, 5], // Scoundrel evasion
  "h1jra": [3, 5], // Transgender evasion
  "ch@kka": [3, 5], // Eunuch evasion
  "s@la": [3, 5], // Bastard evasion
  "s@@la": [3, 5], // Bastard evasion

  // ========================================
  // === Abbreviations & Internet Codes ===
  // ========================================
  "tmkgf": [2, 3], // Teri maa ki gaand faad
  "tgkgm": [2, 3], // Teri gaand ki gaand maar
  "ckd": [2, 3], // Chut ka dhakkan
  "gkd": [2, 3], // Gaand ka dhakkan
  "mkl": [5, 5], // Madarchod ke laude
  "mc bc bkl": [2, 3], // Triple abbreviation compound
  "lmdc": [2, 3], // Lund mein dal chutiye
  "gmd": [2, 3], // Gaand mein daal
  "cmb": [2, 3], // Chut mein bamboo
  "gmb": [2, 3], // Gaand mein bamboo
  "rkb": [2, 3], // Randi ka bachcha
  "hkb": [2, 3], // Harami ka bachcha
  "kkb": [2, 3], // Kutte ka bachcha
  "skb": [2, 3], // Suar ka bachcha
  "bkb": [2, 3], // Bhosdi ka bachcha

  // ========================================
  // === Scatological Insults ===
  // ========================================
  "tatti khaa": [3, 4], // Eat feces
  "goo khaa": [3, 5], // Eat shit
  "moot pi le": [3, 4], // Drink urine
  "paad sungh": [3, 4], // Smell the fart
  "tatti ka keeda": [3, 4], // Feces worm
  "goo ka keeda": [3, 5], // Shit worm
  "tatti mein muh": [3, 4], // Face in feces
  "goo mein lund": [4, 5], // Dick in shit
  "hagna band kar": [3, 5], // Stop shitting
  "mootna band kar": [3, 4], // Stop pissing
  "paadna band kar": [3, 4], // Stop farting
  "tatti se bhi ganda": [3, 4], // Dirtier than feces
  "goo se bhi ghatiya": [3, 5], // Worse than shit
  "nalli ka keeda": [3, 4], // Drain worm
  "gutter ka keeda": [3, 4], // Gutter worm
  "naali ka goo": [3, 4], // Drain's feces
  "sewer ka chuha": [3, 4], // Sewer's rat
  "kachra": [3, 4], // Garbage
  "kachra ka dabba": [3, 4], // Garbage bin
  "kachre ka keeda": [3, 4], // Garbage worm
  "goo ka tukda": [3, 4], // Piece of feces
  "moot ki dhaar": [3, 4], // Stream of urine
  "paad ki badboo": [3, 4], // Fart's stench

  // ========================================
  // === More Hinglish Gaming/Internet ===
  // ========================================
  "noob chutiya": [1, 4], // Noob idiot
  "noob gandu": [3, 3], // Noob asshole
  "noob mc": [2, 3], // Noob MC
  "noob bc": [2, 3], // Noob BC
  "gg chutiye": [1, 4], // GG idiot
  "bloody gandu": [3, 3], // Bloody asshole (Hinglish)
  "damn kamina": [2, 3], // Damn scoundrel (Hinglish)
  "shit harami": [3, 4], // Shit bastard (Hinglish)
  "fuck off bhosdike": [4, 5], // Fuck off vagina-born (Hinglish)
  "get lost madarchod": [5, 5], // Get lost motherfucker (Hinglish)
  "die bsdk": [5, 5], // Die BSDK (Hinglish)
  "trash chutiya": [1, 4], // Trash idiot (Hinglish gaming)
  "bot gandu": [3, 3], // Bot asshole (Hinglish gaming)
  "hacker mc": [2, 3], // Hacker MC (Hinglish gaming)
  "camper bsdk": [2, 3], // Camper BSDK (Hinglish gaming)
  "lag se mara chutiya": [1, 4], // Died from lag idiot (gaming)
  "uninstall kar bsdk": [2, 3], // Uninstall BSDK (gaming)
  "delete kar chutiye": [1, 4], // Delete it idiot (gaming)
  "aim kaha hai mc": [2, 3], // Where's your aim MC (gaming)
  "carry nahi ho raha bc": [2, 3], // Can't carry BC (gaming)
  "feeder mc": [2, 3], // Feeder MC (gaming)
  "inter mc": [2, 3], // Inter MC (gaming)
  "toxic gandu": [3, 3], // Toxic asshole (gaming)
  "report kar bsdk": [2, 3], // Report BSDK (gaming)
  "mute kar chutiye": [1, 4], // Mute it idiot (gaming)
  "abandon kar mc": [2, 3], // Abandon MC (gaming)
  "afk gandu": [3, 3], // AFK asshole (gaming)

  // ========================================
  // === Extended Chutiya Variations ===
  // ========================================
  "chutiyapa kar raha": [3, 4], // Doing idiocy
  "chutiya number 1": [1, 5], // Idiot number 1
  "chutiya saala": [3, 4], // Idiot bastard
  "chutiya bana raha": [1, 4], // Making an idiot (of someone)
  "chutiya banana": [1, 4], // To make an idiot
  "chutiya samjha hai": [1, 4], // Think I'm an idiot?
  "chutiya samajh rakha hai": [1, 4], // Have been taken for an idiot
  "chutiye ki tarah": [1, 4], // Like an idiot
  "chutiye jaisa": [1, 4], // Like an idiot (variant)
  "chutiye ka bhai": [1, 4], // Idiot's brother
  "chutiye ka baap": [1, 4], // Idiot's father
  "chutiye ka baccha": [1, 4], // Idiot's child
  "chutiye ki maa": [1, 4], // Idiot's mother
  "chutiye ki behen": [1, 4], // Idiot's sister
  "puri chutiyagiri": [3, 4], // Full idiocy
  "ekdum chutiya": [1, 4], // Complete idiot
  "number ek chutiya": [1, 4], // Number one idiot
  "pakka chutiya": [1, 4], // Confirmed idiot

  // ========================================
  // === Extended Gandu Variations ===
  // ========================================
  "gandupanti": [3, 4], // Asshole behavior
  "gandu saala": [3, 4], // Asshole bastard
  "gandu number 1": [3, 5], // Asshole number 1
  "gandu ki tarah": [3, 4], // Like an asshole
  "gandu jaisa": [3, 4], // Like an asshole (variant)
  "gandu ka bhai": [3, 4], // Asshole's brother
  "gandu ka baccha": [3, 4], // Asshole's child
  "gandu ki maa": [3, 4], // Asshole's mother
  "pura gandu": [3, 4], // Complete asshole
  "ekdum gandu": [3, 4], // Complete asshole (variant)
  "pakka gandu": [3, 4], // Confirmed asshole
  "gandu pan": [3, 4], // Asshole-ness

  // ========================================
  // === Extended Bakchod Variations ===
  // ========================================
  "bakchodi pel raha": [3, 5], // Doing bullshitting
  "bakchodi band kar": [3, 5], // Stop bullshitting
  "bakchod sala": [3, 4], // Bullshitter bastard
  "bakchodi mat kar": [3, 5], // Don't bullshit
  "bakchod number 1": [3, 5], // Bullshitter number 1
  "bakchod ki aulaad": [3, 5], // Bullshitter's offspring
  "bakchodi mein expert": [3, 5], // Expert in bullshitting
  "bakchodi ka king": [3, 5], // King of bullshitting
  "bakchodi ka baap": [1, 4], // Father of bullshitting
  "bakwas": [3, 4], // Nonsense
  "bakwas band kar": [3, 4], // Stop the nonsense
  "bakwas mat kar": [3, 4], // Don't talk nonsense
  "bakwas ki dukaan": [3, 4], // Shop of nonsense
  "bewakoofi": [1, 4], // Foolishness
  "bewakoof banaya": [1, 4], // Made a fool
  "bevda saala": [1, 3], // Drunkard bastard
  "bhikarin": [3, 4], // Female beggar (insult)

  // ========================================
  // === More Phonetic/Evasion Variants ===
  // ========================================
  "bee ess dee kay": [3, 5], // BSDK phonetic
  "tee em kay see": [3, 5], // TMKC phonetic
  "chootia": [3, 5], // Chutiya phonetic variant
  "haarami": [3, 5], // Harami phonetic variant
  "bhadvaa": [3, 5], // Bhadwa phonetic variant
  "randee": [3, 5], // Randi phonetic variant
  "bhosdikay": [3, 5], // Bhosdike phonetic variant
  "saalaa": [3, 5], // Saala phonetic variant
  "saalee": [3, 5], // Saali phonetic variant
  "haramjaada": [3, 5], // Haramzada phonetic variant
  "haramjaadi": [3, 5], // Haramzadi phonetic variant
  "chaatna": [3, 5], // To lick (vulgar context)
  "choosna": [3, 5], // To suck (vulgar context)
  "chodna": [3, 5], // To fuck
  "gaand maarna": [3, 5], // To fuck ass
  "chut maarna": [4, 5], // To fuck vagina
  "muth maarna": [4, 5], // To masturbate
  "muth marle": [4, 5], // Masturbate (imperative)
  "muth maar ke soja": [4, 5], // Masturbate and sleep
  "hilake soja": [4, 5], // Shake (masturbate) and sleep
  "jhadna": [3, 5], // To ejaculate
  "jhad diya": [3, 5], // Ejaculated

  // ========================================
  // === Threat-Based Insults ===
  // ========================================
  "teri gaand maar dunga": [3, 5], // I'll fuck your ass
  "teri chut faad dunga": [4, 4], // I'll rip your vagina
  "tera lund tod dunga": [4, 4], // I'll break your dick
  "tere tatte masal dunga": [4, 4], // I'll crush your testicles
  "teri maa ke saath": [5, 5], // With your mother (threat)
  "teri behen ke saath": [5, 5], // With your sister (threat)
  "teri biwi ke saath": [5, 5], // With your wife (threat)
  "khandaan bhool jayega": [1, 4], // Your lineage will be forgotten
  "neech ki maut marega": [5, 5], // You'll die a lowly death
  "suar ki maut": [5, 5], // Pig's death
  "naali mein girke marega": [5, 5], // You'll die falling in a drain
  "gutter mein phenk dunga": [1, 4], // I'll throw you in the gutter
  "kachre mein daal dunga": [1, 4], // I'll put you in garbage
  "zinda gaad dunga": [1, 4], // I'll bury you alive
  "haddi tod dunga": [1, 4], // I'll break your bones
  "khaal udhed dunga": [1, 4], // I'll skin you alive
  "cheer dunga": [1, 4], // I'll rip you apart
  "phod dunga": [1, 4], // I'll crack you
  "peet dunga": [1, 4], // I'll beat you
  "maar dunga": [1, 4], // I'll kill/beat you
  "jaan se maar dunga": [1, 4], // I'll kill you
  "kaat ke phenk dunga": [1, 4], // I'll cut and throw you

  // ========================================
  // === Extended Devanagari Sexual Insults ===
  // ========================================
  "तेरी माँ की चूत चाटूँगा": [4, 4], // I'll lick your mother's pussy
  "तेरी बहन की चूत चाटूँगा": [4, 4], // I'll lick your sister's pussy
  "तेरी माँ की गांड चाटूँगा": [3, 4], // I'll lick your mother's ass
  "तेरी बहन की गांड चाटूँगा": [3, 4], // I'll lick your sister's ass
  "तेरी माँ के मुम्मे दबाऊँगा": [4, 4], // I'll squeeze your mother's breasts
  "तेरी बहन के मुम्मे दबाऊँगा": [4, 4], // I'll squeeze your sister's breasts
  "तेरी माँ को उल्टा चोदूँगा": [3, 5], // I'll fuck your mother upside down
  "तेरी बहन को उल्टा चोदूँगा": [3, 5], // I'll fuck your sister upside down
  "तेरी माँ की चूत में हाथ डालूँगा": [4, 4], // I'll put hand in your mother's pussy
  "तेरी माँ की चूत में पैर डालूँगा": [4, 4], // I'll put foot in your mother's pussy
  "तेरा लंड काटूँगा": [4, 4], // I'll cut your dick
  "तेरा लंड तोड़ दूँगा": [4, 4], // I'll break your dick
  "तेरे तत्ते काटूँगा": [4, 4], // I'll cut your balls
  "तेरे तत्ते मसल दूँगा": [4, 4], // I'll crush your balls
  "तेरी माँ की चूत फाड़ दूँगा": [4, 4], // I'll rip your mother's pussy
  "तेरी बहन की चूत फाड़ दूँगा": [4, 4], // I'll rip your sister's pussy
  "तेरी माँ की गांड फाड़ दूँगा": [3, 4], // I'll rip your mother's ass
  "तेरी बहन की गांड फाड़ दूँगा": [3, 4], // I'll rip your sister's ass
  "रंडी का बच्चा तू": [5, 4], // You whore's child
  "वेश्या का बच्चा तू": [5, 4], // You prostitute's child
  "छिनाल का बच्चा तू": [1, 4], // You slut's child
  "तेरी माँ बाज़ार की रंडी": [5, 4], // Your mother is market whore
  "तेरी बहन बाज़ार की रंडी": [5, 4], // Your sister is market whore
  "तेरी माँ सड़क की रंडी": [5, 4], // Your mother is street whore
  "तेरी बहन सड़क की रंडी": [5, 4], // Your sister is street whore
  "तेरी माँ गली की रंडी": [5, 4], // Your mother is alley whore
  "तेरी माँ मोहल्ले की रंडी": [5, 4], // Your mother is neighborhood whore
  "तेरी माँ शहर की रंडी": [5, 4], // Your mother is city whore
  "तेरी माँ देश की रंडी": [5, 4], // Your mother is country whore

  // ========================================
  // === Extended Romanized Sexual Insults ===
  // ========================================
  "teri maa ki chut chatunga": [4, 5], // I'll lick your mother's pussy
  "teri behen ki chut chatunga": [4, 5], // I'll lick your sister's pussy
  "teri maa ki gaand chatunga": [3, 5], // I'll lick your mother's ass
  "teri behen ki gaand chatunga": [3, 5], // I'll lick your sister's ass
  "teri maa ke mumme dabaunga": [4, 5], // I'll squeeze your mother's breasts
  "teri behen ke mumme dabaunga": [4, 5], // I'll squeeze your sister's breasts
  "teri maa ko ulta chodunga": [3, 5], // I'll fuck your mother upside down
  "teri behen ko ulta chodunga": [3, 5], // I'll fuck your sister upside down
  "teri maa ki chut mein haath dalunga": [4, 5], // I'll put hand in your mother's pussy
  "teri maa ki chut mein pair dalunga": [4, 5], // I'll put foot in your mother's pussy
  "tera lund katunga": [4, 5], // I'll cut your dick
  "tere tatte katunga": [4, 5], // I'll cut your balls
  "teri maa ki chut phaad dunga": [4, 5], // I'll rip your mother's pussy
  "teri behen ki chut phaad dunga": [4, 5], // I'll rip your sister's pussy
  "teri maa ki gaand phaad dunga": [3, 5], // I'll rip your mother's ass
  "teri behen ki gaand phaad dunga": [3, 5], // I'll rip your sister's ass
  "randi ka bachcha tu": [5, 5], // You whore's child
  "veshya ka bachcha tu": [5, 5], // You prostitute's child
  "chhinal ka bachcha tu": [1, 5], // You slut's child
  "teri maa bazaar ki randi": [5, 5], // Your mother is market whore
  "teri behen bazaar ki randi": [5, 5], // Your sister is market whore
  "teri maa sadak ki randi": [5, 5], // Your mother is street whore
  "teri behen sadak ki randi": [5, 5], // Your sister is street whore
  "teri maa gali ki randi": [5, 5], // Your mother is alley whore
  "teri maa mohalle ki randi": [5, 5], // Your mother is neighborhood whore
  "teri maa shehar ki randi": [5, 5], // Your mother is city whore
  "teri maa desh ki randi": [5, 5], // Your mother is country whore

  // ========================================
  // === Extended Bhojpuri/Magahi/Maithili ===
  // ========================================
  "tohar maai ke chodi": [3, 5], // I'll fuck your mother (Bhojpuri)
  "tohar bahini ke chodi": [3, 5], // I'll fuck your sister (Bhojpuri)
  "tohar maai randi ba": [5, 4], // Your mother is a whore (Bhojpuri)
  "tohar bahini randi ba": [5, 4], // Your sister is a whore (Bhojpuri)
  "tohar maai ke bur me danda": [4, 4], // Stick in your mother's pussy (Bhojpuri)
  "tohar maai ke bur me baans": [4, 4], // Bamboo in your mother's pussy (Bhojpuri)
  "tohar bur me baans": [4, 4], // Bamboo in your pussy (Bhojpuri)
  "tohar gaand me baans": [3, 4], // Bamboo in your ass (Bhojpuri)
  "chodua kahin ke": [3, 5], // Fucker (Bhojpuri)
  "burchod kahin ke": [4, 5], // Pussy fucker (Bhojpuri)
  "gaandchod kahin ke": [3, 5], // Ass fucker (Bhojpuri)
  "tohar maai ke bhosda": [4, 4], // Your mother's pussy (Bhojpuri)
  "tohar maai ke land khai": [4, 4], // Your mother eats dick (Bhojpuri)
  "tohar bahini ke land khai": [4, 4], // Your sister eats dick (Bhojpuri)
  "harami ke baccha re": [3, 4], // Bastard's child (Bhojpuri)
  "raand ke baccha re": [5, 4], // Whore's child (Bhojpuri)
  "tohar maai ke chodi dhalaan me": [3, 5], // I'll fuck your mother on the porch (Bhojpuri)
  "tohar maai sabke chode": [5, 5], // Your mother fucks everyone (Bhojpuri)
  "tohar bahini sabke chode": [3, 5], // Your sister fucks everyone (Bhojpuri)
  "tor mai ke chodi": [3, 5], // I'll fuck your mother (Magahi)
  "tor mai randi he": [5, 4], // Your mother is whore (Magahi)
  "tor bahin ke chodi": [3, 5], // I'll fuck your sister (Magahi)
  "tor mai ke bur": [4, 4], // Your mother's pussy (Magahi)
  "tor baap ke lauda": [1, 4], // Your father's dick (Magahi)
  "tor mai ke gaand me danda": [3, 4], // Stick in your mother's ass (Magahi)
  "tohar maay ke chodi": [3, 5], // I'll fuck your mother (Maithili)
  "tohar maay randi chhi": [5, 4], // Your mother is whore (Maithili)
  "tohar maay ke yoni": [4, 4], // Your mother's pussy (Maithili)
  "tohar baap ke ling": [1, 4], // Your father's dick (Maithili)

  // ========================================
  // === Extended Haryanvi/Rajasthani ===
  // ========================================
  "teri maa ki phuddi": [4, 4], // Your mother's pussy (Haryanvi)
  "teri behen ki phuddi": [4, 4], // Your sister's pussy (Haryanvi)
  "teri maa ki phuddi mein keel": [4, 4], // Nail in your mother's pussy (Haryanvi)
  "teri maa ki phuddi mein danda": [4, 4], // Stick in your mother's pussy (Haryanvi)
  "chhodya tera": [3, 5], // Fucker (Haryanvi)
  "phuddi ka": [4, 4], // Of pussy (Haryanvi)
  "teri maa ko chhodunga": [3, 5], // I'll fuck your mother (Haryanvi)
  "teri behen ko chhodunga": [3, 5], // I'll fuck your sister (Haryanvi)
  "randi ki bachchi": [5, 4], // Whore's daughter (Haryanvi)
  "chhinal ki bachchi": [3, 4], // Slut's daughter (Haryanvi)
  "thaari maa ri chut": [4, 4], // Your mother's pussy (Rajasthani)
  "thaari behen ri chut": [4, 4], // Your sister's pussy (Rajasthani)
  "thaari maa ro bhosda": [4, 4], // Your mother's pussy (Rajasthani)
  "thaari maa ne chodu": [3, 5], // I'll fuck your mother (Rajasthani)
  "thaari behen ne chodu": [3, 5], // I'll fuck your sister (Rajasthani)
  "randi ko bachcho": [5, 4], // Whore's child (Rajasthani)
  "chhinal ko bachcho": [3, 4], // Slut's child (Rajasthani)
  "thaari maa bazaar ri randi": [5, 4], // Your mother is market whore (Rajasthani)
  "thaari maa gali ri randi": [5, 4], // Your mother is alley whore (Rajasthani)
  "thaari maa gaon ri randi": [5, 4], // Your mother is village whore (Rajasthani)

  // ========================================
  // === Extended Gujarati Crossover ===
  // ========================================
  "tari maa ni chut": [4, 4], // Your mother's pussy (Gujarati)
  "tari behen ni chut": [4, 4], // Your sister's pussy (Gujarati)
  "tari maa no bhosdo": [4, 4], // Your mother's pussy (Gujarati)
  "tari maa ne chodiyo": [3, 5], // Fucked your mother (Gujarati)
  "tari behen ne chodiyo": [3, 5], // Fucked your sister (Gujarati)
  "chodyo tari maa ne": [3, 5], // Fucked your mother (Gujarati alt)
  "randi no chhokro": [5, 4], // Whore's boy (Gujarati)
  "randi ni chhokri": [5, 4], // Whore's girl (Gujarati)
  "veshya no chhokro": [5, 4], // Prostitute's boy (Gujarati)
  "tari maa randi chhe": [5, 4], // Your mother is whore (Gujarati)
  "tari behen randi chhe": [5, 4], // Your sister is whore (Gujarati)
  "taro baap gaandu chhe": [1, 4], // Your father is a faggot (Gujarati)
  "bhenchod gujarati": [3, 5], // Sister fucker Gujarati
  "madarchod gujarati": [5, 5], // Mother fucker Gujarati
  "gheli chut": [4, 4], // Crazy pussy (Gujarati)
  "gando lodo": [4, 4], // Crazy dick (Gujarati)
  "tari maa ni gaand": [3, 4], // Your mother's ass (Gujarati)
  "tari behen ni gaand": [3, 4], // Your sister's ass (Gujarati)
  "gaandio tu": [3, 4], // Faggot you (Gujarati)
  "chakko tu": [3, 4], // Eunuch you (Gujarati)

  // ========================================
  // === Extended Punjabi Crossover ===
  // ========================================
  "teri maa di phuddi": [4, 4], // Your mother's pussy (Punjabi)
  "teri bhain di phuddi": [4, 4], // Your sister's pussy (Punjabi)
  "teri maa da bhosda": [4, 4], // Your mother's pussy (Punjabi)
  "teri maa nu chodaan": [3, 5], // I'll fuck your mother (Punjabi)
  "teri bhain nu chodaan": [3, 5], // I'll fuck your sister (Punjabi)
  "randi da puttar": [5, 4], // Whore's son (Punjabi)
  "randi di dhee": [5, 4], // Whore's daughter (Punjabi)
  "kanjri da puttar": [5, 4], // Whore's son (Punjabi alt)
  "kanjri di dhee": [5, 4], // Whore's daughter (Punjabi alt)
  "teri maa randi aa": [5, 4], // Your mother is whore (Punjabi)
  "teri bhain randi aa": [5, 4], // Your sister is whore (Punjabi)
  "penchod tu": [3, 5], // Sister fucker you (Punjabi)
  "maachod tu": [5, 5], // Mother fucker you (Punjabi)
  "lann da tu": [4, 4], // Of dick you (Punjabi)
  "phuddu tu": [4, 4], // Pussy you (Punjabi)
  "teri maa di gaand": [3, 4], // Your mother's ass (Punjabi)
  "teri bhain di gaand": [3, 4], // Your sister's ass (Punjabi)
  "gaandu oye": [3, 4], // Faggot hey (Punjabi)
  "chakke oye": [3, 4], // Eunuch hey (Punjabi)
  "teri maa nu kutta chodda": [3, 5], // Dog fucks your mother (Punjabi)

  // ========================================
  // === Extended Emasculation Insults (Hindi) ===
  // ========================================
  "तेरा लंड नहीं खड़ा होता": [4, 4], // Your dick can't get up
  "तेरा लंड काम नहीं करता": [4, 4], // Your dick doesn't work
  "तेरा लंड मर गया": [5, 5], // Your dick died
  "तू नपुंसक है": [1, 4], // You are impotent
  "तू हिजड़ा है": [1, 4], // You are a hijra
  "तेरा लंड कीड़े जैसा": [4, 4], // Your dick is like a worm
  "तेरा लंड उंगली जैसा": [4, 4], // Your dick is like a finger
  "तेरा लंड माचिस जैसा": [4, 4], // Your dick is like a matchstick
  "tera lund nahi khada hota": [4, 4], // Your dick can't get up
  "tera lund kaam nahi karta": [4, 4], // Your dick doesn't work
  "tera lund mar gaya": [5, 5], // Your dick died
  "tu napunsak hai": [1, 4], // You are impotent
  "tu hijra hai": [1, 4], // You are a hijra
  "tu chhakka hai": [1, 4], // You are a eunuch
  "tera lund keede jaisa": [4, 4], // Your dick is like a worm
  "tera lund ungli jaisa": [4, 4], // Your dick is like a finger
  "tera lund maachis jaisa": [4, 4], // Your dick is like a matchstick

  // ========================================
  // === Extended Body Part Combos (Hindi) ===
  // ========================================
  "बड़ी चूत की औरत": [4, 3], // Big pussy woman
  "छोटे लंड का आदमी": [4, 3], // Small dick man
  "बड़ी गांड का आदमी": [4, 3], // Big ass man
  "छोटे तत्ते का आदमी": [4, 3], // Small balls man
  "टेढ़े लंड का आदमी": [4, 3], // Crooked dick man
  "ढीली चूत की औरत": [4, 3], // Loose pussy woman
  "लटकी हुई चूचियाँ": [4, 3], // Saggy breasts
  "लटका हुआ लंड": [4, 3], // Saggy dick
  "badi chut ki aurat": [4, 3], // Big pussy woman
  "chhote lund ka aadmi": [4, 3], // Small dick man
  "badi gaand ka aadmi": [4, 3], // Big ass man
  "chhote tatte ka aadmi": [4, 3], // Small balls man
  "tedhe lund ka aadmi": [4, 3], // Crooked dick man
  "dheeli chut ki aurat": [4, 3], // Loose pussy woman
  "latki hui chuchiya": [4, 3], // Saggy breasts
  "latka hua lund": [4, 3], // Saggy dick

  // ========================================
  // === Extended Scatological (Hindi) ===
  // ========================================
  "तेरे मुँह में गू डालूँगा": [3, 5], // I'll put shit in your mouth
  "तेरे मुँह में मूतूँगा": [3, 4], // I'll piss in your mouth
  "तेरे खाने में गू डालूँगा": [3, 5], // I'll put shit in your food
  "तेरे खाने में मूत डालूँगा": [3, 4], // I'll put piss in your food
  "तेरी माँ के मुँह में गू": [3, 5], // Shit in your mother's mouth
  "तेरी बहन के मुँह में गू": [3, 5], // Shit in your sister's mouth
  "गू खोर तू": [3, 5], // You shit eater
  "मूत खोर तू": [3, 4], // You piss drinker
  "हगू चूतिया": [1, 4], // Shit idiot
  "मूतू चूतिया": [1, 4], // Piss idiot
  "पाद खोर तू": [3, 4], // You fart sniffer
  "tere munh mein gu dalunga": [3, 5], // I'll put shit in your mouth
  "tere munh mein mutunga": [3, 4], // I'll piss in your mouth
  "tere khane mein gu dalunga": [3, 5], // I'll put shit in your food
  "tere khane mein mut dalunga": [3, 4], // I'll put piss in your food
  "teri maa ke munh mein gu": [3, 5], // Shit in your mother's mouth
  "teri behen ke munh mein gu": [3, 5], // Shit in your sister's mouth
  "gu khor tu": [3, 5], // You shit eater
  "mut khor tu": [3, 4], // You piss drinker
  "hagu chutiya": [1, 4], // Shit idiot
  "mutu chutiya": [1, 4], // Piss idiot
  "paad khor tu": [3, 4], // You fart sniffer

  // ========================================
  // === Extended Abuse Phrases (Hindi) ===
  // ========================================
  "teri zindagi ki koi keemat nahi": [3, 4], // Your life has no value
  "tu paida hi na hota toh achha hota": [3, 4], // Better if you weren't born
  "teri maa tere baap ko nahi jaanti": [1, 4], // Your mother doesn't know your father
  "tera baap kaun hai koi nahi jaanta": [1, 4], // Nobody knows who your father is
  "teri maa ne tujhe kachra mein phenka tha": [3, 4], // Your mother threw you in garbage
  "tujhe koi nahi chahta": [3, 4], // Nobody wants you
  "tera munh dekh ke log thukte hain": [3, 4], // People spit seeing your face
  "tera naam sunke log haste hain": [3, 4], // People laugh hearing your name
  "teri family mein sab randi": [5, 4], // Everyone in your family is whore
  "teri family mein sab harami": [3, 4], // Everyone in your family is bastard
  "teri khandaan mein sab chodu": [3, 5], // Everyone in your lineage is fucker
  "तेरी ज़िन्दगी की कोई कीमत नहीं": [3, 4], // Your life has no value
  "तू पैदा ही ना होता तो अच्छा होता": [3, 4], // Better if you weren't born
  "तेरी माँ तेरे बाप को नहीं जानती": [1, 4], // Your mother doesn't know your father
  "तेरा बाप कौन है कोई नहीं जानता": [1, 4], // Nobody knows who your father is
  "तुझे कोई नहीं चाहता": [3, 4], // Nobody wants you
  "तेरा मुँह देखके लोग थूकते हैं": [3, 4], // People spit seeing your face
  "तेरा नाम सुनके लोग हँसते हैं": [3, 4], // People laugh hearing your name
  "तेरी फैमिली में सब रंडी": [5, 4], // Everyone in your family is whore
  "तेरी फैमिली में सब हरामी": [3, 4], // Everyone in your family is bastard
  "तेरी खानदान में सब चोदू": [3, 5], // Everyone in your lineage is fucker

  // ========================================
  // === Extended Internet/Gaming Hindi ===
  // ========================================
  "noob saala madarchod": [5, 5], // Noob motherfucker
  "noob saala bhenchod": [3, 5], // Noob sisterfucker
  "noob saala chutiya": [1, 4], // Noob idiot
  "camper madarchod": [5, 5], // Camper motherfucker
  "camper bhenchod": [3, 5], // Camper sisterfucker
  "hacker madarchod": [5, 5], // Hacker motherfucker
  "hacker bhenchod": [3, 5], // Hacker sisterfucker
  "feeder madarchod": [5, 5], // Feeder motherfucker
  "feeder bhenchod": [3, 5], // Feeder sisterfucker
  "troll madarchod": [5, 5], // Troll motherfucker
  "toxic madarchod": [5, 5], // Toxic motherfucker
  "afk madarchod": [5, 5], // AFK motherfucker
  "gg madarchod": [5, 5], // GG motherfucker
  "ez madarchod": [5, 5], // EZ motherfucker
  "gg lund choos": [4, 3], // GG suck dick
  "ez lund choos": [4, 3], // EZ suck dick
  "game chhod madarchod": [5, 5], // Leave game motherfucker
  "uninstall kar madarchod": [5, 5], // Uninstall motherfucker
  "delete kar bhenchod": [3, 5], // Delete sisterfucker
  "lag ki maa ki chut": [3, 5], // Fuck lag's mother
  "ping ki maa ki chut": [3, 5], // Fuck ping's mother
  "server ki maa ki chut": [3, 5], // Fuck server's mother
  "report karunga madarchod": [5, 5], // I'll report motherfucker
  "stream sniper madarchod": [5, 5], // Stream sniper motherfucker

  // ========================================
  // === Extended Animal Insults (Hindi) ===
  // ========================================
  "कुत्ते की माँ का": [1, 4], // Dog's mother's
  "सुअर की माँ का": [1, 4], // Pig's mother's
  "गधे की माँ का": [1, 4], // Donkey's mother's
  "बंदर की माँ का": [1, 4], // Monkey's mother's
  "बकरी चोद": [3, 5], // Goat fucker
  "गाय चोद": [3, 5], // Cow fucker
  "घोड़ी चोद": [3, 5], // Mare fucker
  "कुतिया की औलाद": [1, 4], // Bitch's offspring
  "सुअरनी की औलाद": [1, 4], // Sow's offspring
  "kutte ki maa ka": [1, 4], // Dog's mother's
  "suar ki maa ka": [1, 4], // Pig's mother's
  "gadhe ki maa ka": [1, 4], // Donkey's mother's
  "bandar ki maa ka": [1, 4], // Monkey's mother's
  "bakri chod": [3, 5], // Goat fucker
  "gaay chod": [3, 5], // Cow fucker
  "ghodi chod": [3, 5], // Mare fucker
  "kutiya ki aulad": [1, 4], // Bitch's offspring
  "suarni ki aulad": [1, 4], // Sow's offspring
  // ========================================
  // === Extended Hindi/Hinglish Words ===
  // ========================================
  "aand": [3, 4], // Testicles
  "aandu": [3, 4], // Testicle (slang)
  "balatkar": [5, 5], // Rape
  "beti chod": [5, 5], // Daughter fucker
  "bhadve": [3, 4], // Pimp / prostitute (variant)
  "bhandve": [3, 4], // Pimp / prostitute (variant)
  "bhootni ke": [3, 4], // Ghost's offspring (insult)
  "bhosadi ke": [5, 5], // Vagina (insult, variant)
  "boobe": [3, 3], // Breasts (slang)
  "chinki": [4, 4], // Racial slur against East Asians
  "chooche": [3, 3], // Breasts (slang)
  "choochi": [3, 3], // Breasts (slang)
  "choot ke baal": [3, 4], // Pubic hair (vulgar)
  "chuche": [3, 3], // Breasts (slang)
  "chuchi": [3, 3], // Breasts (slang)
  "chudai khanaa": [3, 5], // Brothel (vulgar)
  "chudan chudai": [3, 5], // Sexual intercourse (vulgar)
  "chut ke dhakkan": [3, 4], // Vagina lid (insult)
  "chut maarli": [3, 5], // Vagina fuck (vulgar)
  "chutadd": [3, 4], // Buttocks (vulgar, variant)
  "chutan": [3, 4], // Vagina (vulgar, variant)
  "gaandufad": [3, 4], // Anus tear (vulgar)
  "gasti": [3, 4], // Prostitute (variant)
  "ghassa": [3, 4], // Slut (vulgar)
  "ghasti": [3, 4], // Prostitute (variant)
  "hawas": [2, 3], // Lust / greed
  "hawas ke pujari": [2, 3], // Worshipper of lust
  "jhant chaatu": [3, 4], // Pubic hair licker (vulgar)
  "jhant ke baal": [3, 4], // Pubic hair (vulgar)
  "kamine": [2, 3], // Scoundrel / vile person
  "kutta kamina": [2, 3], // Dog scoundrel (insult)
  "kutte ki jat": [2, 3], // Dog caste (insult)
  "lundure": [3, 4], // Penis (vulgar, variant)
  "maa ki chut": [5, 5], // Mother's vagina (insult)
  "mooh mein le": [3, 5], // Take it in your mouth (vulgar)
  "mutth": [3, 4], // Masturbation (vulgar)
  "najayaz": [2, 3], // Illegitimate
  "najayaz aulaad": [2, 3], // Illegitimate offspring
  "najayaz paidaish": [2, 3], // Illegitimate birth
  "paki": [5, 5], // Racial slur against South Asians
  "patakha": [1, 2], // Firecracker (used as sexualised compliment)
  "saala kutta": [2, 3], // Brother-in-law dog (insult)
  "saali kutti": [2, 3], // Sister-in-law bitch (insult)
  "saali randi": [3, 4], // Sister-in-law whore (insult)
  "teri maa ka bhosada": [5, 5], // Your mother's vagina (insult)
  "teri maa ka boba chusu": [5, 5], // Suck your mother's breast (insult)
};
const hindiBadWords: Record<string, { s: number; c: number }> = {};
for (const [k, [s, c]] of Object.entries(_d)) {
    hindiBadWords[k] = { s, c };
}
export default hindiBadWords;
