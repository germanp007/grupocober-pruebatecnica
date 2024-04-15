import CloseSection from "./sections/CloseSection";
import CustomerSection from "./sections/CustomerSection";
import FeatureSection from "./sections/FeatureSection";
import Footer from "./sections/Footer";
import FormSection from "./sections/FormSection";
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import PricingSection from "./sections/PricingSection";
import TestimonialSection from "./sections/TestimonialSection";
export const App = () => {
  return (
    <>
      <main role="main">
        <Header />
        <HeroSection />
        <CustomerSection />
        <FeatureSection />
        <PricingSection />
        <TestimonialSection />
        <CloseSection />
        <FormSection />
      </main>
      <Footer />
    </>
  );
};
