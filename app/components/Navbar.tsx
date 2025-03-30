import Image from "next/image";
import Socials from "./Socials";
import Link from "next/link";
import Login from "./Login";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center max-w-[1600px] mx-auto pt-8 sticky top-0">
      <div className="flex space-x-16">
        <Link href="/">
          <Image
            src={"/Yana.png"}
            alt="logo"
            width={500}
            height={500}
            className="object-cover w-50 h-25 invert hover:opacity-90"
          />
        </Link>
        <Socials />
      </div>
      <div>B</div>
      <div>
        <Login />
      </div>
    </div>
  );
}
