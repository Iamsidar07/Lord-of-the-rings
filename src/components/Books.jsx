
import styles from "./books.module.css";
const Books = ({ books }) => {
  return (
    <div className={styles.booksContainer}>
      {books?.map(({ name, _id }) => {
        return (<div key={_id} className={styles.book}>
          <h1>{name}</h1>
        </div>)
      })}
    </div>
  )
}

export default Books