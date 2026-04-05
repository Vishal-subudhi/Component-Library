function Badge({text,color}){
    const bdgcolor={
        green:"bg-green-200 text-green-800",
        red:"bg-red-200 text-red-800",
        gray:"bg-gray-200 text-gray-800",
        yellow:"bg-yellow-200 text-yellow-800",
        purple:"bg-purple-200 text-purple-800",
    }
    const base="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-opacity-20"
    return (
        <div>
            <span className={`${base} ${bdgcolor[color]}`}>{text}</span>
        </div>
    )
}

export default Badge