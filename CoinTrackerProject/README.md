# CoinTrackerProject

![CoinTracker](https://user-images.githubusercontent.com/79510152/147730669-27bbcf2b-1df3-4124-ada8-f776214d4f18.gif)


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