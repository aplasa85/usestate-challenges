import { useState } from "react";
import "./ActiveToggle.css";


function ActiveToggle() {
  const [state, setState] = useState (false)
  /*let [previousState] = onclick*/ 
  return (
    <main>
      <div className="box" />
      <button type="button" onClick = {() => setState ((previousState => !previousState))
    }>'Click me!'</button>  
    </main>

  );
}

export default ActiveToggle;
