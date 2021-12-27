# Components & Props

# 함수 컴포넌트와 클래스 컴포넌트
```js
function Welcome(props){
  return <h1>Hello, {props.name}</h1>;
}
```
- 위 함수는 데이터를 가지 하나으 "props"객체 인자르 받은 후 react엘리먼트를 반환하므로 유효한 react 컴포넌트 이다.
- 함수 컴포넌트

# 컴포넌트 렌더링
```js
const element = <Welcome name = "Sara" />
```
- React가 사용자 정의 컴포넌트로 작성한 엘리먼트를 발견하면 JSX 어트리뷰트오 자식을 해당 컴포넌트에 단일 객체로 전달.
- 이 객체를 "props"라고 한다.
```js
function Welcome(props){
  return <h1>Hello, {props.name}</h1>;
  }
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
 );
```

- <Welcome name="Sara" />엘리먼틀 ReactDOM.render()를 호출한다.
- React는 {name: 'Sara'}를 props로 하여 Welcome 컴포넌트르 호출한다.
- Welcome 컴포넌트는 결과적으로 \<h1>Hello, Sara</h1> 엘리먼트를 반환합니다.
- ReactDOM은 \<h1>Hello, Sara</h1> 엘리먼트와 일치하도록 DOM을 효율적으로 업데이트한다.

# 컴포넌트 합성
- 컴포넌트는 자신의 출력에 다르 컴포넌트를 참조할 수 있다.
- 이는 모든 세부단계에서 동일한 추상 컴포넌트를 사용할 수 있음을 의미한다.
- React앱에서는 버트,폼,다이얼로그,화면 등의 모든 것들이 흔히 컴포넌트로 표현한다.
```js
function Welcome(props){
  return <h1>Hello, {props.name}</h1>;
 }
function App(){
  return(
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
   );
  }
ReactDOM.render(
  <App />,
  document.getElementById('root')
 );
```

# 컴포넌트 추출
```js
function Comment(props){
  return(
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
          />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
       </div>
       <div className="Comment-text">
        {props.text}
       </div>
       <div className="Comment-date">
        {formatDate(props.date)}
       </div>
      </div>
     );
   }
```
- 위 컴포넌트는 author(객체), text(문자열) 및 date(날짜)를 props로 받은 후 소셔 미디어 웹 사이트으 코멘트를 나타낸다.
- Avatar추출
```js
function Avatar(props){
  reuturn(
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
     />
    );
  }
```
- Avatar는 자신이 Comment 내에서 렌더링 된다는 것을 알 필요가 없다. 따라서 props의 이름으 author에서 더우 일반화된 user로 변경.
- props의 이름으 사용될 context가 아닌 컴포넌트 자체의 관점에서 짓는 것을 권장.
```js
function Comment(props){
  return(
    <div className="Comment">
      <div className="UserInfo">
       <Avatar user={props.author} />
        <div className = "UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className = "Comment-date">
        {formatDate(props.date)}
      </div>
     </div>
    );
   }
 ```
- UserInfo추출
```js
 function UserInfo(props){
  return(
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
   );
  }
```
```js
function Comment(props){
  return(
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
     </div>
    );
   }
```

# props는 읽기 전용이다.
- 함수 컴포넌트나 클래스 컴포넌트 모두 컴포넌트의 자체 props를 수정해서는 안 된다.
```js
function sum(a, b){
  return a+b;
}
```
- 위 함수는 순수 함수 이다. 입력값을 바꾸려 하지 않고, 항상 동일한 입력값에 대해 동일하 결과를 반환한다.
- 아래 함수는 자신의 입력값을 변경하기 때문에 순수 함수가 아니다.
```js
function withdraw(account, amount){
  account.total -= amount;
 }
```
- 모든 React컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 한다.


