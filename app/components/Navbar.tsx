import Image from "next/image";
import Link from "next/link";
import Login from "./Login";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  return (
    <div className="sticky top-0">
      <div className="flex justify-between items-center max-w-[1450px] mx-auto pt-8">
        <div className="flex space-x-24">
          <Link href="/">
            <Image
              src={"/Yana.png"}
              alt="logo"
              width={500}
              height={500}
              className="object-cover w-50 h-25 hover:opacity-90"
            />
          </Link>
        </div>
        <div>
          <NavbarMenu />
        </div>
        <div>
          <Login />
        </div>
      </div>
    </div>
  );
}
