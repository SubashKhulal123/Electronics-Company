import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="card-base group flex h-full flex-col overflow-hidden hover:border-primary/40 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-alt">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.oldPrice && (
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
            Sale
          </span>
        )}
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur-sm">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-1.5">
          <HiStar className="text-amber-400 text-sm" />
          <span className="text-sm font-semibold text-ink">{product.rating}</span>
          <span className="text-xs text-muted">({product.reviews})</span>
        </div>

        <h3 className="text-lg font-bold text-ink">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{product.description}</p>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold text-ink">${product.price}</span>
            {product.oldPrice && (
              <span className="text-sm text-muted line-through">${product.oldPrice}</span>
            )}
          </div>
          <button
            aria-label={`Add ${product.name} to cart`}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white transition-all duration-300 hover:bg-primary-dark hover:scale-105 active:scale-95"
          >
            <HiOutlineShoppingCart className="text-lg" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
