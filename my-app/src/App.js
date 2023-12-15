import styles from "./app.module.css";
import { Fields } from "./components/todos-fields.jsx";


export const App = () => {
 

  return (
    <div className={styles.app}>
     <Fields/>
    </div>
  );
};

export default App;
