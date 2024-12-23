import WeH2 from "./ui/weH2";
import WeP from "./ui/weP";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="main-container flex flex-col-reverse sm:flex-row py-10 gap-10 relative">
      <div className="basis-1/2 flex flex-col gap-10 justify-between">
        <div className="flex flex-col sm:flex-row justify-between gap-10 w-full">
          <div>
            <p className="text-right font-bold text-foreground">מיקום</p>
            <WeP>רחוב משה דיין 12, תל אביב</WeP>
          </div>
          <div>
            <p className="text-right font-bold text-foreground">אימייל</p>
            <a
              href="mailto:info@wedesignstudios.com"
              className="text-foreground hover:text-primary text-right"
            >
              info@wedesignstudios.com
            </a>
          </div>
          <div>
            <p className="text-right font-bold text-foreground">טלפון</p>
            <a
              href="tel:050-5555555"
              className="text-foreground hover:text-primary text-right"
            >
              050-5555555
            </a>
          </div>
        </div>
        <div className="w-full h-[250px] relative ">
          <Image
            src="/sliderImages/we___designstudios_1712394084_3340126131049699511_65377472209.jpg"
            alt="contact"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="basis-1/2 flex flex-col gap-10">
        <div className="w-full flex flex-col items-end gap-2">
          <WeH2>צור קשר</WeH2>
          <WeP className="text-right">
            אנו מוכנים לעזור לכם בכל שלב של התהליך. ניתן לפנות אלינו בכל עת
            ונעזור לכם להגיע למקום המושלם.
          </WeP>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
