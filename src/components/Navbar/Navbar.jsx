import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Logo from "../common/Logo";
import { navLinks } from "../../data/siteData";
import useScrollPosition from "../../hooks/useScrollPosition";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollPosition(20);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-softer border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-px mx-auto flex max-w-8xl items-center justify-between py-4">
        <Logo />

        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center">
          <a href="#products" className="btn-primary">
            <HiOutlineShoppingBag className="text-base" />
            Shop Now
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-border text-ink"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white border-t border-border"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block rounded-xl px-3 py-3 text-sm font-medium text-ink/80 transition-colors hover:bg-surface-alt hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="#products" onClick={handleLinkClick} className="btn-primary w-full">
                  <HiOutlineShoppingBag className="text-base" />
                  Shop Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
