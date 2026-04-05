function Button({label, variant, size, disabled, onClick}){
    const variantstyle={
        primary:"bg-purple-800 text-white",
        secondary:"border border-gray-800 text-gray-800",
        danger:"text-white bg-red-800"
    };
    const base="rounded px-4 py-2 "
    const sizem={
        sm:"text-sm px-2 py-1",
        md:"text-md px-4 py-2",
        lg:"text-lg px-6 py-4"
    }
    return (
            <button 
            className={`${base} ${variantstyle[variant]} ${sizem[size]}`}
            disabled={disabled} 
            onClick={onClick}>
                {label}
            </button>
    )
}

export default Button