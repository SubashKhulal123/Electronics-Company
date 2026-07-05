

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { company } from "../../data/siteData";

const showcaseItems = [
  {
    id: "laptop",
    title: "AuraBook Pro 14",
    description: "A 120Hz display and all-day battery in a whisper-quiet unibody chassis.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "phone",
    title: "Nova Phone X",
    description: "Titanium frame, triple-lens pro camera, and the fastest Auren chip yet.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "earbuds",
    title: "Pulse Earbuds 2",
    description: "Adaptive noise cancellation with 30 hours of total battery life.",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=900&auto=format&fit=crop",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container-px relative mx-auto max-w-8xl">
        {/* Top: centered text content */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow mb-6"
          >
            {company.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl"
          >
            Next Generation <span className="text-primary">Electronics</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-lg text-base text-muted md:text-lg"
          >
            {company.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-14 flex items-center justify-center gap-8"
          >
            <div>
              <p className="text-2xl font-extrabold text-ink">15K+</p>
              <p className="text-xs text-muted">Happy Customers</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="text-2xl font-extrabold text-ink">4.9/5</p>
              <p className="text-xs text-muted">Average Rating</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="text-2xl font-extrabold text-ink">20+</p>
              <p className="text-xs text-muted">Design Awards</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom: static 3-photo showcase, presentation-slide style */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3 md:mt-24">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-surface-alt">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




