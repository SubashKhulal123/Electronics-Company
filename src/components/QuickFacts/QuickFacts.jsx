import { motion } from "framer-motion";

const facts = [
  { value: "2014", label: "Founded" },
  { value: "40+", label: "Countries" },
  { value: "15K+", label: "Customers" },
  { value: "SF", label: "Headquarters" },
];

export default function QuickFacts() {
  return (
    <section className="border-y border-border bg-white">
      <div className="container-px mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center divide-x divide-border py-8"
        >
          {facts.map((fact) => (
            <div key={fact.label} className="flex-1 px-4 text-center sm:px-8">
              <p className="text-xl font-extrabold text-ink md:text-2xl">{fact.value}</p>
              <p className="mt-1 text-xs text-muted md:text-sm">{fact.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}