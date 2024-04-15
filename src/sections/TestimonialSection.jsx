const TestimonialSection = () => {
  return (
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
              &ldquo;Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
              eiusmod tempor incididunt labore dolore magna.&rdquo;
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
              &ldquo;Lorem ipsum dolor sit amet, consec adipiscing elit, sed do
              eiusmod tempor incididunt labore dolore magna.&rdquo;
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
  );
};

export default TestimonialSection;
