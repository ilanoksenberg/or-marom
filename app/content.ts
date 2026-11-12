import { asset } from "./asset";

// All visible facts live here. Anything not provided by Or stays empty or is omitted from the page.

export const INSTAGRAM_URL = "https://www.instagram.com/or_marom1/";

// Booking goes through WhatsApp with a ready-made first message. Assumes the phone number below is also her
// WhatsApp number (to be confirmed). If an online calendar is added later, point BOOKING_URL at it instead.
export const WHATSAPP_NUMBER = "972505428564";
// Or's online calendar (Cleana+). It goes in the third line of the WhatsApp message.
export const CALENDAR_URL = "https://cleanaplus.cleanagroup.app/book/ormarom1massage";
export const WHATSAPP_MESSAGE = `שלום אור,\nאשמח לקבוע טיפול ראשון.\n${CALENDAR_URL}`;
export const BOOKING_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Opens turn-by-turn navigation in Waze for an address.
export const wazeUrl = (address: string) => `https://waze.com/ul?q=${encodeURIComponent(address)}&navigate=yes`;

// Business details Or published herself in the caption of her Instagram post DZKxnAtueN9.
// To be confirmed by Or before launch.
export const PHONE_DISPLAY = "050-5428564";
export const PHONE_TEL = "tel:+972505428564";
export const ADDRESSES = ["השחר 13, הוד השרון"];
export const TEL_AVIV_ADDRESSES = ["בן יהודה 32, תל אביב יפו"];

export const CREDENTIAL = "מוסמכת עיסוי רפואי (רקמות עמוק) ועיסוי שוודי הוליסטי, בוגרת מכללת מירב לרפואה משלימה.";

// Photos of Or, supplied by the site owner. The clinic photo comes from Or's Instagram.
export const IMAGES = {
  clinic: asset("/images/clinic.jpg"),
  hands: asset("/images/or-hands.jpg"),
  smile: asset("/images/or-smile.jpg"),
};

// Optional looping background video for the hero, for example "/videos/hero.mp4".
// Leave null until a real file is placed in /public/videos.
export const HERO_VIDEO: string | null = null;

// Or's own words, from her Instagram captions and highlights. To be confirmed by Or.
export const STATEMENT =
  "עיסוי רקמות עמוק הוא לחץ איטי ומדויק, שמגיע לשכבות העמוקות של השרירים ועובד בדיוק במקומות שבהם הגוף מחזיק מתח.";

export const THINKING = ["אנרגיות חיוביות בלבד.", "אהבה היא לא מילים אלא מעשים."];

// Messages sent to Or after treatments, shown as the screenshots she received (cropped to the message only,
// no names or numbers visible). The alt text carries the full message for screen readers.
export const TESTIMONIALS_INTRO = "המטופלים שלי הכי טובים שיש, ואני זוכה בפיס עם כל אחד ואחד מהם.";
export const REVIEW_SHOTS = [
  {
    src: asset("/images/review-1.jpg"),
    w: 616,
    h: 489,
    alt: "הודעה שאור קיבלה: אור יקרה! מהחוויה שלי, הטיפול אצלך הוא הרבה מעבר לעיסוי. את יודעת להקשיב, להרגיש, ולתת תחושת ביטחון אמיתית. יצאתי ממך לא רק יותר משוחרר פיזית, אלא גם הרבה יותר רגוע. יש לך מגע מדויק ורגיש, אבל מה שבאמת מיוחד זה האנרגיה שלך, את גורמת למי שמגיע אלייך להרגיש שמי שמטפלת בה באמת מרגישה אותה.",
  },
  {
    src: asset("/images/review-2.jpg"),
    w: 616,
    h: 353,
    alt: "הודעה שאור קיבלה: אין מילים להסביר ולתאר את החוויה, מעבר לזה שאחרי פעם אחת שבאתי אלייך כל המשפחה שלי באה אלייך. את מדויקת ונעימה וקשובה שזה הכי חשוב. אין כמוך, באמת הכי מומלצת בעולם.",
  },
  {
    src: asset("/images/review-3.jpg"),
    w: 616,
    h: 325,
    alt: "הודעה שאור קיבלה: זכיתי להכיר אותך! תודה על עיסוי מושלם! יש לך ידיים זהב ומגע קסם! בכללי את עצמך נסיכה מדהימה ונהנתי מכל שנייה ושנייה. תודה לך.",
  },
];

// Price list, transcribed from the price sheet Or's team provided. Prices in shekels.
export const SINGLE_SESSIONS = [
  { duration: "50 דקות", price: "280" },
  { duration: "90 דקות", price: "480" },
];

export const PACKAGES = [
  {
    name: "סדרת ה״התחלה״",
    count: "4 טיפולים",
    total: "1,080",
    perSession: "270",
    about: "תהליך טיפולי ממוקד לריפוי והקלה.",
    validity: "תוקף: למימוש עד 6 שבועות מהטיפול הראשון.",
  },
  {
    name: "סדרת ה״תחזוקה״",
    count: "8 טיפולים",
    total: "2,120",
    perSession: "265",
    about: "שחרור ממתחים לאורך זמן.",
    validity: "תוקף: למימוש עד 10 שבועות מהטיפול הראשון.",
  },
  {
    name: "סדרת ״השקט והבריאות השנתית״",
    count: "12 טיפולים",
    total: "3,120",
    perSession: "260",
    about: "מומלץ לתחזוקה רציפה ושיפור איכות חיים.",
    validity: "תוקף: למימוש עד 18 שבועות מהטיפול הראשון.",
  },
];

// "What happens in the first session": a first draft in Or's voice, to be refined with her.
// The "what to wear", "after the treatment" and "what I do not do" rows were removed at the owner's request.
// NOT yet confirmed by Or: the remaining rows describe her way of working and must be checked.
export const FIRST_SESSION = {
  title: "בואו נדבר על הטיפול הראשון",
  intro: "לא משנה אם הגעתם עם כאב, עם עומס או סתם עם גוף שצריך לעצור רגע. כל אחד מגיע ממקום אחר, וזה בסדר גמור.",
  rows: [
    {
      label: "קודם מדברים",
      text: "אני רוצה להבין איפה כואב.\nמה עובר עליכם בחיי היום יום?\nומה הגוף שלכם צריך עכשיו?",
    },
    {
      label: "הטיפול עצמו",
      text: "לחץ איטי ומדויק, שמגיע לשכבות העמוקות של השרירים. אם משהו חזק מדי או לא נעים, תגידו לי ואשנה. זה הגוף שלכם.",
    },
    {
      label: "בכמה זמן",
      text: "50 דקות או 90 דקות\nאו תהליך של טיפולים כדי להכניס לשגרה שלכם גם את עצמכם",
    },
  ],
};
