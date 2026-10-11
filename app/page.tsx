import Image from "next/image";
import { ArrowLeft, InstagramLogo, Phone } from "@phosphor-icons/react/ssr";
import { BackdropVideo } from "./components/BackdropVideo";
import { Header } from "./components/Header";
import { ParallaxFrame } from "./components/Parallax";
import { QuoteStory } from "./components/QuoteStory";
import { Reveal } from "./components/Reveal";
import { ScrollWords } from "./components/ScrollWords";
import { StickyCTA } from "./components/StickyCTA";
import {
  ADDRESSES,
  BOOKING_URL,
  CREDENTIAL,
  IMAGES,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  STATEMENT,
  TESTIMONIALS,
  TESTIMONIALS_INTRO,
  THINKING,
} from "./content";
import { Logo } from "./components/Logo";
import { asset } from "./asset";

function BookButton({ label = "לקביעת תור" }: { label?: string }) {
  return (
    <a href={BOOKING_URL} className="btn btn-sun" target="_blank" rel="noopener noreferrer">
      {label}
      <ArrowLeft size={20} weight="bold" aria-hidden />
    </a>
  );
}

export default function Home() {
  return (
    <>
      <div className="ambient" style={{ backgroundImage: `url(${asset("/images/ambient.jpg")})` }} aria-hidden />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-50 focus:rounded-full focus:bg-sun focus:px-5 focus:py-2 focus:text-plum"
      >
        דלג לתוכן
      </a>
      <Header bookingUrl={BOOKING_URL} />

      <main id="main">
        {/* Hero: a muted video of Or at work fills the screen */}
        <section id="top" className="relative flex min-h-svh items-end overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[68svh] md:inset-0 md:h-auto">
            <BackdropVideo
              src={asset("/videos/bg-1.mp4")}
              poster={asset("/images/poster-1.jpg")}
              className="settle h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-bg/20 md:via-bg/55 md:to-bg/25" />
            <div className="absolute inset-0 hidden bg-gradient-to-l from-bg/80 via-transparent to-transparent md:block" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-40 md:px-10 md:pb-24">
            <h1 className="rise rise-1 max-w-[11ch] text-[clamp(3.4rem,12.5vw,7.5rem)] font-light leading-[1]">
              הגוף שלכם יודה לכם
            </h1>
            <p className="rise rise-2 mt-6 max-w-[30ch] text-lg text-cream/85 md:mt-8 md:text-2xl">
              אור מרום, מעסה רפואית בטכניקת Deep Tissue. מקבלת בהוד השרון, תל אביב בקרוב.
            </p>
            <div className="rise rise-3 mt-9 flex flex-wrap gap-3">
              <BookButton />
              <a href={PHONE_TEL} className="btn btn-ghost">
                <Phone size={20} aria-hidden />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        {/* The treatment, one sentence that lights up as you scroll */}
        <section className="mx-auto max-w-6xl px-5 py-32 md:px-10 md:py-56">
          <ScrollWords
            text={STATEMENT}
            className="font-display text-[2.1rem] font-light leading-[1.3] md:text-[4.4rem] md:leading-[1.2]"
          />
        </section>

        {/* Who she is: her own words and her own photographs */}
        <section className="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-32 md:grid-cols-[0.95fr_1.05fr] md:gap-24 md:px-10 md:pb-52">
          <div>
            <Reveal>
              <h2 className="text-4xl leading-[1.15] md:text-6xl">
                שמי אור מרום, מטפלת מוסמכת בעיסוי רפואי (רקמות עמוק) ובעיסוי שוודי הוליסטי
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[38ch] text-lg text-muted md:text-xl">{CREDENTIAL}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap gap-3">
                <BookButton />
                <a href={INSTAGRAM_URL} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
                  <InstagramLogo size={22} aria-hidden />
                  @or_marom1
                </a>
              </div>
            </Reveal>
          </div>

          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <ParallaxFrame className="aspect-[3/4] w-[78%] rounded-[28px] bg-surface md:w-[74%]">
              <Image
                src={IMAGES.clinic}
                alt="חדר הטיפולים של אור"
                fill
                sizes="(min-width: 768px) 30vw, 70vw"
                className="object-cover"
              />
            </ParallaxFrame>
            <div className="absolute -bottom-16 end-0 w-[52%] md:-bottom-24">
              <ParallaxFrame className="aspect-[4/5] rounded-[28px] bg-surface shadow-[0_30px_70px_-30px_rgb(0_0_0_/_0.8)]">
                <Image
                  src={IMAGES.portrait}
                  alt="אור מרום"
                  fill
                  sizes="(min-width: 768px) 20vw, 40vw"
                  className="object-cover object-[50%_30%]"
                />
              </ParallaxFrame>
            </div>
          </div>
        </section>

        {/* Full-bleed moving image with her line over it */}
        <section className="relative flex min-h-[80svh] items-center overflow-hidden">
          <div className="absolute inset-0">
            <BackdropVideo
              src={asset("/videos/bg-2.mp4")}
              poster={asset("/images/poster-2.jpg")}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-bg/45" />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 md:px-10">
            <Reveal>
              <h2 className="max-w-[14ch] text-[3rem] leading-[1.05] md:text-[6.25rem]">לבחור בעצמך ובגוף שלך</h2>
            </Reveal>
          </div>
        </section>

        {/* Patients, one message at a time */}
        <QuoteStory intro={TESTIMONIALS_INTRO} quotes={TESTIMONIALS} />

        {/* Way of thinking */}
        <section className="mx-auto max-w-7xl px-5 py-32 md:px-10 md:py-52">
          <Reveal>
            <h2 className="text-xl text-muted md:text-2xl">דרך החשיבה שלי</h2>
          </Reveal>
          <div className="mt-10 space-y-8 md:mt-16 md:space-y-14">
            {THINKING.map((q, i) => (
              <Reveal key={q}>
                <blockquote
                  className={`text-[2.6rem] leading-[1.12] md:text-[5.5rem] ${i % 2 ? "md:ps-28" : ""}`}
                >
                  {q}
                </blockquote>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Where and how */}
        <section className="mx-auto max-w-7xl px-5 pb-32 md:px-10 md:pb-52">
          <Reveal>
            <h2 className="text-4xl md:text-6xl">איפה מקבלים</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <dl className="mt-10 border-t border-line md:mt-14">
              <div className="grid gap-3 border-b border-line py-8 md:grid-cols-[1fr_1.4fr] md:items-baseline md:py-10">
                <dt className="font-display text-4xl font-light md:text-6xl">הוד השרון</dt>
                <dd className="space-y-1 text-lg text-muted md:text-xl">
                  {ADDRESSES.map((a) => (
                    <p key={a}>{a}</p>
                  ))}
                </dd>
              </div>
              <div className="grid gap-3 border-b border-line py-8 md:grid-cols-[1fr_1.4fr] md:items-baseline md:py-10">
                <dt className="font-display text-4xl font-light text-muted md:text-6xl">תל אביב</dt>
                <dd className="text-lg text-muted md:text-xl">בקרוב.</dd>
              </div>
            </dl>
          </Reveal>
        </section>

        {/* Booking */}
        <section id="book" className="mx-auto max-w-7xl px-5 pb-28 md:px-10 md:pb-44">
          <Reveal>
            <h2 className="max-w-[14ch] text-[2.9rem] leading-[1.05] md:text-[6.25rem]">
              נתאם ביחד את הטיפול הראשון
            </h2>
            <p className="mt-8 max-w-[34ch] text-xl text-cream/80 md:text-2xl">
              התורים נקבעים ביומן אונליין. בוחרים יום ושעה, וזהו.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <BookButton label="לקביעת תור ביומן" />
              <a href={PHONE_TEL} className="btn btn-ghost">
                <Phone size={20} aria-hidden />
                {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-10 text-muted md:px-10">
          <Logo />
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-quiet inline-flex items-center gap-2"
          >
            <InstagramLogo size={20} aria-hidden />
            @or_marom1
          </a>
        </div>
      </footer>

      <StickyCTA href={BOOKING_URL} />
    </>
  );
}
