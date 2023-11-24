function MapDetailsCallouts({name, zone, key}) {
    return (
        <h3 className="text-white text-xl p-2 bg-slate-400 rounded-lg" key={key}>{zone} / {name}</h3>
    )
}

export default MapDetailsCallouts