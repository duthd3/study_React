# ReactComponenet
- HTML을 한 단어로 줄여서 쓸 수 있는 방법이다.
```js
<div className="modal">
  <h2>...</h2>
  ...
  ...
  
  .....
</div>
############################### 위코드를 아래와 같이 변경 가능
function Modal(){
  return(
    <div className="modal">
  <h2>...</h2>
  ...
  ...
  
  .....
  </div>
  )
}
<Modal></Modal>
```
- 함수 만들고 이름짓고
- 축약을 원하는 HTML 넣고
- 원하는 곳에서 <함수명/>
- 함수이름은 대문자로 시작해야 한다.
- 반복출현하는 HTML덩어리들을 component 처리 한다.
- 자주 변경되는 HTML UI를 component 처리 한다.
