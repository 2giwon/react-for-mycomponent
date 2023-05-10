import ClassMyComponents from "./ClassMyComponents";
import MyComponent from "./MyComponents";

function App() {
  return (
    <div>
      <MyComponent name="React" favoriteNumber={1}>
        리액트
      </MyComponent>
      <ClassMyComponents name="Class React" favoriteNumber={2}>
        오오
      </ClassMyComponents>
    </div>
  );
}

export default App;
