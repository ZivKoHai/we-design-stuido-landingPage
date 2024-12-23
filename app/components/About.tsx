import Image from "next/image";
import Button from "./ui/Button";

export default function About() {
  return (
    <section
      id="about-us"
      className="main-container sm:h-screen min-h-fit py-10 flex flex-col xl:flex-row justify-between items-center gap-10 overflow-x-hidden"
    >
      <div className="flex flex-col sm:flex-row gap-4 min-h-[600px]">
        <div className="relative sm:aspect-[9/16] sm:basis-1/3 sm:h-[600px] aspect-square sm:w-full w-64 h-64  ">
          <Image
            className="object-cover"
            src="/we-design-about-us-section-mayaan.png"
            alt="subHero"
            fill
          />
        </div>
        <div className="relative sm:aspect-[9/16] sm:basis-1/3 sm:h-[600px] aspect-square w-full w-64 h-64 ">
          <Image
            className="object-cover"
            src="/we-design-about-us-section.png"
            alt="subHero"
            fill
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-end gap-4 basis-1/3">
        <h2 className="text-color sm:text-5xl text-3xl font-bold">מי אנחנו</h2>
        <p className="text-lg font-normal text-right">
          אנחנו עדי ומעיין, שתי מעצבות פנים עם אהבה בלתי נגמרת לעיצוב ולתכנון
          מחדש של חללים. מאז שאנחנו זוכרות את עצמנו, תמיד מצאנו את עצמנו
          מדמיינות, מתכננות ומביאות לחיים רעיונות חדשים שגורמים לחללים להפוך
          למיוחדים ומזמינים יותר. עם למעלה מ-10 שנות ניסיון בתחום, ליווינו עשרות
          פרויקטים – מבתים פרטיים שמספרים את הסיפור של הדיירים שלהם ועד משרדים
          ומסעדות שמעצימים חוויות ומרגישים ייחודיים. מבחינתנו, כל פרויקט הוא
          הזדמנות לגעת בחיים של האנשים שאנחנו עובדים איתם, ולהפוך את החלום שלהם
          למציאות.
        </p>
        <div>
          <Button>בוא נעבוד ביחד</Button>
        </div>
      </div>
    </section>
  );
}
