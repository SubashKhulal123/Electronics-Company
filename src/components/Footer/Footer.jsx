import { FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import Logo from "../common/Logo";
import { company, footerLinks, socialLinks } from "../../data/siteData";

const socialIconMap = {
  Twitter: FaXTwitter,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
  YouTube: FaYoutube,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/70">
      <div className="container-px mx-auto max-w-8xl py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              {company.shortDescription}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <Icon className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/50 transition-colors hover:text-primary-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Support</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/50 transition-colors hover:text-primary-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Stay Updated</h4>
            <p className="mt-5 text-sm text-white/50">
              Subscribe for product news and exclusive early-access drops.
            </p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto flex max-w-8xl flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>© {year} {company.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary-light">Privacy Policy</a>
            <a href="#" className="hover:text-primary-light">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
