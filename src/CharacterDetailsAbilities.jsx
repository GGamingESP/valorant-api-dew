function CharacterDetailsAbilities({name, img, uuid}) {
    return (
        <div className=" rounded-xl hover:scale-105 transition-all flex flex-col text-center text-white" key={uuid}>
            <img src={img} alt={name} className="w-2/4 mx-auto rounded-lg"/>
            <h3>{name}</h3>
        </div>
    )
}

export default CharacterDetailsAbilities