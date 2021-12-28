# ToDoList by React
![Dec-29-2021 02-31-05](https://user-images.githubusercontent.com/79510152/147591965-c8da43f4-880f-4be9-8efe-8624f78d7e28.gif)

- 리액트.js를 이용하여 todolist를 만들었습니다.
- toDoList 개수 보여주기.
- toDoList 입력시 보여주기.
# 배운점
```js
setToDos(currentArray => [toDo,...currentArray])//currentArray에 toDo 요소를 추가.
```
- state는 직접 수정하지 않고, 함수를 사용해서 control 해야 한다.
```js
{toDos.map((item, index) => <li key={index}>{item}</li>)}
```
- map함수는 toDos 배열의 모든 element에 대해서 작용하고 작업한 결과를 반환한다.
