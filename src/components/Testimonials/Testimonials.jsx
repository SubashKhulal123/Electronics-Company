import { HiStar } from "react-icons/hi2";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import SectionHeading from "../common/SectionHeading";
import AnimatedSection from "../common/AnimatedSection";
import { testimonials } from "../../data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-py relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="container-px relative mx-auto max-w-8xl">
        <AnimatedSection direction="up" className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center">
          <span className="eyebrow mb-4 border-white/20 bg-white/10 text-white">What Customers Say</span>
          <h2 className="section-heading text-white">Loved by thousands of Auren owners</h2>
          <p className="mt-4 text-base text-white/60 md:text-lg">
            Real feedback from the people who use our devices every day.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <AnimatedSection key={item.id} direction="up" delay={index * 0.15}>
              <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.07] p-8 backdrop-blur-xl">
                <HiOutlineChatBubbleBottomCenterText className="mb-4 text-3xl text-primary-light" />
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <HiStar
                      key={i}
                      className={`text-sm ${i < item.rating ? "text-amber-400" : "text-white/20"}`}
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-white/80">"{item.review}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-11 w-11 rounded-full border border-white/20 object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    <p className="text-xs text-white/50">{item.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
