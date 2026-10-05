export type NavItem = {
  href: string;
  label: string;
};

export type Sermon = {
  slug: string;
  title: string;
  series: string;
  date: string;
  speaker: string;
  summary: string;
};

export type Dictionary = {
  meta: {
    siteName: string;
    description: string;
  };
  banner: string;
  brand: {
    title: string;
    subtitle: string;
  };
  ui: {
    skip: string;
    menu: string;
    close: string;
    langLabel: string;
    readMore: string;
    backHome: string;
    blessing: string;
  };
  nav: NavItem[];
  footerLinks: NavItem[];
  contactCta: string;
  home: {
    eyebrow: string;
    title: string;
    lead: string;
    place: string;
    primaryCta: string;
    secondaryCta: string;
    goals: { title: string; text: string }[];
    verse: string;
    verseRef: string;
    storyTitle: string;
    story: string[];
    sermonsTitle: string;
    sermonsLead: string;
    allSermons: string;
    collegeTitle: string;
    collegeText: string;
    collegeCta: string;
    nextTitle: string;
    cards: { title: string; text: string; href: string; action: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    story: string[];
    goalsTitle: string;
    goals: { title: string; text: string }[];
    focusesTitle: string;
    focuses: { title: string; text: string }[];
    scheduleTitle: string;
    schedule: string[];
    placeTitle: string;
    placeNote: string;
    map: string;
    pastorTitle: string;
    pastorName: string;
    pastorText: string;
  };
  beliefs: {
    eyebrow: string;
    title: string;
    lead: string;
    note: string;
    items: { id: string; title: string; body: string; refs: string }[];
  };
  salvation: {
    eyebrow: string;
    title: string;
    lead: string;
    intro: string;
    stepsTitle: string;
    steps: { title: string; text: string; verse: string; ref: string }[];
    afterTitle: string;
    after: string[];
    inviteTitle: string;
    invite: string;
    inviteCta: string;
  };
  media: {
    eyebrow: string;
    title: string;
    lead: string;
    liveTitle: string;
    liveText: string;
    archiveTitle: string;
    open: string;
    playerNote: string;
    more: string;
  };
  sermons: Sermon[];
  give: {
    eyebrow: string;
    title: string;
    lead: string;
    thanks: string;
    checkTitle: string;
    payable: string;
    payee: string;
    mail: string;
    legal: string;
    ministriesTitle: string;
    ministries: { title: string; text: string }[];
    note: string;
  };
  testimonies: {
    eyebrow: string;
    title: string;
    lead: string;
    howTitle: string;
    steps: string[];
    emailLabel: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    faqTitle: string;
    faqs: { q: string; a: string }[];
    form: {
      name: string;
      email: string;
      phone: string;
      topic: string;
      topics: string[];
      message: string;
      submit: string;
      sending: string;
      successTitle: string;
      successText: string;
      required: string;
      invalidEmail: string;
      preview: string;
    };
  };
  college: {
    eyebrow: string;
    title: string;
    lead: string;
    points: { title: string; text: string }[];
    cta: string;
    note: string;
  };
  notFound: {
    title: string;
    text: string;
    action: string;
  };
  church: {
    address: string[];
    phone: string;
    phoneHref: string;
    email: string;
    mapHref: string;
  };
};
