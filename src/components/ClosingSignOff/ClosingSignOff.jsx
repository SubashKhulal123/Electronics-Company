import { motion } from "framer-motion";

export default function ClosingSignOff() {
  return (
    <section className="border-t border-border bg-white py-16">
      <div className="container-px mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-base font-extrabold text-white">
            A
          </span>
          <p className="text-sm text-muted">Auren — designed in San Francisco</p>
          
             <a href="mailto:hello@auren.com"
            className="text-sm font-medium text-primary hover:text-primary-dark"
          >
            hello@auren.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}