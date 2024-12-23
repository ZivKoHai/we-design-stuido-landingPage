import ServiceContainer from "./ui/ServiceContainer";
import WeH2 from "./ui/weH2";

export default function Services() {
  const Services = [
    {
      badge: "ריהוט מחדש",
      name: "עיצוב מחדש לחללים",
      description:
        "שדרוג החלל באמצעות ריהוט עדכני שמתאים לסגנון שלכם ולצרכים שלכם. נתאים את הצבעים, החומרים, והסידור כדי ליצור חלל הרמוני ונעים לעין – בבית הפרטי או במשרד.",
      image: "/we-design-studio-services.jpg",
      alt: "ריהוט מחדש",
    },
    {
      badge: "עיצוב בתים פרטיים",
      name: "הבית שתמיד חלמתם עליו",
      description:
        "תכנון עיצוב כולל לבית, החל מהמבנה הפנימי ועד לפרטים הקטנים – רהיטים, תאורה, צבעים ואקססוריז. נוודא שהעיצוב משקף את האישיות שלכם ומרגיש כמו בית אמיתי.",
      image: "/we-design-studio-services-2.jpg",
      alt: "עיצוב בתים פרטיים",
    },
    {
      badge: "עיצוב משרדים ומקומות עבודה",
      name: "סביבת עבודה שמשפיעה על ההצלחה",
      description:
        "עיצוב חללים עסקיים שמגבירים את הפרודוקטיביות ומשדרים מקצועיות. נתכנן עבורכם משרד שמתאים לאופי החברה, לעובדים וללקוחות.",
      image: "/we-design-studio-services-3.png",
      alt: "עיצוב משרדים ומקומות עבודה",
    },
    {
      badge: "ייעוץ לעיצוב הבית",
      name: "עיצוב הבית מתחיל ברעיונות טובים",
      description:
        "פגישת ייעוץ אישית שבה נעניק לכם כלים וטיפים לשדרוג הבית. נלווה אתכם בבחירת רהיטים, צבעים וסגנון עיצוב שיתאים לחלום שלכם ולתקציב.",
      image: "/we-design-studio-services-4.jpg",
      alt: "ייעוץ לעיצוב הבית",
    },
  ];

  return (
    <section id="services" className="main-container h-fit py-20 ">
      <WeH2>שירותים שלנו</WeH2>
      <div className="flex flex-col gap-8 mt-10">
        {Services.map((service) => (
          <ServiceContainer key={service.name} service={service} />
        ))}
      </div>
    </section>
  );
}
