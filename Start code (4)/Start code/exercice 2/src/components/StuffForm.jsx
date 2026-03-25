import { useState } from "react";
export default function StuffForm({onAddStuff}) {
  const [name,setName] = useState("")
  const [price,setPrice] = useState(0)
  const handleSubmit = (e)=>{
    e.preventDefault()
    onAddStuff(name,price)
  }
  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input
       type="search" 
       placeholder="Banana"
       value={name}
       onChange={(e)=>setName(e.target.value)}
       />
      <p>Stuff price</p>
      <input 
        type="search" 
        placeholder="15"
        value={price}
        onChange={(e)=>setPrice(Number(e.target.value))}
         />

      <button onClick={handleSubmit}>Add Stuff</button>
    </form>
  );
}
