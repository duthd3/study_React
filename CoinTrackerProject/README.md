# CoinTrackerProject

![CoinTracker](https://user-images.githubusercontent.com/79510152/147773518-75ac798b-3c77-44b0-8e4e-64fec40528ea.gif)

- 코인api를 통해 모든 코인 정보를 불러온다.
- 달러를 입력하면 각 코인을 몇개 구매할 수 있는지 보여준다.


# 배운점
- 대량의 비트코인 정보를 가져오기 위해서 fetch를 통해 비트코인 api를 가져왔다.
- useEffect()를 사용해서 맨 처음 코인 정보를 fetch 할때만 loading을 표시했다.
```js
useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers").then((response)=>
    response.json()).then(json=> {
      setCoins(json)//coin들의 정보를 가져오고
      setLoading(false);//로딩을 끝낸다.
    });
  },[]);//빈 배열일 경우 이 코드는 한 번만 작동한다.
```
