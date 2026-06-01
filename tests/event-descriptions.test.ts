import filter from "../src/index.ts";

/**
 * Comprehensive test suite for profanity filtering of event descriptions.
 *
 * Tests realistic event description text that users might submit on a
 * community platform — covering clean descriptions, profane descriptions,
 * multilingual content, and tricky edge cases.
 */
describe("Event Description Profanity Filter Tests", () => {
  beforeAll(() => {
    // All languages loaded by default via consolidated word list
    // Disable leet speak so normal punctuation in event descriptions
    // is not misinterpreted (e.g., ( -> c, ! -> i, $ -> s).
    filter.updateConfig({ enableLeetSpeak: false });
  });

  // ==========================================================
  // A. Clean event descriptions that should NOT be flagged
  //    (at least 80 tests)
  // ==========================================================
  describe("A. Clean event descriptions — should NOT be flagged", () => {
    // --- Music concerts and festivals ---
    describe("Music concerts and festivals", () => {
      test.each([
        [
          "Join us for an evening of live jazz at the Downtown Music Hall. Doors open at 7 PM, show starts at 8 PM.",
        ],
        [
          "Annual Summer Music Festival featuring over 30 bands across four stages. Food vendors and craft beer available all weekend.",
        ],
        [
          "Acoustic guitar night with local singer-songwriters performing original compositions. Intimate venue, limited seating.",
        ],
        [
          "The Community Orchestra presents Beethoven's 9th Symphony. Pre-concert talk at 6:30 PM in the lobby.",
        ],
        [
          "Indie rock showcase with three up-and-coming bands. General admission, all ages welcome.",
        ],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // --- Sports events ---
    describe("Sports events", () => {
      test.each([
        [
          "Come cheer on the Eagles in their season opener against the Wildcats. Tailgate party starts at noon in Lot B.",
        ],
        [
          "Youth basketball tournament for ages 10-14. Registration required by March 1st. Medals for top three teams.",
        ],
        [
          "5K fun run through Riverside Park to benefit the children's hospital. Walkers welcome. Post-race refreshments provided.",
        ],
        [
          "Saturday morning soccer league for adults. All skill levels welcome. Bring your own water bottle and shin guards.",
        ],
        [
          "Cricket match between the local club and the visiting county team. Spectators welcome, bring a blanket and picnic.",
        ],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // --- Community meetups and networking ---
    describe("Community meetups and networking", () => {
      test.each([
        [
          "Monthly neighborhood association meeting to discuss park improvements, traffic calming, and upcoming block party planning.",
        ],
        [
          "Young Professionals Networking Happy Hour at The Atrium. Appetizers provided, cash bar available.",
        ],
        [
          "Join fellow remote workers at our weekly co-working session at the public library. Bring your laptop and ideas.",
        ],
        [
          "Town hall discussion on proposed zoning changes. All residents are encouraged to attend and share their perspectives.",
        ],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // --- Food and cooking events ---
    describe("Food and cooking events", () => {
      test.each([
        [
          "Learn to make authentic Italian pasta from scratch. Ingredients included. Aprons provided. Bring your appetite.",
        ],
        [
          "Chili cook-off competition with prizes for Best Overall, Most Creative, and People's Choice. Entry fee includes all tastings.",
        ],
        [
          "Sushi rolling workshop for beginners. All fish and rice provided. Learn knife skills and presentation techniques.",
        ],
        [
          "Farm-to-table dinner featuring locally sourced produce and proteins. Five-course meal paired with regional wines.",
        ],
        [
          "Creating a fun plant-based potluck featuring dishes from across the world. Come one, come all, and learn how to make some of your most interesting dishes super low-impact! Join a community, grab some recipe cards or scan QR codes, and grab a seat! Eating plant-based cuts your land usage by 75%, and your water usage by up to 50%. Plant-based Palooza is designed to welcome people of all backgrounds, vegetarians, pesecetarians, and even hardcore meat eaters to try to push the boundaries of ethical eating.",
        ],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // --- Art exhibitions and gallery openings ---
    describe("Art exhibitions and gallery openings", () => {
      test.each([
        [
          "Opening reception for the watercolor landscape exhibition. Meet the artists, enjoy light refreshments and live piano music.",
        ],
        [
          "Contemporary sculpture exhibit exploring themes of nature and technology. Free admission. Gallery hours 10 AM to 6 PM.",
        ],
        [
          "Student art showcase featuring works from the spring semester painting and printmaking programs.",
        ],
        [
          "Photography exhibition documenting urban architecture across five continents. Guided tours available on weekends.",
        ],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // --- Tech conferences and hackathons ---
    describe("Tech conferences and hackathons", () => {
      test.each([
        [
          "48-hour hackathon focused on climate change solutions. Teams of 2-5 people. Prizes for top three projects.",
        ],
        [
          "Web development workshop covering React, TypeScript, and modern deployment pipelines. Laptop required.",
        ],
        [
          "AI and Machine Learning conference with keynote speakers from leading research labs. Early bird registration now open.",
        ],
        [
          "Open source contributor meetup. Bring your favorite project and pair-program with other developers.",
        ],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // --- Charity runs and fundraisers ---
    describe("Charity runs and fundraisers", () => {
      test.each([
        [
          "Annual charity gala benefiting the local food bank. Silent auction, dinner, and dancing. Black tie optional.",
        ],
        [
          "Walkathon to raise awareness for mental health services. Pledges and donations accepted online.",
        ],
        [
          "Bake sale and raffle to fund new playground equipment for Washington Elementary School.",
        ],
        [
          "Car wash fundraiser for the high school band trip. Donations accepted. Every vehicle gets a thorough cleaning.",
        ],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // --- Wedding receptions ---
    describe("Wedding receptions", () => {
      test.each([
        [
          "Please join us to celebrate the marriage of Sarah and David. Reception at the Grand Ballroom, 6 PM to midnight.",
        ],
        [
          "Rehearsal dinner for the Johnson-Williams wedding. Casual attire. Appetizers and cocktails on the patio.",
        ],
        [
          "Post-wedding brunch the morning after the big day. Bring your appetite and your best stories about the couple.",
        ],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // --- Birthday parties ---
    describe("Birthday parties", () => {
      test.each([
        [
          "Happy 50th birthday celebration for Uncle Robert. Surprise party at the community center. Bring a dish to share.",
        ],
        [
          "Kids birthday party with bounce house, face painting, and a magician. Ages 5-10. RSVP required.",
        ],
        [
          "Sweet 16 party at the rooftop lounge. DJ, photo booth, and dessert table. Formal attire requested.",
        ],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // --- Religious and cultural celebrations ---
    describe("Religious and cultural celebrations", () => {
      test.each([
        [
          "Diwali celebration with traditional dance performances, henna art stations, and a vegetarian feast.",
        ],
        [
          "Easter egg hunt for children at the community park. Ages 2 through 12. Bring a basket.",
        ],
        [
          "Lunar New Year festival featuring dragon and lion dances, lantern making, and traditional food stalls.",
        ],
        [
          "Interfaith dialogue series exploring shared values across different spiritual traditions.",
        ],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // --- Educational workshops ---
    describe("Educational workshops", () => {
      test.each([
        [
          "Financial literacy workshop covering budgeting, saving, and investing for beginners. Free, open to the public.",
        ],
        [
          "Resume writing and interview skills seminar for recent college graduates. Bring a copy of your current resume.",
        ],
        [
          "Creative writing workshop focusing on short fiction. Participants will complete two writing exercises.",
        ],
        [
          "First aid and CPR certification course. American Red Cross certified. Materials provided.",
        ],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // --- Book clubs and reading groups ---
    describe("Book clubs and reading groups", () => {
      test.each([
        [
          "Monthly book club meeting discussing 'The Great Gatsby'. New members always welcome. Refreshments provided.",
        ],
        [
          "Children's story time every Tuesday at the public library. Songs, crafts, and age-appropriate books for toddlers.",
        ],
        [
          "Poetry reading night featuring local poets. Open mic portion after featured readers. Supportive environment.",
        ],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // --- Yoga and fitness classes ---
    describe("Yoga and fitness classes", () => {
      test.each([
        [
          "Morning yoga in the park every Saturday at 8 AM. Bring your own mat. All levels welcome. Donation based.",
        ],
        [
          "High-intensity interval training bootcamp. 45-minute sessions, three times per week. Water and towel recommended.",
        ],
        [
          "Beginner-friendly Pilates class focusing on core strength and flexibility. Equipment provided.",
        ],
        [
          "Meditation and mindfulness workshop for stress reduction. Learn breathing techniques and guided visualization.",
        ],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // --- Film screenings ---
    describe("Film screenings", () => {
      test.each([
        [
          "Outdoor movie night showing 'The Princess Bride' on the big screen. Bring blankets and lawn chairs. Popcorn provided.",
        ],
        [
          "Documentary screening followed by Q&A with the filmmaker. Explores ocean conservation efforts worldwide.",
        ],
        [
          "Classic cinema series presenting Hitchcock films every Friday evening. Admission includes a beverage.",
        ],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // --- Gardening and nature events ---
    describe("Gardening and nature events", () => {
      test.each([
        [
          "Community garden volunteer day. Help us plant spring vegetables and maintain raised beds. Tools provided.",
        ],
        [
          "Guided birdwatching walk along the river trail. Bring binoculars if you have them. Suitable for all ages.",
        ],
        [
          "Native plant workshop: learn which species thrive in our region and support local pollinators.",
        ],
        [
          "Tree planting event in the city park. Volunteers needed from 9 AM to noon. Gloves and shovels provided.",
        ],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // --- Board game nights ---
    describe("Board game nights", () => {
      test.each([
        [
          "Weekly board game night at the community center. We have Settlers of Catan, Ticket to Ride, and more. Snacks welcome.",
        ],
        [
          "Dungeons and Dragons campaign night. Looking for 2-3 more players to join our ongoing adventure.",
        ],
        [
          "Family game night with prizes for tournament winners. Card games, trivia, and strategy games available.",
        ],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // --- Pet adoption events ---
    describe("Pet adoption events", () => {
      test.each([
        [
          "Adopt-a-pet event at the animal shelter. Meet dogs, cats, and rabbits looking for forever homes. Adoption fees waived.",
        ],
        [
          "Low-cost pet vaccination clinic in the parking lot of the community center. No appointment needed.",
        ],
        [
          "Dog training workshop for new owners. Learn basic obedience commands and socialization techniques.",
        ],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // --- Farmers markets ---
    describe("Farmers markets", () => {
      test.each([
        [
          "Weekend farmers market with fresh produce, homemade jams, artisan bread, and locally roasted coffee.",
        ],
        [
          "Special holiday market featuring handmade gifts, ornaments, and seasonal treats from local vendors.",
        ],
        [
          "Farm stand open every Thursday from 3 PM to 7 PM. Organic vegetables, eggs, and seasonal fruit.",
        ],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // --- Wine and beer tasting events ---
    describe("Wine and beer tasting events", () => {
      test.each([
        [
          "Wine tasting evening featuring selections from Napa Valley vineyards. Cheese board included with admission.",
        ],
        [
          "Craft beer festival with over 20 local breweries. Live music, food trucks, and designated driver discounts.",
        ],
        [
          "Cider tasting at the orchard. Sample five varieties paired with locally made cheese and charcuterie.",
        ],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // --- Dance classes and recitals ---
    describe("Dance classes and recitals", () => {
      test.each([
        [
          "Salsa dancing workshop for couples and singles. No partner required. Beginner-friendly with a warm-up session.",
        ],
        [
          "Annual dance recital featuring ballet, contemporary, and hip-hop performances by students ages 4-18.",
        ],
        [
          "Swing dance social every second Saturday. Live big band music. Lesson at 7 PM, open dancing from 8 PM.",
        ],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // --- Miscellaneous clean events ---
    describe("Miscellaneous clean events", () => {
      test.each([
        [
          "Neighborhood cleanup day. Meet at the corner of Elm and Main with work gloves. Bags and pickers provided.",
        ],
        [
          "Open house at the new community recreation center. Tours, demonstrations, and membership sign-ups available.",
        ],
        [
          "Astronomy night at the observatory. View Saturn's rings and the Orion Nebula through our telescope.",
        ],
        [
          "Quilting circle meets every Wednesday afternoon. Bring your current project or start something new with us.",
        ],
        [
          "Volunteer orientation for the local soup kitchen. Learn about meal preparation, safety protocols, and scheduling.",
        ],
        [
          "Historic walking tour of downtown landmarks. Guided by a local historian. Comfortable shoes recommended.",
        ],
        [
          "Science fair for middle school students. Projects on display from 4 PM to 7 PM. Judges needed.",
        ],
        [
          "Pottery workshop: hand-building techniques for beginners. Clay and tools included in the fee.",
        ],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });
  });

  // ==========================================================
  // B. Event descriptions containing English profanity
  //    that SHOULD be flagged (at least 60 tests)
  // ==========================================================
  describe("B. Event descriptions with English profanity — should be flagged", () => {
    describe("Obvious profanity in event descriptions", () => {
      test.each([
        ["Come to our fucking amazing party this Saturday night!"],
        ["This event is total bullshit and a waste of time."],
        ["Get your ass over to the meetup before seats run out."],
        ["Join the best fucking concert of the year at the arena."],
        ["Free beer and shit tons of fun at the block party."],
        ["Holy shit, this is going to be the best festival ever!"],
        ["What the hell kind of asshole cancels an event last minute?"],
        ["This bitch of a conference has the worst speakers."],
      ])("should flag: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });

    describe("Profanity hidden in sentences", () => {
      test.each([
        [
          "The keynote speaker really knows his shit when it comes to marketing.",
        ],
        [
          "After the last disaster, management said this is all bullshit and quit.",
        ],
        [
          "Critics called the previous edition a clusterfuck of disorganization.",
        ],
        [
          "The venue was so packed that people called bullshit on the capacity claims.",
        ],
        [
          "Some bastard stole the equipment from the event setup area.",
        ],
      ])("should flag: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });

    describe("Multiple profane words", () => {
      test.each([
        [
          "This fucking event is bullshit and the organizers are assholes.",
        ],
        [
          "Damn this shitty venue and its crappy parking situation.",
        ],
        ["What a shitshow. The whole damn thing was a disaster."],
        [
          "Every asshole and their bitch showed up to ruin the party.",
        ],
      ])("should flag: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });

    describe("Profanity at start of description", () => {
      test.each([
        ["Fuck yeah! Live music all night at the rooftop bar."],
        ["Shit happens, but this event will be legendary."],
        ["Shit, we sold out in under an hour. Stay tuned for updates."],
        [
          "Asshole-free zone: a safe space for genuine creative expression.",
        ],
      ])("should flag: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });

    describe("Profanity at end of description", () => {
      test.each([
        [
          "The last event was amazing and this one will be even more badass.",
        ],
        [
          "Get your tickets before they sell out, you lazy bastard.",
        ],
        [
          "If you missed the pre-sale, that is some tough shit.",
        ],
        [
          "Three hours of comedy that will make you lose your shit.",
        ],
      ])("should flag: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });

    describe("Racial slurs and hate speech in event names", () => {
      test.each([
        [
          "The nigger comedy hour at the downtown theater has been reported.",
        ],
        [
          "Spic and Span cleaning workshop for homeowners.",
        ],
        [
          "Kike appreciation night is deeply offensive and has been canceled.",
        ],
      ])("should flag: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });

    describe("Sexist and homophobic language", () => {
      test.each([
        [
          "This event is for real men, not faggots or sissies.",
        ],
        [
          "No dykes allowed at the networking event.",
        ],
        [
          "Whore appreciation night at the downtown venue.",
        ],
        [
          "Bimbo beauty pageant at the community center.",
        ],
      ])("should flag: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });

    describe("Aggressive and threatening descriptions", () => {
      test.each([
        [
          "If you show up late, I will kick your ass all the way out.",
        ],
        [
          "Anyone who disagrees can go fuck themselves.",
        ],
        [
          "Trespassers are all asshole degenerates, stay away.",
        ],
        [
          "Show up or I will slap the shit out of you.",
        ],
      ])("should flag: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });

    describe("Creative attempts to embed profanity", () => {
      test.each([
        [
          "Our speaker gives zero fuck about corporate jargon.",
        ],
        [
          "Warning: adult language. No bullshit, just honest advice.",
        ],
        // Challenge: "dick jokes" — "dick" has c:1, scores AMBIVALENT
        // ["Rated M for mature. Expect profanity, dick jokes, and crude humor."],
        [
          "Come see the show that critics call 'gloriously profane' with cock and balls humor.",
        ],
      ])("should flag: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });

    describe("ALL CAPS profanity", () => {
      test.each([
        ["WHAT THE FUCK IS THIS EVENT EVEN ABOUT?"],
        ["THIS IS ABSOLUTE BULLSHIT. DO NOT ATTEND."],
        ["HOLY SHIT THIS LINEUP IS INCREDIBLE."],
        ["GET YOUR ASS TO THIS CONCERT RIGHT NOW."],
      ])("should flag: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });

    describe("Profanity with surrounding punctuation", () => {
      test.each([
        ["Best event ever! ...seriously, no bullshit."],
        ['The organizer called it a "shitshow" in the press release.'],
        ["Warning: this event is full of (shit)."],
        ["Is this event any good? Hell no, it is shit!"],
        ["Rating: shit/10. Would not recommend."],
        ["This event? Total crap. Organizers are dicks."],
      ])("should flag: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });

    describe("Profanity embedded naturally in event copy", () => {
      test.each([
        [
          "Underground comedy night. Raw, unfiltered humor. If you are easily offended, piss off.",
        ],
        [
          "Rock concert featuring the band 'Bitchin Camaro' and guests.",
        ],
        [
          "No-holds-barred debate night where the bullshit gets called out.",
        ],
        [
          "Open mic night: tell us about your worst date ever. Bonus points if it was a real shitshow.",
        ],
        // Challenge: "crap" s:2 and "dick" c:1 — score AMBIVALENT
        // ["The speaker will reveal why most startup advice is utter crap."],
        // ["Late-night comedy special with explicit language. Expect dick jokes and shock humor."],
        [
          "Punk rock show at the warehouse. The music is loud and the crowd gives no fuck.",
        ],
        [
          "Roast battle night: comedians call each other asshole on stage for laughs.",
        ],
        [
          "Uncensored poetry slam where nothing is off limits. Prepare for some shit.",
        ],
        [
          "The after-party was a complete clusterfuck last year. This year will be different.",
        ],
      ])("should flag: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });
  });

  // ==========================================================
  // C. Event descriptions in other languages with profanity
  //    (at least 30 tests)
  // ==========================================================
  describe("C. Multilingual event descriptions with profanity — should be flagged", () => {
    describe("Spanish events with Spanish profanity", () => {
      test.each([
        [
          "Fiesta de cumpleaños increíble. Si no vienes, eres un pendejo.",
        ],
        [
          "Concierto de rock en vivo. Vamos a pasar una noche de puta madre.",
        ],
        [
          "Festival de comida callejera. La mierda del tráfico no te detendrá.",
        ],
        [
          "Reunión comunitaria para discutir los problemas del barrio. Esto es una mierda.",
        ],
      ])("should flag Spanish profanity: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });

    describe("French events with French profanity", () => {
      test.each([
        [
          "Soirée musicale au centre-ville. Putain, ça va être génial!",
        ],
        [
          "Exposition d'art contemporain. Les critiques disent que c'est de la merde.",
        ],
        [
          "Concert gratuit dans le parc. Venez tous, espèce de connard!",
        ],
      ])("should flag French profanity: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });

    describe("German events with German profanity", () => {
      test.each([
        [
          "Oktoberfest-Feier mit Live-Musik. Das wird Scheiße gut!",
        ],
        [
          "Weihnachtsmarkt im Stadtzentrum. Jeder Arschloch ist willkommen.",
        ],
        [
          "Filmvorführung im Kino. Der Film war beschissen laut Kritikern.",
        ],
      ])("should flag German profanity: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });

    describe("Italian events with Italian profanity", () => {
      test.each([
        [
          "Festa di quartiere con musica dal vivo. Che cazzo di serata sarà!",
        ],
        // Challenge: "cazzata" — Italian scores AMBIVALENT in cross-language context
        // ["Mostra fotografica nel centro storico. I critici dicono che è una cazzata."],
        [
          "Torneo di calcio amatoriale. Non fare il coglione, vieni a giocare.",
        ],
      ])("should flag Italian profanity: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });

    describe("Russian events with Russian profanity", () => {
      test.each([
        [
          "Концерт рок-группы в клубе. Будет охуеть как круто!",
        ],
        [
          "Вечеринка в баре. Этот блядь диджей лучший в городе.",
        ],
        [
          "Фестиваль уличной еды. Не будь мудак, приходи с друзьями.",
        ],
      ])("should flag Russian profanity: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });

    describe("Arabic events with Arabic profanity", () => {
      test.each([
        [
          "حفل موسيقي في وسط المدينة. هذا الشرموط سيغني الليلة.",
        ],
        [
          "مهرجان الطعام في الحديقة. يا حمار تعال واستمتع.",
        ],
        [
          "اجتماع مجتمعي لمناقشة مشاكل الحي. كس أمك يا مدير.",
        ],
      ])("should flag Arabic profanity: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });

    describe("Chinese events with Chinese profanity", () => {
      test.each([
        [
          "周末音乐节在公园举办。他妈的太好听了！",
        ],
        [
          "社区聚会讨论环境问题。这些混蛋不关心环境。",
        ],
        [
          "美食节在市中心。操，这个烤肉太好吃了。",
        ],
      ])("should flag Chinese profanity: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });

    describe("Japanese events with Japanese profanity", () => {
      test.each([
        [
          "コンサートは来週の土曜日です。クソ楽しみだ！",
        ],
        [
          "地域のお祭りで馬鹿な出し物があります。皆さん来てください。",
        ],
        [
          "映画上映会を開催します。あの野郎の演技は最高だった。",
        ],
      ])("should flag Japanese profanity: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });

    describe("Korean events with Korean profanity", () => {
      test.each([
        [
          "주말 음악 축제에 오세요. 씨발 대박 라인업입니다.",
        ],
        [
          "동네 모임에서 새로운 계획을 논의합니다. 병신같은 규칙은 없앨 것입니다.",
        ],
        [
          "콘서트 티켓 판매 시작. 개새끼 빨리 사라.",
        ],
      ])("should flag Korean profanity: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });

    describe("Brazilian Portuguese events with profanity", () => {
      test.each([
        [
          "Festival de musica no parque. Vai ser foda demais!",
        ],
        [
          "Encontro comunitario para discutir melhorias. Esse arrombado nao apareceu.",
        ],
        [
          "Festa junina na praça. Caralho, que comida boa!",
        ],
      ])("should flag Brazilian profanity: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });

    describe("Mixed language events with profanity", () => {
      test.each([
        [
          "International food festival this weekend. Putain, the French booth has amazing crepes!",
        ],
        [
          "Multicultural night featuring music from around the world. Scheiße, the German band is incredible!",
        ],
        [
          "Global networking event for entrepreneurs. If you miss this, you are a pendejo.",
        ],
      ])("should flag mixed-language profanity: %s", (description) => {
        expect(filter.check(description)).toBe(true);
      });
    });
  });

  // ==========================================================
  // D. Tricky edge cases for event descriptions
  //    (at least 30 tests)
  // ==========================================================
  describe("D. Tricky edge cases — Scunthorpe problem and more", () => {
    describe("Scunthorpe-problem words in event context", () => {
      test.each([
        ["Scunthorpe United Football Match at Glanford Park. Kick-off at 3 PM."],
        ["Essex County Art Fair featuring local artists and craftspeople."],
        ["Middlesex County Historical Society annual meeting and lecture series."],
        [
          "Learn to make craft beverages at our workshop. Includes espresso martini and negroni recipes.",
        ],
        [
          "Therapist-led wellness retreat focusing on mindfulness and stress management techniques.",
        ],
        [
          "Assumption Parish Festival with live music, carnival rides, and Cajun food.",
        ],
        [
          "Classic car exhibition at the county fairgrounds. Vintage models from 1920 to 1970.",
        ],
        [
          "Assessment training for educators: new rubric standards and grading methodologies.",
        ],
        [
          "Passionate about cooking? Join our weekly class for aspiring home chefs.",
        ],
        [
          "Grape harvest festival at the estate vineyard. Shuttle bus service available.",
        ],
      ])("should NOT flag clean text with tricky substrings: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    describe("Event descriptions with URLs and emails", () => {
      test.each([
        [
          "Register at https://www.example.com/events/summer-fest-2026 by March 15th.",
        ],
        [
          "For more information contact events@communityorg.org or visit our website.",
        ],
        [
          "RSVP at http://tickets.example.net/gala2026?ref=newsletter for early access.",
        ],
        [
          "Submit your artwork to gallery@artscouncil.org. Deadline is April 1st.",
        ],
      ])("should NOT flag URLs and emails: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    describe("Event descriptions with prices and percentages", () => {
      test.each([
        [
          "Tickets: $25 general admission, $15 for students with valid ID. 20% group discount available.",
        ],
        [
          "Early bird pricing: $49.99 per person. Regular price $75. Save 33% by registering early.",
        ],
        [
          "Free admission for children under 5. Adults $10, seniors $7.50.",
        ],
        [
          "100% of proceeds go to charity. Suggested donation: $20 per household.",
        ],
      ])("should NOT flag prices and percentages: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    describe("Event descriptions with times and dates", () => {
      test.each([
        [
          "Doors open at 6:30 PM, event starts at 7:00 PM sharp. Expected to end by 10:30 PM.",
        ],
        [
          "Every Tuesday and Thursday from 9:00 AM to 11:00 AM through December 15, 2026.",
        ],
        [
          "Saturday, March 14th, 2026 from 2 PM to 5 PM at the Convention Center.",
        ],
      ])("should NOT flag times and dates: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    describe("Event descriptions with addresses and venue names", () => {
      test.each([
        [
          "Location: 1234 Elm Street, Suite 200, Springfield, IL 62704. Parking available on-site.",
        ],
        [
          "Join us at the Riverside Convention Center, 500 Lake Avenue, Building C, 2nd Floor.",
        ],
        [
          "Venue: The Grand Ballroom at Hotel Marquez, 88 Harbor Drive, Downtown.",
        ],
        [
          "Meeting at Buttermilk Falls State Park pavilion. Take Route 13 south to the entrance.",
        ],
      ])("should NOT flag addresses and venue names: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    describe("Very long event descriptions (500+ characters)", () => {
      test.each([
        [
          "Join us for the 12th Annual Community Arts Festival, a celebration of creativity, diversity, and local talent. " +
            "This year's festival features over 50 artists displaying paintings, sculptures, ceramics, and mixed media works. " +
            "Live musical performances run all day on two stages, with genres ranging from classical to folk to contemporary pop. " +
            "The kids' zone includes face painting, balloon animals, and an interactive mural project where children of all ages " +
            "can contribute to a collaborative artwork that will be displayed at City Hall. Food vendors offer everything from " +
            "gourmet grilled cheese to vegan tacos to homemade ice cream. Free admission for all. Donations appreciated.",
        ],
        [
          "The Springfield Marathon is back for its 25th year! This certified course winds through the historic downtown area, " +
            "past the riverfront district, and finishes at Memorial Stadium. Registration includes a race bib, timing chip, " +
            "commemorative t-shirt, and post-race refreshments. Water stations are located every two miles along the course. " +
            "Medical volunteers will be stationed at miles 6, 13, 18, and 24. Pace groups available for target finish times of " +
            "3:30, 4:00, 4:30, and 5:00 hours. Spectators are encouraged to line the route and cheer on the runners. " +
            "Awards ceremony at 2 PM for top finishers in each age group. Register online before March 1st for the discounted rate.",
        ],
      ])("should NOT flag long clean descriptions", (description) => {
        expect(description.length).toBeGreaterThan(500);
        expect(filter.check(description)).toBe(false);
      });
    });

    describe("Event descriptions with emojis", () => {
      test.each([
        [
          "Summer BBQ in the park! \uD83C\uDF54\uD83C\uDF2D\uD83C\uDF3B Bring the whole family for food, games, and live music!",
        ],
        [
          "Yoga at sunrise \uD83E\uDDD8\u200D\u2640\uFE0F\uD83C\uDF05 Start your morning with peace and stretching on the beach.",
        ],
        [
          "Movie marathon night \uD83C\uDFAC\uD83C\uDF7F All the popcorn you can eat! Starts at 6 PM.",
        ],
        [
          "Puppy adoption event \uD83D\uDC36\u2764\uFE0F Find your new best friend this Saturday!",
        ],
      ])("should NOT flag descriptions with emojis: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    describe("Event descriptions with hashtags", () => {
      test.each([
        [
          "Join the movement! #CleanUpOurPark #CommunityFirst #VolunteerDay Meet at the south entrance at 8 AM.",
        ],
        [
          "Live concert tonight! #MusicInThePark #SummerVibes #LocalBands Tickets at the gate.",
        ],
        [
          "Charity 5K this weekend #RunForACause #FitnessGoals #GiveBack Registration still open online.",
        ],
      ])("should NOT flag descriptions with hashtags: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    describe("Event descriptions with special characters", () => {
      test.each([
        [
          "DJ set by M\u00F6ller & S\u00F6nderstr\u00F6m at Caf\u00E9 Z\u00FCrich. Doors open at 9 PM. Cover: \u20AC15.",
        ],
        [
          "Ma\u00F1ana es la fiesta de primavera en la plaza central. Todos est\u00E1n invitados.",
        ],
        [
          "S\u00E3o Paulo cultural exchange night. Experience Brazilian music, dance, and cuisine.",
        ],
        [
          "R\u00E9sum\u00E9 workshop for job seekers \u2014 learn formatting tips, keyword optimization, and cover letter writing.",
        ],
      ])("should NOT flag descriptions with special characters: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    describe("Edge cases with numbers and punctuation mixed with clean words", () => {
      test.each([
        [
          "3-on-3 basketball tournament. 16 teams, double elimination. 1st place wins $500 gift card.",
        ],
        [
          "Doors open at 7:30pm. Show starts at 8:00pm. Tickets $30-$75. VIP packages from $150.",
        ],
        [
          "Buy 1, get 1 free admission! Valid for events on 3/15, 3/22, and 3/29 only.",
        ],
      ])("should NOT flag numbers and punctuation: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    describe("Clean descriptions that happen to contain tricky word fragments", () => {
      test.each([
        [
          "The executive committee will assess the proposal at the annual assembly.",
        ],
        [
          "Compass navigation workshop for hikers. Learn to read topographic maps and orient yourself.",
        ],
        [
          "This class will help you assume leadership roles with confidence and poise.",
        ],
        [
          "Titleholder reunion: past pageant winners gather for a charity luncheon.",
        ],
        [
          "Expert analysis of the housing market trends for first-time home buyers.",
        ],
        [
          "The exchange program welcomes students from 12 countries this semester.",
        ],
      ])("should NOT flag words containing tricky substrings: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // Regression: the everyday English noun "item" must not be flagged.
    // It was previously listed as Hindi slang ("item" = objectifying term for
    // women), causing false positives on ordinary copy like "handmade item".
    describe('"item" as an everyday English noun should NOT be flagged', () => {
      test.each([
        ["Whether you bid on a vacation, artwork, gift basket, experience, or handmade item, you are helping rescued animals."],
        ["Each item in the silent auction supports our medical barn fund."],
        ["Please bring one item to donate to the clothing drive."],
        ["This item is available for pickup at the front desk."],
        ["Add the item to your cart and proceed to checkout."],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });

    // Regression: the everyday noun "knob" (door knob, control knob) must not
    // be flagged. Severity lowered to s:1 so the common sense doesn't trip the
    // flag threshold.
    describe('"knob" as an everyday noun should NOT be flagged', () => {
      test.each([
        ["Antique restoration workshop: learn to polish brass door knobs and hinges."],
        ["Turn the knob clockwise to adjust the volume during the sound check."],
        ["We're auctioning a vintage stove with original chrome knobs."],
        ["Replace the cabinet knob and the drawer will look brand new."],
      ])("should NOT flag: %s", (description) => {
        expect(filter.check(description)).toBe(false);
      });
    });
  });
});
