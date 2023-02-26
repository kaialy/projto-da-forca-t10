export default function Chute(props){
    const { desabilitarInput } = props

    return (
    <div className="container-input">
        <span> ja sei a palavra!</span>
        <input disabled={desabilitarInput} />
        <button> chutar</button>
    </div>
    )
    
    }