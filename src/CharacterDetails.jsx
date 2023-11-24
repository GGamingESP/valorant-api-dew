import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AppNavbar from "./AppNavbar";
import CharacterDetailsAbilities from "./CharacterDetailsAbilities";

function CharacterDetails() {
    const uuid = useParams()
    let id = uuid.uuid
    console.log(uuid.uuid)
    const defaultApiCall = `https://valorant-api.com/v1/agents/${id}?language=es-ES`;

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

    let abilities = [];
    if (datos && datos.abilities) { // Verifica si datos y datos.abilities están definidos
        console.log(datos)
        abilities = datos.abilities.map((e) => (
            <CharacterDetailsAbilities name={e.displayName} img={e.displayIcon} key={e.slot}/>
        ));
    }

    return (
        <div>
            <AppNavbar />
            <div className="bg-slate-500 w-11/12 mx-auto mt-4 rounded-xl p-2 flex flex-col text-slate-900">
                <div className="flex flex-col text-center justify-center">
                    <img src={datos.fullPortrait} alt={datos.displayName} className="w-2/4 mx-auto" />
                    <div>
                        <h1 className=" font-bold text-2xl">{datos.displayName}</h1>
                        <p className="w-3/4 mx-auto mb-3" >{datos.description}</p>
                        <h3 className=" font-bold text-xl">Su rol es {datos.role?.displayName}</h3>
                    </div>
                </div>

                <div className="inline-flex justify-center gap-3 mt-3">
                    {abilities}
                </div>
            </div>
        </div>
    )
}

export default CharacterDetails;
