function Alert({message,type}){
    const typestyle={
        success:"bg-green-300 text-green-800 border-green-500",
        error:"bg-red-300 text-red-800 border-red-500",
        warn:"bg-yellow-300 text-yellow-800 border-yellow-500"
    }
    const base="flex flex-row gap-4 justify-between items-center p-3 border rounder-md font-medium mb-2"
    const onClose=()=>console.log("The alert is closed")
    return (
        <div className={`${base} ${typestyle[type]}`}>
            <button onClick={onClose} className="hover:opacity-70 font-bold">X</button>
            <span>{message}</span>
        </div>
    )
}

export default Alert