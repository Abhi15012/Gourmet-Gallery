

import { useNavigate } from "react-router-dom";
import styles from "./mainpage.module.css";






const MainPage = () => {

  const nav =useNavigate()
  function Nav(){
setTimeout(()=>{

  nav("/load")
}), 2000
    
  }
return (
    <div className={styles.cont}>
      <div className={styles.img1}></div>
      <div className={styles.img2}></div>
      <div className={styles.img3}></div>


      <div className="container12">

      <form    className={styles.container}>
        <h1>Gourmet Gallery</h1>

      <div>
          <input
            type="button"
            value="Explore Various Dishes"
            className={`btn btn-info ${styles.buttonbar}`}
           onClick={Nav}
          />
        </div>

      </form>
      
    

      </div>
   </div>
  );
};

export default MainPage;

