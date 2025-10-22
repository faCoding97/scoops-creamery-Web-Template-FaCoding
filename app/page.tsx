import site from "../data/site.json";
import Container from "../components/ui/Container";
import Hero from "../components/sections/Hero";
import ValueProps from "../components/sections/ValueProps";
import PortfolioOrMenu from "../components/sections/PortfolioOrMenu";
import Features from "../components/sections/Features";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import CTA from "../components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <section
        id="why-us"
        aria-labelledby="why-us-heading"
        className="anchor-section py-10 md:py-16">
        <Container className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur shadow-sm p-0 overflow-hidden">
          <Hero slides={site.hero.slides} />
        </Container>
      </section>

      <section
        id="why-us"
        aria-labelledby="why-us-heading"
        className="anchor-section py-10 md:py-16">
        <Container className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur shadow-sm p-6 md:p-8">
          <ValueProps
            title="Why Choose Scoops"
            items={site.valueProps}
            id="why-us-heading"
          />
        </Container>
      </section>

      <section
        id="menu"
        aria-labelledby="menu-heading"
        className="anchor-section py-10 md:py-16">
        <Container className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur shadow-sm p-6 md:p-8">
          <PortfolioOrMenu
            title="Featured Menu"
            id="menu-heading"
            items={site.menu.slice(0, 6)}
            ctaHref={site.routes.menuRoot}
          />
        </Container>
      </section>

      <section
        aria-labelledby="features-heading"
        className="anchor-section py-10 md:py-16">
        <Container className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur shadow-sm p-6 md:p-8">
          <Features
            title="Features"
            id="features-heading"
            items={site.features}
          />
        </Container>
      </section>

      <section
        aria-labelledby="testimonials-heading"
        className="anchor-section py-10 md:py-16">
        <Container className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur shadow-sm p-6 md:p-8">
          <Testimonials
            title="What People Say"
            id="testimonials-heading"
            items={site.testimonials}
          />
        </Container>
      </section>

      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="anchor-section py-10 md:py-16">
        <Container className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur shadow-sm p-6 md:p-8">
          <FAQ title="FAQ" id="faq-heading" items={site.faq} />
        </Container>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="anchor-section py-10 md:py-16">
        <Container className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur shadow-sm p-6 md:p-8">
          <CTA
            title="Order or Enquire"
            id="contact-heading"
            contact={site.contact}
          />
        </Container>
      </section>
    </>
  );
}
