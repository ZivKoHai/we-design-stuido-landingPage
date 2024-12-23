export default function WeH2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-text-color sm:text-3xl text-2xl font-bold text-center ${className}`}
    >
      {children}
    </h2>
  );
}
