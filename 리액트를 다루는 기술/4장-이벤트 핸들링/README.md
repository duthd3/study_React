# 4장-이벤트 핸들링

## 4.1 리액트의 이벤트 시스템
- 리액트의 이벤트 시스템은 웹 브라우저의 HTML 이벤트와 인터페이스가 동일하기 때문에 사용법이 비슷하다.
### 4.1.1 이벤트를 사용할 때 주의 사항
- 1.이벤트 이름은 카멜 표기법으로 작성한다.(onClick)
- 2.이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달한다.
- 3.DOM 요소에만 이벤트를 설정할 수 있다.
  - 직접 만든 컴포넌트에는 이벤트를 자체적으로 설정할 수 없다.

### 4.1.2 이벤트 종류
- Clipboard
- Composition
- Animation
- Transition
- Mouse
- 등 많은 이벤트가 있다.

## 4.2 이벤트 실습

### 4.2.2 onChange 이벤트 핸들링

#### 4.2.2.1 onChange 이벤트 설정
```js
import React, {Component} from 'react';

class EventPractice extends Component{
    render(){
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="message" placeholder="아무거나 입력하세요" onChange={(e)=>{
                    console.log(e.target.value);
                }}></input>
            </div>
        )
    }
}

export default EventPractice;
```

### 4.2.3 임의 메서드 만들기

### 4.2.4 input 여러개 다루기
- input이 여러 개일 대는 event 객체를 활용한다.
- e.target.name 값을 사용한다.(e.target.name은 해당 인풋의 name을 가리킨다.)
```js
handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
```

### 4.2.5 onKeyPress 이벤트 핸들링
- 키를 눌렀을때 발생하는 이벤트이다.

## 4.3 함수형 컴포넌트로 구현해 보기
- 지금까지 한 작업을 함수형 컴포넌트로 똑같이 구현할 수 있다.

## 4.4 정리
- 클래스형 컴포넌트로 할 수 있는 대부분의 작업은 함수형 컴포넌트로도 구현할 수 있다.
- 함수형 컴포넌트에서 여러 개의 인풋 상태를 관리하기 위해 useState에서 form 객체를 사용한다.

