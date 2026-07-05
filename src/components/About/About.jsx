import AnimatedSection from "../common/AnimatedSection";
import { company } from "../../data/siteData";
import { stats } from "../../data/content";
import useCountUp from "../../hooks/useCountUp";

function StatCard({ stat }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div ref={ref} className="rounded-2xl border border-border bg-white p-6 text-center shadow-softer">
      <p className="text-3xl font-extrabold text-primary md:text-4xl">
        {value.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm text-muted">{stat.label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-py bg-white">
      <div className="container-px mx-auto max-w-8xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
                  alt="Inside the Auren design studio"
                  className="h-[420px] w-full object-cover md:h-[480px]"
                />
              </div>
              <div className="absolute -bottom-8 -right-6 hidden w-48 rounded-2xl border border-border bg-white p-5 shadow-lift md:block">
                <p className="text-2xl font-extrabold text-ink">{company.founded}</p>
                <p className="text-xs text-muted">Founded in San Francisco</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.1}>
            <span className="eyebrow mb-6">About Auren</span>
            <h2 className="section-heading">Built by people who use what they make</h2>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              Auren started in a two-room studio in San Francisco with a simple frustration: most
              electronics looked and felt disposable. A decade later, we design every device
              in-house — from the chip architecture to the packaging — so that every detail
              answers to the same standard.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Today, our devices ship to over 40 countries, but the process hasn't changed:
              small teams, long testing cycles, and a refusal to ship anything we wouldn't
              use ourselves.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <StatCard key={stat.id} stat={stat} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
