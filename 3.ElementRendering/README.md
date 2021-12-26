# 엘리먼트 렌더링
- 엘리먼트는 react앱의 가장 작은 단위이다.
- 엘리먼트는 화면에 표시할 내용을 기술한다.
```js
const element = <h1>Hello, world</h1>;
```
- 리액트 엘리먼트는 일반 객체이며 쉽게 생성할 수 있다.
- reactDOM은 react엘리먼트와 일치하도록 DOM을 업데이트한다.

# DOM에 엘리먼트 렌더링하기
```js
<div id="root"></div>
```
- 이 안에 들어가는 모든 엘리먼트를 ReactDOM에서 관리하기 떄문에 이것을 루트 DOM노드라고 부른다.
- react엘리먼트를 루트DOM노드에 렌더링하려면 둘 다 ReactDOM.render()로 전달한다.
```js
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document,getElementById('root'));
```
# 렌더링 된 엘리먼트 업데이트하기
- react엘리먼트는 불변객체이다. 엘리먼트를 생성한 이후에는 해당 엘리먼트의 자식이나 속성을 변경할 수 없다.
- UI를 업데이트하는 유일한 방법은 새로운 엘리먼트를 생성하고 이를 ReactDOM.render()로 전달하는 것이다.

# 변경된 부분만 업데이트하기
- ReactDOM은 해당 엘리먼트와 그 자식 엘리먼트를 이전의 엘리먼트와 비교하고 DOM을 원하는 상태로 만드는데 필요한 경우에만 DOM을 업데이트 한다.
