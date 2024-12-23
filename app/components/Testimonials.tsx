import Image from "next/image";
import WeH2 from "./ui/weH2";

export default function Testimonials() {
  const testimonials = [
    {
      text: "מהרגע הראשון הוקסמתי מהגישה החמה והנעימה של עדי ומעיין, ומהיכולת המיידית שלה להבין את הטעם, המטרות והתקציב שלי. היה תענוג לעבוד איתה לאורך כל התהליך.",
      name: "רינת בר",
      title: "בעלת סטודיו לפילאטיס",
      image:
        "/assithearchitect_A_spacious_living_room_with_a_sofa_TV_and_coff_b38a8850-8637-405c-9fd3-2ddfc3cc8165.png",
    },
    {
      text: "מהרגע הראשון הוקסמתי מהגישה החמה והנעימה של עדי ומעיין, ומהיכולת המיידית שלה להבין את הטעם, המטרות והתקציב שלי. היה תענוג לעבוד איתה לאורך כל התהליך.",
      name: "רינת בר",
      title: "בעלת סטודיו לפילאטיס",
      image:
        "/assithearchitect_A_spacious_living_room_with_a_sofa_TV_and_coff_b38a8850-8637-405c-9fd3-2ddfc3cc8165.png",
    },
    {
      text: "מהרגע הראשון הוקסמתי מהגישה החמה והנעימה של עדי ומעיין, ומהיכולת המיידית שלה להבין את הטעם, המטרות והתקציב שלי. היה תענוג לעבוד איתה לאורך כל התהליך.",
      name: "רינת בר",
      title: "בעלת סטודיו לפילאטיס",
      image:
        "/assithearchitect_A_spacious_living_room_with_a_sofa_TV_and_coff_b38a8850-8637-405c-9fd3-2ddfc3cc8165.png",
    },
    {
      text: "מהרגע הראשון הוקסמתי מהגישה החמה והנעימה של עדי ומעיין, ומהיכולת המיידית שלה להבין את הטעם, המטרות והתקציב שלי. היה תענוג לעבוד איתה לאורך כל התהליך.",
      name: "רינת בר",
      title: "בעלת סטודיו לפילאטיס",
      image:
        "/assithearchitect_A_spacious_living_room_with_a_sofa_TV_and_coff_b38a8850-8637-405c-9fd3-2ddfc3cc8165.png",
    },
  ];

  return (
    <div className="main-container flex flex-col gap-8 py-16">
      <div>
        <WeH2>מה מספרים עלינו</WeH2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-end p-4 text-right">
            <p className="text-lg mb-4" dir="rtl">
              &quot;{testimonial.text}
            </p>
            <div className="flex items-center mt-4 justify-start gap-4">
              <div className="ml-4">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
