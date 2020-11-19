import Contador from "./components/Contador";
import Lista from "./components/Lista";
import Formulario from "./components/Formulario";
import FormHook from "./components/FormHook";
import Ejemplo1 from "./components/Ejemplo1";
import Saludo from "./components/Saludo";
import Comentario from "./components/Comentario";

function App() {
  const sujeto = {
    nombre: "Karen",
    url: "https://via.placeholder.com/64",
    texto:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, quia?",
  };
  return (
    <div className="container mt-5">
      <h1>Principal</h1>
      {/* <Contador /> */}
      {/* <Lista /> */}
      {/* <Formulario/> */}
      {/* <FormHook /> */}
      {/* <Ejemplo1 /> */}
      <Saludo persona="Karen" />
      <Saludo persona="Yolanda" />
      <Saludo persona="Rocio" />
      <Comentario sujeto={sujeto} />
    </div>
  );
}

export default App;
