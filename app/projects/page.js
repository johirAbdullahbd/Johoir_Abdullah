import Image from "next/image";
import styles from "../styles/projects.module.css";
import img0 from "../../public/quiz-academy.png";
import img1 from "../../public/bloodGrouping.jpg";
import img2 from "../../public/free_box.jpeg";
import img3 from "../../public/human_identity_box.jpg";
import img4 from "../../public/report_all.jpg";

const Projects = () => {
  return (
    <div className={styles.containear}>
      <div className={styles.imgContainear}>
        <Image className={styles.img} src={img0} alt="quiz-academy" />
        <div className={styles.text}>
          <h3>Quiz Academy</h3>
         <a href="https://quiz-quick-theta.vercel.app/" target="_blank"><h4 className={styles.text0}>Go Now &raquo;</h4></a>
        </div>
      </div>
      <div className={styles.imgContainear}>
        <Image className={styles.img} src={img1} alt="bloodGrouping" />
        <div className={styles.text}>
          <h3>Blood Matching</h3>
          <h4 className={styles.text1}>working</h4>
        </div>
      </div>
      <div className={styles.imgContainear}>
        <Image className={styles.brdr} src={img2} alt="free_box" />
        <div className={styles.text}>
          <h3>Free Box</h3>
          <h4 className={styles.text2}>working</h4>
        </div>
      </div>
      <div className={styles.imgContainear}>
        <Image className={styles.img} src={img3} alt="human_identity_box" />
        <div className={styles.text}>
          <h3>Human Identity Box</h3>
          <h4 className={styles.text3}>working</h4>
        </div>
      </div>
      <div className={styles.imgContainear}>
        <Image className={styles.brdr} src={img4} alt="report_all" />
        <div className={styles.text}>
          <h3>Report Box</h3>
          <h4 className={styles.text4}>working</h4>
        </div>
      </div>
    </div>
  );
};
export default Projects;
