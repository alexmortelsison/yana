import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
export default function Socials() {
  return (
    <div className="flex items-center space-x-6">
      <a href="" target="_blank">
        <AiFillInstagram
          size={25}
          className="text-white hover:scale-120 duration-200"
        />
      </a>
      <a href="" target="_blank">
        <AiFillFacebook
          size={20}
          className="text-white hover:scale-120 duration-200"
        />
      </a>
      <a href="" target="_blank">
        <FaXTwitter
          size={20}
          className="text-white hover:scale-120 duration-200"
        />
      </a>
    </div>
  );
}
