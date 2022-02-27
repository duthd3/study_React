# 리액트에서 state 변경
- 수정하고 싶은 state의 deep/shallow 카피본을 하나 생성한다.
- 카피본을 알맞게 수정한다. 
- 카피본을 state변경함수()에 집어넣는다.

```js
function 제목바꾸기(){
  var newArray = [...글제목];
  newArray[0] = '여자코트 추천';
  글제목변경(newArray);
```
