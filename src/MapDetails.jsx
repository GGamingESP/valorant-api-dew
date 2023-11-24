import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import MapDetailsCallouts from "./MapDetailsCallouts"
import AppNavbar from "./AppNavbar";

function MapDetails() {
    const uuid = useParams()
    let id = uuid.uuid
    console.log(uuid.uuid)
    const defaultApiCall = `https://valorant-api.com/v1/maps/${id}?language=es-ES`;

    const [datos, setDatos] = useState({}); // Cambiado a objeto vacío en lugar de array []

    useEffect(() => {
        const datosFetch = async () => {
            try {
                const resp = await fetch(defaultApiCall);
                const data = await resp.json();
                setDatos(data.data);
            } catch (error) {
                console.log(error);
            }
        };
        datosFetch();
    }, [defaultApiCall]);

    let callout = [];
    if (datos && datos.callouts) { // Verifica si datos y datos.abilities están definidos
        callout = datos.callouts.map((e) => (
            <MapDetailsCallouts name={e.regionName} zone={e.superRegionName} key={e.regionName + e.superRegionName}/>
        ));
    }

    return (
        <div>
            <AppNavbar />
            <div className="bg-slate-500 w-11/12 mx-auto mt-4 rounded-xl p-2 flex flex-col text-slate-900">
                <div className="flex flex-col text-center justify-center">
                    <img src={datos.splash} alt={datos.displayName} className="w-2/4 mx-auto rounded-lg" />
                    <h1 className=" font-bold text-2xl">{datos.displayName}</h1>
                </div>
                <h2 className="text-center text-xl font-bold mt-2">Callouts</h2>
                <div className="grid grid-cols-6 gap-3 mt-1 p-2 text-center">
                    {callout}
                </div>
            </div>
        </div>
    )
}

export default MapDetails