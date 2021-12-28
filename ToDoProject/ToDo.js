import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect  } from "react";

function App() {
  const[toDo, setToDo] = useState("");
  const[toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDo("");//state는 직접 수정하지 않는다. 함수 사용하기.
    setToDos(currentArray => [toDo, ...currentArray])//currentArray에 toDo 요소를 추가.
  };
  console.log(toDos);
  return(
  <div>
    <h1>My To Dos({toDos.length})</h1>
    <form onSubmit={onSubmit}>
     <input
      onChange={onChange}
      value={toDo} 
      type="text" 
      placeholder="Write your to do..."/> 
     <button>Add To Do</button>  
    </form> 
    <hr />
    <ul>
      {toDos.map((item, index) => <li key={index}>{item}</li>)}
    </ul> 
  </div>
  );
}

export default App;
