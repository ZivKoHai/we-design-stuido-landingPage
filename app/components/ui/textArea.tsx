export default function TextArea({
  placeholder,
  name,
}: {
  placeholder: string;
  name: string;
}) {
  return (
    <textarea
      name={name}
      className="bg-transparent w-full rounded-none sm:w-1/2 border-b-[0.5px] border-foreground placeholder:text-foreground placeholder:text-right placeholder:font-light"
      placeholder={placeholder}
      rows={4}
      cols={50}
    />
  );
}
