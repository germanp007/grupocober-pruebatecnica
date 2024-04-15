import ImageOptimized from "../components/ImageOptimizated";

const FeatureSection = () => {
  return (
    <section className="ui-section-feature">
      <div className="ui-layout-container">
        <div className="ui-section-feature__layout ui-layout-grid ui-layout-grid-2">
          {/* <!-- IMAGE --> */}
          <ImageOptimized classImage="ui-image-half-left" />
          {/* <!-- FEATURE --> */}
          <div>
            <h2>Nice Features</h2>
            <p className="ui-text-intro">
              Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Enim ad minim
              veniam, quis nostrud exercitation ullamco nisi equi.
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
              Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Enim ad minim
              veniam, quis nostrud exercitation ullamco nisi equi.
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
  );
};

export default FeatureSection;
