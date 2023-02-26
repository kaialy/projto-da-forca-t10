import Chute from "./components/Chute"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"

export default function App() {
    return (
        <div className= "container-tela "> 
           
           
            <Jogo />
            <Letras />
            <Chute />

        </div>
    )

}