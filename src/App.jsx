import {useState} from "react"
import Alert from "./components/Alert.jsx"
import Avatar from "./components/Avatar.jsx"
import Badge from "./components/badge.jsx"
import Button from "./components/button.jsx"
import Card from "./components/card.jsx"
import InputField from "./components/inputField.jsx"
import Modal from "./components/modal.jsx"
import Navbar from "./components/Navbar.jsx"
import Toggle from "./components/Toggle.jsx"
import Tooltip from "./components/toolTip.jsx"


function App() {

  const base="flex flex-row gap-4 p-2"

  const [isModalOpen,setModalOpen]=useState(false)

  const [isToggleOn, setToggleOn]=useState(false)

  const [firstName,setFirstName]=useState("")

  const terms=[
    {
    label:"Click me",
    variant:"primary",
    size:"md",
    onClick:()=>console.log("Submitted"),
    disabled:false
    },{
    label:"Click me",
    variant:"secondary",
    size:"md",
    onClick:()=>console.log("Submitted"),
    disabled:false
    },{
    label:"Click me",
    variant:"danger",
    size:"md",
    onClick:()=>console.log("Submitted"),
    disabled:false
    },{
    label:"Click me",
    variant:"primary",
    size:"sm",
    onClick:()=>console.log("Submitted"),
    disabled:false
    },{
    label:"Click me",
    variant:"primary",
    size:"lg",
    onClick:()=>console.log("Submitted"),
    disabled:false
    },{
    label:"Click me",
    variant:"primary",
    size:"md",
    onClick:()=>console.log("Submitted"),
    disabled:true
    }


  ]
  const cards=[
    {
      title:"Product 1",
      description:"this is a product 1 and it is great",
      isPopular:false,
      buttonText:"Buy Now",
      onClick:()=> console.log("button clicked")
    },{
      title:"Product 2",
      description:"this is a product 2 and it is great",
      isPopular:true,
      buttonText:"Add to cart",
      onClick:()=> console.log("button clicked")
    },{
      title:"Product 3",
      description:"this is a product 3 and it is great",
      isPopular:false,
      buttonText:"Learn More",
      onClick:()=> console.log("button clicked")
    },{
      title:"Product 4",
      description:"this is a product 4 and it is great",
      isPopular:false,
      buttonText:"Get it Now",
      onClick:()=> console.log("button clicked")
    },{
      title:"Product 5",
      description:"this is a product 5 and it is great",
      isPopular:true,
      buttonText:"Buy Now",
      onClick:()=> console.log("button clicked")
    }
  ]
  const block=[
      {
        message:"This is a good News",
        type:"success"
      },{
        message:"This is a Bad News",
        type:"error"
      },{
        message:"This is a warning",
        type:"warn"
      },{
        message:"This is neutral",
        type:"error"
      }
  ]
  const ava=[
    {
      src:"https://api.dicebear.com/7.x/avataaars/svg?seed=Vishal",
      name:"Vishal Subudhi",
      size:"sm"
    },{
      src:"",
      name:"Josh deo",
      size:"md"
    },{
      src:"https://i.pravatar.cc/150?img=11",
      name:"Karsin patel",
      size:"lg"
    },{
      src:"https://robohash.org/vishal",
      name:"",
      size:"sm"
    }
  ]
  const badgedata=[
    {
      text:"Success",
      color:"green"
    },{
      text:"Failed",
      color:"red"
    },{
      text:"Well Done",
      color:"gray"
    },{
      text:"Ooh..!",
      color:"yellow"
    },{
      text:"WOW !!",
      color:"purple"
    }
  ]  
  return (
    <div>
      <div>
      <Navbar brand="Component Library" links="#" avatarsrc="https://i.pravatar.cc/150?img=11"/>
      </div>
      <div className={base}>
        {terms.map((term,index)=>(
          <Button 
          key={index}
          label={term.label}
          variant={term.variant}
          size={term.size}
          disabled={term.disabled}
          onClick={term.onClick}
          />
        ))}
        
      </div>
      <hr className="my-8"/>
      <div className={base}>
          <InputField
          label="First Name"
          type="text"
          placeholder="Enter your First name"
          required={true}
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}
          error={firstName===""?"This field is required":null}  
          />        
      </div>
      <hr className="my-8"/>
      <div className={base}>
       {cards.map((card,index)=>(
         <Card
         key={index}
         title={card.title}
         description={card.description}
         isPopular={card.isPopular}
         buttonText={card.buttonText}
         onClick={card.onClick}
         />
       ))} 
     
      </div>
      <hr className="my-8"/>
      <div className={base}>
        {block.map((blc,index)=>(
          <Alert 
            key={index}
            message={blc.message}
            type={blc.type}
          />
        ))}
      </div>
      <hr className="my-8"/>
      <div className={base}>
        {ava.map((avt,index)=>(
          <Avatar 
           key={index}
           src={avt.src}
           name={avt.name}
           size={avt.size}          
           />
        ))}
      </div>
      <hr className="my-8"/>
      <div className={base}>
        {badgedata.map((bdg,index)=>(
          <Badge 
          key={index}
          text={bdg.text}
          color={bdg.color}
          />
        ))}
      </div>
      <hr className="my-8"/>
      <h2 className="text-xl font-bold mb-4">Modal Component</h2>
       <Button label="Open Modal" variant="primary" onClick={()=> setModalOpen(true)} />
       <Modal
        isOpen={isModalOpen}
        onClose={()=>setModalOpen(false)}
        title="This is a Modal"
        >
        <p className="text-gray-600 mb-6">Are You Sure?</p>
        <div className="flex justify-end gap-2">
          <Button label="Cancel" variant="danger" onClick={()=>setModalOpen(false)}/>
          <Button label="Confirm" variant="primary" onClick={()=>setModalOpen(false)}/>
        </div>
      </Modal>
      <hr className="my-8"/>
      <Toggle isOn={isToggleOn} onToggle={()=>setToggleOn(!isToggleOn)} label={isToggleOn?"Dark Mode":"Light Mode"} />
      <hr className="my-8"/>
      <div className={base}>
      <Tooltip text="I am Vishal Subudhi !!">
        <span className="cursor-pointer text-blue-500 underline">Hover on This !! </span>
      </Tooltip>
      <Tooltip text="This is Dangerous !!">
        <div className="inline-block">
          <Button label="Delete this" variant="danger"/>
        </div>
      </Tooltip>
      </div>
    </div>
  )
}

export default App
