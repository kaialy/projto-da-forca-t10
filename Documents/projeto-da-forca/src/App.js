import { useState } from "react"
import Chute from "./components/Chute"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import alfabeto from "./alfabeto"

export default function App() {
            const[desabilitarInput, setdesabilitarInput] =  useState(true)
            const[letrasUsadas, setletrasUsadas]= useState(alfabeto)

    return (
        <div className= "container-tela "> 
           
           
            <Jogo />
            <Letras letrasUsadas={letrasUsadas} />
            <Chute desabilitarInput={desabilitarInput}/>

        </div>  
    )

}