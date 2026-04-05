function Modal({isOpen,onClose,title,children}){
    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
                <div className="flex flex-row justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-red-500 font-bold text-lg">X</button>
                </div>
                <div>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default Modal