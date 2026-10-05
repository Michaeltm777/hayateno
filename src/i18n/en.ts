import { paths, sermonSlugs } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export const en: Dictionary = {
  meta: {
    siteName: "HayatehNo Church",
    description:
      "HayatehNo is a Persian church in Dickinson, Texas, sharing the teaching and good news of Jesus Christ with Persian speakers everywhere.",
  },
  banner: "Bilingual preview of the proposed new website",
  brand: {
    title: "HayatehNo",
    subtitle: "Persian Church",
  },
  ui: {
    skip: "Skip to content",
    menu: "Menu",
    close: "Close",
    langLabel: "Language",
    readMore: "Continue",
    backHome: "Back home",
    blessing: "The blessing of the Lord be with you.",
  },
  nav: [
    { href: paths.home, label: "Home" },
    { href: paths.about, label: "About" },
    { href: paths.salvation, label: "Salvation" },
    { href: paths.media, label: "Media" },
    { href: paths.give, label: "Give" },
    { href: paths.contact, label: "Contact" },
  ],
  footerLinks: [
    { href: paths.beliefs, label: "Beliefs" },
    { href: paths.college, label: "Online college" },
    { href: paths.testimonies, label: "Testimonies" },
    { href: paths.contact, label: "Contact" },
  ],
  contactCta: "Contact",
  home: {
    eyebrow: "Good news",
    title: "A church as wide as the world",
    lead: "With joy we invite you to know more deeply the word of God’s love.",
    place: "Dickinson, Texas — and Persian speakers everywhere",
    primaryCta: "Meet Jesus",
    secondaryCta: "Latest teachings",
    goals: [
      {
        title: "Freedom from sin",
        text: "Jesus Christ has opened the way of forgiveness, so a life does not have to stay under sin.",
      },
      {
        title: "Freedom from false religion",
        text: "Faith rests on Jesus himself, not on superstition or rituals that cannot save.",
      },
      {
        title: "Freedom from self",
        text: "Knowing the unconditional love of God turns a life outward, toward other people.",
      },
    ],
    verse:
      "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
    verseRef: "John 3:16",
    storyTitle: "New life for Persian speakers",
    story: [
      "HayatehNo was formed for Iranians and Persian speakers in Houston, and for anyone in the world who can reach the internet.",
      "Through this website, gatherings for worship, prayer, and Scripture are available without the limits of time and place.",
      "We believe in the miracles of God, the power of the Holy Spirit, and the death and resurrection of Jesus Christ to change a human life.",
    ],
    sermonsTitle: "Latest programs",
    sermonsLead:
      "Teaching sessions by Pastor Mani Erfan, from the church’s public archive.",
    allSermons: "View all programs",
    collegeTitle: "HayatehNo online college",
    collegeText:
      "Teaching sessions are published weekly. Online-college registration will be placed here in the full site, after the church confirms the details.",
    collegeCta: "About the college",
    nextTitle: "A next step",
    cards: [
      {
        title: "When we gather",
        text: "In-person meetings at the former address are paused. Online teaching continues.",
        href: paths.about,
        action: "See the schedule",
      },
      {
        title: "What we believe",
        text: "Scripture, Jesus Christ, salvation by grace, and the church — a summary of HayatehNo’s faith.",
        href: paths.beliefs,
        action: "Read the beliefs",
      },
      {
        title: "Giving",
        text: "Checks payable to New Life Persian Church are accepted, and gifts are tax deductible.",
        href: paths.give,
        action: "How to give",
      },
    ],
  },
  about: {
    eyebrow: "About",
    title: "A church for Persian speakers",
    lead: "HayatehNo uses the internet as a bridge between Persian speakers in Houston and believers across the world.",
    story: [
      "In its published introduction, HayatehNo describes itself as the first online church started specifically for Iranians and Persian speakers.",
      "The church’s three aims are freedom from the chain of sin, freedom from false religion, and freedom from selfishness — so that people may know the Son of God.",
      "That same knowledge of God’s unconditional love is meant to be carried to others.",
    ],
    goalsTitle: "Three freedoms",
    goals: [
      {
        title: "Freedom from sin",
        text: "Salvation is God’s gift. It is not earned by human effort.",
      },
      {
        title: "Freedom from false religion",
        text: "We rely on Jesus Christ and his word, not on systems that take the place of the gospel.",
      },
      {
        title: "Freedom from self",
        text: "Discipleship is a life that no longer turns around itself.",
      },
    ],
    focusesTitle: "Where we put our attention",
    focuses: [
      {
        title: "Trust in Scripture",
        text: "The life of the church rests on the promise and authority of the Bible.",
      },
      {
        title: "Expecting God’s presence",
        text: "Without the presence of the Lord, our ministry is empty.",
      },
      {
        title: "Intentional witness",
        text: "We take the good news to people who have not yet heard it.",
      },
      {
        title: "Raising leaders",
        text: "Servant leaders are trained so the work can continue.",
      },
      {
        title: "Small groups",
        text: "A life line is a place to carry one another’s burdens.",
      },
      {
        title: "Discipleship",
        text: "Growth continues from the beginning of faith toward maturity.",
      },
    ],
    scheduleTitle: "When we meet",
    schedule: [
      "A gathering for teaching, prayer, and worship.",
      "Until further notice, in-person meetings are not held at the previous address.",
      "Weekly teaching remains available through the website.",
    ],
    placeTitle: "Where",
    placeNote:
      "The church’s published address is in Dickinson, Texas. In-person gatherings at this address are paused until further notice.",
    map: "Open in maps",
    pastorTitle: "Weekly teaching",
    pastorName: "Pastor Mani Erfan",
    pastorText:
      "The weekly teaching sessions in the church archive are published under the name of Pastor Mani Erfan. Fuller introductions of the pastors will be added here when the church provides them.",
  },
  beliefs: {
    eyebrow: "Beliefs",
    title: "What we believe",
    lead: "This page is a readable summary of the church’s published statement of faith. The final text will be confirmed with the church before the public site launches.",
    note: "The references follow the Scripture notes in the church’s statement.",
    items: [
      {
        id: "scripture",
        title: "Scripture",
        body: "The Old and New Testaments are the inspired, authoritative word of God and the final reference for the church’s teaching. In the original writings, Scripture is without error.",
        refs: "Proverbs 30:5; 2 Timothy 3:16; 2 Peter 1:20–21",
      },
      {
        id: "god",
        title: "The one God",
        body: "There is one God, revealed in three persons: Father, Son, and Holy Spirit. The three persons are equal in essence and eternal.",
        refs: "Genesis 1:26; Matthew 28:19; 1 John 5:7",
      },
      {
        id: "christ",
        title: "Jesus Christ",
        body: "Jesus Christ, the Son of God, is fully God and fully human. He was born of the virgin Mary, lived without sin, worked miracles, died on the cross for our sins, rose on the third day, ascended, and will return in glory.",
        refs: "John 1:1, 14; Philippians 2:5–11; Isaiah 7:14",
      },
      {
        id: "salvation",
        title: "Salvation",
        body: "People were made in the image of God and fell through disobedience. Salvation is a gift of grace, received by personal faith in Jesus Christ, not by good works. Repentance is a turning from sin to follow Christ.",
        refs: "Ephesians 2:8–9; Romans 10:9–10; Titus 3:5",
      },
      {
        id: "new-birth",
        title: "New birth and the Spirit",
        body: "Everyone who knows God must be born of the Spirit. The Holy Spirit indwells the believer, forms the character of Christ, and builds the church through gifts that agree with Scripture.",
        refs: "John 3:3–8; Romans 8:11; 1 Corinthians 12",
      },
      {
        id: "church",
        title: "The church and the ordinances",
        body: "Everyone born of the Spirit belongs to the universal church and is joined to a local church. The two ordinances commanded by Jesus are water baptism and the Lord’s Supper, kept by believers.",
        refs: "Matthew 28:19; 1 Corinthians 11:23–26; Ephesians 2:19–22",
      },
      {
        id: "hope",
        title: "Our final hope",
        body: "Heaven is the eternal home of believers. Those who refuse the gospel come under judgment. Jesus Christ will return visibly and in glory to establish his kingdom. No one knows the hour.",
        refs: "Acts 1:9–11; 1 Thessalonians 4:15–17; Revelation 20–21",
      },
    ],
  },
  salvation: {
    eyebrow: "Salvation",
    title: "Meet Jesus",
    lead: "Eternal life is offered to everyone in the same way. God makes no distinction between rich and poor, known and unknown.",
    intro: "People are not received by God because of good works. All of us stand under judgment because of sin, and the good news is that God himself has provided the way of salvation.",
    stepsTitle: "How a person is born again",
    steps: [
      {
        title: "Admit that we are sinners",
        text: "No one matches the glory of God.",
        verse: "For all have sinned, and come short of the glory of God.",
        ref: "Romans 3:23",
      },
      {
        title: "See the way God has given",
        text: "Out of love, God gave his Son.",
        verse:
          "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
        ref: "John 3:16",
      },
      {
        title: "Know we cannot save ourselves",
        text: "Salvation comes from God’s mercy, not from our record.",
        verse:
          "Not by works of righteousness which we have done, but according to his mercy he saved us.",
        ref: "Titus 3:5",
      },
      {
        title: "Repent of sin",
        text: "Repentance is a real turning from the old way.",
        verse: "Except ye repent, ye shall all likewise perish.",
        ref: "Luke 13:3",
      },
      {
        title: "Ask Jesus for salvation",
        text: "Faith in the Lord Jesus Christ is the answer of the gospel.",
        verse: "Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.",
        ref: "Acts 16:31",
      },
      {
        title: "Receive Jesus as Lord",
        text: "Faith in the heart and confession with the mouth belong together.",
        verse:
          "If thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.",
        ref: "Romans 10:9",
      },
    ],
    afterTitle: "After believing",
    after: [
      "Read the Bible daily and come to know Jesus more clearly.",
      "Spend time with God in prayer.",
      "Speak with others about Jesus Christ.",
      "Join a church that trusts the gospel, and be baptized.",
      "Worship and serve together with other believers.",
    ],
    inviteTitle: "If you are ready",
    invite:
      "Tell a believer. If no one is nearby, tell the church through this website.",
    inviteCta: "Write to the church",
  },
  media: {
    eyebrow: "Media",
    title: "Teaching archive",
    lead: "Five sessions from the series “Understanding the Glory of God,” published on the church’s current website.",
    liveTitle: "Live",
    liveText:
      "Live streaming is not active in this preview. On the full site, the weekly gathering link will sit in this section.",
    archiveTitle: "Archive",
    open: "Open program",
    playerNote:
      "This recording is kept in the church’s current archive. The player in this preview is not connected to that file.",
    more: "More from this series",
  },
  sermons: [
    {
      slug: sermonSlugs[0],
      title: "Understanding the Glory of God — part five, final",
      series: "Understanding the Glory of God",
      date: "June 24, 2018",
      speaker: "Pastor Mani Erfan",
      summary: "The closing session of the series, from the church’s public archive.",
    },
    {
      slug: sermonSlugs[1],
      title: "Understanding the Glory of God — part four",
      series: "Understanding the Glory of God",
      date: "May 27, 2018",
      speaker: "Pastor Mani Erfan",
      summary: "The fourth teaching in the series, from the public archive.",
    },
    {
      slug: sermonSlugs[2],
      title: "Understanding the Glory of God — part three",
      series: "Understanding the Glory of God",
      date: "May 6, 2018",
      speaker: "Pastor Mani Erfan",
      summary: "The third session, published in the church archive.",
    },
    {
      slug: sermonSlugs[3],
      title: "Understanding the Glory of God — part two",
      series: "Understanding the Glory of God",
      date: "April 29, 2018",
      speaker: "Pastor Mani Erfan",
      summary: "The second session, from the public archive.",
    },
    {
      slug: sermonSlugs[4],
      title: "Understanding the Glory of God — part one",
      series: "Understanding the Glory of God",
      date: "April 22, 2018",
      speaker: "Pastor Mani Erfan",
      summary: "The opening session of the series, from the public archive.",
    },
  ],
  give: {
    eyebrow: "Give",
    title: "Partnership and gifts",
    lead: "Thank you for helping the church of the Lord.",
    thanks: "The blessing of the Lord be with you.",
    checkTitle: "Send a check",
    payable: "Make checks payable to",
    payee: "New Life Persian Church",
    mail: "Mail checks or bill-pay to",
    legal:
      "Mani Erfan Ministries and HayatehNo Persian Church operate under CCM Evangelical Ministries, an IRS-registered 501(c)(3) nonprofit. Donations are tax deductible.",
    ministriesTitle: "Ways of serving",
    ministries: [
      {
        title: "Bread of Life",
        text: "Meals for people in a short-term crisis or urgent need.",
      },
      {
        title: "Letters of Life",
        text: "Encouraging notes for people on the church’s prayer list.",
      },
      {
        title: "Love of Life",
        text: "Temporary help such as a visit, a ride, or a task at home.",
      },
    ],
    note: "These descriptions come from the church’s published website and will be updated with you for the final version. Online payment is not active in this preview.",
  },
  testimonies: {
    eyebrow: "Testimonies",
    title: "Send your testimony",
    lead: "Your note, suggestion, or testimony helps build the church and improve what is published.",
    howTitle: "Audio or video",
    steps: [
      "If you have prepared a testimony as audio or video, send the file to the church.",
      "Keep the file at or under 25 MB.",
      "File upload is not active in this preview. Please use email.",
    ],
    emailLabel: "Church email",
  },
  contact: {
    eyebrow: "Contact",
    title: "Be in touch",
    lead: "Leave a message for a question, a confession of faith, or a note about the website.",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    faqTitle: "Common questions",
    faqs: [
      {
        q: "When do you meet?",
        a: "In-person gatherings at the previous address are paused. Weekly teaching remains available online.",
      },
      {
        q: "How can I give?",
        a: "Make the check payable to New Life Persian Church and mail it to the church address in Dickinson, Texas.",
      },
      {
        q: "How do I tell you I believe?",
        a: "Read the salvation page, and if you are ready, write to the church with this form.",
      },
    ],
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      topic: "Topic",
      topics: ["General question", "Confession of faith", "Testimony", "Online college", "Giving"],
      message: "Message",
      submit: "Send message",
      sending: "Sending",
      successTitle: "Your message is noted",
      successText:
        "This preview does not store the message. The full site can keep it in MySQL.",
      required: "This field is required.",
      invalidEmail: "Enter a valid email.",
      preview: "This form is for demonstration only.",
    },
  },
  college: {
    eyebrow: "Online college",
    title: "HayatehNo online college",
    lead: "The church makes its teaching sessions available to Persian speakers through this website.",
    points: [
      {
        title: "Weekly teaching",
        text: "Sermons and teaching sessions by Pastor Mani Erfan are published on the site week by week.",
      },
      {
        title: "Beyond one city",
        text: "People in any city can take part in the online teaching.",
      },
      {
        title: "Registration",
        text: "The program details and registration form will replace this introduction after the church confirms them.",
      },
    ],
    cta: "Ask for guidance",
    note: "The current site carries the registration notice as a separate file. This preview does not invent a course list or a fee.",
  },
  notFound: {
    title: "This page was not found",
    text: "Check the address, or return to the home page.",
    action: "Home",
  },
  church: {
    address: ["4001 Deats Rd.", "Dickinson, TX 77539"],
    phone: "(832) 738-1740",
    phoneHref: "tel:+18327381740",
    email: "info@hayatehno.com",
    mapHref: "https://maps.google.com/?q=4001+Deats+Rd+Dickinson+TX+77539",
  },
};
