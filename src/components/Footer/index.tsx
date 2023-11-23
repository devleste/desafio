import MidiaLink from "./MidiaLink";
import style from "./index.module.css"
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    href: "https://api.whatsapp.com/send/?phone=552120201300&text&app_absent=0",
    icon: <FaWhatsapp size={20} color="#000000" />
  },
  {
    id: 2,
    href: "https://www.instagram.com/lestetelecom",
    icon: <FaInstagram size={20} color="#000000" />
  },
  {
    id: 3,
    href: "https://www.facebook.com/LesteTelecom/",
    icon: <FaFacebook size={20} color="#000000" />
  },
  {
    id: 4,
    href: "https://twitter.com/i/flow/login?redirect_after_login=%2Flestetelecom",
    icon: <FaTwitter size={20} color="#000000" />
  },
  {
    id: 5,
    href: "https://www.linkedin.com/company/lestetelecom/?originalSubdomain=il",
    icon: <FaLinkedin size={20} color="#000000" />
  },
]

export default function Footer(){

  return (
    <section className={style.container}>
      <footer className={style.footerContainer}>
        <section className={style.clientContainer}>
          <h3>Canais de atendimento:</h3>
          <div className={style.phoneNumberContainer}>
            <h4>(21) 0800 053 1300</h4>
            <h4>(21) 2020-1300</h4>
            <h4>(21) 3940-0130</h4>
          </div>
        </section>
        <section className={style.socialMidia}>
          {
            socialLinks.map(social => (
              
              <MidiaLink key={social.id} href={social.href}>
                {
                  social.icon
                }
              </MidiaLink>
            ))
          }
        </section>
      </footer>
    </section>
  )
}
