export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`bg-transparent text-text transition-all duration-300 ease-in-out hover:-translate-y-1 border border-foreground px-10 py-2 ${className}`}
    >
      {children}
    </button>
  );
}
