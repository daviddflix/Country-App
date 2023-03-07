import s from "./footer.module.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={s.mainContainer}>
      <div className={s.subContainer}>
        <a className={s.anchor} href="https://wa.me/5491137858227">
          {" "}
          <IoLogoWhatsapp className={s.whatsappIcon} />
        </a>
        <a
          className={s.anchor}
          href="https://www.linkedin.com/in/david-pajaro-rodriguez-0129109b/"
        >
          {" "}
          <AiFillLinkedin className={s.linkedinIcon} />
        </a>
        <a className={s.anchor} href="https://www.instagram.com/daviddflix/">
          {" "}
          <FaInstagramSquare className={s.instagramIcon} />
        </a>
      </div>

      <p className={s.owner}>Webapp made by David Pajaro</p>
    </div>
  );
}
