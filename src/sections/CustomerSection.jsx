const CustomerSection = () => {
  return (
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
  );
};

export default CustomerSection;
