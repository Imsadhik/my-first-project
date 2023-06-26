import React,{useState} from "react";
import Student from "./Student";
function App(){
  const[name,setName]=useState("");
  console.log(".....nsmr",name);
  const[tnc,setTnc]=useState(false);
  const[interest,setInterest]=useState("");
  function getFormData(e)
  {
    e.preventDefault()
  }

  return(
    <div>
         <form onSubmit={getFormData}>
               <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/> <br/> <br/>
               <select onChange={(e)=>setInterest(e.target.value)}>
                      <option>Select Options</option>
                      <option>Marvel</option>
                      <option>DC</option>
               </select><br></br><br></br>
               <input type="checkbox"  onChange={(e)=>setInterest(e.target.checked)}></input><spam>Accept terms and conditions</spam><br></br><br></br>
               <button type="submit">Submit</button>
         </form>
      
    </div>
  )
}


export default App;