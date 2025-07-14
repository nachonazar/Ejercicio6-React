import "bootstrap/dist/css/bootstrap.min.css"
import FormularioColor from "./components/FormularioColor"
import ItemColor from "./components/ItemColor"

function App() {

  return (
    <div className="container mt-4">
    <FormularioColor></FormularioColor>
    <div className='row'>
    <div className='col-md-4 mb-4'>
      <ItemColor></ItemColor>
    </div>
    </div>
    </div>
  )
}

export default App
