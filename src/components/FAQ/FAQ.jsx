import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi";
import SectionHeading from "../common/SectionHeading";
import AnimatedSection from "../common/AnimatedSection";
import { faqs } from "../../data/content";

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-ink">{faq.question}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
            isOpen ? "bg-primary text-white" : "bg-surface-alt text-ink"
          }`}
        >
          {isOpen ? <HiMinus className="text-sm" /> : <HiPlus className="text-sm" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-muted">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(faqs[0].id);

  return (
    <section id="faq" className="section-py bg-surface-alt">
      <div className="container-px mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          subtitle="Everything you need to know before you order. Can't find it here? Reach out to our team."
          align="center"
        />

        <AnimatedSection direction="up" className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <FaqItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
