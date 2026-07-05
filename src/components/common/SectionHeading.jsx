import AnimatedSection from "./AnimatedSection";

export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <AnimatedSection direction="up" className={`flex flex-col ${alignment} mb-14 md:mb-16`}>
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className={`section-sub ${align === "center" ? "mx-auto" : ""}`}>{subtitle}</p>}
    </AnimatedSection>
  );
}
