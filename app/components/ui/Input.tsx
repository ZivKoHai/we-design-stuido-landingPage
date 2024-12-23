export default function Input({
  placeholder,
  type,
  name,
}: {
  placeholder: string;
  type: string;
  name: string;
}) {
  return (
    <input
      dir="rtl"
      name={name}
      type={type}
      placeholder={placeholder}
      className="w-full sm:w-1/2 bg-transparent py-2 rounded-none border-b-[0.5px] border-foreground placeholder:text-foreground placeholder:text-right placeholder:font-light focus:outline-none"
    />
  );
}
