export default function Welcome(props){
console.log(props)

const { message, name } = props;

return (
<div>
    <p>Hola, {name}</p>
    <p>{message}</p>
</div>
);

}

//componente funcional