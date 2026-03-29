const cities = [
  { name: 'Dubai', note: 'Launch priority' },
  { name: 'London', note: 'Interest list open' },
  { name: 'New York', note: 'Interest list open' },
  { name: 'Miami', note: 'Interest list open' },
  { name: 'West Palm', note: 'Interest list open' },
  { name: 'Abu Dhabi', note: 'Interest list open' },
  { name: 'Paris', note: 'Interest list open' },
];

const pillars = [
  {
    title: 'A neighborhood kitchen you actually use',
    text: 'Built for breakfast, lunch, pickup, and routine — not just occasional dining.',
  },
  {
    title: '33 founding members per location',
    text: 'Each Pantry opens small on purpose, with a tight early community and a more personal experience.',
  },
  {
    title: 'Weekly meal planning and prep',
    text: 'Part counter spot, part meal prep, part daily ritual — built for people who want better food ready through the week.',
  },
];

const audience = [
  'Future founding members',
  'Locals who want Pantry in their area',
  'People who want a better daily food routine',
];

export default function App() {
  return (
    <div className="site-shell">
      <section className="hero">
        <div className="hero-overlay" />
        <img
          src="/hero-community-counter.png"
          alt="Pantry counter kitchen community"
          className="hero-image"
        />

        <div className="container hero-content">
          <div className="hero-copy-wrap">
            <h1>
              Pantry.
              <span>Your kitchen, outside home.</span>
            </h1>
            <p className="hero-copy">
              A members first neighborhood kitchen built around open counters, shared energy,
              good food, and a more personal way to eat every day.
            </p>
          </div>

          <div className="hero-badges">
            <span>33 founding members per location</span>
            <span>From $1,800 to $2,500/year depending on location</span>
            <span>Counter service + communal table</span>
            <span>Dubai first, more cities to follow</span>
          </div>

          <div className="hero-actions">
            <a href="#interest-form" className="button button-dark">Join the interest list</a>
            <a href="#cities" className="button button-light">See cities</a>
          </div>
        </div>
      </section>

      <section className="intro-band">
        <div className="container intro-grid">
          {pillars.map((item) => (
            <div key={item.title} className="card intro-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container story-grid">
        <div className="story-copy">
          <div className="section-kicker">What Pantry is</div>
          <h2>A sharper, more personal kind of neighborhood spot.</h2>
          <p>
            Pantry brings together the energy of a counter restaurant, the convenience of a weekly meal system,
            and the familiarity of a place that quickly becomes part of your routine.
          </p>
          <p>
            Walk in for coffee and the days menu, or join as a founding member and use Pantry as your go-to kitchen:
            a place for meals, pickup, consistency, and a better everyday food rhythm.
          </p>
          <p>
            Depending on the location, founding membership is expected to start from approximately
            $1,800 to $2,500 per year, with each Pantry opening small and intentionally limited to 33 members.
          </p>
          <ul className="check-list">
            <li>Open kitchen and counter service first</li>
            <li>One communal table reserved for members</li>
            <li>A tightly edited public menu</li>
            <li>A deeper member layer built around routine and repeat use</li>
          </ul>
        </div>

        <div className="story-visuals">
          <img src="/green-counter-kitchen.png" alt="Counter kitchen interior" />
          <img src="/warm-wood-counter.png" alt="Warm wood open kitchen" />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div className="section-kicker">Food, atmosphere, and routine</div>
            <h2>Open counters, member meals, pickup boxes, and food worth coming back for.</h2>
            <p>
              Pantry is designed to feel social, useful, and memorable — a place for daily coffee,
              rotating dishes, member meal pickup, and a more personal relationship with food through the week.
            </p>
          </div>

          <div className="gallery-grid">
            <img src="/curved-counter-room.png" alt="Community counter dining" className="gallery-tall" />
            <img src="/bento-box.png" alt="Meal prep and pickup boxes" className="gallery-tall" />
            <img src="/pasta-night.png" alt="Rotating menu and chef nights" className="gallery-tall" />
            <img src="/fish-dish.png" alt="Refined plated dish at Pantry" />
            <img src="/plate-polite-chef.png" alt="Plate detail" />
            <img src="/chef-station-close.png" alt="Prep table food" />
          </div>
        </div>
      </section>

      <section id="cities" className="section container">
        <div className="section-head narrow">
          <div className="section-kicker">City rollout</div>
          <h2>We are building Pantry city by city.</h2>
          <p>
            Every Pantry location begins with a limited founding community. We are currently collecting interest
            to understand where the concept should launch and which neighborhoods have the strongest pull.
          </p>
        </div>

        <div className="city-grid">
          {cities.map((city) => (
            <div key={city.name} className="card city-card">
              <div className="city-name">{city.name}</div>
              <div className="city-note">{city.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section dark-band">
        <div className="container dark-grid">
          <div>
            <div className="section-kicker section-kicker-dark">Founding community</div>
            <h2>Be first to hear when Pantry opens in your city.</h2>
            <p className="dark-copy">
              Join the interest list, choose your city, and tell us how you would use Pantry.
              This helps us identify where the first 33 founding memberships should open.
            </p>

            <div className="audience-list">
              {audience.map((item) => (
                <div key={item} className="audience-item">{item}</div>
              ))}
            </div>
          </div>

          <div id="interest-form" className="form-card">
            <div className="form-card-top">
              <div className="form-label">Founding interest form</div>
              <div className="form-note-small">33 founding members per location</div>
            </div>

            <div className="tally-embed-wrap">
              <iframe
                src="https://tally.so/embed/KYLj68?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                title="Pantry founding interest form"
                loading="lazy"
                width="100%"
                height="760"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>

            <p className="form-helper">
              Early registrants will be the first to hear about launch locations, founding memberships, and opening updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}