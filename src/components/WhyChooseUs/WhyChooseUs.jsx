import { motion } from "framer-motion";
import { HiOutlineShieldCheck, HiOutlineTruck, HiOutlineLockClosed } from "react-icons/hi2";
import { PiHeadsetLight } from "react-icons/pi";
import SectionHeading from "../common/SectionHeading";
import AnimatedSection from "../common/AnimatedSection";
import { whyChooseUs } from "../../data/content";

const iconMap = {
  shield: HiOutlineShieldCheck,
  truck: HiOutlineTruck,
  lock: HiOutlineLockClosed,
  headset: PiHeadsetLight,
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-py bg-white">
      <div className="container-px mx-auto max-w-8xl">
        <SectionHeading
          eyebrow="Why Auren"
          title="Engineered around your trust"
          subtitle="Every order is backed by the same four commitments, no matter what you buy."
          align="center"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <AnimatedSection key={item.id} direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-full flex-col items-center rounded-2xl border border-border bg-surface-alt p-8 text-center shadow-softer"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary shadow-soft">
                    <Icon className="text-3xl" />
                  </div>
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
