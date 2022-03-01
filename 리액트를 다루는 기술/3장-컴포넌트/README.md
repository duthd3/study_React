# 3장-컴포넌트

## 3.1 클래스형 컴포넌트
- 컴포넌트를 선언하는 방식은 두 가지이다.
- 하나는 함수형 컴포넌트 이고, 다른 하나는 클래스형 컴포넌트 이다.
- 클래스형  컴포넌트에서는 render 함수가 꼭 있어야 하고, 그 안에서 보여 주어야 할 JSX를 반환 해야 한다.
- 함수형 컴포넌트는 선언하기 훨씬 편하고 메모리 자원도 덜 사용한다.
- 함수형 컴포넌트의 단점은 state와 라이프사이클 API의 사용이 불가능하다는 점이다.
- 그러나 Hooks라는 기능이 도입되면서 해결되었다. 리액트 공식 매뉴얼에서는 컴포넌트를 작성할 때 함수형 컴포넌트와 Hooks를 사용하도록 권장한다.
- 그렇다고 클래스형 컴포넌트가 사라지는 것은 아니므로 클래스형 컴포넌트의 기능은 꼭 알아 두어야 한다.

## 3.2 props
- 컴포넌트 속성을 설정할 때 사용하는 요소이다.
- props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있다.
### 3.2.1 JSX 내부에서 props 렌더링
- props값은 컴포넌트 함수의 파라미터로 받아와서 사용할 수 있다.
```js
const MyComponent = props =>{
  return <div>안녕하세요,...{props.name}입니다.</div>
};
```
### 3.2.2 컴포넌트를 사용할 때 props 값 지정하기
```js
const App = ()=>{
  return <MyComponent name="React" />; //App 컴포넌트는 MyComponent의 부모 컴포넌트이다.
};
```
### 3.2.3 props 기본값 설정:defaultProps
- props 값을 따로 저장하지 않았을때 보여줄 기본값을 설정한다.
```js
MyComponent.defaultProps = {
  name:'기본 이름'
};
```
### 3.2.4 태그 사이의 내용을 보여주는 children
- 컴포넌트 태그 사이의 내용을 보여주는 props를 children이라 한다.
- children을 보여주려면 props.children 값을 보여 주어야 한다.
### 3.2.5 비구조화 할당 문법을 통해 props 내부 값 추출하기
- props.name, props.children과 같이 props. 이라는 키워드를 앞에 붙이는걸 간소화 하기 위한 방법이다.
```js
const{name,children} = props;
return(
  <div>
    안녕하세요,{name}입니다.
    children값은 {children} 입니다.
  </div>
  );
};
```
```js
const MyComponent = ({name, children})=>{
  return(
    <div>
      안녕하세요,{name}입니다.
      children 값은 {children} 입니다.
    </div>
  );
};
```
### 3.2.6 propTypes를 통한 props 검증
- 컴포넌트의 필수 props를 지정하거나 props의 타입을 지정할 때는 propTypes를 사용한다.
- import PropTypes from 'prop-types'; 를 불러와야 한다.
```js
MyComponent.propTypes = {
  name:PropTypes.string
};
```
- 위와 같이 설정할 경우 name 값은 무조건 문자열 형태로 전달해야 된다는 것을 의미한다.
#### 3.2.6.1 isRequired를 사용하여 필수 propTypes 설정
- propTypes를 지정하지 않았을 때 경고 메시지를 띄우기 위해 사용한다.
- isRequired를 붙여주기만 하면된다.
```js
name:PropTypes.string.isRequired
```
### 3.2.7 클래스형 컴포넌트에서 props 사용하기
- 클래스형 컴포넌트에서 props를 사용할 때는 render 함수에서 this.props를 조화하면 된다.

## 3.3 state
- state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다.
- 리액트에는 두가지 종류의 state가 있다.
- 하나는 클래스형 컴포넌트가 지니고 있는 state이고, 다른 하나는 함수형 컴포넌트에서 useState 라는 함수를 통해 사용하는 state이다.
### 3.3.1 클래스형 컴포넌트의 state
```js
import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = { //state의 초기값 설정
            number:0, //컴포넌트의 state는 객체 형식이어야 한다.
        }
    }
    render(){
        const {number}  = this.state; //state를 조회할 때는 this.state로 조회한다.

        return (
            <div>
                <h1>{number}</h1>
                <button onClick={()=>{this.setState({number:number+1});}} // this.setState 함수가 state 값을 바꿀 수 있게 한다.
                >+1</button>
            </div>
        );
    }
}

export default Counter;
```

#### 3.3.1.1 state 객체 안에 여러 값이 있을 때
- state 객체 안에는 여러 값이 있을 수 있다.
```js
import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            number:0,
            fixedNumber:0,
        }
    }
    render(){
        const {number, fixedNumber}  = this.state;

        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값:{fixedNumber}</h2>
                <button onClick={()=>{this.setState({number:number+1});}}
                >+1</button>
            </div>
        );
    }
}

export default Counter;
```
#### 3.3.1.2 state를 constructor에서 꺼내기
```js
state = {
        number:0,
        fixedNumber:0,
    };
```
#### 3.3.1.3 this.setState에 객체 대신 함수 인자 전달하기
```js
this.setState(prevState, props)=>{
return{
  //내용
 }
})
```
#### 3.3.1.4 this.setState 가 끝난 후 특정 작업 실행하기
- setState를 사용하여 값을 업데이트하고 난 다음에 특정 작업을 하고 싶을 때는 setState의 두 번재 파라미터로 콜백 함수를 등록하여 작업을 처리할 수 있다.

### 3.3.2 함수형 컴포넌트에서 useState 사용하기
- 리액트 16.8 버전 이후부터 Hooks 도입으로 useState 사용이 가능해졌다.
#### 3.3.2.1 배열 비구조화 할당
- 배열 안에 들어 있는 값을 쉽게 추출할 수 있도록 해 주는 문법이다.
```js
const array = [1,2];
const [one, two] = array; //one = 1, two = 2
```
#### 3.3.2.2 useState 사용하기
```js
import React, {useState} from 'react';

const Say = ()=>{
    const[message, setMessage] = useState("");
    const onClickEnter = ()=>setMessage("안녕하세요!");
    const onClickLeave = ()=>setMessage("안녕히 가세요!");

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{message}</h1>
        </div>
    );
};

export default Say;
```
- useState 함수의 인자에는 초깃값을 넣어준다. 값의 형태는 자유이다.
- 함수를 호출하면 배열이 반환된다. 배열의 첫 번째 원소는 현재 상태이고, 두 번째 원소는 상태를 바꾸어 주는 함수이다.
#### 3.3.2.3 한 컴포넌트에서 useState 여러 번 사용하기
- useState는 한 컴포넌트에서 여러 번 사용해도 상관없다.

## 3.4 State를 사용할 때 주의사항
- state 값을 바꾸어야 할 때는 setState 혹은 useState를 통해 전달받은 세터 함수를 사용해야 한다.

## 3.5 정리
- 이번 장에서는 컴포넌트를 만들어서 내보내고 불러오는 방법과 props 및 state를 사용하는 방법을 배웠다.
- props는 부모 컴포넌트가 설정하고, state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업데이트 할 수 있다.
- 이후 새로운 컴포넌트를 만들때는 useState를 사용하자!
