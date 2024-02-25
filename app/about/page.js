import styles from "../styles/about.module.css";
const About = () => {
  return (
    <div className={styles.containear}>
      <div className={styles.head}>About Me</div>

      <div className={styles.text}>
        <p>
          I enjoyed learning from 2019 to 2021, and in 2022-2023 I worked on many large-scale projects as mentioned earlier. During integrating JWT
          into my project, I encountered some errors that made me concerned about the project's security. Therefore, I designed my own JWT, which I
          will quickly add to the npm package. Here, I will talk about my smallest ongoing project, which you can see at
          <a style={{ color: "blue", textDecoration: "underline" }} href="https://quiz-quick-theta.vercel.app/" target="_blank">
            JA academy
          </a>
          .
        </p>
        <p>
          At the end of 2020, I entered into a marriage bond with <strong>Ms. Ema</strong>, and now I am fulfilling the responsibility of raising our
          two children. It feels like time passes quickly, and without delay, let's make a contract for business.
          <a style={{ color: "blue", textDecoration: "underline" }} href="https://quiz-quick-theta.vercel.app/pages/investmentplan" target="_blank">
            partner ship
          </a>
        </p>
      </div>
    </div>
  );
};
export default About;
