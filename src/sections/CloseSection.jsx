import FechaActual from "../components/FechaActual";

const CloseSection = () => {
  return (
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
  );
};

export default CloseSection;
