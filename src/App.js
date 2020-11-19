import "./App.css";
import Contador from "./components/Contador";
import Lista from "./components/Lista";
import Formulario from "./components/Formulario";
import FormHook from "./components/FormHook";

function App() {
  return (
    <div className="container mt-5">
      <h1>Principal</h1>
      {/* <Contador /> */}
      {/* <Lista /> */}
      {/* <Formulario/> */}
      <FormHook />
    </div>
  );
}

export default App;
