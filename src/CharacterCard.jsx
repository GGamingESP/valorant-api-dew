
function CharacterCard(name, uuid, img) {
    console.log("characters")
    let link = `/${uuid}`
    return (
        <div className=" rounded-xl hover:scale-110 transition-all">
            <a href={link}>
                <img src={img} alt={name} />
                <h3>{name}</h3>
            </a>
        </div>
    )
}

export default CharacterCard