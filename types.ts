export type Language = 'de' | 'en' | 'hr' | 'it';

export type Page = 'home' | 'tours' | 'destinations' | 'about' | 'gallery' | 'contact';

export interface Tour {
  id: string;
  name: string;
  duration: string;
  description: string;
  highlights: string[];
  included: string[];
  price: string;
  image: string;
  basePrice?: number;
  extraPersonPrice?: number;
  maxPersons?: number;
}

export interface Destination {
  id: string;
  name: string;
  nickname?: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Content {
  nav: {
    home: string;
    tours: string;
    destinations: string;
    about: string;
    gallery: string;
    contact: string;
    bookNow: string;
  };
  home: {
    hero: {
      slogan: string;
      sub: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    usp: {
      title: string;
      items: Array<{ title: string; desc: string }>;
      statLabels: string[];
    };
    testimonial: {
      quote: string;
      author: string;
    };
    didYouKnow: {
      title: string;
      text: string;
    };
    onBoardExperience: {
      title: string;
      sectionLabel: string;
    };
  };
  tours: {
    title: string;
    subtitle: string;
    sectionLabel: string;
    items: Tour[];
    info: {
      bringTitle: string;
      bringText: string;
      foodTitle: string;
      foodText: string;
      kidsTitle: string;
      kidsText: string;
      bookButton: string;
    };
  };
  destinations: {
    title: string;
    subtitle: string;
    sectionLabel: string;
    items: Destination[];
  };
  about: {
    title: string;
    sectionLabel: string;
    storyTitle: string;
    storyText: string;
    captainTitle: string;
    captainText: string;
    captainBio: string[];
    nameTitle: string;
    nameText: string;
    philosophyTitle: string;
    philosophyItems: string[];
  };
  gallery: {
    title: string;
    subtitle: string;
    instagram: {
      tagline: string;
      heading: string;
      sectionLabel: string;
      buttonText: string;
      url: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    sectionLabel: string;
    form: {
      name: string;
      email: string;
      phone: string;
      date: string;
      guests: string;
      tourType: string;
      message: string;
      submit: string;
      disclaimer: string;
      success: string;
      options: {
        fullDay: string;
        halfDay: string;
        custom: string;
      }
    };
    info: {
      direct: string;
      phone1: string;
      phone2: string;
      email: string;
      location: string;
      locationDesc: string;
    };
    faqTitle: string;
    faqCtaSubtitle: string;
    faqCtaButton: string;
    faqs: FaqItem[];
  };
}