import react from "react";
import * as styles from "./scss/All.module.scss";

const Shimmer = () => {
    return (  
        <div className={styles.shimmerWrapper}>
            <div className={styles.shimmer}></div>
        </div>
    );
}
 
export default Shimmer;