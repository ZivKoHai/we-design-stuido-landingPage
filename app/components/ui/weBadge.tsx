export default function WeBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-transparent border border-text border-solid text-text px-4 py-2 font-normal">
      {children}
    </div>
  );
}
