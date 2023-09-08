import styles from "./options.module.css";
export const Options = ({ selection, setSelection }) => {
  const questions = ["character", "movie", "book"];

  return (
    <div className={styles.options}>
      {
        questions.map((question, index) => <button onClick={() => setSelection(question)} className={`${styles.button} ${selection === question ? styles.selectedButton : ""}`} key={index}>{question}</button>)
      }
    </div>
  )
}
