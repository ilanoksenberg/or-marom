import { asset } from "./asset";

// All visible facts live here. Anything not provided by Or stays empty or is omitted from the page.

export const INSTAGRAM_URL = "https://www.instagram.com/or_marom1/";

// TODO: replace with the online calendar link once provided.
// Until then the booking buttons open Or's Instagram profile.
export const BOOKING_URL = INSTAGRAM_URL;

// Business details Or published herself in the caption of her Instagram post DZKxnAtueN9.
// To be confirmed by Or before launch.
export const PHONE_DISPLAY = "050-5428564";
export const PHONE_TEL = "tel:+972505428564";
export const ADDRESSES = ["השחר 13, הוד השרון", "הרימון 86, נווה ימין"];

export const CREDENTIAL = "מוסמכת עיסוי רפואי (רקמות עמוק) ועיסוי שוודי הוליסטי, בוגרת מכללת מירב לרפואה משלימה.";

// Photos taken from Or's own Instagram (@or_marom1). Originals in higher quality are better.
export const IMAGES = {
  hero: asset("/images/hero-hands.jpg"),
  clinic: asset("/images/clinic.jpg"),
  room: asset("/images/or-room.jpg"),
  portrait: asset("/images/or-portrait.jpg"),
};

// Optional looping background video for the hero, for example "/videos/hero.mp4".
// Leave null until a real file is placed in /public/videos.
export const HERO_VIDEO: string | null = null;

// Or's own words, from her Instagram captions and highlights. To be confirmed by Or.
export const STATEMENT =
  "עיסוי רקמות עמוק הוא לחץ איטי ומדויק, שמגיע לשכבות העמוקות של השרירים ועובד בדיוק במקומות שבהם הגוף מחזיק מתח.";

export const THINKING = ["אנרגיות חיוביות בלבד.", "אהבה היא לא מילים אלא מעשים."];

// Messages sent to Or after treatments, as she shared them in her Instagram highlight "לקוחות מרוצים".
// Names were hidden in the original, so none are shown. To be confirmed by Or.
export const TESTIMONIALS_INTRO = "המטופלים שלי הכי טובים שיש, ואני זוכה בפיס עם כל אחד ואחד מהם.";
export const TESTIMONIALS = [
  "הטיפול אצלך הוא הרבה מעבר לעיסוי. את יודעת להקשיב, להרגיש, ולתת תחושת ביטחון אמיתית. יצאתי ממך לא רק יותר משוחרר פיזית, אלא גם הרבה יותר רגוע.",
  "אין מילים להסביר ולתאר את החוויה, מעבר לזה שאחרי פעם אחת שבאתי אלייך כל המשפחה שלי באה אלייך. את מדויקת ונעימה וקשובה, שזה הכי חשוב. אין כמוך, באמת הכי מומלצת בעולם.",
  "זכיתי להכיר אותך! תודה על עיסוי מושלם! יש לך ידיים זהב ומגע קסם! נהניתי מכל שנייה ושנייה.",
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

export const PRICE_NOTES = [
  "ניתן לשלם במזומן, PAYBOX והעברה בנקאית.",
  "תקף עבור טיפולים בקליניקה בהוד השרון ובתל אביב.",
];
