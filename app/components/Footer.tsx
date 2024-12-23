import Link from "next/link";
import LogoDesktop from "./LogoDesktop";
import WeP from "./ui/weP";

export default function Footer() {
  const Links = [
    { name: "בית", href: "/" },
    { name: "שירותים", href: "/services" },
    { name: "פרויקטים", href: "/projects" },
    { name: "מי אנחנו", href: "/about" },
    { name: "התהליך", href: "/process" },
    { name: "צור קשר", href: "/contact" },
  ];

  const contactsOptions = [
    { name: "טלפון", href: "/contact" },
    { name: "אימייל", href: "/contact" },
    { name: "פייסבוק", href: "/contact" },
    { name: "אינסטגרם", href: "https://www.instagram.com/we___designstudios/" },
  ];

  return (
    <div className="main-container h-fit bg-background flex flex-col-reverse sm:flex-row sm:justify-evenly justify-center sm:items-start items-end gap-10 py-10">
      <div className="flex flex-col gap-3">
        <span className="text-[15px] font-bold">מפת אתר</span>
        <div className="flex flex-col gap-3">
          {Links.map((link) => (
            <Link href={link.href} key={link.name}>
              <WeP>{link.name}</WeP>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-[15px] font-bold">צור קשר</span>
        <div className="flex flex-col gap-3">
          {contactsOptions.map((link, index) => (
            <Link href={link.href} key={index}>
              <WeP>{link.name}</WeP>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10 self-center">
        <LogoDesktop color="#4E4138" size={262} />
      </div>
    </div>
  );
}
