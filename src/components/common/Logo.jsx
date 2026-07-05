export default function Logo({ light = false }) {
  return (
    <a href="#home" className="flex items-center gap-2.5 shrink-0">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white font-extrabold text-lg">
        A
      </span>
      <span className={`text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>
        Auren
      </span>
    </a>
  );
}
