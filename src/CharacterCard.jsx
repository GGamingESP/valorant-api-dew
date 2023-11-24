
function CharacterCard({name, uuid, img}) {
    console.log(uuid)
    let link = `/${uuid}`
    return (
        <div className=" rounded-xl hover:scale-105 transition-all flex flex-row text-center text-white" key={uuid}>
            <a href={link}>
                <img src={img} alt={name} />
                <h3>{name}</h3>
            </a>
        </div>
    )
}

export default CharacterCard