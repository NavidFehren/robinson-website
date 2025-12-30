import { Content, Language } from './types';

export const content: Record<Language, Content> = {
  de: {
    nav: {
      home: "Home",
      tours: "Touren",
      destinations: "Reiseziele",
      about: "Über uns",
      gallery: "Galerie",
      contact: "Kontakt",
      bookNow: "Jetzt Anfragen"
    },
    home: {
      hero: {
        slogan: "Entdecke Lošinj wie ein Robinson",
        sub: "Private Bootstouren mit Herz – Fernab vom Massentourismus",
        ctaPrimary: "Touren ansehen",
        ctaSecondary: "Jetzt anfragen"
      },
      usp: {
        title: "Warum Robinson Tours?",
        items: [
          { title: "Maximal 12 Gäste", desc: "Private, intime Atmosphäre, kein Massentourismus." },
          { title: "Individuelle Routen", desc: "Ihr Tag, Ihr Weg – Flexible Stopps nach Wunsch." },
          { title: "Familienfreundlich", desc: "Herzliche Gastfreundschaft einer einheimischen Familie." },
          { title: "Delfine & versteckte Buchten", desc: "Entdecken Sie Orte, die nur mit dem Boot erreichbar sind." }
        ],
        statLabels: ["Gäste max", "Flexibel", "Delfine", "Buchten"]
      },
      testimonial: {
        quote: "Der schönste Tag unseres Urlaubs! Der Kapitän zeigte uns Buchten, die wir alleine nie gefunden hätten.",
        author: "Familie Müller, Deutschland",
        tripAdvisorLink: "TripAdvisor",
        googleReviewsLink: "Google"
      },
      didYouKnow: {
        title: "Wussten Sie schon?",
        text: "Rund 200 Delfine leben ständig in den Gewässern rund um Lošinj. Die Chancen stehen gut, sie zu sehen!"
      },
      onBoardExperience: {
        title: "An Bord Erlebnis",
        sectionLabel: "An Bord"
      }
    },
    tours: {
      title: "Unsere Touren",
      subtitle: "Wählen Sie Ihr perfektes Inselerlebnis",
      sectionLabel: "Erlebnisse",
      items: [
        {
          id: "fullDay",
          name: "Ganztägige Tour",
          duration: "10:00 – 18:00 Uhr",
          description: "Erkunden Sie die einzigartigen Sandstrände von Susak und die charmante Blumeninsel Ilovik auf einer unvergesslichen Tagestour.",
          highlights: ["Schwimmstopps in versteckten Buchten", "Insel Susak & Bucht Porat", "Blumeninsel Ilovik", "Bis zu 12 Personen möglich"],
          included: ["Willkommensdrink (Aperitif)", "Frisches Obst (morgens & nachmittags)", "Canapés", "3 Getränke pro Person (Bier, Saft, Wasser, Wein, Cocktail)"],
          price: "550€ (bis 8 Pers.) | +50€ pro weitere Person",
          image: "/tours/all_day_tour.webp",
          basePrice: 550,
          extraPersonPrice: 50,
          maxPersons: 8
        },
        {
          id: "halfDay",
          name: "Halbtagestour",
          duration: "10:00 – 14:00 Uhr oder 15:00 – 19:00 Uhr",
          description: "Perfekt für einen entspannten halben Tag auf dem Meer – ideal für Familien oder als romantischer Nachmittagsausflug.",
          highlights: ["Flexible Zeitwahl (Vormittag oder Nachmittag)", "Versteckte Buchten erkunden", "Schwimmen & Schnorcheln", "Bis zu 12 Personen möglich"],
          included: ["Willkommensdrink (Aperitif)", "Frisches saisonales Obst", "2 Getränke pro Person (Saft, Wasser, Bier, Wein, Cocktail)"],
          price: "350€ (bis 8 Pers.) | +30€ pro weitere Person",
          image: "/tours/half_day_tour.webp",
          basePrice: 350,
          extraPersonPrice: 30,
          maxPersons: 8
        },
        {
          id: "custom",
          name: "Individuelle Tour",
          duration: "Flexibel nach Absprache",
          description: "Wir versuchen, eure Wünsche zu erfüllen! Ideal für private Feiern, Geburtstage, Sonnenuntergangsfahrten und mehr.",
          highlights: ["Private Feiern & Events", "Romantische Sonnenuntergangsfahrten", "Geburtstage & besondere Anlässe", "Völlig freie Routenwahl"],
          included: ["Persönliche Routenplanung", "Kapitän", "Individuelle Getränke- & Snackauswahl"],
          price: "Preis auf Anfrage",
          image: "/tours/custom_tour.webp"
        }
      ],
      info: {
        includedTitle: "Inklusive",
        bringTitle: "Was Sie mitbringen sollten",
        bringText: "Badesachen, Handtuch, Sonnenschutz, Hut, Kamera.",
        foodTitle: "Verpflegung",
        foodText: "Snacks und Getränke inklusive. Mittagessen in Inselrestaurants möglich.",
        kidsTitle: "Für alle geeignet",
        kidsText: "Kinder und ältere Gäste sind herzlich willkommen.",
        bookButton: "Erlebnis buchen"
      }
    },
    destinations: {
      title: "Unsere Reiseziele",
      subtitle: "Entdecken Sie die schönsten Inseln der Adria",
      sectionLabel: "Reiseziele",
      items: [
        {
          id: "susak",
          name: "Insel Susak & Bucht Porat",
          nickname: "Hawaii der Adria",
          description: "Die Insel Susak, gelegen im Kvarner-Archipel, ist einzigartig durch ihren sandigen Boden und die üppige Vegetation. Ohne Autos und Verkehrslärm bietet Susak Ruhe und eine authentische Atmosphäre – ideal für einen Familienausflug. Die Bucht Porat, wegen ihrer Schönheit oft als 'Hawaii' bezeichnet, bietet ein ruhiges Paradies mit drei Stränden, umgeben von silbernem Sand und kristallklarem Meer.",
          highlights: ["Sandstrände mit seichtem Wasser – perfekt für Kinder", "Autofreie Insel mit authentischer Atmosphäre", "Bucht Porat mit drei traumhaften Stränden", "Traditionelle Restaurants mit frischem Fisch", "Einzigartige Kultur, Trachten und Dialekt"],
          image: "/susak.webp"
        },
        {
          id: "ilovik",
          name: "Insel Ilovik",
          nickname: "Insel der Blumen",
          description: "Die Insel Ilovik, südlich von Lošinj gelegen, ist bekannt für ihre üppige Natur, mediterranen Gärten und das authentische Inselleben. Ein Spaziergang durch die engen Gassen, umgeben von Oleandern und Steinhäusern, bietet ein einzigartiges Erlebnis von Ruhe und Schönheit. Die zahlreichen Buchten, wie Paržine, begeistern mit kristallklarem Wasser.",
          highlights: ["Mediterrane Gärten voller Oleander", "Kristallklare Buchten zum Schwimmen & Schnorcheln", "Klippenspringen für Abenteuerlustige", "Familiengeführte Restaurants mit lokaler Küche", "Romantische Inselatmosphäre"],
          image: "/ilovik.webp"
        }
      ]
    },
    about: {
      title: "Über Uns",
      sectionLabel: "Über Uns",
      storyTitle: "Unsere Geschichte",
      storyText: "Alles begann mit einem alten Boot aus dem Jahr 1988 – etwas in die Jahre gekommen, aber voller Charme und noch mehr Charakter. Wir, die Familie des Kapitäns, haben es mit viel Liebe und der Unterstützung lieber Freunde restauriert, ihm neues Leben eingehaucht und es in ein echtes kleines Juwel des Meeres verwandelt. Heute transportiert dieses Boot nicht nur Passagiere – es trägt Erinnerungen, Lachen und die Liebe unserer Familie.",
      captainTitle: "Unser Team",
      captainText: "Unser Kapitän, der zugleich Eigentümer ist, wählt jeden Tag mit großer Sorgfalt die schönsten Routen, versteckten Buchten und die besonderen Reize von Lošinj aus. Seine rechte Hand sorgt für das erste Lächeln an Bord – und dafür, dass es dir während des gesamten Abenteuers an nichts fehlt.",
      captainBio: ["Lokale Familie mit Leidenschaft fürs Meer", "Spricht Deutsch, Englisch, Kroatisch", "Kennt jeden Winkel der Inselwelt"],
      nameTitle: "Warum 'Robinson'?",
      nameText: "Wir bringen Sie an Orte, die so unberührt sind, dass Sie sich wie ein moderner Robinson Crusoe fühlen – fernab vom Trubel.",
      philosophyTitle: "Unsere Philosophie",
      philosophyItems: ["Familie, Meer und Tradition vereint", "Persönliche Betreuung von Anfang bis Ende", "Authentisches Erlebnis auf dem Wasser", "Geheimnisse der Insel mit Ihnen teilen"]
    },
    gallery: {
      title: "Galerie",
      subtitle: "Impressionen von unseren Touren",
      instagram: {
        tagline: "Bleiben Sie auf dem Laufenden",
        heading: "Wir sind auf Instagram",
        sectionLabel: "Galerie",
        buttonText: "@robinsonboattours",
        url: "https://instagram.com/robinsonboattours"
      }
    },
    contact: {
      title: "Kontakt & Buchen",
      subtitle: "Planen Sie Ihr Abenteuer mit uns",
      sectionLabel: "Kontakt",
      form: {
        name: "Name",
        email: "E-Mail Adresse",
        phone: "Telefonnummer (optional)",
        date: "Wunschdatum",
        guests: "Anzahl der Gäste",
        tourType: "Gewünschte Tour",
        message: "Nachricht / Besondere Wünsche",
        submit: "Anfrage senden",
        disclaimer: "Ihre Anfrage ist unverbindlich.",
        success: "Danke! Wir melden uns so schnell wie möglich.",
        successTitle: "Erfolgreich!",
        sendAnother: "Weitere Anfrage senden",
        error: "Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
        options: {
          fullDay: "Ganztägige Tour (550€)",
          halfDay: "Halbtagestour (350€)",
          custom: "Individuelle Tour"
        }
      },
      info: {
        direct: "Direkter Kontakt",
        phone1: "+385 97 7119 736",
        phone2: "+385 91 9869 368",
        email: "animamaris.adriatic@gmail.com",
        location: "Treffpunkt",
        locationDesc: "Wir treffen uns im Haupthafen von Mali Lošinj."
      },
      faqTitle: "Häufig gestellte Fragen (FAQ)",
      faqCtaSubtitle: "Noch Fragen?",
      faqCtaButton: "Kontaktieren Sie uns",
      faqs: [
        { question: "Was sollen wir mitbringen?", answer: "Badesachen, Handtuch, Sonnenschutz. Schnorchelausrüstung stellen wir." },
        { question: "Ist Verpflegung inklusive?", answer: "Wir bieten Wasser und kleine Snacks. Mittagessen kann arrangiert werden." },
        { question: "Was passiert bei schlechtem Wetter?", answer: "Sicherheit geht vor. Wir kontaktieren Sie für Alternativen." },
        { question: "Gibt es Schatten an Bord?", answer: "Ja, an Bord gibt es schattige Plätze." },
        { question: "Gibt es eine Toilette an Bord?", answer: "Ja, es gibt eine Toilette an Bord." },
        { question: "Sind Kinder willkommen?", answer: "Ja, Kinder sind herzlich willkommen. Bitte gebt bei der Anfrage das Alter an." },
        { question: "Dürfen wir eigene Getränke mitbringen?", answer: "Ja, gerne." },
        { question: "Dürfen wir Musik hören?", answer: "Ja, natürlich." }
      ]
    }
  },
  en: {
    nav: {
      home: "Home",
      tours: "Tours",
      destinations: "Destinations",
      about: "About Us",
      gallery: "Gallery",
      contact: "Contact",
      bookNow: "Inquire Now"
    },
    home: {
      hero: {
        slogan: "Discover Lošinj like a Robinson",
        sub: "Private Boat Tours with Heart – Away from mass tourism",
        ctaPrimary: "View Tours",
        ctaSecondary: "Inquire Now"
      },
      usp: {
        title: "Why Robinson Tours?",
        items: [
          { title: "Max 12 Guests", desc: "Private, intimate atmosphere, no crowds." },
          { title: "Individual Routes", desc: "Your day, your way – Flexible stops." },
          { title: "Family Friendly", desc: "Warm hospitality from a local family." },
          { title: "Dolphins & Hidden Bays", desc: "Discover places only accessible by boat." }
        ],
        statLabels: ["Guests max", "Flexible", "Dolphins", "Bays"]
      },
      testimonial: {
        quote: "The best day of our holiday! The captain showed us bays we never would have found alone.",
        author: "The Müller Family, Germany",
        tripAdvisorLink: "TripAdvisor",
        googleReviewsLink: "Google"
      },
      didYouKnow: {
        title: "Did you know?",
        text: "Around 200 dolphins live in the waters around Lošinj. Chances are good to see them!"
      },
      onBoardExperience: {
        title: "On Board Experience",
        sectionLabel: "On Board"
      }
    },
    tours: {
      title: "Our Tours",
      subtitle: "Choose your perfect island experience",
      sectionLabel: "Experiences",
      items: [
        {
          id: "fullDay",
          name: "Full-Day Tour",
          duration: "10:00 – 18:00",
          description: "Explore the unique sandy beaches of Susak and the charming flower island of Ilovik on an unforgettable day trip.",
          highlights: ["Swimming stops in hidden bays", "Susak Island & Porat Bay", "Ilovik flower island", "Up to 12 people possible"],
          included: ["Welcome drink (aperitif)", "Fresh fruit (morning & afternoon)", "Canapés", "3 drinks per person (beer, juice, water, wine, cocktail)"],
          price: "550€ (up to 8 ppl) | +50€ per extra person",
          image: "/tours/all_day_tour.webp",
          basePrice: 550,
          extraPersonPrice: 50,
          maxPersons: 8
        },
        {
          id: "halfDay",
          name: "Half-Day Tour",
          duration: "10:00 – 14:00 or 15:00 – 19:00",
          description: "Perfect for a relaxing half day at sea – ideal for families or as a romantic afternoon excursion.",
          highlights: ["Flexible time choice (morning or afternoon)", "Explore hidden bays", "Swimming & snorkeling", "Up to 12 people possible"],
          included: ["Welcome drink (aperitif)", "Fresh seasonal fruit", "2 drinks per person (juice, water, beer, wine, cocktail)"],
          price: "350€ (up to 8 ppl) | +30€ per extra person",
          image: "/tours/half_day_tour.webp",
          basePrice: 350,
          extraPersonPrice: 30,
          maxPersons: 8
        },
        {
          id: "custom",
          name: "Custom Tour",
          duration: "Flexible by arrangement",
          description: "We try to fulfill your wishes! Ideal for private celebrations, birthdays, sunset cruises and more.",
          highlights: ["Private parties & events", "Romantic sunset cruises", "Birthdays & special occasions", "Complete route freedom"],
          included: ["Personal route planning", "Captain", "Custom drink & snack selection"],
          price: "Price on request",
          image: "/tours/custom_tour.webp"
        }
      ],
      info: {
        includedTitle: "Included",
        bringTitle: "What to bring",
        bringText: "Swimwear, towel, sunscreen, hat, camera.",
        foodTitle: "Food & Drink",
        foodText: "Snacks and drinks included. Lunch can be arranged at island restaurants.",
        kidsTitle: "Suitable for all",
        kidsText: "Children and elderly guests are very welcome.",
        bookButton: "Book This Experience"
      }
    },
    destinations: {
      title: "Our Destinations",
      subtitle: "Discover the most beautiful islands of the Adriatic",
      sectionLabel: "Destinations",
      items: [
        {
          id: "susak",
          name: "Susak Island & Porat Bay",
          nickname: "Hawaii of the Adriatic",
          description: "Susak Island, located in the Kvarner archipelago, is unique for its sandy soil and lush vegetation. Without cars and traffic noise, Susak offers peace and an authentic atmosphere – ideal for a family outing. Porat Bay, often called 'Hawaii' for its beauty, offers a quiet paradise with three beaches, surrounded by silver sand and crystal-clear sea.",
          highlights: ["Sandy beaches with shallow water – perfect for kids", "Car-free island with authentic atmosphere", "Porat Bay with three stunning beaches", "Traditional restaurants with fresh fish", "Unique culture, costumes and dialect"],
          image: "/susak.webp"
        },
        {
          id: "ilovik",
          name: "Ilovik Island",
          nickname: "Island of Flowers",
          description: "Ilovik Island, located south of Lošinj, is known for its lush nature, Mediterranean gardens and authentic island life. A walk through the narrow streets, surrounded by oleanders and stone houses, offers a unique experience of peace and beauty. The numerous bays, such as Paržine, delight with crystal-clear water.",
          highlights: ["Mediterranean gardens full of oleanders", "Crystal-clear bays for swimming & snorkeling", "Cliff jumping for adventure seekers", "Family-run restaurants with local cuisine", "Romantic island atmosphere"],
          image: "/ilovik.webp"
        }
      ]
    },
    about: {
      title: "About Us",
      sectionLabel: "About Us",
      storyTitle: "Our Story",
      storyText: "It all started with an old boat from 1988 – a bit weathered, but full of charm and even more character. We, the captain's family, restored it with love and the support of dear friends, breathed new life into it and transformed it into a true little jewel of the sea. Today, this boat doesn't just carry passengers – it carries memories, laughter and our family's love.",
      captainTitle: "Our Team",
      captainText: "Our captain, who is also the owner, carefully selects the most beautiful routes, hidden bays and special treasures of Lošinj every day. His right hand provides the first smile on board – and makes sure you lack nothing throughout your adventure.",
      captainBio: ["Local family with passion for the sea", "Speaks German, English, Croatian", "Knows every corner of the island world"],
      nameTitle: "Why 'Robinson'?",
      nameText: "We take you to places so untouched you feel like a modern-day Robinson Crusoe.",
      philosophyTitle: "Our Philosophy",
      philosophyItems: ["Family, sea and tradition united", "Personal care from start to finish", "Authentic experience on the water", "Sharing island secrets with you"]
    },
    gallery: {
      title: "Gallery",
      subtitle: "Impressions from our tours",
      instagram: {
        tagline: "Stay up-to-date",
        heading: "We're on Instagram",
        sectionLabel: "Gallery",
        buttonText: "@robinsonboattours",
        url: "https://instagram.com/robinsonboattours"
      }
    },
    contact: {
      title: "Contact & Booking",
      subtitle: "Plan your adventure with us",
      sectionLabel: "Contact",
      form: {
        name: "Name",
        email: "Email Address",
        phone: "Phone Number (optional)",
        date: "Preferred Date",
        guests: "Number of Guests",
        tourType: "Preferred Tour",
        message: "Message / Special Wishes",
        submit: "Send Inquiry",
        disclaimer: "Your inquiry is non-binding.",
        success: "Thank you! We'll get back to you as soon as possible.",
        successTitle: "Success!",
        sendAnother: "Send another inquiry",
        error: "Failed to send. Please try again or contact us directly.",
        options: {
          fullDay: "Full-Day Tour (550€)",
          halfDay: "Half-Day Tour (350€)",
          custom: "Custom Tour"
        }
      },
      info: {
        direct: "Direct Contact",
        phone1: "+385 97 7119 736",
        phone2: "+385 91 9869 368",
        email: "animamaris.adriatic@gmail.com",
        location: "Meeting Point",
        locationDesc: "We meet at the main harbor of Mali Lošinj."
      },
      faqTitle: "Frequently Asked Questions",
      faqCtaSubtitle: "Still have questions?",
      faqCtaButton: "Contact us",
      faqs: [
        { question: "What should we bring?", answer: "Swimwear, towel, sunscreen. We provide snorkel gear." },
        { question: "Is food included?", answer: "Snacks and drinks are included. Lunch can be arranged." },
        { question: "What if the weather is bad?", answer: "Safety first. We will contact you to reschedule." },
        { question: "Is there shade on board?", answer: "Yes, there are shaded areas on board." },
        { question: "Is there a toilet on board?", answer: "Yes, there is a toilet on board." },
        { question: "Are children welcome?", answer: "Yes, children are very welcome. Please indicate their age when inquiring." },
        { question: "Can we bring our own drinks?", answer: "Yes, you're welcome to." },
        { question: "Can we listen to music?", answer: "Yes, of course." }
      ]
    }
  },
  hr: {
    nav: {
      home: "Home",
      tours: "Izleti",
      destinations: "Odredišta",
      about: "O nama",
      gallery: "Galerija",
      contact: "Kontakt",
      bookNow: "Rezerviraj"
    },
    home: {
      hero: {
        slogan: "Otkrijte Lošinj kao Robinson",
        sub: "Privatni izleti brodom sa srcem – Daleko od masovnog turizma",
        ctaPrimary: "Pogledaj izlete",
        ctaSecondary: "Pošalji upit"
      },
      usp: {
        title: "Zašto Robinson Tours?",
        items: [
          { title: "Max 12 Gostiju", desc: "Privatna, intimna atmosfera, bez gužve." },
          { title: "Individualne rute", desc: "Vaš dan, vaš put – fleksibilna zaustavljanja." },
          { title: "Prijatelji obitelji", desc: "Topla dobrodošlica lokalne obitelji." },
          { title: "Dupini i skrivene uvale", desc: "Otkrijte mjesta dostupna samo brodom." }
        ],
        statLabels: ["Gostiju max", "Fleksibilno", "Dupini", "Uvale"]
      },
      testimonial: {
        quote: "Najljepši dan našeg odmora! Kapetan nam je pokazao uvale koje sami nikada ne bismo pronašli.",
        author: "Obitelj Müller, Njemačka",
        tripAdvisorLink: "TripAdvisor",
        googleReviewsLink: "Google"
      },
      didYouKnow: {
        title: "Jeste li znali?",
        text: "Oko 200 dupina živi u vodama oko Lošinja. Šanse da ih vidite su velike!"
      },
      onBoardExperience: {
        title: "Doživljaj na brodu",
        sectionLabel: "Na Brodu"
      }
    },
    tours: {
      title: "Naši Izleti",
      subtitle: "Odaberite svoj savršeni doživljaj",
      sectionLabel: "Doživljaji",
      items: [
        {
          id: "fullDay",
          name: "Cjelodnevni izlet",
          duration: "10:00 – 18:00",
          description: "Istražite jedinstvene pješčane plaže otoka Suska i šarmantni otok cvijeća Ilovik na nezaboravnom cjelodnevnom izletu.",
          highlights: ["Kupanje u skrivenim uvalama", "Otok Susak i uvala Porat", "Otok cvijeća Ilovik", "Do 12 osoba moguće"],
          included: ["Piće dobrodošlice (aperitiv)", "Svježe voće (ujutro i popodne)", "Canapéi", "3 pića po osobi (pivo, sok, voda, vino, koktel)"],
          price: "550€ (do 8 os.) | +50€ po dodatnoj osobi",
          image: "/tours/all_day_tour.webp",
          basePrice: 550,
          extraPersonPrice: 50,
          maxPersons: 8
        },
        {
          id: "halfDay",
          name: "Poludnevni izlet",
          duration: "10:00 – 14:00 ili 15:00 – 19:00",
          description: "Savršeno za opuštajući pola dana na moru – idealno za obitelji ili romantični popodnevni izlet.",
          highlights: ["Fleksibilan izbor vremena (jutro ili popodne)", "Istraživanje skrivenih uvala", "Plivanje i ronjenje", "Do 12 osoba moguće"],
          included: ["Piće dobrodošlice (aperitiv)", "Svježe sezonsko voće", "2 pića po osobi (sok, voda, pivo, vino, koktel)"],
          price: "350€ (do 8 os.) | +30€ po dodatnoj osobi",
          image: "/tours/half_day_tour.webp",
          basePrice: 350,
          extraPersonPrice: 30,
          maxPersons: 8
        },
        {
          id: "custom",
          name: "Individualni izlet",
          duration: "Fleksibilno po dogovoru",
          description: "Trudimo se ispuniti vaše želje! Idealno za privatne proslave, rođendane, vožnje zalaskom sunca i više.",
          highlights: ["Privatne proslave i eventi", "Romantične vožnje zalaskom sunca", "Rođendani i posebne prilike", "Potpuna sloboda odabira rute"],
          included: ["Osobno planiranje rute", "Kapetan", "Individualni izbor pića i grickalica"],
          price: "Cijena na upit",
          image: "/tours/custom_tour.webp"
        }
      ],
      info: {
        includedTitle: "Uključeno",
        bringTitle: "Što ponijeti",
        bringText: "Kupaći kostim, ručnik, krema za sunčanje, kapa, kamera.",
        foodTitle: "Hrana i piće",
        foodText: "Grickalice i piće uključeni. Ručak se može organizirati u restoranima na otocima.",
        kidsTitle: "Prikladno za sve",
        kidsText: "Djeca i stariji gosti su dobrodošli.",
        bookButton: "Rezerviraj doživljaj"
      }
    },
    destinations: {
      title: "Naša odredišta",
      subtitle: "Otkrijte najljepše otoke Jadrana",
      sectionLabel: "Odredišta",
      items: [
        {
          id: "susak",
          name: "Otok Susak i uvala Porat",
          nickname: "Havaji Jadrana",
          description: "Otok Susak, smješten u Kvarnerskom arhipelagu, jedinstven je po pješčanom tlu i bujnoj vegetaciji. Bez automobila i prometne buke, Susak nudi mir i autentičnu atmosferu – idealno za obiteljski izlet. Uvala Porat, često zvana 'Havaji' zbog svoje ljepote, nudi mirni raj s tri plaže, okružen srebrnim pijeskom i kristalno čistim morem.",
          highlights: ["Pješčane plaže s plitkom vodom – savršeno za djecu", "Otok bez automobila s autentičnom atmosferom", "Uvala Porat s tri prekrasne plaže", "Tradicionalni restorani sa svježom ribom", "Jedinstvena kultura, nošnje i dijalekt"],
          image: "/susak.webp"
        },
        {
          id: "ilovik",
          name: "Otok Ilovik",
          nickname: "Otok cvijeća",
          description: "Otok Ilovik, smješten južno od Lošinja, poznat je po bujnoj prirodi, mediteranskim vrtovima i autentičnom otočkom životu. Šetnja uskim ulicama, okruženim oleandrima i kamenim kućama, nudi jedinstveni doživljaj mira i ljepote. Brojne uvale, poput Paržina, oduševljavaju kristalno čistom vodom.",
          highlights: ["Mediteranski vrtovi puni oleandara", "Kristalno čiste uvale za plivanje i ronjenje", "Skakanje sa stijena za avanturiste", "Obiteljski restorani s lokalnom kuhinjom", "Romantična otočka atmosfera"],
          image: "/ilovik.webp"
        }
      ]
    },
    about: {
      title: "O Nama",
      sectionLabel: "O Nama",
      storyTitle: "Naša priča",
      storyText: "Sve je počelo sa starim brodom iz 1988. – pomalo istrošen, ali pun šarma i još više karaktera. Mi, obitelj kapetana, obnovili smo ga s ljubavlju i uz podršku dragih prijatelja, udahnuli mu novi život i pretvorili ga u pravi mali dragulj mora. Danas ovaj brod ne prevozi samo putnike – nosi uspomene, smijeh i ljubav naše obitelji.",
      captainTitle: "Naš tim",
      captainText: "Naš kapetan, koji je ujedno i vlasnik, svaki dan pažljivo bira najljepše rute, skrivene uvale i posebne čari Lošinja. Njegova desna ruka pruža prvi osmijeh na brodu – i brine da ti tijekom cijele avanture ništa ne nedostaje.",
      captainBio: ["Lokalna obitelj sa strašću za more", "Govori njemački, engleski, hrvatski", "Poznaje svaki kutak otočnog svijeta"],
      nameTitle: "Zašto 'Robinson'?",
      nameText: "Vodimo vas na mjesta toliko netaknuta da ćete se osjećati kao moderni Robinson Crusoe.",
      philosophyTitle: "Naša filozofija",
      philosophyItems: ["Obitelj, more i tradicija ujedinjeni", "Osobna briga od početka do kraja", "Autentični doživljaj na vodi", "Dijeljenje tajni otoka s vama"]
    },
    gallery: {
      title: "Galerija",
      subtitle: "Uspomene s naših izleta",
      instagram: {
        tagline: "Budite u toku",
        heading: "Pratite nas na Instagramu",
        sectionLabel: "Galerija",
        buttonText: "@robinsonboattours",
        url: "https://instagram.com/robinsonboattours"
      }
    },
    contact: {
      title: "Kontakt i Rezervacije",
      subtitle: "Isplanirajte svoju avanturu",
      sectionLabel: "Kontakt",
      form: {
        name: "Ime",
        email: "Email adresa",
        phone: "Broj telefona (opcionalno)",
        date: "Željeni datum",
        guests: "Broj gostiju",
        tourType: "Željeni izlet",
        message: "Poruka / Posebne želje",
        submit: "Pošalji upit",
        disclaimer: "Vaš upit je neobvezujući.",
        success: "Hvala! Javit ćemo vam se što je prije moguće.",
        successTitle: "Uspješno!",
        sendAnother: "Pošalji novi upit",
        error: "Slanje nije uspjelo. Molimo pokušajte ponovno ili nas kontaktirajte direktno.",
        options: {
          fullDay: "Cjelodnevni izlet (550€)",
          halfDay: "Poludnevni izlet (350€)",
          custom: "Individualni izlet"
        }
      },
      info: {
        direct: "Direktan kontakt",
        phone1: "+385 97 7119 736",
        phone2: "+385 91 9869 368",
        email: "animamaris.adriatic@gmail.com",
        location: "Mjesto sastanka",
        locationDesc: "Sastajemo se u glavnoj luci Mali Lošinj."
      },
      faqTitle: "Česta pitanja (FAQ)",
      faqCtaSubtitle: "Imate još pitanja?",
      faqCtaButton: "Kontaktirajte nas",
      faqs: [
        { question: "Što trebamo ponijeti?", answer: "Kupaći, ručnik, kremu za sunčanje. Opremu za ronjenje imamo." },
        { question: "Je li hrana uključena?", answer: "Nudimo vodu i grickalice. Ručak se može dogovoriti." },
        { question: "Što ako je loše vrijeme?", answer: "Sigurnost je prva. Kontaktirat ćemo vas za promjenu termina." },
        { question: "Ima li hlada na brodu?", answer: "Da, na brodu ima zasjenjenih mjesta." },
        { question: "Ima li WC na brodu?", answer: "Da, na brodu postoji WC." },
        { question: "Jesu li djeca dobrodošla?", answer: "Da, djeca su srdačno dobrodošla. Molimo navedite njihovu dob prilikom upita." },
        { question: "Smijemo li donijeti vlastita pića?", answer: "Da, naravno." },
        { question: "Smijemo li slušati glazbu?", answer: "Da, naravno." }
      ]
    }
  },
  it: {
    nav: {
      home: "Home",
      tours: "Escursioni",
      destinations: "Destinazioni",
      about: "Chi siamo",
      gallery: "Galleria",
      contact: "Contatti",
      bookNow: "Prenota"
    },
    home: {
      hero: {
        slogan: "Scopri Lošinj come un Robinson",
        sub: "Tour privati in barca con il cuore – Lontano dal turismo di massa",
        ctaPrimary: "Vedi le escursioni",
        ctaSecondary: "Richiedi informazioni"
      },
      usp: {
        title: "Perché Robinson Tours?",
        items: [
          { title: "Massimo 12 ospiti", desc: "Atmosfera privata e intima, niente folle." },
          { title: "Itinerari personalizzati", desc: "Il vostro giorno, il vostro percorso – Soste flessibili." },
          { title: "Adatto alle famiglie", desc: "Ospitalità calorosa da una famiglia locale." },
          { title: "Delfini e baie nascoste", desc: "Scoprite luoghi accessibili solo in barca." }
        ],
        statLabels: ["Ospiti max", "Flessibile", "Delfini", "Baie"]
      },
      testimonial: {
        quote: "La giornata più bella della nostra vacanza! Il capitano ci ha mostrato baie che non avremmo mai trovato da soli.",
        author: "Famiglia Müller, Germania",
        tripAdvisorLink: "TripAdvisor",
        googleReviewsLink: "Google"
      },
      didYouKnow: {
        title: "Lo sapevate?",
        text: "Circa 200 delfini vivono nelle acque intorno a Lošinj. Le probabilità di vederli sono alte!"
      },
      onBoardExperience: {
        title: "Esperienza a bordo",
        sectionLabel: "A Bordo"
      }
    },
    tours: {
      title: "Le nostre escursioni",
      subtitle: "Scegliete la vostra esperienza perfetta tra le isole",
      sectionLabel: "Esperienze",
      items: [
        {
          id: "fullDay",
          name: "Escursione giornaliera",
          duration: "10:00 – 18:00",
          description: "Esplorate le uniche spiagge sabbiose di Susak e l'affascinante isola dei fiori Ilovik in un'indimenticabile gita giornaliera.",
          highlights: ["Soste per nuotare in baie nascoste", "Isola di Susak e Baia Porat", "Isola dei fiori Ilovik", "Fino a 12 persone possibili"],
          included: ["Drink di benvenuto (aperitivo)", "Frutta fresca (mattina e pomeriggio)", "Canapé", "3 bevande a persona (birra, succo, acqua, vino, cocktail)"],
          price: "550€ (fino a 8 pers.) | +50€ per persona extra",
          image: "/tours/all_day_tour.webp",
          basePrice: 550,
          extraPersonPrice: 50,
          maxPersons: 8
        },
        {
          id: "halfDay",
          name: "Escursione di mezza giornata",
          duration: "10:00 – 14:00 oppure 15:00 – 19:00",
          description: "Perfetta per una rilassante mezza giornata in mare – ideale per famiglie o come romantica escursione pomeridiana.",
          highlights: ["Scelta flessibile dell'orario (mattina o pomeriggio)", "Esplorazione di baie nascoste", "Nuoto e snorkeling", "Fino a 12 persone possibili"],
          included: ["Drink di benvenuto (aperitivo)", "Frutta fresca di stagione", "2 bevande a persona (succo, acqua, birra, vino, cocktail)"],
          price: "350€ (fino a 8 pers.) | +30€ per persona extra",
          image: "/tours/half_day_tour.webp",
          basePrice: 350,
          extraPersonPrice: 30,
          maxPersons: 8
        },
        {
          id: "custom",
          name: "Tour personalizzato",
          duration: "Flessibile su accordo",
          description: "Cerchiamo di soddisfare i vostri desideri! Ideale per feste private, compleanni, crociere al tramonto e altro.",
          highlights: ["Feste ed eventi privati", "Romantiche crociere al tramonto", "Compleanni e occasioni speciali", "Completa libertà di percorso"],
          included: ["Pianificazione personale del percorso", "Capitano", "Selezione personalizzata di bevande e snack"],
          price: "Prezzo su richiesta",
          image: "/tours/custom_tour.webp"
        }
      ],
      info: {
        includedTitle: "Incluso",
        bringTitle: "Cosa portare",
        bringText: "Costume, asciugamano, protezione solare, cappello, macchina fotografica.",
        foodTitle: "Cibo e bevande",
        foodText: "Snack e bevande inclusi. Il pranzo può essere organizzato nei ristoranti delle isole.",
        kidsTitle: "Adatto a tutti",
        kidsText: "Bambini e ospiti anziani sono i benvenuti.",
        bookButton: "Prenota l'esperienza"
      }
    },
    destinations: {
      title: "Le nostre destinazioni",
      subtitle: "Scoprite le isole più belle dell'Adriatico",
      sectionLabel: "Destinazioni",
      items: [
        {
          id: "susak",
          name: "Isola di Susak e Baia Porat",
          nickname: "Hawaii dell'Adriatico",
          description: "L'isola di Susak, situata nell'arcipelago del Quarnero, è unica per il suo terreno sabbioso e la vegetazione rigogliosa. Senza auto e rumore del traffico, Susak offre pace e un'atmosfera autentica – ideale per una gita in famiglia. La Baia Porat, spesso chiamata 'Hawaii' per la sua bellezza, offre un paradiso tranquillo con tre spiagge, circondate da sabbia argentata e mare cristallino.",
          highlights: ["Spiagge sabbiose con acqua bassa – perfette per i bambini", "Isola senza auto con atmosfera autentica", "Baia Porat con tre splendide spiagge", "Ristoranti tradizionali con pesce fresco", "Cultura unica, costumi e dialetto"],
          image: "/susak.webp"
        },
        {
          id: "ilovik",
          name: "Isola di Ilovik",
          nickname: "Isola dei Fiori",
          description: "L'isola di Ilovik, situata a sud di Lošinj, è nota per la sua natura rigogliosa, i giardini mediterranei e la vita autentica dell'isola. Una passeggiata per le stradine strette, circondate da oleandri e case in pietra, offre un'esperienza unica di pace e bellezza. Le numerose baie, come Paržine, incantano con acqua cristallina.",
          highlights: ["Giardini mediterranei pieni di oleandri", "Baie cristalline per nuotare e fare snorkeling", "Tuffi dalle scogliere per gli avventurosi", "Ristoranti a gestione familiare con cucina locale", "Atmosfera romantica dell'isola"],
          image: "/ilovik.webp"
        }
      ]
    },
    about: {
      title: "Chi siamo",
      sectionLabel: "Chi Siamo",
      storyTitle: "La nostra storia",
      storyText: "Tutto è iniziato con una vecchia barca del 1988 – un po' usurata, ma piena di fascino e ancora più carattere. Noi, la famiglia del capitano, l'abbiamo restaurata con amore e con il supporto di cari amici, le abbiamo dato nuova vita e l'abbiamo trasformata in un vero piccolo gioiello del mare. Oggi questa barca non trasporta solo passeggeri – porta ricordi, risate e l'amore della nostra famiglia.",
      captainTitle: "Il nostro team",
      captainText: "Il nostro capitano, che è anche il proprietario, seleziona ogni giorno con cura i percorsi più belli, le baie nascoste e i tesori speciali di Lošinj. La sua mano destra regala il primo sorriso a bordo – e si assicura che non ti manchi nulla durante l'avventura.",
      captainBio: ["Famiglia locale con passione per il mare", "Parla tedesco, inglese, croato", "Conosce ogni angolo del mondo delle isole"],
      nameTitle: "Perché 'Robinson'?",
      nameText: "Vi portiamo in luoghi così incontaminati che vi sentirete come un moderno Robinson Crusoe.",
      philosophyTitle: "La nostra filosofia",
      philosophyItems: ["Famiglia, mare e tradizione uniti", "Cura personale dall'inizio alla fine", "Esperienza autentica sull'acqua", "Condivisione dei segreti dell'isola con voi"]
    },
    gallery: {
      title: "Galleria",
      subtitle: "Impressioni dalle nostre escursioni",
      instagram: {
        tagline: "Restate aggiornati",
        heading: "Siamo su Instagram",
        sectionLabel: "Galleria",
        buttonText: "@robinsonboattours",
        url: "https://instagram.com/robinsonboattours"
      }
    },
    contact: {
      title: "Contatti e Prenotazioni",
      subtitle: "Pianificate la vostra avventura con noi",
      sectionLabel: "Contatti",
      form: {
        name: "Nome",
        email: "Indirizzo email",
        phone: "Numero di telefono (facoltativo)",
        date: "Data preferita",
        guests: "Numero di ospiti",
        tourType: "Escursione preferita",
        message: "Messaggio / Richieste speciali",
        submit: "Invia richiesta",
        disclaimer: "La tua richiesta non è vincolante.",
        success: "Grazie! Ti risponderemo il prima possibile.",
        successTitle: "Successo!",
        sendAnother: "Invia un'altra richiesta",
        error: "Invio fallito. Riprova o contattaci direttamente.",
        options: {
          fullDay: "Escursione giornaliera (550€)",
          halfDay: "Escursione di mezza giornata (350€)",
          custom: "Tour personalizzato"
        }
      },
      info: {
        direct: "Contatto diretto",
        phone1: "+385 97 7119 736",
        phone2: "+385 91 9869 368",
        email: "animamaris.adriatic@gmail.com",
        location: "Punto d'incontro",
        locationDesc: "Ci incontriamo nel porto principale di Mali Lošinj."
      },
      faqTitle: "Domande frequenti (FAQ)",
      faqCtaSubtitle: "Hai ancora domande?",
      faqCtaButton: "Contattaci",
      faqs: [
        { question: "Cosa dobbiamo portare?", answer: "Costume, asciugamano, protezione solare. L'attrezzatura snorkeling la forniamo noi." },
        { question: "Il cibo è incluso?", answer: "Offriamo acqua e snack. Il pranzo può essere organizzato." },
        { question: "Cosa succede in caso di maltempo?", answer: "La sicurezza prima di tutto. Vi contatteremo per riprogrammare." },
        { question: "C'è ombra a bordo?", answer: "Sì, ci sono zone ombreggiate a bordo." },
        { question: "C'è un bagno a bordo?", answer: "Sì, c'è un bagno a bordo." },
        { question: "I bambini sono benvenuti?", answer: "Sì, i bambini sono i benvenuti. Indicate l'età al momento della richiesta." },
        { question: "Possiamo portare le nostre bevande?", answer: "Sì, certo." },
        { question: "Possiamo ascoltare musica?", answer: "Sì, naturalmente." }
      ]
    }
  }
};