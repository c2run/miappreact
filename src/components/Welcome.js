import { useState } from "react";

export default function Welcome(props){
 //console.log(props)

 const [counter, setCounter] = useState(0);
const { message, name } = props;

return (
<div>
    <h1>Hola, {name}</h1>
    <p>{message}</p>
    <h2>Contador de React con Hooks</h2>
    <h4>El número del contador es {counter}</h4>
    <button type="submit" onClick={() => setCounter(counter+1)}>
        Sumar contador
    </button>
</div>
);

}

//componente funcional