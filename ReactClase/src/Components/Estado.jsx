import React,{useState} from 'react'

const Estados = ( )=> {
const [texto,setTexto]=useState('texto inicial desde estado')
const click=()=>{
    setTexto('texto cambiado desde estado')
}
return (
    <div>
<hr/>
<h2>Estados</h2>
<h3>{texto}</h3>
<button onClick={()=>click()}>Hazlick</button>
</div>
)
}
export default Estados