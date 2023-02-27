export default function Chute(props){
    const { desabilitarInput, chute, setChute, chutarPalavraInteira } = props

    return (
    <div className="container-input">
        <span> ja sei a palavra!</span>
        <input disabled={desabilitarInput} value={chute} onChange={e=>setChute(e.target.value)}/>
        <button onClick={chutarPalavraInteira}> chutar</button>
    </div>
    )
    
    }