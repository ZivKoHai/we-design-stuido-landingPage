"use client";

import ButtonNavToggle from "./ButtonNavToggle";
import LogoDesktop from "./LogoDesktop";
import LogoMobile from "./LogoMobile";
import useScrollTop from "../hooks/useScrollTop";

const Links = [
  { name: "בית", href: "/" },
  { name: "שירותים", href: "#services" },
  { name: "פרויקטים", href: "#projects" },
  { name: "צור קשר", href: "#contact" },
  { name: "מי אנחנו", href: "#about-us" },
  { name: "התהליך", href: "#process" },
  { name: "אומרים עלינו", href: "#testimonials" },
  { name: "התהליך", href: "#process" },
  { name: "שאלות ותשובות", href: "#faq" },
  { name: "צור קשר", href: "#contact" },
];

export default function Nav() {
  const isTop = useScrollTop();

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[80px] z-[9999] transition-all duration-300 ease-in-out  sm:px-20 px-4 flex justify-between items-center ${
        isTop ? "bg-transparent" : "bg-foreground"
      }`}
    >
      <div className="sm:mx-auto">
        <LogoDesktop className="sm:block hidden" size={216} />
        <LogoMobile className="block sm:hidden" size={105} />
      </div>
      <ButtonNavToggle Links={Links} />
    </div>
  );
}
