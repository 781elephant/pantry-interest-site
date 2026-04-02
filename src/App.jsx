import React from "react";
import "./index.css";

function App() {
  return (
    <div className="site-shell">
      <header className="hero">
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <p className="eyebrow">Private members kitchen</p>

          <h1>A restaurant for 33 people.</h1>

          <p className="hero-subtext">
            Your meals, your preferences, your private chef shared.
            A members only kitchen built for weekly meal prep, with optional dine in and takeaway.
            Plus a small neighborhood counter for coffee and a rotating menu.
          </p>

          <div className="hero-actions">
            <a href="#founding-members" className="btn btn-primary">
              Join founding members
            </a>
            <a href="#how-it-works" className="btn btn-secondary">
              How it works
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section intro-section">
          <div className="container narrow">
            <p className="section-label">What this is</p>
            <h2>Not a restaurant. Not meal delivery. Something better.</h2>
            <p className="lead">
              Pantry is a shared private chef model.
            </p>
            <p>
              33 members come together to support a dedicated kitchen and chef,
              giving each member access to personalized, high quality meals throughout the week.
            </p>
            <p>
              Instead of cooking, ordering, or eating out, your meals are handled.
            </p>

            <div className="key-points">
              <div className="key-point">Weekly meal prep tailored to you</div>
              <div className="key-point">Ingredients you choose and trust</div>
              <div className="key-point">Pickup, takeaway, or dine in</div>
            </div>

            <p className="closing-line">
              This is your everyday food system, simplified.
            </p>
          </div>
        </section>

        <section id="how-it-works" className="section steps-section">
          <div className="container">
            <div className="section-heading centered">
              <p className="section-label">How it works</p>
              <h2>A simpler way to eat well every week</h2>
            </div>

            <div className="steps-grid">
              <div className="step-card">
                <span className="step-number">01</span>
                <h3>Join</h3>
                <p>
                  Limited to 33 members per location. Membership funds the kitchen,
                  team, and chef.
                </p>
              </div>

              <div className="step-card">
                <span className="step-number">02</span>
                <h3>We learn you</h3>
                <p>
                  Your preferences, diet, ingredients, macros, routine, and how you like to eat.
                </p>
              </div>

              <div className="step-card">
                <span className="step-number">03</span>
                <h3>Your meals are handled</h3>
                <p>
                  Prepared throughout the week and ready when you are for pickup,
                  takeaway, or dine in.
                </p>
              </div>

              <div className="step-card">
                <span className="step-number">04</span>
                <h3>Drop in anytime</h3>
                <p>
                  Come by for coffee, a quick meal, or a seat at the communal counter.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section statement-section">
          <div className="container narrow centered">
            <p className="section-label">The idea</p>
            <h2>33 people. One kitchen. Your chef.</h2>
            <p className="lead">
              Instead of hiring a private chef individually, members share one.
            </p>

            <div className="benefit-list">
              <div className="benefit-item">Better ingredients at lower cost</div>
              <div className="benefit-item">Consistency across your week</div>
              <div className="benefit-item">A chef who actually knows your preferences</div>
            </div>

            <p className="closing-line strong">
              It is not about going out. It is about fixing how you eat every day.
            </p>
          </div>
        </section>

        <section className="section third-place-section">
          <div className="container split-layout">
            <div className="split-copy">
              <p className="section-label">The space</p>
              <h2>Your third place</h2>
              <p className="lead">
                Not home. Not work.
              </p>
              <p>
                A place you can drop into daily for coffee, a meal, or just familiarity.
              </p>
              <p>
                You will know the space. The team will know you.
                And your food will already be taken care of.
              </p>
            </div>

            <div className="split-panel">
              <div className="panel-card">
                <h3>Neighborhood feel</h3>
                <p>
                  Calm, familiar, local, and built for repeat rhythm rather than occasion dining.
                </p>
              </div>
              <div className="panel-card">
                <h3>Communal counter</h3>
                <p>
                  Eat in when you want, grab and go when you do not, and keep it part of daily life.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section public-section">
          <div className="container split-layout reverse">
            <div className="split-panel">
              <div className="feature-box">
                <span>Hot and cold drinks</span>
              </div>
              <div className="feature-box">
                <span>Specialty coffee</span>
              </div>
              <div className="feature-box">
                <span>2 to 3 rotating menu items</span>
              </div>
              <div className="feature-box">
                <span>Cooked to order on site</span>
              </div>
              <div className="feature-box">
                <span>Counter seating and takeaway</span>
              </div>
            </div>

            <div className="split-copy">
              <p className="section-label">Public side</p>
              <h2>A neighborhood spot, with a twist</h2>
              <p>
                Pantry is also open to the public, but intentionally simple.
              </p>
              <p>
                Think drinks, coffee, and a very limited rotating food menu.
                Small, thoughtful, and easy to return to.
              </p>
              <p className="closing-line">
                Members always come first. But the neighborhood is always welcome.
              </p>
            </div>
          </div>
        </section>

        <section className="section pricing-section">
          <div className="container narrow centered">
            <p className="section-label">Membership philosophy</p>
            <h2>Membership covers the system</h2>
            <p>
              Your membership funds the kitchen, the chef and team, and the infrastructure that makes the model work.
            </p>
            <p>
              Food is then priced transparently at ingredient cost plus a small margin.
            </p>

            <div className="pricing-points">
              <div className="pricing-point">No inflated restaurant pricing</div>
              <div className="pricing-point">No delivery markups</div>
              <div className="pricing-point">Just real food, done properly</div>
            </div>
          </div>
        </section>

        <section id="founding-members" className="section founding-section">
          <div className="container founding-grid">
            <div className="founding-copy">
              <p className="section-label">Founding members</p>
              <h2>33 founding members per location</h2>
              <p>
                We launch each Pantry with a small group to keep it personal,
                consistent, and high quality.
              </p>
              <p>
                Early members help shape the menu, the rhythm, and the experience.
              </p>
              <p className="founding-tagline">
                A shared private chef for 33 members, plus a small neighborhood kitchen.
              </p>
            </div>

            <div className="founding-form-card">
              <h3>Submit interest</h3>
              <p>
                Register interest for your city and be first to hear when founding spots open.
              </p>

              <div className="form-embed-wrap">
                <iframe
                  src="https://tally.so/r/KYLj68?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="420"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Founding members interest form"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-brand">Pantry</p>
            <p className="footer-copy">
              A shared private chef for 33 members, plus a small neighborhood kitchen.
            </p>
          </div>

          <a href="#founding-members" className="footer-link">
            Join founding members
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;