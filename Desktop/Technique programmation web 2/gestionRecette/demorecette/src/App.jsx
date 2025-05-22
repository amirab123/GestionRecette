import { useState } from "react";
import './App.css';



import ListeRecettes from "./composants/ListeRecette";


function App() {
 
  const [exo, setExo] = useState(1);

  return (
    <>
     
    <div>
    


  
                {exo === 1 && < ListeRecettes/>} 
    </div>
    </>
  )
}

export default App

