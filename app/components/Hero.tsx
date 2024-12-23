export default function Hero() {
  return (
    <div className=" bg-red-500 h-screen bg-[url('/hero-section-image.png')] bg-cover bg-center bg-no-repeat flex flex-col gap-4 justify-center items-center">
      <h1 className="text-accent sm:text-5xl text-3xl font-bold text-center">
        מעצבים חלומות, יוצרים מציאות
      </h1>
      <p className="text-accent sm:text-xl text-sm font-normal text-center">
        סטודיו עיצוב לחללים פרטיים ועסקיים
      </p>
    </div>
  );
}
