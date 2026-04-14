import { useState } from "react";
import './App.css'



function App() {
    const [contador, setContador] = useState(0)
    const incrementar = () => setContador(contador + 1)
    const decrementar = () => setContador(contador - 1)
    const reiniciar = () => setContador(0)

    return (
        <div className="app">
            <h1>Contador React</h1>
            <div className="display">
                <p className="contador">Contador: {contador}</p>
            </div>
            <div className="botoes">
                <button className="btn incrementar" onClick={incrementar}>
                    Incrementar
                </button>

                <button className="btn decrementar" onClick={decrementar}>
                    Decrementar
                </button>

                <button className="btn reiniciar" onClick={reiniciar}>
                    Reiniciar
                </button>
            </div>
        </div>
    )
}

export default App