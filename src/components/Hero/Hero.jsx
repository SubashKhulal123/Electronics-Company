import { motion } from "framer-motion";

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

      {/* Text content stays narrow and centered */}
      <div className="container-px relative mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Centered logo - bigger, more breathing room */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col items-center gap-4"
        >
          <span className="flex h-24 w-24 items-center justify-center rounded-3xl bg-primary text-4xl font-extrabold text-white shadow-lift md:h-28 md:w-28 md:text-5xl">
            A
          </span>
          <span className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Auren
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl"
        >
          Next Generation <span className="text-primary">Electronics</span>
        </motion.h1>

        {/* 7-8 line description, framed as an intro to the image below */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
        >
          Auren was founded on a simple idea: electronics should feel as good to use
          as they look on a shelf. Every product we make starts in-house, from the
          first sketch to the final chip layout, so nothing about it feels
          off-the-shelf. Behind every device is a workspace like this — where
          ideas get tested, broken, and rebuilt until they're ready to carry the
          Auren name. It's the same care that goes into every laptop, smartphone,
          and smart home device we ship. What you see below is where that process
          lives day to day, long before a product ever reaches a shelf.
        </motion.p>
      </div>

      {/* Full-bleed showcase image - breaks out of the narrow container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="container-px relative mx-auto mt-16 max-w-8xl md:mt-20"
      >
        <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop"
            alt="Auren electronics"
            className="h-[340px] w-full object-cover md:h-[560px] lg:h-[640px]"
          />
        </div>
      </motion.div>
    </section>
  );
}