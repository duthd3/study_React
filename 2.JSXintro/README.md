```js
const element = <h1>Hello, world!</h1>;
```
위의 문법은 JSX라고 부르고, JS를 확장한 문법이다.
JSXK는 React"엘리먼트(element)를 생성한다.

# 1.JSX란?
- JS를 확장한 문법

# 2.JSX에 표현식 포함하기
```js
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById("root")
  );
```
- JSX의 중괄호 내에는 유효한 모든 JS표현식을 넣을 수 있다.
```js
function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName : "Harper",
  lastName: 'Perez'
};
const element=(
  <h1>
    Hello,{formatName(user)}!
  </h1>
 );
ReactDOM.render(
  element,
  document.getElementById("root")
);
```
# 3.JSX도 표현식이다.
- 컴파일이 끝나면, JSX 표현식이 정규 JS 함수 호출이 되고 JS 객체로 인식된다.
```js
function getGreeting(user){
  if(user){
    return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>
  }
```

# 4.JSX속성 정의
```js
const element = <div tabInder="0"></div>;
const element = <img src={user.avatarUrl}></img>;
```

# 5.JSX로 자식 정의
```js
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
 );
```

# 6.JSX는 객체를 표현
- 다음 두 코드는 동일하다.
```js
const element=(
  <h1 className="greeting">
    Hello, world!
  </h1>
 );
const element = React.createElement(
  'h1',
  {className:'greeting'},
  'Hello, world!'
  };
```

      
