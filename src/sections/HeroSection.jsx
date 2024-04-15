import ImageOptimized from "../components/ImageOptimizated";

const HeroSection = () => {
  return (
    <section className="ui-section-hero">
      <div className="ui-layout-container">
        <div className="ui-section-hero__layout ui-layout-grid ui-layout-grid-2">
          {/* <!-- COPYWRITING --> */}
          <div>
            <h1>Design better.</h1>
            <p className="ui-text-intro">
              Lorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor
              incididunt ut labore et dolore magna aliqua ullamco laboris nisi.
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
  );
};

export default HeroSection;
