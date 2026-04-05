
function Toggle({isOn, onToggle, label}){

    return (
        <div className="flex items-center gap-3 cursor-pointer p-1" onClick={onToggle}>
            <div className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${isOn ? "bg-green-500":"bg-gray-400"}`}>
                <div className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform duration-300 ${isOn? "translate-x-7":"translate-x-1"}`}>
                </div>
            </div>
            <span className="text-gray-700 font-medium">{label}</span>
        </div>
    )
}

export default Toggle