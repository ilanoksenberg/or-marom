import Image from "next/image";
import { ArrowLeft, InstagramLogo, Phone, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { BackdropVideo } from "./components/BackdropVideo";
import { Header } from "./components/Header";
import { ParallaxFrame } from "./components/Parallax";
import { Reveal } from "./components/Reveal";
import { ScrollWords } from "./components/ScrollWords";
import {
  ADDRESSES,
  BOOKING_URL,
  CREDENTIAL,
  FIRST_SESSION,
  IMAGES,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PACKAGES,
  PHONE_TEL,
  PRICE_NOTES,
  SINGLE_SESSIONS,
  STATEMENT,
  TEL_AVIV_ADDRESSES,
  REVIEW_SHOTS,
  TESTIMONIALS_INTRO,
  THINKING,
  wazeUrl,
} from "./content";
import { Logo } from "./components/Logo";
import { asset } from "./asset";

function BookButton({ label = "לקביעת תור", primary = false }: { label?: string; primary?: boolean }) {
  return (
    <a
      href={BOOKING_URL}
      className={primary ? "btn btn-primary" : "btn btn-ghost"}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
      {primary ? (
        <WhatsappLogo size={22} weight="bold" aria-hidden />
      ) : (
        <ArrowLeft size={20} weight="bold" aria-hidden />
      )}
    </a>
  );
}

function AddressLine({ address }: { address: string }) {
  return (
    <p className="flex flex-wrap items-baseline gap-x-5">
      <span>{address}</span>
      <a href={wazeUrl(address)} target="_blank" rel="noopener noreferrer" className="link-quiet py-1 text-base">
        ניווט בוויז
      </a>
    </p>
  );
}

export default function Home() {
  return (
    <>
      <div className="ambient" style={{ backgroundImage: `url(${asset("/images/ambient.jpg")})` }} aria-hidden />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-50 focus:rounded-full focus:bg-sage-deep focus:px-5 focus:py-2 focus:text-cream"
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
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-transparent md:via-bg/55 md:to-bg/5" />
            <div className="absolute inset-0 hidden bg-gradient-to-l from-bg via-bg/75 to-transparent md:block" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-40 md:px-10 md:pb-24">
            <h1 className="rise rise-1 max-w-[11ch] text-[clamp(3.4rem,12.5vw,7.5rem)] font-normal leading-[1]">
              הגוף שלכם יודה לכם
            </h1>
            <p className="rise rise-2 mt-6 max-w-[30ch] text-lg text-ink/80 md:mt-8 md:text-2xl">
              אור מרום, מעסה רפואית בטכניקת Deep Tissue. מקבלת בהוד השרון ובתל אביב.
            </p>
            <div className="rise rise-3 mt-9">
              <BookButton />
            </div>
          </div>
        </section>

        {/* The treatment, one sentence that lights up as you scroll */}
        <section className="relative isolate">
          <div
            aria-hidden
            className="pointer-events-none absolute -start-[30%] top-1/2 -z-10 aspect-square w-[110%] -translate-y-1/2 rounded-full opacity-[0.22] md:w-[60%]"
            style={{ background: "radial-gradient(closest-side, var(--color-tan), transparent)" }}
          />
          <div className="mx-auto max-w-6xl px-5 py-32 md:px-10 md:py-56">
          <ScrollWords
            text={STATEMENT}
            className="font-display text-[2.1rem] font-normal leading-[1.3] md:text-[4.4rem] md:leading-[1.2]"
          />
          </div>
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
              <div className="mt-8">
                <a
                  href={INSTAGRAM_URL}
                  className="link-quiet inline-flex items-center gap-2 py-3 text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramLogo size={22} weight="bold" aria-hidden />
                  @or_marom1
                </a>
              </div>
            </Reveal>
          </div>

          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <ParallaxFrame className="aspect-[2/3] w-[78%] rounded-[2rem] bg-surface md:w-[74%]">
              <Image
                src={IMAGES.hands}
                alt="אור מרום בחדר הטיפולים"
                fill
                sizes="(min-width: 768px) 30vw, 70vw"
                className="object-cover object-[50%_30%]"
              />
            </ParallaxFrame>
            <div className="absolute -bottom-16 end-0 w-[52%] md:-bottom-24">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-surface shadow-[0_30px_70px_-30px_rgb(47_58_42_/_0.55)]">
                <Image
                  src={IMAGES.smile}
                  alt="אור מרום מחייכת"
                  fill
                  sizes="(min-width: 768px) 20vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What to expect */}
        <section id="first-session" className="mx-auto max-w-7xl px-5 pb-32 md:px-10 md:pb-52">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-24">
            <Reveal>
              <h2 className="text-4xl leading-[1.1] md:text-6xl">{FIRST_SESSION.title}</h2>
              <p className="mt-6 max-w-[34ch] text-lg text-muted md:text-xl">{FIRST_SESSION.intro}</p>
            </Reveal>
            <div>
              <dl className="border-t border-line">
                {FIRST_SESSION.rows.map((r, i) => (
                  <Reveal key={r.label} delay={i * 0.05}>
                    <div className="grid gap-1 border-b border-line py-6 md:grid-cols-[0.45fr_1fr] md:gap-8 md:py-7">
                      <dt className="font-display text-2xl md:text-3xl">{r.label}</dt>
                      <dd className="whitespace-pre-line text-lg text-muted md:text-xl">{r.text}</dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Prices */}
        <section id="prices" className="mx-auto max-w-7xl px-5 pb-32 md:px-10 md:pb-52">
          <Reveal>
            <h2 className="text-4xl md:text-6xl">מחירים</h2>
          </Reveal>

          <div className="mt-12 grid gap-16 md:mt-16 md:grid-cols-[0.75fr_1.25fr] md:gap-24">
            <Reveal>
              <h3 className="text-2xl md:text-3xl">טיפול בודד</h3>
              <dl className="mt-6 border-t border-line">
                {SINGLE_SESSIONS.map((t) => (
                  <div key={t.duration} className="flex items-baseline justify-between gap-6 border-b border-line py-5">
                    <dt className="text-lg md:text-xl">{t.duration}</dt>
                    <dd className="font-display text-3xl tabular-nums md:text-4xl">{t.price} ₪</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <div>
              <Reveal>
                <h3 className="text-2xl md:text-3xl">חבילות</h3>
                <p className="mt-2 text-lg text-muted">טיפולים של 50 דקות.</p>
              </Reveal>
              <div className="mt-6 border-t border-line">
                {PACKAGES.map((p, i) => (
                  <Reveal key={p.name} delay={i * 0.08}>
                    <div className="grid gap-4 border-b border-line py-8 md:grid-cols-[1.3fr_0.7fr] md:gap-10">
                      <div>
                        <h4 className="font-display text-2xl md:text-3xl">{p.name}</h4>
                        <p className="mt-3 text-lg">{p.about}</p>
                        <p className="mt-1 text-base text-muted">{p.validity}</p>
                      </div>
                      <div className="md:text-end">
                        <p className="text-base text-muted">{p.count}</p>
                        <p className="font-display text-4xl tabular-nums md:text-5xl">{p.total} ₪</p>
                        <p className="mt-1 text-base text-muted tabular-nums">{p.perSession} ₪ לטיפול</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal>
                <ul className="mt-8 space-y-1 text-base text-muted">
                  {PRICE_NOTES.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </Reveal>
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
            <div className="absolute inset-0 bg-bg/48" />
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
        <section id="reviews" className="relative isolate overflow-hidden bg-surface py-28 md:py-44">
          <div
            aria-hidden
            className="pointer-events-none absolute -end-1/4 -top-1/4 -z-10 aspect-square w-[85%] rounded-full opacity-[0.22] md:w-[45%]"
            style={{ background: "radial-gradient(closest-side, var(--color-tan), transparent)" }}
          />
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <Reveal>
              <h2 className="max-w-[18ch] text-4xl leading-[1.12] md:text-6xl">{TESTIMONIALS_INTRO}</h2>
              <p className="mt-5 text-lg text-muted md:text-xl">הודעות שקיבלתי מכם.</p>
            </Reveal>
            <ul className="mt-14 grid gap-7 md:mt-24 md:grid-cols-3 md:items-start md:gap-8">
              {REVIEW_SHOTS.map((r, i) => (
                <li
                  key={r.src}
                  className={`w-[90%] max-w-[22rem] md:w-auto md:max-w-none ${
                    i % 2 ? "ms-auto" : "me-auto"
                  } md:m-0 ${["", "-mt-3", "-mt-5"][i] ?? ""} ${["md:mt-0", "md:mt-24", "md:mt-10"][i] ?? ""}`}
                >
                  <Reveal delay={i * 0.12}>
                    <figure className="shot" style={{ "--tilt": ["-1.6deg", "1.4deg", "-1.1deg"][i] ?? "0deg" } as React.CSSProperties}>
                      <Image
                        src={r.src}
                        alt={r.alt}
                        width={r.w}
                        height={r.h}
                        sizes="(min-width: 768px) 30vw, 90vw"
                        className="h-auto w-full rounded-[1.75rem] shadow-[0_30px_60px_-28px_rgb(47_58_42_/_0.5)] ring-1 ring-ink/5"
                      />
                    </figure>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Way of thinking */}
        <section className="relative isolate overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 end-0 -z-10 w-full opacity-[0.14] md:w-1/2 [mask-image:linear-gradient(to_left,#000,transparent)]"
          >
            <Image src={IMAGES.clinic} alt="" fill sizes="50vw" className="object-cover" />
          </div>
          <div className="mx-auto max-w-7xl px-5 py-32 md:px-10 md:py-52">
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
                    <AddressLine key={a} address={a} />
                  ))}
                </dd>
              </div>
              <div className="grid gap-3 border-b border-line py-8 md:grid-cols-[1fr_1.4fr] md:items-baseline md:py-10">
                <dt className="font-display text-4xl font-light md:text-6xl">תל אביב</dt>
                <dd className="space-y-1 text-lg text-muted md:text-xl">
                  {TEL_AVIV_ADDRESSES.map((a) => (
                    <AddressLine key={a} address={a} />
                  ))}
                </dd>
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
            <p className="mt-8 max-w-[34ch] text-xl text-ink/75 md:text-2xl">
              שולחים לי הודעה בוואטסאפ ונתאם ביחד יום ושעה.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <BookButton primary label="לקביעת תור בוואטסאפ" />
              <a href={PHONE_TEL} className="link-quiet inline-flex items-center gap-2 px-2 py-3 text-lg">
                <Phone size={20} weight="bold" aria-hidden />
                {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-10 text-muted md:px-10">
          <Logo className="h-24" tagline />
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-quiet inline-flex items-center gap-2"
          >
            <InstagramLogo size={20} weight="bold" aria-hidden />
            @or_marom1
          </a>
        </div>
      </footer>

    </>
  );
}
