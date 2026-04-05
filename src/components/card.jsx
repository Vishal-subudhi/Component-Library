import Button from "./button.jsx"

function Card({title,description,isPopular,buttonText,onClick}){
    const baseStyle=`${isPopular?"border border-purple-700":"border border-gray-500"}`
    const cardStyle="flex flex-col p-6 gap-4"
    const titleStyle="font-bold text-lg"
    const descStyle="text-sm flex-1 max-w-6xl mx-auto"
    return (
        <div className={baseStyle}>
            {isPopular && (
                <span className="text-purple-600 font-bold">
                Most Popular
                </span>
            )}
            <div className={cardStyle} >
            <span className={titleStyle}>{title}</span>
            <span className={descStyle}>{description}</span>
            <Button label={buttonText} variant="primary" onClick={onClick}/>
            </div>
        </div>
    )
}

export default Card