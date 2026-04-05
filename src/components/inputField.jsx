function InputField({label,type,id,placeholder,required,value,error,onChange}){
    const blockstyle=`border rounded-lg px-3 py-2 ${error? "border-red-500":"border-gray-500"}`
    return (
        <div className="flex flex-col gap-2">
            <label>{label}</label>
            <input type={type} id={id} placeholder={placeholder} required={required} value={value} 
            onChange={onChange} className={`${blockstyle}`} />
            {error &&(<p className="text-red-500 text-sm mt-1">{error}</p>)}

        </div>
    )
}

export default InputField