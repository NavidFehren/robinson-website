import { Content, Language } from './types';

export const content: Record<Language, Content> = {
  de: {
    nav: {
      home: "Startseite",
      tours: "Touren",
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
        ]
      },
      testimonial: {
        quote: "Der schönste Tag unseres Urlaubs! Der Kapitän zeigte uns Buchten, die wir alleine nie gefunden hätten.",
        author: "Familie Müller, Deutschland"
      },
      didYouKnow: {
        title: "Wussten Sie schon?",
        text: "Rund 200 Delfine leben ständig in den Gewässern rund um Lošinj. Die Chancen stehen gut, sie zu sehen!"
      }
    },
    tours: {
      title: "Unsere Touren",
      subtitle: "Wählen Sie Ihr perfektes Inselerlebnis",
      items: [
        {
          id: "island",
          name: "Ganztägiges Inselhüpfen (Susak & Ilovik)",
          duration: "Ca. 10:00 – 17:00 Uhr",
          description: "Erkunden Sie die einzigartigen Sandstrände von Susak und die charmante Blumeninsel Ilovik.",
          highlights: ["Schwimmstopps in versteckten Buchten", "Dorfbesuch auf Susak", "Blumeninsel Ilovik"],
          included: ["Kapitän", "Treibstoff", "Schnorchelausrüstung", "Willkommensgetränk", "Wasser"],
          price: "Ab 500€ pro Boot (bis 12 Pers.)",
          image: "https://picsum.photos/seed/island/800/600"
        },
        {
          id: "sunset",
          name: "Sonnenuntergang & Delfine",
          duration: "Ca. 3 Stunden (Abend)",
          description: "Eine abendliche Fahrt zu den Delfin-Hotspots rund um Lošinj, gekrönt von einem Sonnenuntergang auf offener See.",
          highlights: ["Delfinbeobachtung", "Malerische Küstenlinie", "Romantischer Sonnenuntergang"],
          included: ["Kapitän", "Treibstoff", "Schnorchelausrüstung", "Getränke zum Sonnenuntergang"],
          price: "Ab 300€ pro Boot",
          image: "https://picsum.photos/seed/sunset/800/600"
        },
        {
          id: "custom",
          name: "Design Your Day (Wunschtour)",
          duration: "Flexibel (Halb- oder Ganztags)",
          description: "Gestalten Sie Ihr eigenes Abenteuer! Ideal für Geburtstage, Anträge oder einfach einen Tag nach Ihren Wünschen.",
          highlights: ["Völlig freie Routenwahl", "Einsame 'Robinson'-Strände", "Kombinierte Wander- & Bootstouren"],
          included: ["Persönliche Routenplanung", "Kapitän", "Treibstoff", "Schnorchelausrüstung"],
          price: "Preis auf Anfrage",
          image: "https://picsum.photos/seed/custom/800/600"
        }
      ],
      info: {
        bringTitle: "Was Sie mitbringen sollten",
        bringText: "Badesachen, Handtuch, Sonnenschutz, Hut, Kamera.",
        foodTitle: "Verpflegung",
        foodText: "Picknick kann mitgebracht werden. Mittagessen in Inselrestaurants möglich.",
        kidsTitle: "Für alle geeignet",
        kidsText: "Kinder und ältere Gäste sind herzlich willkommen."
      }
    },
    about: {
      title: "Über Uns",
      storyTitle: "Unsere Geschichte",
      storyText: "Robinson Boat Tours ist ein Familienunternehmen. Unser Kapitän ist auf Lošinj geboren und aufgewachsen. Die Liebe zum Meer ist unser Antrieb.",
      captainTitle: "Der Kapitän",
      captainText: "Mit Jahrzehnten an Erfahrung auf diesen Gewässern kennt er jeden Stein und jede Bucht.",
      captainBio: ["Jahrzehntelange Erfahrung", "Spricht Deutsch, Englisch, Kroatisch", "Lokaler Experte"],
      nameTitle: "Warum 'Robinson'?",
      nameText: "Wir bringen Sie an Orte, die so unberührt sind, dass Sie sich wie ein moderner Robinson Crusoe fühlen – fernab vom Trubel.",
      philosophyTitle: "Unsere Philosophie",
      philosophyItems: ["Herzlicher Empfang", "Persönliche Betreuung", "Flexibilität bei Ihren Wünschen", "Geheimnisse der Insel teilen"]
    },
    gallery: {
      title: "Galerie",
      subtitle: "Impressionen von unseren Touren",
      instagram: {
        tagline: "Bleiben Sie auf dem Laufenden",
        heading: "Wir sind auf Instagram",
        buttonText: "@robinsonboattours",
        url: "https://instagram.com/robinsonboattours"
      }
    },
    contact: {
      title: "Kontakt & Buchen",
      subtitle: "Planen Sie Ihr Abenteuer mit uns",
      form: {
        name: "Name",
        email: "E-Mail Adresse",
        phone: "Telefonnummer (optional)",
        date: "Wunschdatum",
        guests: "Anzahl der Gäste",
        tourType: "Gewünschte Tour",
        message: "Nachricht / Besondere Wünsche",
        submit: "Anfrage senden",
        success: "Danke! Wir melden uns innerhalb von 24 Stunden.",
        options: {
          islandHopping: "Inselhüpfen (Susak & Ilovik)",
          sunset: "Sonnenuntergang & Delfine",
          custom: "Individuelle Anfrage"
        }
      },
      info: {
        direct: "Direkter Kontakt",
        location: "Treffpunkt",
        locationDesc: "Wir treffen uns im Haupthafen von Mali Lošinj."
      },
      faqTitle: "Häufig gestellte Fragen (FAQ)",
      faqCtaSubtitle: "Noch Fragen?",
      faqCtaButton: "Kontaktieren Sie uns",
      faqs: [
        { question: "Was sollen wir mitbringen?", answer: "Badesachen, Handtuch, Sonnenschutz. Schnorchelausrüstung stellen wir." },
        { question: "Ist Verpflegung inklusive?", answer: "Wir bieten Wasser und kleine Snacks. Mittagessen kann arrangiert werden." },
        { question: "Sind Hunde erlaubt?", answer: "Bitte fragen Sie uns – meistens sind brave Hunde willkommen." },
        { question: "Was passiert bei schlechtem Wetter?", answer: "Sicherheit geht vor. Wir kontaktieren Sie für Alternativen." }
      ]
    }
  },
  en: {
    nav: {
      home: "Home",
      tours: "Tours",
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
        ]
      },
      testimonial: {
        quote: "The best day of our holiday! The captain showed us bays we never would have found alone.",
        author: "The Müller Family, Germany"
      },
      didYouKnow: {
        title: "Did you know?",
        text: "Around 200 dolphins live in the waters around Lošinj. Chances are good to see them!"
      }
    },
    tours: {
      title: "Our Tours",
      subtitle: "Choose your perfect island experience",
      items: [
        {
          id: "island",
          name: "Full-Day Island Hopping (Susak & Ilovik)",
          duration: "Approx. 10:00 – 17:00",
          description: "Explore the unique sandy beaches of Susak island and the charming flower island of Ilovik.",
          highlights: ["Swimming in hidden bays", "Susak village walk", "Ilovik flower island"],
          included: ["Captain", "Fuel", "Snorkel gear", "Welcome drink", "Water"],
          price: "From 500€ per boat (up to 12 ppl)",
          image: "https://picsum.photos/seed/island/800/600"
        },
        {
          id: "sunset",
          name: "Sunset & Dolphins Tour",
          duration: "Approx. 3 hours (Evening)",
          description: "An evening cruise to dolphin hotspots around Lošinj, ending with drinks while watching the sunset.",
          highlights: ["Dolphin watching", "Scenic coastline", "Romantic sunset"],
          included: ["Captain", "Fuel", "Snorkel gear", "Sunset drinks"],
          price: "From 300€ per boat",
          image: "https://picsum.photos/seed/sunset/800/600"
        },
        {
          id: "custom",
          name: "Design Your Day (Custom Tour)",
          duration: "Flexible (Half or Full Day)",
          description: "Create your own adventure! Ideal for birthdays, proposals, or just a day your way.",
          highlights: ["Total route freedom", "Secluded 'Robinson' beaches", "Combined hike & boat"],
          included: ["Route planning", "Captain", "Fuel", "Snorkel gear"],
          price: "Price on request",
          image: "https://picsum.photos/seed/custom/800/600"
        }
      ],
      info: {
        bringTitle: "What to bring",
        bringText: "Swimwear, towel, sunscreen, hat, camera.",
        foodTitle: "Food & Drink",
        foodText: "You can bring a picnic. Lunch can be arranged at island restaurants.",
        kidsTitle: "Suitable for all",
        kidsText: "Children and elderly guests are very welcome."
      }
    },
    about: {
      title: "About Us",
      storyTitle: "Our Story",
      storyText: "Robinson Boat Tours is a family-run business. The captain was born and raised on Lošinj. Love for the sea drives us.",
      captainTitle: "The Captain",
      captainText: "With decades of sailing experience here, he knows every rock and bay.",
      captainBio: ["Decades of experience", "Speaks German, English, Croatian", "Local expert"],
      nameTitle: "Why 'Robinson'?",
      nameText: "We take you to places so untouched you feel like a modern-day Robinson Crusoe.",
      philosophyTitle: "Our Philosophy",
      philosophyItems: ["Open arms welcome", "Personal attention", "Flexibility", "Sharing island secrets"]
    },
    gallery: {
      title: "Gallery",
      subtitle: "Impressions from our tours",
      instagram: {
        tagline: "Stay up-to-date",
        heading: "We're on Instagram",
        buttonText: "@robinsonboattours",
        url: "https://instagram.com/robinsonboattours"
      }
    },
    contact: {
      title: "Contact & Booking",
      subtitle: "Plan your adventure with us",
      form: {
        name: "Name",
        email: "Email Address",
        phone: "Phone Number (optional)",
        date: "Preferred Date",
        guests: "Number of Guests",
        tourType: "Preferred Tour",
        message: "Message / Special Wishes",
        submit: "Send Inquiry",
        success: "Thank you! We'll confirm availability within 24 hours.",
        options: {
          islandHopping: "Island Hopping (Susak & Ilovik)",
          sunset: "Sunset & Dolphins",
          custom: "Custom Request"
        }
      },
      info: {
        direct: "Direct Contact",
        location: "Meeting Point",
        locationDesc: "We meet at the main harbor of Mali Lošinj."
      },
      faqTitle: "Frequently Asked Questions",
      faqCtaSubtitle: "Still have questions?",
      faqCtaButton: "Contact us",
      faqs: [
        { question: "What should we bring?", answer: "Swimwear, towel, sunscreen. We provide snorkel gear." },
        { question: "Is food included?", answer: "We provide water and snacks. Lunch can be arranged." },
        { question: "Are dogs allowed?", answer: "Please ask us – usually well-behaved dogs are welcome." },
        { question: "What if the weather is bad?", answer: "Safety first. We will contact you to reschedule." }
      ]
    }
  },
  hr: {
    nav: {
      home: "Početna",
      tours: "Izleti",
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
        ]
      },
      testimonial: {
        quote: "Najljepši dan našeg odmora! Kapetan nam je pokazao uvale koje sami nikada ne bismo pronašli.",
        author: "Obitelj Müller, Njemačka"
      },
      didYouKnow: {
        title: "Jeste li znali?",
        text: "Oko 200 dupina živi u vodama oko Lošinja. Šanse da ih vidite su velike!"
      }
    },
    tours: {
      title: "Naši Izleti",
      subtitle: "Odaberite svoj savršeni doživljaj",
      items: [
        {
          id: "island",
          name: "Cjelodnevni izlet (Susak & Ilovik)",
          duration: "Oko 10:00 – 17:00",
          description: "Istražite jedinstvene pješčane plaže otoka Suska i šarmantni otok cvijeća Ilovik.",
          highlights: ["Kupanje u skrivenim uvalama", "Šetnja selom Susak", "Otok Ilovik"],
          included: ["Kapetan", "Gorivo", "Oprema za ronjenje", "Piće dobrodošlice", "Voda"],
          price: "Od 500€ po brodu (do 12 os.)",
          image: "https://picsum.photos/seed/island/800/600"
        },
        {
          id: "sunset",
          name: "Zalazak sunca i dupini",
          duration: "Oko 3 sata (Večer)",
          description: "Večernja vožnja do mjesta gdje borave dupini, uz piće i zalazak sunca na pučini.",
          highlights: ["Promatranje dupina", "Slikovita obala", "Romantičan zalazak sunca"],
          included: ["Kapetan", "Gorivo", "Oprema za ronjenje", "Piće"],
          price: "Od 300€ po brodu",
          image: "https://picsum.photos/seed/sunset/800/600"
        },
        {
          id: "custom",
          name: "Dizajniraj svoj dan",
          duration: "Fleksibilno",
          description: "Kreirajte vlastitu avanturu! Idealno za rođendane, proslave ili dan po vašoj želji.",
          highlights: ["Slobodan izbor rute", "Skrivene 'Robinson' plaže", "Ribolov ili kupanje"],
          included: ["Planiranje rute", "Kapetan", "Gorivo", "Oprema za ronjenje"],
          price: "Cijena na upit",
          image: "https://picsum.photos/seed/custom/800/600"
        }
      ],
      info: {
        bringTitle: "Što ponijeti",
        bringText: "Kupaći kostim, ručnik, krema za sunčanje, kapa, kamera.",
        foodTitle: "Hrana i piće",
        foodText: "Možete ponijeti piknik. Ručak se može organizirati u restoranima na otocima.",
        kidsTitle: "Prikladno za sve",
        kidsText: "Djeca i stariji gosti su dobrodošli."
      }
    },
    about: {
      title: "O Nama",
      storyTitle: "Naša priča",
      storyText: "Robinson Boat Tours je obiteljski obrt. Kapetan je rođen i odrastao na Lošinju. Ljubav prema moru nas pokreće.",
      captainTitle: "Kapetan",
      captainText: "S desetljećima iskustva plovidbe ovim vodama, poznaje svaki kamen i uvalu.",
      captainBio: ["Dugogodišnje iskustvo", "Govori njemački, engleski, hrvatski", "Lokalni stručnjak"],
      nameTitle: "Zašto 'Robinson'?",
      nameText: "Vodimo vas na mjesta toliko netaknuta da ćete se osjećati kao moderni Robinson Crusoe.",
      philosophyTitle: "Naša filozofija",
      philosophyItems: ["Topla dobrodošlica", "Osobni pristup", "Fleksibilnost", "Dijeljenje tajni otoka"]
    },
    gallery: {
      title: "Galerija",
      subtitle: "Uspomene s naših izleta",
      instagram: {
        tagline: "Budite u toku",
        heading: "Pratite nas na Instagramu",
        buttonText: "@robinsonboattours",
        url: "https://instagram.com/robinsonboattours"
      }
    },
    contact: {
      title: "Kontakt i Rezervacije",
      subtitle: "Isplanirajte svoju avanturu",
      form: {
        name: "Ime",
        email: "Email adresa",
        phone: "Broj telefona (opcionalno)",
        date: "Željeni datum",
        guests: "Broj gostiju",
        tourType: "Željeni izlet",
        message: "Poruka / Posebne želje",
        submit: "Pošalji upit",
        success: "Hvala! Potvrdit ćemo dostupnost unutar 24 sata.",
        options: {
          islandHopping: "Izlet na otoke (Susak & Ilovik)",
          sunset: "Zalazak sunca & Dupini",
          custom: "Individuilan upit"
        }
      },
      info: {
        direct: "Direktan kontakt",
        location: "Mjesto sastanka",
        locationDesc: "Sastajemo se u glavnoj luci Mali Lošinj."
      },
      faqTitle: "Česta pitanja (FAQ)",
      faqCtaSubtitle: "Imate još pitanja?",
      faqCtaButton: "Kontaktirajte nas",
      faqs: [
        { question: "Što trebamo ponijeti?", answer: "Kupaći, ručnik, kremu za sunčanje. Opremu za ronjenje imamo." },
        { question: "Je li hrana uključena?", answer: "Nudimo vodu i grickalice. Ručak se može dogovoriti." },
        { question: "Smiju li psi na brod?", answer: "Molimo pitajte nas - obično su dobro odgojeni psi dobrodošli." },
        { question: "Što ako je loše vrijeme?", answer: "Sigurnost je prva. Kontaktirat ćemo vas za promjenu termina." }
      ]
    }
  },
  it: {
    nav: {
      home: "Home",
      tours: "Escursioni",
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
        ]
      },
      testimonial: {
        quote: "La giornata più bella della nostra vacanza! Il capitano ci ha mostrato baie che non avremmo mai trovato da soli.",
        author: "Famiglia Müller, Germania"
      },
      didYouKnow: {
        title: "Lo sapevate?",
        text: "Circa 200 delfini vivono nelle acque intorno a Lošinj. Le probabilità di vederli sono alte!"
      }
    },
    tours: {
      title: "Le nostre escursioni",
      subtitle: "Scegliete la vostra esperienza perfetta tra le isole",
      items: [
        {
          id: "island",
          name: "Gita giornaliera tra le isole (Susak e Ilovik)",
          duration: "Circa 10:00 – 17:00",
          description: "Esplorate le uniche spiagge sabbiose di Susak e l'affascinante isola dei fiori Ilovik.",
          highlights: ["Nuoto in baie nascoste", "Passeggiata nel villaggio di Susak", "Isola dei fiori Ilovik"],
          included: ["Capitano", "Carburante", "Attrezzatura snorkeling", "Drink di benvenuto", "Acqua"],
          price: "Da 500€ per barca (fino a 12 pers.)",
          image: "https://picsum.photos/seed/island/800/600"
        },
        {
          id: "sunset",
          name: "Tramonto e Delfini",
          duration: "Circa 3 ore (Serale)",
          description: "Una crociera serale verso i punti di avvistamento dei delfini intorno a Lošinj, con aperitivo al tramonto.",
          highlights: ["Osservazione delfini", "Costa panoramica", "Tramonto romantico"],
          included: ["Capitano", "Carburante", "Attrezzatura snorkeling", "Aperitivo al tramonto"],
          price: "Da 300€ per barca",
          image: "https://picsum.photos/seed/sunset/800/600"
        },
        {
          id: "custom",
          name: "Crea la tua giornata (Tour personalizzato)",
          duration: "Flessibile (Mezza o intera giornata)",
          description: "Create la vostra avventura! Ideale per compleanni, proposte o semplicemente una giornata su misura.",
          highlights: ["Totale libertà di percorso", "Spiagge 'Robinson' isolate", "Escursioni combinate a piedi e in barca"],
          included: ["Pianificazione itinerario", "Capitano", "Carburante", "Attrezzatura snorkeling"],
          price: "Prezzo su richiesta",
          image: "https://picsum.photos/seed/custom/800/600"
        }
      ],
      info: {
        bringTitle: "Cosa portare",
        bringText: "Costume, asciugamano, protezione solare, cappello, macchina fotografica.",
        foodTitle: "Cibo e bevande",
        foodText: "Potete portare un picnic. Il pranzo può essere organizzato nei ristoranti delle isole.",
        kidsTitle: "Adatto a tutti",
        kidsText: "Bambini e ospiti anziani sono i benvenuti."
      }
    },
    about: {
      title: "Chi siamo",
      storyTitle: "La nostra storia",
      storyText: "Robinson Boat Tours è un'azienda familiare. Il nostro capitano è nato e cresciuto a Lošinj. L'amore per il mare ci guida.",
      captainTitle: "Il Capitano",
      captainText: "Con decenni di esperienza in queste acque, conosce ogni roccia e ogni baia.",
      captainBio: ["Decenni di esperienza", "Parla tedesco, inglese, croato", "Esperto locale"],
      nameTitle: "Perché 'Robinson'?",
      nameText: "Vi portiamo in luoghi così incontaminati che vi sentirete come un moderno Robinson Crusoe.",
      philosophyTitle: "La nostra filosofia",
      philosophyItems: ["Accoglienza calorosa", "Attenzione personale", "Flessibilità", "Condivisione dei segreti dell'isola"]
    },
    gallery: {
      title: "Galleria",
      subtitle: "Impressioni dalle nostre escursioni",
      instagram: {
        tagline: "Restate aggiornati",
        heading: "Siamo su Instagram",
        buttonText: "@robinsonboattours",
        url: "https://instagram.com/robinsonboattours"
      }
    },
    contact: {
      title: "Contatti e Prenotazioni",
      subtitle: "Pianificate la vostra avventura con noi",
      form: {
        name: "Nome",
        email: "Indirizzo email",
        phone: "Numero di telefono (facoltativo)",
        date: "Data preferita",
        guests: "Numero di ospiti",
        tourType: "Escursione preferita",
        message: "Messaggio / Richieste speciali",
        submit: "Invia richiesta",
        success: "Grazie! Confermeremo la disponibilità entro 24 ore.",
        options: {
          islandHopping: "Gita tra le isole (Susak & Ilovik)",
          sunset: "Tramonto & Delfini",
          custom: "Richiesta personalizzata"
        }
      },
      info: {
        direct: "Contatto diretto",
        location: "Punto d'incontro",
        locationDesc: "Ci incontriamo nel porto principale di Mali Lošinj."
      },
      faqTitle: "Domande frequenti (FAQ)",
      faqCtaSubtitle: "Hai ancora domande?",
      faqCtaButton: "Contattaci",
      faqs: [
        { question: "Cosa dobbiamo portare?", answer: "Costume, asciugamano, protezione solare. L'attrezzatura snorkeling la forniamo noi." },
        { question: "Il cibo è incluso?", answer: "Offriamo acqua e snack. Il pranzo può essere organizzato." },
        { question: "Sono ammessi i cani?", answer: "Chiedeteci – di solito i cani ben educati sono benvenuti." },
        { question: "Cosa succede in caso di maltempo?", answer: "La sicurezza prima di tutto. Vi contatteremo per riprogrammare." }
      ]
    }
  }
};