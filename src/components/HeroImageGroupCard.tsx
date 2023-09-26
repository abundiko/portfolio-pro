import Image from "next/image";

export default function HeroImageGroupCard({ img }: { img: string }) {
  return (
    <div className="bg-dark border-2 border-[#ffffff11] relative overflow-hidden rounded shadow-lg h-60 lg:h-80 [transform:rotateY(0deg)]">
      <Image
        height={350}
        width={250}
        src={`/images/${img}`}
        alt={img}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
