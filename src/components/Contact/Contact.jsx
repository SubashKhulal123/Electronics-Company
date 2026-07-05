import { useState } from "react";
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope, HiOutlineClock } from "react-icons/hi2";
import SectionHeading from "../common/SectionHeading";
import AnimatedSection from "../common/AnimatedSection";
import { company } from "../../data/siteData";

const contactDetails = [
  { icon: HiOutlineMapPin, label: "Address", value: company.address },
  { icon: HiOutlinePhone, label: "Phone", value: company.phone },
  { icon: HiOutlineEnvelope, label: "Email", value: company.email },
  { icon: HiOutlineClock, label: "Business Hours", value: company.hours },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-py bg-surface-alt">
      <div className="container-px mx-auto max-w-8xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="We'd love to hear from you"
          subtitle="Questions about an order, a product, or a partnership? Send us a message and we'll respond within one business day."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <AnimatedSection direction="right" className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-softer"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-ink">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="mt-2 flex h-48 items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-surface-alt text-sm font-medium text-muted">
                Map preview — San Francisco, CA
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-3xl border border-border bg-white p-8 shadow-softer md:p-10"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-ink">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jordan Lee"
                    className="w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-ink">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@email.com"
                    className="w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary focus:bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-ink">Subject</label>
                <input
                  type="text"
                  placeholder="Order inquiry"
                  className="w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary focus:bg-white"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-ink">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary focus:bg-white"
                />
              </div>
              <button type="submit" className="btn-primary self-start">
                Send Message
              </button>
              {submitted && (
                <p className="text-sm font-medium text-primary">
                  Thanks for reaching out — we'll be in touch shortly.
                </p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
