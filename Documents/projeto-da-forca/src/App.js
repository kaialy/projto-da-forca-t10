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
    const [corPalavra,setCorPalavra] = useState("preto")
    const [chute, setChute]=useState("")

    function iniciarJogo(){
        sortearPalavra()
        setDesabilitarInput(false)
        setLetrasUsadas([])
        setErros(0)
        setCorPalavra("preto")
        setChute("")
    }

    function sortearPalavra(){  
        const i = Math.floor(Math.random() * palavras.length)
        const palavra = palavras[i]
        const palavraArray = palavra.split("")
        setPalavraEscolihida(palavraArray)
        

        let tracinhos = []
        palavraArray.forEach(() => tracinhos.push(" _"))
        setPalavraJogo(tracinhos)

    }
    function clicarLetra(letraClicada){
        setLetrasUsadas([...letrasUsadas, letraClicada])   
        if(palavraEscolhida.includes(letraClicada)){
            acertouLetra(letraClicada)
        }else{
            errouLetra(letraClicada)
        }

    }

    function acertouLetra(letraClicada){
        const novaPalavraJogo = [...palavraJogo]

        palavraEscolhida.forEach((letraEscolhida, i) =>{
            if(palavraEscolhida[i]===letraClicada){
                novaPalavraJogo[i] = letraEscolhida
            }
        })
        setPalavraJogo(novaPalavraJogo)
        if(!novaPalavraJogo.includes(" _")) {
            setCorPalavra("verde")
            finalizarJogo() 

        }
    }
    function errouLetra(letraClicada){
        const novoErros = erros + 1
        setErros(novoErros)

        if(novoErros===6){
            setCorPalavra("vermelho")
            finalizarJogo()
        }

    }
    function finalizarJogo(){
        setLetrasUsadas(alfabeto)
        setDesabilitarInput(true)
        setPalavraJogo(palavraEscolhida)
    }
    function chutarPalavraInteira(){
        let palavraEscolhidaString = ""
        palavraEscolhida.forEach(letra=> palavraEscolhidaString += letra)
        if(chute === palavraEscolhidaString){
            setCorPalavra("verde")
        } else{
            setCorPalavra("vermelho")
            setErros(6)
            alert("voce errou o chute perdeu buaaa")
        }
        finalizarJogo()

    }

    return (
        <div className= "container-tela ">           

            <Jogo iniciarJogo={iniciarJogo} erros={erros} palavraJogo={palavraJogo} corPalavra={corPalavra} />
            <Letras letrasUsadas={letrasUsadas} clicarLetra={clicarLetra} />
            <Chute desabilitarInput={desabilitarInput} chute={chute} setChute={setChute} chutarPalavraInteira={chutarPalavraInteira}/>

        </div>  
    )

}