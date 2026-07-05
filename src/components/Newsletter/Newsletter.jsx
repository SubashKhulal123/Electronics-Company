import { useState } from "react";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import AnimatedSection from "../common/AnimatedSection";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="section-py bg-white">
      <div className="container-px mx-auto max-w-8xl">
        <AnimatedSection direction="zoom">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center md:px-16 md:py-20">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10" />

            <div className="relative mx-auto max-w-xl">
              <h2 className="text-2xl font-extrabold text-white md:text-4xl">
                Get early access to new drops
              </h2>
              <p className="mt-4 text-sm text-white/80 md:text-base">
                Join our newsletter for product launches, exclusive discounts, and behind-the-scenes
                stories from the Auren design team — no spam, unsubscribe anytime.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm text-white placeholder:text-white/60 outline-none backdrop-blur-sm focus:border-white/50"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-transform duration-300 hover:scale-[1.03] active:scale-95"
                >
                  Subscribe
                  <HiOutlinePaperAirplane className="text-base" />
                </button>
              </form>

              {submitted && (
                <p className="mt-4 text-sm font-medium text-white">
                  You're in! Check your inbox for a confirmation email.
                </p>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
