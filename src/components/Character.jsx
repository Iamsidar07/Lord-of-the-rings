import styles from "./character.module.css";
const Character = ({ characters }) => {
  return (
    <div className={styles.characterContainer}>
      {
        characters.map((character) => {
          const keyVals = Object.keys(character).filter((element) => element !== 'name' && element !== "_id" && character[element] !== "");
          return <div className={styles.character} key={character._id}>
            <h1>{character.name}</h1>
            {
              keyVals.map(key => <p key={key}>{key}: {character[key]}</p>)
            }
          </div>
        })
      }
    </div>
  )
}

export default Character