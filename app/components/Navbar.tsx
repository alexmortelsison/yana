import Image from "next/image";
import Socials from "./Socials";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center max-w-[1600px] mx-auto pt-8 sticky top-0">
      <div className="flex space-x-16">
        <Image
          src={"/Yana.png"}
          alt="logo"
          width={500}
          height={500}
          className="object-cover w-50 h-25 invert"
        />
        <Socials />
      </div>
      <div>B</div>
      <div>C</div>
    </div>
  );
}
