import {useState} from "react"

function Tooltip({text, children}){
    const [isVisible, setVisible]=useState(false)
    return (
        <div className="relative inline-block"
            onMouseEnter={()=>setVisible(true)}
            onMouseLeave={()=>setVisible(false)}>
                {children}
            {isVisible && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded shadow-lg whitespace-nowrap z-50">
                    {text}
                </div>    
            )}
        </div>
    )
}

export default Tooltip