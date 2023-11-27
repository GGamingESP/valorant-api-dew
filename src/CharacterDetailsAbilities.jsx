function CharacterDetailsAbilities({name, img, description, uuid}) {
    return (
        <div className=" rounded-xl hover:scale-105 transition-all flex flex-col text-center text-white group" key={uuid}>
            <img src={img} alt={name} className="w-2/4 mx-auto rounded-lg"/>
            <h3>{name}</h3>
            <span className="pointer-events-none absolute -mt-32 top-0 left-28 opacity-0 transition-opacity group-hover:opacity-100 w-[450px] bg-slate-600 text-white p-2 rounded">{description}</span>
        </div>
    )
}

export default CharacterDetailsAbilities