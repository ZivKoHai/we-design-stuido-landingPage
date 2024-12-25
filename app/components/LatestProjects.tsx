import WeH2 from "./ui/weH2";
import Slider from "./ui/Slider";

export default function LatestProjects() {
  const images = [
    "we___designstudios_1710151928_3321317562468759473_65377472209.jpg",
    "we___designstudios_1711970777_3336575168623799878_65377472209.jpg",
    "we___designstudios_1711970920_3336576372338745322_65377472209.jpg",
    "we___designstudios_1711971170_3336578468039455596_65377472209.jpg",
    "we___designstudios_1712394084_3340126131049699511_65377472209.jpg",
    "we___designstudios_1713938685_3353083183975864527_65377472209.jpg",
    "we___designstudios_1721727613_3418421446458019401_65377472209.jpg",
  ];

  return (
    <section
      id="projects"
      className="main-container min-h-screen py-10 flex flex-col gap-10"
    >
      <div>
        <WeH2>הפרויקטים האחרונים שלנו</WeH2>
      </div>
      <Slider images={images} />
    </section>
  );
}
