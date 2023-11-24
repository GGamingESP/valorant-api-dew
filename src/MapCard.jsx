function MapCard({name, uuid, img}) {
    console.log(uuid)
    let link = `/maps/${uuid}`
    return (
        <div className=" rounded-xl hover:scale-105 transition-all flex flex-row text-center text-white"  key={uuid}>
            <a href={link}>
                <img src={img} alt={name} className=" rounded-xl" />
                <h3>{name}</h3>
            </a>
        </div>
    )
}

export default MapCard