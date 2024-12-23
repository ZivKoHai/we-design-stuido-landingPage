export default function WeP({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-text-color text-[15px] font-normal text-end ${className}`}
    >
      {children}
    </p>
  );
}
