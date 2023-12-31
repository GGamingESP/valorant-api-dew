import AppNavbar from "./AppNavbar"
import { useState, useEffect } from "react";
import MapCard from "./MapCard";
import AppFooter from "./AppFooter";

function Maps() {

    const defaultApiCall = "https://valorant-api.com/v1/maps?languagues=es-ES";

    const [datos, setDatos] = useState([])

    useEffect(() => {
        const datosFetch = async () => {
            await fetch(defaultApiCall).then((resp) => resp.json()).then((data) => {
                setDatos(data.data)
            }).catch(error => console.log(error))
        }
        datosFetch();
    },[]);
    console.log(datos)
    let mapas = datos.map((e) => (
        <MapCard
          key={e.uuid} // Agrega un key único para cada iteración
            name={e.displayName}
            uuid={e.uuid}
            img={e.splash}
        />
    ))

    return (
        <div>
            <AppNavbar />
            <h2 className="text-center text-white font-bold mt-2 text-xl">Mapas</h2>
            <div className="bg-slate-500 w-11/12 mx-auto mt-4 rounded-xl p-2 grid grid-cols-4 grid-rows-1 gap-2 justify-center mb-4">
                {mapas}
            </div>
            <AppFooter/>
        </div>
    )
}

export default Maps
