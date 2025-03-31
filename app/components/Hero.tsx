import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-[80vh] tracking-tighter max-w-[1600px] mx-auto">
      <div>
        <Image
          src={"/bg.png"}
          alt="bg"
          fill
          className="object-cover -z-50 brightness-30"
          priority
          quality={100}
        />
      </div>
      <div className="grid grid-cols-2 text-white place-items-center">
        <div>
          <p className="text-7xl font-extrabold">
            Get your special sale up to 50% off.
          </p>
          <button className="border mt-8 px-8 py-2 hover:bg-purple-500 cursor-pointer hover:font-bold">
            Shop Now
          </button>
        </div>
        <div>
          <Image
            src={"/hero.png"}
            alt="hero"
            width={1000}
            height={1000}
            className="object-cover w-full h-[825px]"
          />
        </div>
      </div>
    </div>
  );
}
