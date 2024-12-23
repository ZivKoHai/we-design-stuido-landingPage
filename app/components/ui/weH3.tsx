export default function WeH3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`text-color text-3xl font-bold ${className}`}>{children}</h3>
  );
}
