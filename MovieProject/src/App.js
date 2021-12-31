
import{
  BrowserRouter as Router,
  Switch,
  Route,
  //Link는 브라우저 새로고침 없이 유저를 다른 페이지로 이동시켜 준다.
}from "react-router-dom";//react-router-dom 설치
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return <Router>
    <Switch>
      <Route path="/movie/:id">
          <Detail/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch> 
  </Router>
}

export default App;
//Switch컴포넌트는 한번에 하나의 Route만 렌더링 되게 해준다.
//Route는 url을 보고있다. url이 바뀌면 무엇을 보여줄지 결정한다.