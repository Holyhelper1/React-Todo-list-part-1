import { useEffect, useState } from "react";
import styles from './todos-fields.module.css'

export const Fields = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((loadedData) => loadedData.json())
        .then((loadedProducts) => {
          setProducts(loadedProducts);
        });
    }, []);
    return (
        <div>
            <input className={styles.input} type="text" placeholder="Search..."/>
            <br/>
            <input className={styles.input} type="text" placeholder="Filter..."/>
            {products.map(({ id, name, title }) => (
                <div className={styles.todosText}key={id}>
            <p className={styles.todosNumber}>Задание {id}.</p> <p>{name}  {title}</p>
        </div>
      ))}
        </div>
    )
}