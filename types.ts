export type Language = 'de' | 'en' | 'hr';

export type Page = 'home' | 'tours' | 'about' | 'gallery' | 'contact';

export interface Tour {
  id: string;
  name: string;
  duration: string;
  description: string;
  highlights: string[];
  included: string[];
  price: string;
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
    };
    testimonial: {
      quote: string;
      author: string;
    };
    didYouKnow: {
      title: string;
      text: string;
    };
  };
  tours: {
    title: string;
    subtitle: string;
    items: Tour[];
    info: {
      bringTitle: string;
      bringText: string;
      foodTitle: string;
      foodText: string;
      kidsTitle: string;
      kidsText: string;
    };
  };
  about: {
    title: string;
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
      buttonText: string;
      url: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      date: string;
      guests: string;
      tourType: string;
      message: string;
      submit: string;
      success: string;
      options: {
        islandHopping: string;
        sunset: string;
        custom: string;
      }
    };
    info: {
      direct: string;
      location: string;
      locationDesc: string;
    };
    faqTitle: string;
    faqCtaSubtitle: string;
    faqCtaButton: string;
    faqs: FaqItem[];
  };
}