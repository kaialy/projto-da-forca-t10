import { useState } from "react"
import Chute from "./components/Chute"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import alfabeto from "./alfabeto"

export default function App() {
    const [desabilitarInput, setDesabilitarInput] = useState(true)
    const [letrasUsadas, setLetrasUsadas] = useState(alfabeto)
    const [erros, setErros] = useState(0)
    
    function iniciarJogo(){
        setDesabilitarInput(false)
        setLetrasUsadas([])
    }


    return (
        <div className= "container-tela ">           

            <Jogo iniciarJogo={iniciarJogo} erros={erros} />
            <Letras letrasUsadas={letrasUsadas} />
            <Chute desabilitarInput={desabilitarInput}/>

        </div>  
    )

}