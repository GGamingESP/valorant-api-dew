import AppNavbar from "./AppNavbar"
import { useEffect, useState } from "react"
import CharacterCard from "./CharacterCard";

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
  return (
    <div>
      <AppNavbar />
      <div className="bg-slate-500 w-11/12 mx-auto mt-4 rounded-xl p-2 grid grid-cols-4 grid-rows-1">
        {datos.map((e) =>{
          <CharacterCard name={e.displayName} uuid={e.uuid} img={e.fullPortrait} />
        })}
      </div>
    </div>
  )
}

export default App
