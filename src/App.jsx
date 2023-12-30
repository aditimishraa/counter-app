import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  

  return (
    <div>
      <CustomButton counter={counter} setCounter={setCounter}/>
    </div>
  )
}

//component 
function CustomButton(props) {
  function onClickHandler() {

    props.setCounter(props.counter + 1);
  }

  return <button onClick={onClickHandler}>
    Counter {props.counter}
  </button>
}

export default App
