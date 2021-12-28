- 렌더링 된 출려값을 변경하기 위해 ReactDOM.render()를 호출
```js
function tick(){
const element = (
  <div>
    <h1>Hello, world!</h1>
    <h2>It is {new Date().toLocaleTimerString()}.</h2>
  </div>
);
ReactDOM.render(
  element,
  document.getElementById('root')
  );
}

setInterval(tick, 1000);
```


- Clock 컴포넌트를 완전히 재사용하고 캡슐화하는 방법
```js
function Clock(props){
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimerString()}.</h2>
    </div>
   );
  }
  
 function tick(){
  ReactDOM.render(
    <Clock date = {new Date()} />,
    document.getElemnetById('root')
  );
}
 setInterval(tick, 1000);
```

- 위 함수는 Clock이 타이머를 설정하고 매초 UI를 업데이트 하는것이 Clock의 구현 세부사항이 아니다.
# Clock이 스스로 업데이트 하도록 하는 방법
```js
  ReactDOM.render(
    <Clock />,
    document.getElementByID('root')
    );
```
- Clock 컴포넌트에 "state"를 추가해야 한다.
- 함수에서 클래스로 변환하기
  - 1.React.Component를 확장하는 동일한 이름의 ES6 class 생성.
  - 2.render()라고 불리는 빈 메서드 추가.
  - 3.함수의 내용을 render() 메서드로 옮김.
  - 4.render() 내용 안에 있는 props를 this.props로 변경.
  - 5.남아있는 빈 함수 선언 삭제.
  ```js
  class Clock extends React.Component{
    render(){
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.props.date.toLocaleTimerString()}.</h2>
        </div>
      );
    }
  }
- Clock은 이제 함수가 아닌 클래스로 정의.
- render 메서드는 업데이트가 발생할 때마다 호출되지만, 같은 DOM노드로 <Clock/>을 렌더링 하는경우
- Clock 클래스의 단일 인스턴스만 사용.

# 클래스에 로컬 State 추가
- 1.render() 메서드 안에 있는 this.props.date를 this.state.date로 변경.
- 2.초기 this.state를 지정하는 constructor 추가.
- 3.<Clock /> 요소에서 date prop 삭제.
```js
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
    render(){
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimerString()}.</h2>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
```
# 생명주기 메서드를 클래스에 추가
- Clock이 처음 DOM에 렌더링 될 때마다 타이머를 설정 => "Mounting"
- Clock에 의해 생성된 DOM이 삭제될 때마다 타이머를 해제 => "Unmounting"
```js
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
    
    render(){
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimerString()}.</h2>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
```

- 메서드 호출 순서!!
  - 1.<Clock />이 ReactDOM.render()로 전달되었을 때, React는 Clock 컴포넌트의 생성자 호출.
  - 2.Clock이 현재 시각을 표시해야 하기 때문에 현재 시각이 포함된 객체로 this.state 초기화.(나중에 업데이트)
  - 3.React는 Clock 컴포넌트의 render() 메서드를 호출. 화면에 표시되어야 할 내용을 알게 된다.
  - 4.Clock의 렌더링 출력값을 일치시키기 위해 DOM을 업데이트.
  - 5.Clock 출력값이 DOM에 삽입되면, react는 componentDidMount() 생명주기 메서드 호출(tick()호출)
  - 6.Clock 컴포넌트는 setState()에 현재 시각 포함하는 객체를 호출하면서 UI 업데이트 진행.
  - 7.setState() 호출로 state가 변경된 것을 인지하고 화면에 표시될 내용을 알아내기 위해 render() 메서드 다시 호출
  - 8.render() 메서드 안의 this.state.date가 달라지고 업데이트된 시각 포함. DOM 업데이트
  - 9.Clock 컴포넌트가 DOM으로부터 한 번 이라도 삭제된 적이 있다면 componentWillUnmount() 생명주기 메서드 호출
