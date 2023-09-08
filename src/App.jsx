import "./app.css";
import Dashboard from "./components/Dashboard";

function App() {

  return (
    <div className='app'>
      <header>
        <h1>Lord of the Rings</h1>
      </header>
      <main>
        <img src="/src/assets/bg.jpg" alt="lotr-background" className="bg-image" />
        <Dashboard />
      </main>
      <footer>
        made by @Manoj Kumar
      </footer>
    </div>
  )
}

export default App
