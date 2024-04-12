import FechaActual from "./components/FechaActual";
import Form from "./components/Form";
import Header from "./components/Header";
import ImageOptimized from "./components/ImageOptimizated";
export const App = () => {
  return (
    <>
      <main role="main">
        <Header />
        <section className="ui-section-hero">
          <div className="ui-layout-container">
            <div className="ui-section-hero__layout ui-layout-grid ui-layout-grid-2">
              {/* <!-- COPYWRITING --> */}
              <div>
                <h1>Design better.</h1>
                <p className="ui-text-intro">
                  Lorem ipsum dolor sit amet, consectetur lit, enimad eiusmod
                  tempor incididunt ut labore et dolore magna aliqua ullamco
                  laboris nisi.
                </p>
                {/* <!-- CTA --> */}
                <div className="ui-component-cta ui-layout-flex">
                  <a
                    href="#"
                    role="link"
                    aria-label="#"
                    className="ui-component-button ui-component-button-normal ui-component-button-primary"
                  >
                    Get Started for Free
                  </a>
                  <p className="ui-text-note">
                    <small>30 days free trial.</small>
                  </p>
                </div>
              </div>
              {/* <!-- IMAGE --> */}
              <ImageOptimized classImage="ui-image-half-right" />
            </div>
          </div>
        </section>
        <section className="ui-section-customer">
          <div className="ui-layout-container">
            <div className="ui-section-customer__layout ui-layout-flex">
              <img
                src="https://res.cloudinary.com/uisual/image/upload/assets/logos/facebook.svg"
                alt="#"
                className="ui-section-customer--logo"
              />
              <img
                src="https://res.cloudinary.com/uisual/image/upload/assets/logos/pinterest.svg"
                alt="#"
                className="ui-section-customer--logo"
              />
              <img
                src="https://res.cloudinary.com/uisual/image/upload/assets/logos/stripe.svg"
                alt="#"
                className="ui-section-customer--logo ui-section-customer--logo-str"
              />
              <img
                src="https://res.cloudinary.com/uisual/image/upload/assets/logos/dribbble.svg"
                alt="#"
                className="ui-section-customer--logo"
              />
              <img
                src="https://res.cloudinary.com/uisual/image/upload/assets/logos/behance.svg"
                alt="#"
                className="ui-section-customer--logo ui-section-customer--logo-bhn"
              />
            </div>
          </div>
        </section>
        <section className="ui-section-feature">
          <div className="ui-layout-container">
            <div className="ui-section-feature__layout ui-layout-grid ui-layout-grid-2">
              {/* <!-- IMAGE --> */}
              <ImageOptimized classImage="ui-image-half-left" />
              {/* <!-- FEATURE --> */}
              <div>
                <h2>Nice Features</h2>
                <p className="ui-text-intro">
                  Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Enim ad minim veniam, quis nostrud exercitation ullamco nisi
                  equi.
                </p>
                <ul className="ui-component-list ui-component-list-feature ui-layout-grid">
                  <li className="ui-component-list--item ui-component-list--item-check">
                    Unlimited domain names.
                  </li>
                  <li className="ui-component-list--item ui-component-list--item-check">
                    150&plus; components.
                  </li>
                  <li className="ui-component-list--item ui-component-list--item-check">
                    Lifetime updates.
                  </li>
                  <li className="ui-component-list--item ui-component-list--item-check">
                    24/7 technical support.
                  </li>
                </ul>
              </div>
            </div>
            <div className="ui-section-feature__layout ui-layout-grid ui-layout-grid-2">
              {/* <!-- FEATURE --> */}
              <div>
                <h2>Nice Features</h2>
                <p className="ui-text-intro">
                  Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Enim ad minim veniam, quis nostrud exercitation ullamco nisi
                  equi.
                </p>
                <ul className="ui-component-list ui-component-list-feature ui-layout-grid">
                  <li className="ui-component-list--item ui-component-list--item-check">
                    Unlimited domain names.
                  </li>
                  <li className="ui-component-list--item ui-component-list--item-check">
                    150&plus; components.
                  </li>
                  <li className="ui-component-list--item ui-component-list--item-check">
                    Lifetime updates.
                  </li>
                  <li className="ui-component-list--item ui-component-list--item-check">
                    24/7 technical support.
                  </li>
                </ul>
              </div>
              {/* <!-- IMAGE --> */}
              <ImageOptimized classImage="ui-image-half-right" />
            </div>
          </div>
        </section>
        <section className="ui-section-pricing">
          <div className="ui-layout-container">
            <h2>Fair Prices</h2>
            <p className="ui-text-intro">Lorem ipsum dolor sit amet.</p>
            {/* <!-- TOGGLE --> */}
            <input
              type="radio"
              name="toggle"
              id="ui-component-toggle__monthly"
              defaultChecked
            />
            <input
              type="radio"
              name="toggle"
              id="ui-component-toggle__yearly"
            />
            <div className="ui-component-toggle ui-layout-flex">
              <label
                htmlFor="ui-component-toggle__monthly"
                className="ui-component-toggle--label"
              >
                Billed Monthly
              </label>
              <label
                htmlFor="ui-component-toggle__yearly"
                className="ui-component-toggle--label"
              >
                Billed Yearly
              </label>
            </div>
            <p className="ui-text-note">
              <small>Save 15% with a yearly plan.</small>
            </p>
            {/* <!-- PRICING --> */}
            <div className="ui-section-pricing__layout ui-layout-grid ui-layout-grid-3">
              <div className="ui-component-card ui-component-card--pricing">
                <span>
                  <strong>Basic</strong>
                </span>
                {/* <!-- AMOUNT --> */}
                <div className="ui-component-card--pricing-price">
                  <span className="ui-component-card--pricing-amount ui-component-card--pricing-amount-1"></span>
                  <span>/</span>
                  <span>month</span>
                </div>
                <span>
                  <small>Perfect for early-stage startups.</small>
                </span>
                {/* <!-- LIST --> */}
                <ul className="ui-component-list ui-component-list--pricing ui-layout-grid">
                  <li className="ui-component-list--item ui-component-list--item-check">
                    1 domain name.
                  </li>
                  <li className="ui-component-list--item ui-component-list--item-check">
                    HTML components.
                  </li>
                  <li className="ui-component-list--item ui-component-list--item-cross">
                    Priority support.
                  </li>
                </ul>
                {/* <!-- CTA --> */}
                <a
                  href="#"
                  className="ui-component-button ui-component-button-big ui-component-button-secondary"
                  role="link"
                  aria-label="#"
                >
                  Get Started
                </a>
              </div>
              <div className="ui-component-card ui-component-card--pricing">
                <span>
                  <strong>Standard</strong>
                </span>
                {/* <!-- AMOUNT --> */}
                <div className="ui-component-card--pricing-price">
                  <span className="ui-component-card--pricing-amount ui-component-card--pricing-amount-2"></span>
                  <span>/</span>
                  <span>month</span>
                </div>
                <span>
                  <small>Perfect for early-stage startups.</small>
                </span>
                {/* <!-- LIST --> */}
                <ul className="ui-component-list ui-component-list--pricing ui-layout-grid">
                  <li className="ui-component-list--item ui-component-list--item-check">
                    1 domain name.
                  </li>
                  <li className="ui-component-list--item ui-component-list--item-check">
                    HTML components.
                  </li>
                  <li className="ui-component-list--item ui-component-list--item-check">
                    Priority support.
                  </li>
                </ul>
                {/* <!-- CTA --> */}
                <a
                  href="#"
                  className="ui-component-button ui-component-button-big ui-component-button-primary"
                  role="link"
                  aria-label="#"
                >
                  Get Started
                </a>
              </div>
              <div className="ui-component-card ui-component-card--pricing">
                <span>
                  <strong>Special</strong>
                </span>
                {/* <!-- AMOUNT --> */}
                <div className="ui-component-card--pricing-price">
                  <span className="ui-component-card--pricing-amount ui-component-card--pricing-amount-3"></span>
                  <span>/</span>
                  <span>month</span>
                </div>
                <span>
                  <small>Perfect for early-stage startups.</small>
                </span>
                {/* <!-- LIST --> */}
                <ul className="ui-component-list ui-component-list--pricing ui-layout-grid">
                  <li className="ui-component-list--item ui-component-list--item-check">
                    1 domain name.
                  </li>
                  <li className="ui-component-list--item ui-component-list--item-check">
                    HTML components.
                  </li>
                  <li className="ui-component-list--item ui-component-list--item-check">
                    Priority support.
                  </li>
                </ul>
                {/* <!-- CTA --> */}
                <a
                  href="#"
                  className="ui-component-button ui-component-button-big ui-component-button-secondary"
                  role="link"
                  aria-label="#"
                >
                  Get Started
                </a>
              </div>
            </div>
            {/* <!-- NOTE --> */}
            <p>
              Have questions?{" "}
              <a href="#" role="link" aria-label="#">
                Contact us
              </a>
              .
            </p>
          </div>
        </section>
        <section className="ui-section-testimonial">
          <div className="ui-layout-container">
            <div className="ui-section-testimonial__layout ui-layout-grid ui-layout-grid-2">
              <div className="ui-layout-column-4">
                <img
                  src="https://res.cloudinary.com/uisual/image/upload/assets/icons/avatar.svg"
                  alt="#"
                  className="ui-section-testimonial--avatar"
                />
                <p className="ui-section-testimonial--quote ui-text-intro">
                  &ldquo;Lorem ipsum dolor sit amet, consec adipiscing elit, sed
                  do eiusmod tempor incididunt labore dolore magna.&rdquo;
                </p>
                <p className="ui-section-testimonial--author">
                  <strong>Jane Doe</strong>
                  <br />
                  <small className="ui-text-note">CEO of Company</small>
                </p>
              </div>
              <div className="ui-layout-column-4">
                <img
                  src="https://res.cloudinary.com/uisual/image/upload/assets/icons/avatar.svg"
                  alt="#"
                  className="ui-section-testimonial--avatar"
                />
                <p className="ui-section-testimonial--quote ui-text-intro">
                  &ldquo;Lorem ipsum dolor sit amet, consec adipiscing elit, sed
                  do eiusmod tempor incididunt labore dolore magna.&rdquo;
                </p>
                <p className="ui-section-testimonial--author">
                  <strong>Jane Doe</strong>
                  <br />
                  <small className="ui-text-note">CEO of Company</small>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="ui-section-close">
          <div className="ui-layout-container">
            <div className="ui-layout-column-6 ui-layout-column-center">
              <h2>Ready to start?</h2>
              {<FechaActual />}
              {/* <!-- CTA --> */}
              <div className="ui-component-cta ui-layout-flex">
                <a
                  href="#"
                  role="link"
                  aria-label="#"
                  className="ui-component-button ui-component-button-normal ui-component-button-primary"
                >
                  Get Started for Free
                </a>
                <p className="ui-text-note">
                  <small>30 days free trial.</small>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="ui-section-form">
          <Form />
        </section>
      </main>
      <footer role="contentinfo" className="ui-section-footer">
        <div className="ui-layout-container">
          <div className="ui-section-footer__layout ui-layout-flex">
            {/* <!-- COPYRIGHT --> */}
            <p className="ui-section-footer--copyright ui-text-note">
              <small>&copy; 0000 Uisual</small>
            </p>
            {/* <!-- MENU --> */}
            <a href="#" role="link" aria-label="#">
              <svg
                viewBox="0 0 24 24"
                height="16"
                width="16"
                fill="none"
                stroke="#AEAEAE"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                role="img"
                aria-label="#"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" role="link" aria-label="#">
              <svg
                viewBox="0 0 24 24"
                height="16"
                width="16"
                fill="none"
                stroke="#AEAEAE"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                role="img"
                aria-label="#"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
              </svg>
            </a>
            <a href="#" role="link" aria-label="#">
              <svg
                viewBox="0 0 24 24"
                height="16"
                width="16"
                fill="none"
                stroke="#AEAEAE"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                role="img"
                aria-label="#"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
