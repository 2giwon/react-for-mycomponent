import Counter from "./Counter";
import MyComponent from "./MyComponents";
import Say from "./Say";

function App() {
  return (
    <div>
      <MyComponent name="React" favoriteNumber={1}>
        리액트
      </MyComponent>
      <Counter />
      <Say />
    </div>
  );
}

export default App;
