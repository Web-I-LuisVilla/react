
import './App.css'
import Contador from './Components/Contador'
import Estado from './Components/Estado'
import Eventos from './Components/Eventos'
import Parrafo from './Components/Parrafo'
import Variables from './Components/Variables'

function App() {
  return (
  <div className="container-fluid m-3">
  <div><Parrafo/></div>
<div><Variables/></div>
<div><Contador/></div>
<div><Estado/></div>
<div><Eventos/></div>

  </div>
  );
}
export default App
