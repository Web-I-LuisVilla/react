import React,{useState} from'react'

const Listas = () =>{
const 
estadolnicial=['Elemento 1 ', 'Element02', 'Element03', 'Element4']
const [lista,setLista]=useState(estadolnicial)
return (
    <div>
<hr/>
<h2>Listas</h2>
{
lista.map((elemento,index)=>(
<h3 key={index}>{e/emento}</h3>//ej1 vector
))
}
</div>
)
}
export default Listas