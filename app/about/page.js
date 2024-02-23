import styles from "../styles/about.module.css";
const About = () => {
  return (
    <div className={styles.containear}>
      <div className={styles.text}>
        <p>
          I enjoyed learning from 2019 to 2021, and in 2022-2023 I worked on many large-scale projects as mentioned earlier. During integrating JWT
          into my project, I encountered some errors that made me concerned about the project's security. Therefore, I designed my own JWT, which I
          will quickly add to the npm package. Here, I will talk about my smallest ongoing project, which you can see at
          https://quiz-quick-theta.vercel.app/.
        </p>
        <p>
          Elit occaecatcat officia sit Lorem in dolore laborum sunt aliquip ipsum officia esse. Id Lorem qui eiusmod ad eu ullamco consequat duis
          tempor culpa. Tempor amet non culpa exercitation eiusmod.
        </p>
      </div>
    </div>
  );
};
export default About;
