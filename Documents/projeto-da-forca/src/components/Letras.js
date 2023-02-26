export default function Letras(){
    return (
    <div className="container-letras">
        {alfabeto.map(letra => <button key={letra}> {letra} </button>)}

    </div>
    )
    
    }

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]