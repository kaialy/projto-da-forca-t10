import { useState } from "react"
import Chute from "./components/Chute"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import alfabeto from "./alfabeto"
import palavras from "./palavras"

export default function App() {
    const [desabilitarInput, setDesabilitarInput] = useState(true)
    const [letrasUsadas, setLetrasUsadas] = useState(alfabeto)
    const [erros, setErros] = useState(0)
    const [palavraJogo, setPalavraJogo] = useState([])
    const [palavraEscolhida, setPalavraEscolihida] = useState([])

    function iniciarJogo(){
        sortearPalavra()
        setDesabilitarInput(false)
        setLetrasUsadas([])
    }

    function sortearPalavra(){  
        const i = Math.floor(Math.random() * palavras.length)
        const palavra = palavras[i]
        const palavraArray = palavra.split("")
        setPalavraEscolihida(palavraArray)
        console.log(palavra)

        let tracinhos = []
        palavraArray.forEach(() => tracinhos.push(" _"))
        setPalavraJogo(tracinhos)

    }

    return (
        <div className= "container-tela ">           

            <Jogo iniciarJogo={iniciarJogo} erros={erros} palavraJogo={palavraJogo} />
            <Letras letrasUsadas={letrasUsadas} />
            <Chute desabilitarInput={desabilitarInput}/>

        </div>  
    )

}