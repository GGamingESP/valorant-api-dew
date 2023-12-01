import AppNavbar from "./AppNavbar"
import { useEffect, useState } from "react"
import CharacterCard from "./CharacterCard";
import AppFooter from "./AppFooter";
function App() {

  const [datos, setDatos] = useState([])
  // const [hecho, setHecho] = useState(false)
  const defaultApiCall = "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=es-ES";

  useEffect(() => {
    const datosFetch = async () => {
      await fetch(defaultApiCall).then((resp) => resp.json()).then((data) => {
        setDatos(data.data)
      }).catch(error => console.log(error))
    }
    datosFetch();
  },[]);
  console.log(datos)
  let personajes = datos.map((e) => (
    <CharacterCard
      key={e.uuid} // Agrega un key único para cada iteración
      name={e.displayName}
      uuid={e.uuid}
      img={e.fullPortrait}
    />
  ))
  return (
    <div>
      <AppNavbar />
      <h2 className="text-center text-white font-bold mt-2 text-xl">Personajes</h2>
      <div className="bg-slate-500 w-11/12 mx-auto mt-4 rounded-xl p-2 grid grid-cols-4 grid-rows-1 justify-center mb-4">
        {personajes}
      </div>
      <AppFooter/>
    </div>
  )
}

export default App
