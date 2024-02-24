import Image from "next/image";
import styles from "./styles/home.module.css";
import img from "../public/Johir_abdullah.JPG";

const Home = () => {
  return (
    <div className={styles.containear}>
      <div className={styles.bodyContainear}>
        <div className={styles.tex}>
          <p>
            I am ready to present myself as a newbie in learning new things. I have worked on a number of projects, always immersing myself in them,
            which will have global exposure in the future. These projects allowed me to learn new things and I took every challenge to improve myself.
            I like to be busy with work and learning new things and I am ready to face any challenge in new situations anytime.
          </p>
        </div>
        <div className={styles.vhr}></div>
        <div className={styles.imgContainear}>
          <Image src={img} className={styles.img} alt="Johir_Abdullah_Img" />
        </div>
      </div>
    </div>
  );
};
export default Home;
