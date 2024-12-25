import Image from "next/image";
import WeH3 from "./ui/weH3";
import WeP from "./ui/weP";

export default function TheProcess() {
  const ProcessItems = [
    {
      name: "שיחה עם הלקוח להבין את הצרכים ואת החזון של החלל",
      description:
        "בסטודיו שלנו, הכול מתחיל בהבנה של מי אתם ומה אתם מחפשים. בפגישה הראשונה נלמד להכיר אתכם, את הטעם האישי שלכם, את הצרכים שלכם, ואת התקציב המתאים לפרויקט.",
    },
    {
      name: "יצירת קונספט עיצובי",
      description:
        "נבנה קונספט כולל לפרויקט שלכם – פלטת צבעים, חומרים, טקסטורות, ותאורה. נציג תוכנית מסודרת שתמחיש את הכיוון הסופי",
    },
    {
      name: "הצגת תוכנית עיצוב",
      description:
        "נציג תוכנית מסודרת שתמחיש את הכיוון הסופי ונציג תקציב מסכם ומפורט",
    },
    {
      name: "ליווי וביצוע: פיקוח צמוד בדרך לחלום",
      description:
        "בתהליך הביצוע, אנחנו נמצאות בשטח כדי לוודא שהכול מתקדם בדיוק לפי התוכנית. נפקח על כל שלב, נפתור בעיות בזמן אמת, ונעמוד בלוחות הזמנים.",
    },
    {
      name: "מסירת פרויקט: הרגע הגדול שלכם",
      description:
        "אנחנו גאות להציג לכם את הבית החדש שלכם – חלל מעוצב, מזמין, ופונקציונלי. נוודא שאתם מרוצים ונספק לכם טיפים לשמירה על העיצוב.",
    },
  ];

  return (
    <section
      id="process"
      className="main-container h-fit py-20 flex flex-col sm:flex-row gap-10"
    >
      <div className="basis-1/2 relative min-h-[500px] overflow-hidden w-full rounded-lg">
        <Image
          src="/sliderImages/we___designstudios_1721727613_3418421446458019401_65377472209.jpg"
          alt="The Process"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-10 basis-1/2 justify-center py-2 ">
        <div className="flex flex-col gap-2">
          <WeH3 className="text-right">התהליך</WeH3>
          <WeP>שלבים שאנחנו עובדים בהם בכל פרויקט שאנו מתחילים עם הלקוח</WeP>
        </div>
        <ol dir="rtl" className="relative border-s border-foreground">
          {ProcessItems.map((item, index) => {
            return (
              <li key={index} className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-foreground rounded-full mt-1.5 -start-1.5 border border-foreground"></div>
                <h3 className="text-sm font-semibold text-foreground">
                  {item.name}
                </h3>
                <p className="text-base font-normal text-foreground">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
