import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect  } from "react";


function App() {
  const[loading, setLoading] = useState(true);
  const[coins, setCoins] = useState([]);//처음에는 빈배열이므로 coin 0개
  const[dollar, setdollar] = useState(0);
  const[value, setValue] = useState(1);
  const onChange = (event)=>{
    setdollar(event.target.value);
  }
  const onCng = (event) =>{
    setValue(event.target.value);
  }
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers").then((response)=>
    response.json()).then(json=> {
      setCoins(json)//coin들의 정보를 가져오고
      setLoading(false);//로딩을 끝낸다.
    });
  },[]);//빈 배열일 경우 이 코드는 한 번만 작동한다.
  return(
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong>:
      <div>
        <label htmlfor="dollar">dollar</label>
        <input placeholder="your dollar" onChange = {onChange}></input>
        <select onChange = {onCng}>
          {coins.map((coin)=>(
            <option id={coin.name} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      </div>
      }
      <label htmlfor="btc">BTC</label>
      <input value={dollar/value}></input>
      

      
      
      
      
    </div>
  )
}

export default App;
