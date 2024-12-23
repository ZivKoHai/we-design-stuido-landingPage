export default function QuoteP({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-accent italic sm:text-4xl text-2xl text-center">
      {children}
    </p>
  );
}
