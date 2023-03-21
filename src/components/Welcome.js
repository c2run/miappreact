import { useState } from "react";

export default function Welcome(props){
 //console.log(props)

    //hooks sirven para guardar estados
    const [counter, setCounter] = useState(0);
    const { message, name } = props;

    //
    const [semaforo, setSemaforo] = useState(false);
    const contar = () => {
        //console.log("Entrando en la función de contar");
        setCounter(counter + 1);
        setSemaforo(!semaforo)
    };

return (
<div>
    <h1>Hola, {name}</h1>
    <p>{message}</p>
    <h2>Contador de React con Hooks</h2>
    <h4>El número del contador es {counter}</h4>
    <button type="submit" onClick={contar}>Sumar</button>
</div>
);

}

//componente funcional