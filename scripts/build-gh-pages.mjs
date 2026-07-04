import { rmSync, mkdirSync, cpSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const src = resolve(root, 'public');
const out = resolve(root, 'dist');

rmSync(out, { recursive: true, force: true });
mkdirSync(resolve(out, 'assets'), { recursive: true });
cpSync(src, out, { recursive: true, force: true });

const sharedHead = (title, description, path = '') => `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="index,follow" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://jos727.github.io/Field-Trip-Website/${path}" />
    <meta property="og:image" content="https://jos727.github.io/Field-Trip-Website/live/hero.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="https://jos727.github.io/Field-Trip-Website/live/hero.jpg" />
    <link rel="canonical" href="https://jos727.github.io/Field-Trip-Website/${path}" />
    <link rel="stylesheet" crossorigin href="./assets/app.css" />
`;

const css = `:root {
  --bg: #f7f3ee;
  --surface: rgba(255, 255, 255, 0.9);
  --surface-strong: rgba(255, 255, 255, 0.97);
  --text: #15324d;
  --muted: #5d7183;
  --navy: #15324d;
  --amber: #df742f;
  --border: rgba(21, 50, 77, 0.1);
  --shadow: 0 30px 80px rgba(21, 50, 77, 0.12);
  --shadow-soft: 0 18px 40px rgba(21, 50, 77, 0.08);
  font-family: Inter, system-ui, sans-serif;
  color: var(--text);
  background: var(--bg);
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: radial-gradient(circle at top left, rgba(223, 116, 47, 0.12), transparent 30%), linear-gradient(180deg, #fffdf9 0%, #f7f3ee 100%); color: var(--text); }
a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
.container { width: min(1120px, calc(100% - 2rem)); margin: 0 auto; }
.site-shell { padding-bottom: 4rem; }
.topbar { position: sticky; top: 0; z-index: 40; backdrop-filter: blur(18px); background: rgba(247,243,238,0.88); border-bottom: 1px solid rgba(21,50,77,0.06); }
.topbar__inner { display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding: 0.8rem 0; position: relative; }
.brand { display: flex; align-items: center; gap: 0.95rem; min-width: 0; flex: 1 1 auto; }
.brand__mark-wrap { width: 3.8rem; height: 3.8rem; border-radius: 999px; overflow: hidden; background: white; box-shadow: var(--shadow-soft); flex: 0 0 auto; }
.brand__mark { width: 100%; height: 100%; object-fit: cover; }
.brand__copy { display: flex; flex-direction: column; line-height: 1.02; }
.brand__name { font-family: Georgia, 'Times New Roman', serif; text-transform: uppercase; letter-spacing: 0.12em; font-size: 1.45rem; color: var(--navy); }
.brand__tag { font-family: Inter, system-ui, sans-serif; text-transform: uppercase; letter-spacing: 0.18em; font-size: 0.78rem; color: var(--amber); margin-top: 0.28rem; }
.menu-toggle { display: none; width: 48px; height: 48px; min-width: 48px; min-height: 48px; border: 1px solid rgba(21,50,77,0.16); border-radius: 999px; background: rgba(255,255,255,0.96); align-items: center; justify-content: center; flex-direction: column; gap: 5px; padding: 0; cursor: pointer; -webkit-appearance: none; appearance: none; box-shadow: 0 10px 24px rgba(21,50,77,0.12); position: relative; z-index: 60; flex: 0 0 auto; }
.menu-toggle span { width: 20px; height: 2px; border-radius: 999px; background: var(--navy); display: block; }
.nav { display: flex; align-items: center; gap: 0.75rem; color: var(--muted); font-size: 0.95rem; flex-wrap: wrap; }
.nav__link { display: inline-flex; align-items: center; justify-content: center; min-height: 40px; padding: 0 0.95rem; border-radius: 999px; border: 1px solid transparent; background: rgba(255,255,255,0.34); transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease; }
.nav__link:hover { color: var(--navy); background: rgba(255,255,255,0.82); border-color: rgba(21,50,77,0.08); }
.nav__cta { background: var(--navy); color: white; padding: 0 1rem; border-radius: 999px; font-weight: 700; }
.nav__cta:hover { color: white; background: #204766; border-color: transparent; }
.hero { position: relative; overflow: hidden; padding: 5rem 0 4rem; }
.hero__image-wrap { position: relative; border-radius: 34px; overflow: hidden; min-height: 82svh; box-shadow: var(--shadow); }
.hero__image { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center center; }
.hero__overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(9,31,49,0.18) 0%, rgba(9,31,49,0.34) 30%, rgba(9,31,49,0.78) 58%, rgba(9,31,49,0.88) 100%); }
.hero__content { position: relative; z-index: 2; padding: 2rem; max-width: 42rem; color: white; }
.hero__content::before { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(8,24,38,0.18), rgba(8,24,38,0.42) 42%, rgba(8,24,38,0.62)); border-radius: 28px; z-index: -1; }
.eyebrow { text-transform: uppercase; letter-spacing: 0.28em; font-size: 0.72rem; color: #ffe2cf; display: inline-block; margin-bottom: 0.75rem; text-shadow: 0 2px 10px rgba(0,0,0,0.18); }
.hero h1, .section h2, .section h3, .page-hero h1 { font-family: Georgia, 'Times New Roman', serif; line-height: 0.96; letter-spacing: -0.04em; }
.hero h1 { font-size: clamp(3.3rem, 7vw, 6.2rem); margin: 0; max-width: 10ch; color: white; text-shadow: 0 4px 16px rgba(0,0,0,0.22); }
.hero h1 .accent { color: #ffd8be; }
.hero__lede { max-width: 34rem; margin: 1.5rem 0 0; color: rgba(255,255,255,0.96); text-shadow: 0 2px 10px rgba(0,0,0,0.18); line-height: 1.8; font-size: 1.02rem; }
.hero__actions { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2rem; }
.button { border-radius: 999px; padding: 0.95rem 1.4rem; font-weight: 700; transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease; display: inline-flex; justify-content: center; align-items: center; }
.button:hover { transform: translateY(-1px); }
.button--primary { background: white; color: var(--navy); box-shadow: 0 16px 40px rgba(21, 50, 77, 0.18); }
.button--ghost { border: 1px solid rgba(255,255,255,0.38); background: rgba(255,255,255,0.08); color: white; }
.button--navy { background: var(--navy); color: white; }
.button--outline { border: 1px solid var(--border); background: rgba(255,255,255,0.65); color: var(--navy); }
.button--wide { width: 100%; }
.section { padding: 4.6rem 0; }
.section h2 { color: var(--navy); margin-top: 0; }
.section p, .card p, .testimonial p, .seo-copy p, .seo-card p, .image-card p, .page-card p, .faq-card p { color: var(--muted); line-height: 1.8; }
.section--soft { background: rgba(255,255,255,0.42); }
.section--dark { background: linear-gradient(135deg, #163651, #224b6c); color: white; }
.section--dark h2, .section--dark .eyebrow, .section--dark p { color: white; }
.section--accent { background: linear-gradient(135deg, #15324d, #2a597e); color: white; }
.section--accent h2, .section--accent .moment-list li { color: white; }
.intro-grid, .cta-panel, .split-panel, .seo-grid, .photo-feature, .page-grid, .contact-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2rem; align-items: center; }
.cards, .testimonials, .seo-cards, .image-row, .faq-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.25rem; margin-top: 2rem; }
.card, .testimonial, .cta-card, .seo-card, .image-card, .page-card, .faq-card { border-radius: 24px; padding: 1.5rem; background: var(--surface); border: 1px solid var(--border); box-shadow: var(--shadow-soft); }
.card__icon { width: 46px; height: 46px; border-radius: 50%; background: radial-gradient(circle at 30% 30%, var(--amber), #f2a171); margin-bottom: 1rem; }
.card h3, .seo-card h3, .image-card h3, .page-card h3, .faq-card h3 { margin: 0 0 0.75rem; font-size: 1.28rem; color: var(--navy); }
.feature-photo { overflow: hidden; border-radius: 28px; box-shadow: var(--shadow); }
.feature-photo img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; }
.image-card img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: 18px; margin-bottom: 1rem; }
.moment-list { list-style: none; padding: 0; margin: 1rem 0 0; display: grid; gap: 1rem; }
.moment-list li { padding: 1rem 1.2rem; border: 1px solid rgba(255,255,255,0.18); border-radius: 18px; background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.88); }
.show-list { display: grid; gap: 1rem; margin-top: 2rem; }
.show-item { display: flex; flex-direction: column; gap: 1rem; padding: 1.25rem 1.3rem; border-radius: 22px; border: 1px solid rgba(255,255,255,0.16); background: rgba(255,255,255,0.05); }
.show-item__main { display: flex; gap: 1rem; align-items: center; }
.show-item__date { min-width: 58px; text-align: center; }
.show-item__day { font-family: Georgia, 'Times New Roman', serif; font-size: 2rem; color: var(--amber); line-height: 1; }
.show-item__month { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.14em; color: rgba(255,255,255,0.68); }
.show-item__title { font-weight: 700; color: #fff8ef; margin-bottom: 0.25rem; }
.show-item__meta { color: rgba(255,255,255,0.74); font-size: 0.95rem; }
.show-item__side { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
.show-item__time { color: rgba(255,255,255,0.78); font-size: 0.92rem; }
.ticket-button { background: var(--amber); color: white; padding: 0.8rem 1rem; border-radius: 999px; font-size: 0.76rem; font-weight: 700; white-space: nowrap; }
.seo-copy { display: grid; gap: 1rem; }
.seo-highlight { border-left: 4px solid var(--amber); padding-left: 1rem; color: var(--navy); font-weight: 600; }
.newsletter-shell { display: grid; gap: 1rem; }
.newsletter-note { color: var(--muted); line-height: 1.7; }
.newsletter-form { display: grid; gap: 0.9rem; }
.newsletter-field { width: 100%; border-radius: 16px; border: 1px solid var(--border); background: white; padding: 0.95rem 1rem; font: inherit; color: var(--navy); }
.newsletter-row { display: grid; grid-template-columns: 1fr auto; gap: 0.75rem; }
.newsletter-help { font-size: 0.88rem; color: var(--muted); }
.page-hero { padding: 3.5rem 0 2rem; }
.page-hero__card { background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.86)); border-radius: 32px; box-shadow: var(--shadow); padding: 2rem; border: 1px solid var(--border); }
.page-hero h1 { font-size: clamp(2.8rem, 6vw, 4.8rem); color: var(--navy); margin: 0 0 1rem; }
.page-hero p { color: var(--muted); max-width: 46rem; line-height: 1.8; }
.list-clean { list-style: none; padding: 0; margin: 0; display: grid; gap: 0.9rem; }
.contact-line { font-size: 1rem; color: var(--navy); font-weight: 600; }
.footer { background: #163651; color: white; padding: 4rem 0 2rem; }
.footer__grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 2rem; }
.footer__brand { max-width: 28rem; }
.footer__brand-row { display: flex; align-items: center; gap: 0.9rem; margin-bottom: 1rem; }
.footer__mark { width: 3rem; height: 3rem; border-radius: 999px; overflow: hidden; background: white; flex: 0 0 auto; }
.footer__mark img { width: 100%; height: 100%; object-fit: cover; }
.footer__title { font-family: Georgia, 'Times New Roman', serif; font-size: 1.8rem; letter-spacing: 0.12em; text-transform: uppercase; }
.footer__copy, .footer a, .footer__small { color: rgba(255,255,255,0.72); }
.footer h3 { text-transform: uppercase; letter-spacing: 0.12em; color: #f0c6a0; font-size: 0.95rem; }
.footer ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 0.85rem; }
.footer a:hover { color: white; }
.footer__bottom { border-top: 1px solid rgba(255,255,255,0.12); margin-top: 2.5rem; padding-top: 1.2rem; display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
@media (max-width: 900px) {
  .intro-grid, .cta-panel, .split-panel, .cards, .testimonials, .footer__grid, .seo-grid, .seo-cards, .photo-feature, .image-row, .page-grid, .contact-grid, .faq-grid { grid-template-columns: 1fr; }
  .topbar__inner { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; column-gap: 0.75rem; row-gap: 0.5rem; }
  .brand { min-width: 0; }
  .brand__copy { min-width: 0; }
  .brand__name { font-size: 1.18rem; letter-spacing: 0.1em; }
  .brand__tag { font-size: 0.64rem; letter-spacing: 0.14em; }
  .menu-toggle { display: inline-flex !important; justify-self: end; align-self: center; }
  .nav { display: none; width: 100%; grid-column: 1 / -1; flex-direction: column; gap: 0.35rem; padding-top: 0.75rem; }
  .nav.nav--open { display: flex; }
  .nav__link { width: 100%; justify-content: flex-start; padding: 0.95rem 0.2rem; min-height: 0; border-radius: 0; border: 0; border-top: 1px solid rgba(21,50,77,0.08); background: transparent; }
  .nav__cta { justify-content: center; margin-top: 0.35rem; border-radius: 999px; border: 0; }
  .hero__image-wrap { min-height: 74svh; }
}
@media (min-width: 901px) {
  .menu-toggle { display: none; }
  .nav { display: flex !important; }
}
@media (max-width: 640px) {
  .hero { padding-top: 3rem; }
  .hero__content { padding: 1.15rem; }
  .hero__content::before { border-radius: 22px; }
  .hero__image-wrap { min-height: 70svh; }
  .hero h1 { font-size: clamp(2.7rem, 14vw, 4.8rem); }
  .hero__actions { flex-direction: column; }
  .button { width: 100%; }
  .topbar__inner { padding: 0.72rem 0; }
  .brand__mark-wrap { width: 3rem; height: 3rem; }
  .brand__name { font-size: 1.02rem; }
  .brand__tag { font-size: 0.58rem; letter-spacing: 0.12em; }
  .menu-toggle { width: 46px; height: 46px; min-width: 46px; min-height: 46px; }
  .show-item__side, .newsletter-row { grid-template-columns: 1fr; display: grid; }
}
`;

const nav = `
<header class="topbar">
  <div class="container topbar__inner">
    <a class="brand" href="./index.html">
      <span class="brand__mark-wrap"><img class="brand__mark" src="./assets/ft-primary-logo.jpg" alt="Field Trip logo mark" /></span>
      <div class="brand__copy">
        <span class="brand__name">Field Trip</span>
        <span class="brand__tag">Amplify your Nature</span>
      </div>
    </a>
    <button type="button" class="menu-toggle" aria-expanded="false" aria-controls="site-navigation" aria-label="Toggle navigation menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav id="site-navigation" class="nav">
      <a href="./index.html" class="nav__link">Home</a>
      <a href="./about.html" class="nav__link">About</a>
      <a href="./schedule.html" class="nav__link">Schedule</a>
      <a href="./faqs.html" class="nav__link">FAQs</a>
      <a href="./contact.html" class="nav__link">Contact</a>
      <a href="./pricing.html" class="nav__link">Pricing</a>
      <a href="./contact.html" class="nav__link nav__cta">Book Now</a>
    </nav>
  </div>
</header>`;

const footer = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand"><div class="footer__brand-row"><span class="footer__mark"><img src="./assets/ft-primary-logo.jpg" alt="Field Trip logo mark" /></span><span class="footer__title">Field Trip</span></div><p class="footer__copy">Fitness and tours on the water, collaborations in San Diego and beyond.</p></div>
      <div><h3>Navigate</h3><ul><li><a href="./about.html">About</a></li><li><a href="./schedule.html">Schedule</a></li><li><a href="./faqs.html">FAQs</a></li><li><a href="./contact.html">Contact</a></li></ul></div>
      <div><h3>Support</h3><ul><li><a href="./privacy-policy.html">Privacy Policy</a></li><li><a href="./terms-and-conditions.html">Terms and Conditions</a></li><li><a href="https://www.fieldtripcrew.com/" target="_blank" rel="noreferrer">Live Site</a></li></ul></div>
    </div>
    <div class="footer__bottom"><p class="footer__small">© ${new Date().getFullYear()} Field Trip. All rights reserved.</p><p class="footer__small">San Diego outdoor wellness, scenic group experiences, and private adventure gatherings.</p></div>
  </div>
</footer>`;

const navScript = `<script>
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-navigation');
  if (!toggle || !nav) return;
  const closeMenu = () => {
    nav.classList.remove('nav--open');
    toggle.setAttribute('aria-expanded', 'false');
  };
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });
})();
</script>`;

const wrap = (title, description, body, path = '') => `<!doctype html><html lang="en"><head>${sharedHead(title, description, path)}</head><body><div class="site-shell">${nav}${body}${footer}</div>${navScript}</body></html>`;

const homeBody = `
<main>
  <section class="hero">
    <div class="container">
      <div class="hero__image-wrap">
        <img class="hero__image" src="./live/hero.jpg" alt="Field Trip paddle experience in San Diego with water, movement, and community energy." />
        <div class="hero__overlay"></div>
        <div class="hero__content">
          <span class="eyebrow">Amplify your nature</span>
          <h1>Fitness and tours on the water <span class="accent">and other fun shit to do</span>.</h1>
          <p class="hero__lede">For those that want to get out there, seize the day, and create their own narrative.</p>
          <div class="hero__actions">
            <a class="button button--primary" href="./contact.html">Plan a Field Trip</a>
            <a class="button button--ghost" href="./schedule.html">Explore experiences</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section section--soft" id="about">
    <div class="container intro-grid">
      <div><span class="eyebrow" style="color: var(--amber); text-shadow: none;">What it is</span><h2>For those that want to get out there, seize the day, and create their own narrative.</h2><p>What is Field Trip? Well, we're definitely a cult... just kidding. We're thrill seekers and adventure lovers.</p><p>Field trips aren't just for kids. We offer collaborations locally in San Diego and out of town, so stay tuned, check in, and reach out if you want to combine forces.</p></div>
      <div class="feature-photo"><img src="./live/about.jpg" alt="Kayla from Field Trip by the water during a San Diego outdoor wellness session." /></div>
    </div>
  </section>
  <section class="section" id="offerings">
    <div class="container">
      <span class="eyebrow" style="color: var(--amber); text-shadow: none;">Offerings</span>
      <h2>Built for groups, brands, retreats, and people who want their weekends to feel better.</h2>
      <div class="cards">
        <article class="card"><div class="card__icon"></div><h3>Wellness</h3><p>Stand-up paddle, movement sessions, breathwork, and feel-good experiences designed to reset the body and get people outside.</p></article>
        <article class="card"><div class="card__icon"></div><h3>Adventure</h3><p>Water time, full-moon paddles, shoreline workouts, and scenic group outings that feel energizing, social, and story-worthy.</p></article>
        <article class="card"><div class="card__icon"></div><h3>Connection</h3><p>Private groups, retreats, community activations, and collaborative events built around warmth, presence, and memorable shared experiences.</p></article>
      </div>
    </div>
  </section>
  <section class="section" id="experiences">
    <div class="container photo-feature">
      <div class="feature-photo"><img src="./live/experience.jpg" alt="Night paddle experience from Field Trip in San Diego." /></div>
      <div><span class="eyebrow" style="color: var(--amber); text-shadow: none;">Experience-first</span><h2>Water, movement, and adventure — with room for connection.</h2><p>The energy is scenic, social, and made for people who want to get out there.</p><p>The goal is simple: get outside, have fun, and make the day feel worth remembering.</p></div>
    </div>
    <div class="container image-row">
      <article class="image-card"><img src="./live/card-1.jpg" alt="Field Trip lifestyle image one" /><h3>Scenic and social</h3><p>The visuals now feel like events people actually want to join.</p></article>
      <article class="image-card"><img src="./live/card-2.jpg" alt="Field Trip lifestyle image two" /><h3>Water-centered energy</h3><p>The real site imagery makes the offering feel clearer and more grounded.</p></article>
      <article class="image-card"><img src="./live/card-3.jpg" alt="Field Trip lifestyle image three" /><h3>Human, not generic</h3><p>This brings back the personality that was missing when I leaned too hard on brand assets.</p></article>
    </div>
  </section>
  <section class="section section--dark" id="shows">
    <div class="container">
      <span class="eyebrow" style="color: #f0c6a0;">Upcoming</span>
      <h2>Upcoming ways to get out there.</h2>
      <div class="show-list">
        <div class="show-item"><div class="show-item__main"><div class="show-item__date"><div class="show-item__day">18</div><div class="show-item__month">Jul</div></div><div><div class="show-item__title">Sunset Paddle Social</div><div class="show-item__meta">Mission Bay — San Diego</div></div></div><div class="show-item__side"><div class="show-item__time">6:00 PM</div><a href="./contact.html" class="ticket-button">Reserve Spot</a></div></div>
        <div class="show-item"><div class="show-item__main"><div class="show-item__date"><div class="show-item__day">02</div><div class="show-item__month">Aug</div></div><div><div class="show-item__title">Coastal Reset Morning</div><div class="show-item__meta">La Jolla Shores — San Diego</div></div></div><div class="show-item__side"><div class="show-item__time">8:30 AM</div><a href="./contact.html" class="ticket-button">Join Event</a></div></div>
        <div class="show-item"><div class="show-item__main"><div class="show-item__date"><div class="show-item__day">16</div><div class="show-item__month">Aug</div></div><div><div class="show-item__title">Private Group Field Day</div><div class="show-item__meta">Custom outing — retreats / brands</div></div></div><div class="show-item__side"><div class="show-item__time">By inquiry</div><a href="./contact.html" class="ticket-button">Book Inquiry</a></div></div>
      </div>
    </div>
  </section>
  <section class="section section--accent">
    <div class="container split-panel">
      <div><span class="eyebrow">The vibe</span><h2>Adventure lovers, thrill seekers, and people who want to seize the day.</h2></div>
      <ul class="moment-list">
        <li>Adventure with a nervous system reset</li>
        <li>Movement that feels scenic, social, and human</li>
        <li>Outdoor experiences built for story-worthy days</li>
        <li>Connection-first events with a polished, elevated vibe</li>
      </ul>
    </div>
  </section>
  <section class="section" id="guide">
    <div class="container seo-grid">
      <div class="seo-copy"><span class="eyebrow" style="color: var(--amber); text-shadow: none;">Why Field Trip</span><h2>Outdoor wellness, adventure, and connection in San Diego.</h2><p>Field Trip creates experiences on the water and beyond for people who want to move, explore, and make memories.</p><p>From local collaborations in San Diego to out-of-town adventures, the focus stays on fun, movement, and good energy.</p><p class="seo-highlight">Reach out if you have questions or want to combine forces.</p></div>
      <div><div class="seo-cards">
        <article class="seo-card"><h3>San Diego Outdoor Wellness</h3><p>Field Trip is rooted in San Diego and designed for locals, visitors, and groups looking for outdoor wellness experiences near the coast.</p></article>
        <article class="seo-card"><h3>Private Events + Group Experiences</h3><p>From birthdays and retreats to collaborative activations, Field Trip builds custom experiences around movement, connection, and scenery.</p></article>
        <article class="seo-card"><h3>Adventure, Movement, and Community</h3><p>Every experience is built to feel scenic, social, and alive — more memorable than a class, more elevated than a meetup.</p></article>
      </div></div>
    </div>
  </section>
  <section class="section" id="testimonials">
    <div class="container intro-grid">
      <div><span class="eyebrow" style="color: var(--amber); text-shadow: none;">Kind words</span><h2>People leave feeling braver, lighter, and already planning the next one.</h2><div class="testimonials"><blockquote class="testimonial"><p>“Kayla was so warm and welcoming, we braved the cold water and winds with optimism for a memorable experience. If I lived in town my crew and I would be regulars.”</p><footer>Julie</footer></blockquote><blockquote class="testimonial"><p>“It felt like wellness without the stiffness — fun, beautiful, active, and actually easy to invite people into.”</p><footer>Field Trip guest</footer></blockquote></div></div>
      <div class="feature-photo"><img src="./live/testimonial.jpg" alt="Field Trip guest experience photo" /></div>
    </div>
  </section>
  <section class="section section--soft" id="contact">
    <div class="container cta-panel">
      <div><span class="eyebrow" style="color: var(--amber); text-shadow: none;">Book / collab</span><h2>Want to combine forces?</h2><p>Stay tuned, check in, and reach out if you have questions.</p></div>
      <div class="cta-card"><div class="newsletter-shell"><form class="newsletter-form" action="https://www.fieldtripcrew.com/api/form/6650ee0aa3877963e76fdc7c/newsletter-signup" method="POST" target="_blank"><div class="newsletter-row"><input class="newsletter-field" type="email" name="email" placeholder="Email Address" autocomplete="email" required /><button class="button button--navy" type="submit">Sign Up</button></div></form><div class="newsletter-help">Uses the current live Squarespace newsletter signup from FieldTripCrew.com.</div></div><a class="button button--outline button--wide" href="./contact.html">Open contact details</a></div>
    </div>
  </section>
</main>`;

const pageTemplate = ({title, description, heading, intro, content, path}) => wrap(title, description, `
<main>
  <section class="page-hero"><div class="container"><div class="page-hero__card"><span class="eyebrow" style="color: var(--amber); text-shadow: none;">Field Trip</span><h1>${heading}</h1><p>${intro}</p></div></div></section>
  <section class="section"><div class="container page-grid">${content}</div></section>
</main>
`, path);

const contactPage = wrap('Contact | Field Trip', 'Contact Field Trip for San Diego water experiences, collaborations, and questions.', `
<main>
  <section class="page-hero"><div class="container"><div class="page-hero__card"><span class="eyebrow" style="color: var(--amber); text-shadow: none;">Contact</span><h1>Mission Bay, but sometimes we launch from different locations to spice shit up.</h1><p>We launch out of Bahia Point Beach. There is no exact address as it is a beach park, but if you put Bahia Point Beach in Google Maps it will take you right there. Off of Gleason Road, look for the park bathrooms on the right side.</p></div></div></section>
  <section class="section"><div class="container contact-grid"><div class="page-card"><h3>Direct Contact</h3><p class="contact-line">kaylamulford@gmail.com</p><p class="contact-line">(831) 277-8367</p><p>Reach out with questions, collaborations, private group inquiries, or local event ideas.</p></div><div class="cta-card"><div class="newsletter-shell"><h3>Stay Updated</h3><p class="newsletter-note">Sign up to be the first to find out when we add new classes, events, and more. We respect your privacy and will never share your information with any third-party vendors.</p><form class="newsletter-form" action="https://www.fieldtripcrew.com/api/form/6650ee0aa3877963e76fdc7c/newsletter-signup" method="POST" target="_blank"><div class="newsletter-row"><input class="newsletter-field" type="email" name="email" placeholder="Email Address" autocomplete="email" required /><button class="button button--navy" type="submit">Sign Up</button></div></form></div></div></div></section>
</main>
`, 'contact.html');

const aboutPage = pageTemplate({
  title: 'About | Field Trip',
  description: 'About Field Trip, the San Diego outdoor wellness and adventure experience brand.',
  heading: 'About Field Trip',
  intro: "What is Field Trip? Well, we're definitely a cult... just kidding. We're thrill seekers and adventure lovers.",
  path: 'about.html',
  content: `<div class="page-card"><h3>Who we are</h3><p>Field trips aren't just for kids. We offer collaborations locally in San Diego and out of town.</p><p>Stay tuned, check in, and reach out if you have questions or would like to combine forces.</p></div><div class="feature-photo"><img src="./live/about.jpg" alt="Field Trip about page photo" /></div>`
});

const schedulePage = pageTemplate({
  title: 'Schedule | Field Trip',
  description: 'Field Trip schedule, tours, and paddle offerings in San Diego.',
  heading: 'Schedule',
  intro: 'Our favorite and most popular are our Sunset Tours to the sealions. We also offer Glassy Morning Tours, Full Moon/Night Tours, and Bar Paddles.',
  path: 'schedule.html',
  content: `<div class="page-card"><h3>Tours + paddles</h3><p>Most are 90 minutes in length starting with a lesson on shore, then we hit the water.</p><p>Paddleboard rentals start at 60 minutes and can be as long as a weekend.</p></div><div class="page-card"><h3>Partners + add-ons</h3><p>We also have partners on the water and can steer you in the right direction for surf lessons, snorkel tours, and more.</p><a class="button button--navy" href="./contact.html">Ask about availability</a></div>`
});

const faqPage = pageTemplate({
  title: 'FAQs | Field Trip',
  description: 'Frequently asked questions for Field Trip.',
  heading: 'FAQs',
  intro: 'Quick answers, logistics, and the basics before you book.',
  path: 'faqs.html',
  content: `<div class="faq-grid"><article class="faq-card"><h3>Where do you launch?</h3><p>Mission Bay / Bahia Point Beach most often, with some sessions launching from different locations depending on the event.</p></article><article class="faq-card"><h3>What kinds of experiences do you offer?</h3><p>Sunset tours, glassy morning tours, full moon / night tours, rentals, and collaborative water experiences.</p></article><article class="faq-card"><h3>Can I reach out with a custom idea?</h3><p>Yes. Reach out if you have questions or want to combine forces for something private or collaborative.</p></article></div>`
});

const pricingPage = pageTemplate({
  title: 'Pricing | Field Trip',
  description: 'Pricing and booking guidance for Field Trip experiences.',
  heading: 'Pricing',
  intro: 'Pricing details on the live site are still in flux, so this page acts as a booking bridge instead of inventing rates.',
  path: 'pricing.html',
  content: `<div class="page-card"><h3>Request current pricing</h3><p>For the easiest switch without losing anything, pricing should stay tied to the current live process until final rates are confirmed.</p><a class="button button--navy" href="./contact.html">Contact for pricing</a></div><div class="page-card"><h3>Need something custom?</h3><p>Private groups, retreats, and collaborations can vary based on location, timing, and format.</p></div>`
});

const privacyPage = pageTemplate({
  title: 'Privacy Policy | Field Trip',
  description: 'Privacy policy information for Field Trip.',
  heading: 'Privacy Policy',
  intro: 'This switch site preserves the live Field Trip newsletter signup and routes users to the live site where needed.',
  path: 'privacy-policy.html',
  content: `<div class="page-card"><h3>Privacy</h3><p>Signups submitted through the newsletter form are handled by the current live Squarespace setup at FieldTripCrew.com.</p><p>For the most current policy language, refer to the live site until the full migration is complete.</p></div><div class="page-card"><h3>Current source</h3><a class="button button--navy" href="https://www.fieldtripcrew.com/privacy-policy" target="_blank" rel="noreferrer">Open live privacy policy</a></div>`
});

const termsPage = pageTemplate({
  title: 'Terms and Conditions | Field Trip',
  description: 'Terms and conditions for Field Trip.',
  heading: 'Terms and Conditions',
  intro: 'For the cleanest switch, legal terms should mirror the current live source until the migration is finalized.',
  path: 'terms-and-conditions.html',
  content: `<div class="page-card"><h3>Terms</h3><p>For the current official terms, use the live FieldTripCrew.com source while the new site is being finalized.</p></div><div class="page-card"><h3>Current source</h3><a class="button button--navy" href="https://www.fieldtripcrew.com/terms-and-conditions" target="_blank" rel="noreferrer">Open live terms</a></div>`
});

writeFileSync(resolve(out, 'assets', 'app.css'), css);
writeFileSync(resolve(out, 'index.html'), wrap('Field Trip | Outdoor Wellness Experiences in San Diego', 'Field Trip creates outdoor wellness experiences in San Diego with paddle outings, movement sessions, private group adventures, brand activations, and scenic community events.', homeBody, ''));
writeFileSync(resolve(out, 'about.html'), aboutPage);
writeFileSync(resolve(out, 'contact.html'), contactPage);
writeFileSync(resolve(out, 'faqs.html'), faqPage);
writeFileSync(resolve(out, 'pricing.html'), pricingPage);
writeFileSync(resolve(out, 'schedule.html'), schedulePage);
writeFileSync(resolve(out, 'privacy-policy.html'), privacyPage);
writeFileSync(resolve(out, 'terms-and-conditions.html'), termsPage);
writeFileSync(resolve(out, '.nojekyll'), '');
console.log('Static multi-page dist built at', out);
