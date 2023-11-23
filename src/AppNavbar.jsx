function AppNavbar() {
    return (
        <div className=" bg-slate-500 p-4 flex justify-evenly">
            <a href="/" className="text-white hover:scale-105 transition-all bg-slate-400 rounded-lg p-2">Personajes</a>
            <a href="/maps" className="text-white hover:scale-105 transition-all bg-slate-400 rounded-lg p-2">Mapas</a>
        </div>
    )
}

export default AppNavbar