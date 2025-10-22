import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

export const metadata = {
  title: "About",
  description: "About Scoops Creamery in Port Elizabeth (Gqeberha).",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <Container className="py-10 md:py-16">
      <div className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur shadow-sm p-6 md:p-8">
        <SectionTitle title="About Scoops Creamery" />
        <div className="prose max-w-none">
          <p>
            We’re a small, independent creamery serving Port Elizabeth (Gqeberha). Our team
            churns fresh flavours every morning using local dairy and seasonal fruit. From
            classic vanilla to bright vegan sorbets, we love sharing the joy of dessert.
          </p>
        </div>
      </div>
    </Container>
  );
}
