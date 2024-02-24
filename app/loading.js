// components/Loading.js

import styles from "./styles/loading.module.css";

// components/Loading.js

const Loading = () => {
 

  return (
    <div className={styles.containear}>
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
       
      </div>
    </div>
  );
};

export default Loading;
