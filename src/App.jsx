import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            Contador: {count}
          </button>
        </p>
        <p>
          Editar <code>App.jsx</code> y guardar para ver los cambios.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentación Vite
          </a>
          {' | '}
          <a
            className="App-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link de pruebas
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
