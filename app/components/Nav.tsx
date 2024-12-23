import ButtonNavToggle from "./ButtonNavToggle";
import LogoDesktop from "./LogoDesktop";
import LogoMobile from "./LogoMobile";

const Links = [
  { name: "בית", href: "/" },
  { name: "שירותים", href: "/services" },
  { name: "פרויקטים", href: "/projects" },
  { name: "צור קשר", href: "/contact" },
  { name: "מי אנחנו", href: "/about" },
  { name: "התהליך", href: "/process" },
  { name: "צור קשר", href: "/contact" },
];

export default function Nav() {
  return (
    <div className="fixed top-0 left-0 w-full h-[80px] z-[9999] bg-foreground sm:px-20 px-4 flex justify-between items-center">
      <div className="sm:mx-auto">
        <LogoDesktop className="sm:block hidden" size={216} />
        <LogoMobile className="block sm:hidden" size={105} />
      </div>
      <ButtonNavToggle Links={Links} />
    </div>
  );
}
