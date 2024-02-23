import Image from "next/image";
import Link from "next/link";
import styles from "../styles/contact.module.css";
import twitter from "../../public/twitter.jpg";
import linkedin from "../../public/linkedin.png";
import gmail from "../../public/gmail.png";

const Contact = () => {
  return (
    <div className={styles.containear}>
      <div className={styles.text}>Contact Me</div>
      <div className={styles.icon}>
        <Link target="_blank" href="https://twitter.com/Johir_Abdullah" >
          <Image className={styles.img} src={twitter} alt="twitter" />
        </Link>

        <Link target="_blank" href="https://m.me/100067301229882" >
          <Image className={styles.img} src={linkedin} alt="linkedin" />
        </Link>

        <Link href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=johirabdullahbd@gmail.com" target="_blank" rel="noopener noreferrer">
          <Image className={styles.img} src={gmail} alt="gmail" />
        </Link>
      </div>
    </div>
  );
};
export default Contact;
