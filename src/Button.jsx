export default function Button({label}) {
    return (
        <button onClick={() => alert(`A label deste botão é ${label}`)}>{label}</button>
    )
}