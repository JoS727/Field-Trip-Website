const offerings = [
  {
    title: 'Water Adventures',
    description:
      'Stand-up paddle, shoreline workouts, guided water time, and playful outdoor sessions that feel equal parts energizing and restorative.',
  },
  {
    title: 'Wellness Gatherings',
    description:
      'Sunrise movement, breathwork, grounding rituals, and soft-structure experiences designed to get people out of their heads and back into their bodies.',
  },
  {
    title: 'Private + Brand Collabs',
    description:
      'Field Trip can shape custom outings for retreats, friend groups, local partnerships, and community-forward activations in San Diego and beyond.',
  },
];

const moments = [
  'Adventure with a nervous system reset',
  'Movement that feels scenic, social, and human',
  'Outdoor experiences built for story-worthy days',
  'Connection-first events with a polished, elevated vibe',
];

const testimonials = [
  {
    quote:
      'Kayla was so warm and welcoming, we braved the cold water and winds with optimism for a memorable experience. If I lived in town my crew and I would be regulars.',
    author: 'Julie',
  },
  {
    quote:
      'It felt like wellness without the stiffness — fun, beautiful, active, and actually easy to invite people into.',
    author: 'Field Trip guest',
  },
];

export function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar__inner">
          <div className="brand">
            <span className="brand__eyebrow">Wellness • Adventure • Connection</span>
            <span className="brand__name">Field Trip</span>
          </div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#offerings">Offerings</a>
            <a href="#testimonials">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__content">
              <span className="eyebrow">Amplify your nature</span>
              <h1>Outdoor wellness with a crisp, coastal-adventure soul.</h1>
              <p className="hero__lede">
                Field Trip creates feel-good experiences that blend water, movement, fresh air, and actual connection — for people who want something a little more alive than a typical class or meetup.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#contact">Plan a Field Trip</a>
                <a className="button button--ghost" href="#offerings">Explore experiences</a>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card__badge">Field Trip</div>
              <div className="hero-card__sun" />
              <div className="hero-card__scene">
                <div className="hero-card__mountains" />
                <div className="hero-card__water" />
              </div>
              <div className="hero-card__caption">San Diego-rooted experiences for adventure lovers, water people, and the friends they bring along.</div>
            </div>
          </div>
        </section>

        <section className="section section--soft" id="about">
          <div className="container intro-grid">
            <div>
              <span className="eyebrow">What it is</span>
              <h2>Not just fitness. Not just a tour. More like a beautifully run excuse to actually live.</h2>
            </div>
            <div>
              <p>
                Field Trip is for people who want to get outside, move, reset, laugh, and make the day feel bigger. The energy is upbeat, scenic, a little playful, and grounded in real human connection.
              </p>
              <p>
                Think waterfront movement, adventure outings, collaborative gatherings, and wellness experiences that feel clean, welcoming, and visually elevated.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="offerings">
          <div className="container">
            <span className="eyebrow">Offerings</span>
            <h2>Built for groups, brands, retreats, and people who want their weekends to feel better.</h2>
            <div className="cards">
              {offerings.map((item) => (
                <article key={item.title} className="card">
                  <div className="card__icon" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--accent">
          <div className="container split-panel">
            <div>
              <span className="eyebrow eyebrow--light">The vibe</span>
              <h2>Fresh air, warm light, and just enough structure to make it easy to say yes.</h2>
            </div>
            <ul className="moment-list">
              {moments.map((moment) => (
                <li key={moment}>{moment}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="testimonials">
          <div className="container">
            <span className="eyebrow">Kind words</span>
            <h2>People leave feeling braver, lighter, and already planning the next one.</h2>
            <div className="testimonials">
              {testimonials.map((item) => (
                <blockquote key={item.author} className="testimonial">
                  <p>“{item.quote}”</p>
                  <footer>{item.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--soft" id="contact">
          <div className="container cta-panel">
            <div>
              <span className="eyebrow">Book / collab</span>
              <h2>Want to build something fun, outdoorsy, and actually memorable?</h2>
              <p>
                Reach out for local events, retreats, private group experiences, brand activations, or collaborations around movement, water, and community.
              </p>
            </div>
            <div className="cta-card">
              <a className="button button--primary button--wide" href="mailto:hello@fieldtripcrew.com?subject=Field%20Trip%20Inquiry">hello@fieldtripcrew.com</a>
              <a className="button button--ghost button--wide" href="https://www.instagram.com/fieldtripcrew/" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
