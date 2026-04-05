function Avatar({src,name,size}){
    const sizes={
        sm:"w-8 h-8 text-sm",
        md:"w-12 h-12 text-base",
        lg:"w-16 h-16 text-lg"
    }
    const initial= name? name.charAt(0).toUpperCase():"?";

    return src?(
        <img src={src} alt={name} className={`rounded-full object-cover ${sizes[size]}`}/>
    ):(
        <div className={`rounded-full bg-purple-600 text-white flex items-center justify-center font-bold ${sizes[size]}`}>
            {initial}
        </div>
    )
}

export default Avatar