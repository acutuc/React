
export default function Palabra(props) {

    const letrasDescubiertas = () => {
        let palabra;
        for (let i = 0; i < props.palabraAdivinar.length; i++) {
            //Sacaba un undefined en el 0...
            if (i === 0) {
                palabra = "- ";
            }else{
                palabra += "- ";
            }
        }
        return palabra;
    }

    return (
        <div>
            {letrasDescubiertas()}
        </div>
    )
}